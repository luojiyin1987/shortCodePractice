const TERMINATING_CHAR = "$$LagoTrieTerminatingCharacter";

interface TrieNode {
  [key: string]: TrieNode | number;
}

interface CountResult {
  [key: string]: number;
}

class Trie {
  private _tree: TrieNode;
  private _size: number;

  constructor() {
    this._tree = Object.create(null);
    this._size = 0;
  }

  get size(): number {
    return this._size;
  }

  private _modifyCountBy(str: string, difference: number): number {
    let curr = this._tree;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        curr[char] = {};
      }
      curr = curr[char] as TrieNode;
    }

    if (!Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
      this._size++;
      curr[TERMINATING_CHAR] = 0;
    }
    curr[TERMINATING_CHAR] = difference + (curr[TERMINATING_CHAR] as number);
    return curr[TERMINATING_CHAR] as number;
  }

  insert(str: string, count = 1): number {
    if (count < 1) {
      return 0;
    }

    return this._modifyCountBy(str, count);
  }

  delete(str: string): boolean {
    if (!str) {
      return false;
    }

    let curr = this._tree;
    const stack: Array<[TrieNode, string]> = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        return false;
      }

      stack.push([curr, char]);
      curr = curr[char] as TrieNode;
    }

    if (!Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
      return false;
    }
    stack.push([curr, TERMINATING_CHAR]);
    this._size--;

    for (let i = 0; i < stack.length; i++) {
      const [node, char] = stack.pop() as [TrieNode, string];
      delete node[char];

      if (Object.keys(node).length > 0) {
        break;
      }
    }

    return true;
  }

  count(str: string): number {
    if (!str) {
      return 0;
    }

    let curr = this._tree;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        return 0;
      }
      curr = curr[char] as TrieNode;
    }

    return curr[TERMINATING_CHAR] as number;
  }

  contains(str: string): boolean {
    return this.count(str) !== 0;
  }

  stringsStartingWith(prefix: string): CountResult {
    const results: CountResult = {};

    if (!prefix) {
      return results;
    }

    let curr = this._tree;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        return results;
      }
      curr = curr[char] as TrieNode;
    }

    function traverse(node: TrieNode, chars: string) {
      Object.keys(node).forEach((char) => {
        if (char === TERMINATING_CHAR) {
          results[char] = node[char] as number;
          return;
        }

        traverse(node[char] as TrieNode, chars + char);
      });
    }

    traverse(curr, prefix);
    return results;
  }

  countStringsStartingWith(prefix: string): number {
    const results = this.stringsStartingWith(prefix);
    const total = Object.keys(results)
      .map((key) => results[key])
      .reduce((a, b) => a + b, 0);

    return total;
  }

  differentStringsStartingWith(prefix: string): number {
    const results = this.stringsStartingWith(prefix);
    return Object.keys(results).length;
  }

  shortestPrefix(string: string): string | null {
    let curr = this._tree;
    const prefixChars = [];

    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
        return prefixChars.join("");
      }

      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        break;
      }

      prefixChars.push(char);
      curr = curr[char] as TrieNode;
    }

    // If the whole string is a prefix.
    if (Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
      return prefixChars.join("");
    }

    return null;
  }
}

export default Trie;
