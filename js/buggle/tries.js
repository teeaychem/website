// working out tries

function trieNode(key) {
  this.key = key;
  this.parent = null;
  this.children = {};
  this.end = false;
};


trie.prototype.ancestry = function(node) {
  ancestors = [];
  while (node!= null) {
    ancestors.unshift(node.key);
    node = node.parent;
  }
  return ancestors.join('');
};

trie.prototype.insert = function(word) {
  var node = this.root;
  for (i=0; i < word.length; i++) {
    if (!node.children[word[i]]) {
      node.children[word[i]] = new trieNode(word[i]);
      node.children[word[i]].parent = node;
    }
    node = node.children[word[i]];
    if (i == word.length-1) {
      node.end = true;
    }
  }
};

trie.prototype.contains = function(word) {
  var node = this.root;
  for (let i=0; i < word.length; i++) {
    if (node.children[word[i]]) {
      node = node.children[word[i]];
    } else {
      return false;
    }
  }
  return node.end;
};

trie.prototype.find = function(prefix) {
  var node = this.goto(prefix);
  if (!prefix) {
    prefix = '';
  }
  if (!node.children) {
    console.log(node);
  }
  if (node.children) {
    children = Object.keys(node.children);
    for (i=0; i<children.length;i++)  {
      console.log(children);
      console.log('in loop: ' + prefix + children[i]);
      console.log('entering loop');
      this.find(prefix + children[i]);
    }
  }
  if (node.end) {
    console.log('end: ' + prefix);
  }
  console.log('prefix: ' + prefix);
  // return true;
};

trie.prototype.goto = function(prefix) {
  node = this.root;
  if (prefix) {
    for (i=0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        return this.root;
      }
    }
  }
  return node;
};

trie.prototype.grow = function(node) {
  // allow for empty node
  node = (node || this.root);
  // we need to use a const, here, as otherwise the
  // recursion overwrite the children.
  const children = Object.keys(node.children);
  for (let i=0; i < children.length; i++) {
    this.grow(node.children[children[i]]);
  }
  if (node.end) {
    console.log(this.ancestry(node));
  }
};

trie.prototype.childList = function(node) {
  node = (node || this.root);
  return Object.keys(node.children);
};


function trie() {
  this.root = new trieNode(null);
}
