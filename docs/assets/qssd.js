/** @license MIT License

Copyright (c) 2020 George Griffiths

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */
// npx esbuild --bundle --platform=browser --format=esm --target=es2022 --outfile=./docs/assets/qssd.js node_modules/query-selector-shadow-dom/src/querySelectorDeep.js

/* eslint-disable */

// node_modules/query-selector-shadow-dom/src/normalize.js
function normalizeSelector(sel) {
  function saveUnmatched() {
    if (unmatched) {
      if (tokens.length > 0 && /^[~+>]$/.test(tokens[tokens.length - 1])) {
        tokens.push(' ');
      }
      tokens.push(unmatched);
    }
  }
  var tokens = []; let match; let unmatched; let regex; const state = [0]; let next_match_idx = 0; let prev_match_idx; const not_escaped_pattern = /(?:[^\\]|(?:^|[^\\])(?:\\\\)+)$/; const whitespace_pattern = /^\s+$/; const state_patterns = [
    /\s+|\/\*|["'>~+[(]/g,
    // general
    /\s+|\/\*|["'[\]()]/g,
    // [..] set
    /\s+|\/\*|["'[\]()]/g,
    // (..) set
    null,
    // string literal (placeholder)
    /\*\//g
    // comment
  ];
  sel = sel.trim();
  while (true) {
    unmatched = '';
    regex = state_patterns[state[state.length - 1]];
    regex.lastIndex = next_match_idx;
    match = regex.exec(sel);
    if (match) {
      prev_match_idx = next_match_idx;
      next_match_idx = regex.lastIndex;
      if (prev_match_idx < next_match_idx - match[0].length) {
        unmatched = sel.substring(
          prev_match_idx,
          next_match_idx - match[0].length
        );
      }
      if (state[state.length - 1] < 3) {
        saveUnmatched();
        if (match[0] === '[') {
          state.push(1);
        } else if (match[0] === '(') {
          state.push(2);
        } else if (/^["']$/.test(match[0])) {
          state.push(3);
          state_patterns[3] = new RegExp(match[0], 'g');
        } else if (match[0] === '/*') {
          state.push(4);
        } else if (/^[\])]$/.test(match[0]) && state.length > 0) {
          state.pop();
        } else if (/^(?:\s+|[~+>])$/.test(match[0])) {
          if (tokens.length > 0 && !whitespace_pattern.test(tokens[tokens.length - 1]) && state[state.length - 1] === 0) {
            tokens.push(' ');
          }
          if (state[state.length - 1] === 1 && tokens.length === 5 && tokens[2].charAt(tokens[2].length - 1) === '=') {
            tokens[4] = ` ${tokens[4]}`;
          }
          if (whitespace_pattern.test(match[0])) {
            continue;
          }
        }
        tokens.push(match[0]);
      } else {
        tokens[tokens.length - 1] += unmatched;
        if (not_escaped_pattern.test(tokens[tokens.length - 1])) {
          if (state[state.length - 1] === 4) {
            if (tokens.length < 2 || whitespace_pattern.test(tokens[tokens.length - 2])) {
              tokens.pop();
            } else {
              tokens[tokens.length - 1] = ' ';
            }
            match[0] = '';
          }
          state.pop();
        }
        tokens[tokens.length - 1] += match[0];
      }
    } else {
      unmatched = sel.substr(next_match_idx);
      saveUnmatched();
      break;
    }
  }
  return tokens.join('').trim();
}

// node_modules/query-selector-shadow-dom/src/querySelectorDeep.js
function querySelectorAllDeep(selector, root = document, allElements = null) {
  return _querySelectorDeep(selector, true, root, allElements);
}
function querySelectorDeep(selector, root = document, allElements = null) {
  return _querySelectorDeep(selector, false, root, allElements);
}
function _querySelectorDeep(selector, findMany, root, allElements = null) {
  selector = normalizeSelector(selector);
  const lightElement = root.querySelector(selector);
  if (document.head.createShadowRoot || document.head.attachShadow) {
    if (!findMany && lightElement) {
      return lightElement;
    }
    const selectionsToMake = splitByCharacterUnlessQuoted(selector, ',');
    return selectionsToMake.reduce((acc, minimalSelector) => {
      if (!findMany && acc) {
        return acc;
      }
      const splitSelector = splitByCharacterUnlessQuoted(minimalSelector.replace(/^\s+/g, '').replace(/\s*([>+~]+)\s*/g, '$1'), ' ').filter(entry => !!entry).map(entry => splitByCharacterUnlessQuoted(entry, '>'));
      const possibleElementsIndex = splitSelector.length - 1;
      const lastSplitPart = splitSelector[possibleElementsIndex][splitSelector[possibleElementsIndex].length - 1];
      const possibleElements = collectAllElementsDeep(lastSplitPart, root, allElements);
      const findElements = findMatchingElement(splitSelector, possibleElementsIndex, root);
      if (findMany) {
        acc = acc.concat(possibleElements.filter(findElements));
        return acc;
      } else {
        acc = possibleElements.find(findElements);
        return acc || null;
      }
    }, findMany ? [] : null);
  } else {
    if (!findMany) {
      return lightElement;
    } else {
      return root.querySelectorAll(selector);
    }
  }
}
function findMatchingElement(splitSelector, possibleElementsIndex, root) {
  return element => {
    let position = possibleElementsIndex;
    let parent = element;
    let foundElement = false;
    while (parent && !isDocumentNode(parent)) {
      let foundMatch = true;
      if (splitSelector[position].length === 1) {
        foundMatch = parent.matches(splitSelector[position]);
      } else {
        const reversedParts = [splitSelector[position]].flat().reverse();
        let newParent = parent;
        for (const part of reversedParts) {
          if (!newParent || !newParent.matches(part)) {
            foundMatch = false;
            break;
          }
          newParent = findParentOrHost(newParent, root);
        }
      }
      if (foundMatch && position === 0) {
        foundElement = true;
        break;
      }
      if (foundMatch) {
        position--;
      }
      parent = findParentOrHost(parent, root);
    }
    return foundElement;
  };
}
function splitByCharacterUnlessQuoted(selector, character) {
  return selector.match(/\\?.|^$/g).reduce((p, c) => {
    if (c === '"' && !p.sQuote) {
      p.quote ^= 1;
      p.a[p.a.length - 1] += c;
    } else if (c === '\'' && !p.quote) {
      p.sQuote ^= 1;
      p.a[p.a.length - 1] += c;
    } else if (!p.quote && !p.sQuote && c === character) {
      p.a.push('');
    } else {
      p.a[p.a.length - 1] += c;
    }
    return p;
  }, { a: [''] }).a;
}
function isDocumentNode(node) {
  return node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.DOCUMENT_NODE;
}
function findParentOrHost(element, root) {
  const { parentNode } = element;
  return parentNode && parentNode.host && parentNode.nodeType === 11 ? parentNode.host : parentNode === root ? null : parentNode;
}
function collectAllElementsDeep(selector = null, root, cachedElements = null) {
  let allElements = [];
  if (cachedElements) {
    allElements = cachedElements;
  } else {
    const findAllElements = function(nodes) {
      for (const el of nodes) {
        allElements.push(el);
        if (el.shadowRoot) {
          findAllElements(el.shadowRoot.querySelectorAll('*'));
        }
      }
    };
    if (root.shadowRoot) {
      findAllElements(root.shadowRoot.querySelectorAll('*'));
    }
    findAllElements(root.querySelectorAll('*'));
  }
  return selector ? allElements.filter(el => el.matches(selector)) : allElements;
}
export {
  collectAllElementsDeep,
  querySelectorAllDeep,
  querySelectorDeep
};
