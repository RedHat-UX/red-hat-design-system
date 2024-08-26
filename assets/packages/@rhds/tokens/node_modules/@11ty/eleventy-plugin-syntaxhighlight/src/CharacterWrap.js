const HighlightPairedShortcode = require("./HighlightPairedShortcode");
const {parseHTML} = require("linkedom");

class IndexCounter {
  constructor() {
    this.index = 0;
  }

  add() {
    this.index++;
  }

  valueOf() {
    return this.index;
  }
}

class CharacterWrap {
  constructor() {
    this.multipleCursors = false;
    // array of character indeces
    this.typingConfig = ["0"];

    this.contentTransforms = [];

    this.classPrefix = "charwrap";
  }

  setClassPrefix(prefix) {
    this.classPrefix = prefix;
  }

  setMultipleCursors(useMultipleCursors) {
    this.multipleCursors = !!useMultipleCursors;
  }

  setTypingConfigArray(typingConfig) {
    this.typingConfig = typingConfig;
  }

  addContentTransform(callback) {
    this.contentTransforms.push(callback);
  }

  // 0 => type to show all
  // 1 => type to show from 1+
  // 1,2 => type to show from 1 to 2
  // 2,3 5,6 => type to show from 2 to 3 and from 5 to 6
  //   in other words, show 1 and 4 and 7+
  getTypingConfigResults(indexCounter) {
    let charIndex = indexCounter.valueOf();
    let lowestIndex = 99999999;
    let waitToShow = {};
    let showCursor = false;

    for(let cfg of this.typingConfig) {
      let start, end;
      cfg = "" + cfg;

      if(cfg.indexOf(",") > -1) { // start,length
        let split = cfg.split(",");
        start = parseInt(split[0], 10);
        end = split.length > 1 ? start + parseInt(split[1], 10) : (charIndex+1);
      } else if(cfg.indexOf("-") > -1) { // start,end
        let split = cfg.split("-");
        start = parseInt(split[0], 10);
        end = split.length > 1 ? parseInt(split[1], 10) : (charIndex+1);
      } else {
        start = parseInt(cfg, 10);
        end = charIndex + 1;
      }

      for(let j = start+1; j < end; j++) {
        waitToShow[j] = true;
      }
      if(this.multipleCursors && start === charIndex) {
        showCursor = true;
      }
      lowestIndex = Math.min(lowestIndex, start);
    }

    if(!this.multipleCursors && lowestIndex === charIndex) {
      showCursor = true;
    }
    return { showTyped: !waitToShow[charIndex], showCursor };
  }

  modifyNode(node, indexCounter) {
    let classes = [this.classPrefix];
    let showTyped = true;
    let showCursor = false;

    indexCounter.add();
    let results = this.getTypingConfigResults(indexCounter);
    showTyped = results.showTyped;
    showCursor = results.showCursor;

    if(showTyped) {
      classes.push(`${this.classPrefix}-typed ${this.classPrefix}-typed-initial`);
    }
    if(showCursor) {
      classes.push(`${this.classPrefix}-cursor ${this.classPrefix}-cursor-initial`);
    }
    node.className = classes.join(" ");
    node.setAttribute("data-index", indexCounter.valueOf());
  }

  walkTree(doc, root, indexCounter = null) {
    for(let node of root.childNodes) {
      if(node.nodeType === 3) {
        let characters = Array.from(node.textContent); // convert string to character array
        for(let char of characters) {
          let newTextEl = doc.createElement("span");
          this.modifyNode(newTextEl, indexCounter);
          newTextEl.innerHTML = char;
          node.parentNode.insertBefore(newTextEl, node);
        }
        node.remove();
      } else if(node.nodeType === 1) {
        if(node.classList.contains(this.classPrefix)) {
          continue;
        }
        if(node.nodeName === "BR") {
          this.modifyNode(node, indexCounter);
        } else {
          this.walkTree(doc, node, indexCounter);
        }
      }
    }
  }

  wrapContent(content, codeFormat) {
    for(let transform of this.contentTransforms) {
      let result = transform(content);
      if(result === false) {
        return content;
      }
    }

    let highlightedContent = HighlightPairedShortcode(content, codeFormat, "", {
      trim: false
    });
    let {document} = parseHTML(`<html><body>${highlightedContent}</body></html>`);
    let counter = new IndexCounter();
    let bodyEl = document.getElementsByTagName("body")[0];
    this.walkTree(document, bodyEl, counter);
    return bodyEl.innerHTML;
  }
}

module.exports = CharacterWrap;
