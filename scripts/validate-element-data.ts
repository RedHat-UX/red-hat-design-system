#!/usr/bin/env tsx
/* eslint-disable no-console */

import { join } from 'node:path';
import { readFile, readdir, stat } from 'node:fs/promises';
import yaml from 'js-yaml';
import Ajv from 'ajv';
import type { RepoStatusRecord } from '../docs/_plugins/types.js';

const cwd = process.cwd();

interface ValidationResult {
  valid: boolean;
  errors: {
    tagName: string;
    type: 'schema' | 'consistency' | 'missing' | 'filesystem';
    message: string;
    details?: any;
  }[];
  warnings: {
    tagName: string;
    message: string;
  }[];
}

/**
 * Load JSON Schema
 */
async function loadSchema(): Promise<object> {
  const schemaPath = join(cwd, 'docs/schemas/element-data.schema.json');
  try {
    const schemaContent = await readFile(schemaPath, 'utf8');
    return JSON.parse(schemaContent);
  } catch (error) {
    throw new Error(`Failed to load schema from ${schemaPath}: ${error}`);
  }
}

/**
 * Get all element directories
 */
async function getElementDirectories(): Promise<string[]> {
  const elementsDir = join(cwd, 'elements');
  const entries = await readdir(elementsDir, { withFileTypes: true });
  return entries
      .filter(entry => entry.isDirectory() && entry.name.startsWith('rh-'))
      .map(entry => entry.name);
}

/**
 * Load YAML data for an element if it exists
 */
async function loadElementYamlData(tagName: string): Promise<RepoStatusRecord | null> {
  const yamlPath = join(cwd, 'elements', tagName, 'docs', 'data.yaml');

  try {
    await stat(yamlPath);
    const yamlContent = await readFile(yamlPath, 'utf8');
    return yaml.load(yamlContent) as RepoStatusRecord;
  } catch {
    return null;
  }
}

/**
 * Check if element directory has implementation files
 */
async function hasImplementationFiles(tagName: string): Promise<boolean> {
  const elementDir = join(cwd, 'elements', tagName);

  try {
    const files = await readdir(elementDir);
    return files.some(file => file.endsWith('.ts') && file.startsWith(tagName));
  } catch {
    return false;
  }
}

/**
 * Validate all element data
 */
async function validateElementData(): Promise<ValidationResult> {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  };

  // Load schema and setup validator
  const schema = await loadSchema();
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);

  // Get all elements from filesystem
  const elementDirs = await getElementDirectories();

  console.log(`🔍 Validating ${elementDirs.length} element directories...\n`);

  // Validate YAML data files
  for (const tagName of elementDirs) {
    const yamlData = await loadElementYamlData(tagName);
    const hasImpl = await hasImplementationFiles(tagName);

    if (yamlData) {
      // Schema validation
      if (!validate(yamlData)) {
        result.valid = false;
        result.errors.push({
          tagName,
          type: 'schema',
          message: 'YAML data does not match schema',
          details: validate.errors,
        });
      }

      // Consistency validation - tagName and name are now derived, so check if they exist in YAML
      if (yamlData.tagName !== undefined) {
        result.warnings.push({
          tagName,
          message: 'tagName field found in YAML but should be derived from directory structure',
        });
      }

      if (yamlData.name !== undefined) {
        result.warnings.push({
          tagName,
          message: 'name field found in YAML but should be derived from directory structure',
        });
      }

      // Check if element is marked as 'ready' but has no implementation
      if (!hasImpl && yamlData.libraries.rhds === 'ready') {
        result.warnings.push({
          tagName,
          message: 'Element marked as ready in RHDS but has no implementation files',
        });
      }

      // Check if element has implementation but is marked as 'planned'
      if (hasImpl && yamlData.libraries.rhds === 'planned') {
        result.warnings.push({
          tagName,
          message: 'Element has implementation files but is marked as planned in RHDS',
        });
      }
    } else {
      // No YAML data - all elements should now have colocated data
      result.errors.push({
        tagName,
        type: 'missing',
        message: 'Element directory exists but has no YAML data file',
      });
      result.valid = false;
    }
  }

  return result;
}

/**
 * Main validation function
 */
async function main() {
  const args = process.argv.slice(2);
  const verbose = args.includes('--verbose');
  const onlyErrors = args.includes('--errors-only');

  console.log('🔍 Validating element data consistency...\n');

  try {
    const result = await validateElementData();

    // Report errors
    if (result.errors.length > 0) {
      console.log(`❌ Found ${result.errors.length} error(s):\n`);

      for (const error of result.errors) {
        console.log(`   ${error.tagName}: ${error.message}`);
        if (verbose && error.details) {
          console.log(`      Details: ${JSON.stringify(error.details, null, 2)}`);
        }
      }
      console.log('');
    }

    // Report warnings
    if (!onlyErrors && result.warnings.length > 0) {
      console.log(`⚠️  Found ${result.warnings.length} warning(s):\n`);

      for (const warning of result.warnings) {
        console.log(`   ${warning.tagName}: ${warning.message}`);
      }
      console.log('');
    }

    // Summary
    if (result.valid) {
      console.log('✅ All element data is valid!');
      if (result.warnings.length > 0 && !onlyErrors) {
        console.log(`   Note: ${result.warnings.length} warning(s) found but validation passed`);
      }
    } else {
      console.log('❌ Element data validation failed!');
      console.log(`   ${result.errors.length} error(s) need to be fixed`);
      if (result.warnings.length > 0 && !onlyErrors) {
        console.log(`   ${result.warnings.length} warning(s) should be reviewed`);
      }
    }

    process.exit(result.valid ? 0 : 1);
  } catch (error) {
    console.error('❌ Validation failed with error:', error);
    process.exit(1);
  }
}

// Show usage if --help is provided
if (process.argv.includes('--help')) {
  console.log('Usage: tsx scripts/validate-element-data.ts [options]\n');
  console.log('Options:');
  console.log('  --verbose       Show detailed error information');
  console.log('  --errors-only   Only show errors, skip warnings');
  console.log('  --help          Show this help message');
  process.exit(0);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
