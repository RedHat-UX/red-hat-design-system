# Element Data Schema

This directory contains JSON Schema definitions for validating element documentation data in the Red Hat Design System.

## Schema Files

### `element-data.schema.json`

JSON Schema for validating element data YAML files located at `elements/rh-*/docs/data.yaml`.

#### Usage

The schema is automatically referenced in generated YAML files via the `$schema` property:

```yaml
$schema: ../../../docs/schemas/element-data.schema.json
tagName: rh-example
name: Example
type: element
overallStatus: ready
libraries:
  figma: ready
  rhds: ready
  shared: ready
  docs: ready
```

#### IDE Integration

Most modern editors with YAML support will automatically provide:
- **Auto-completion** for property names and enum values
- **Validation** highlighting schema violations
- **Documentation** via hover tooltips

#### Schema Properties

- `$schema` (optional): JSON Schema reference
- `tagName` (required): Custom element tag name matching pattern `^rh-[a-z][a-z0-9-]*[a-z0-9]$`
- `name` (required): Pretty display name for navigation
- `type` (required): Component type - `element`, `pattern`, or `hidden`
- `description` (optional): Description shown on documentation header
- `overallStatus` (required): Overall component status
- `libraries` (required): Status in each library (figma, rhds, shared, docs)

#### Valid Status Values

All status fields support these values:
- `planned`: Planned for development
- `inProgress`: Currently being developed
- `ready`: Available and stable
- `deprecated`: No longer supported
- `na`: Not applicable
- `beta`: Available in beta
- `experimental`: Experimental/unstable
- `new`: Recently added

## Validation

Use the validation script to check schema compliance:

```bash
npm run validate-element-data
```

## Validation Options

The validation script supports several options:

```bash
# Standard validation (errors and warnings)
npm run validate-element-data

# Show detailed error information
npm run validate-element-data -- --verbose

# Only show errors, skip warnings
npm run validate-element-data -- --errors-only
```

The validation is also automatically run as part of the lint process in CI/CD.