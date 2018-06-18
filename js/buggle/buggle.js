// main buggle js


let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var tiles = [];

var boardSize = 4;

getTiles = function(n) {

  /* Here I want to do some weighting, but random is fine for now */

  for (i = 0; i < n; i++) {
    let tileTemp = [];
    for (j = 0; j < n; j++) {
      tileTemp.push(_.sample(alphabet, 1)[0]);
    }
    tiles.push(tileTemp);
  }

};

const gameSize = 4;

getTiles(gameSize);


var tileKeyToCoordDict = {};
var tileCoordToKeyDict = {};

function buildTileDict(n) {

  for (i = 0; i < tiles.length; i++) {
    for (j = 0; j < tiles.length; j++) {
      tileKeyToCoordDict[Object.keys(tileKeyToCoordDict).length] = [i, j];
      tileCoordToKeyDict[[i, j]] = Object.keys(tileCoordToKeyDict).length;
    }
  }
}

buildTileDict(gameSize);

function getLetterFromCoord(arr) {
  return tiles[arr[1]][arr[0]];
}

function getLetterFromKey(key) {
  let coords = tileKeyToCoordDict[key]
  return tiles[coords[1]][coords[0]]
}

// Well, the below is doing pretty much what I want it to, but it's *very* messy, and needs a clean.
// getAccessCoords shouldn't update the accessible list, and stuff like that.

function getAccessKeys(key, history) {
  let coords = tileKeyToCoordDict[key];
  let i = coords[0];
  let j = coords[1];
  history = (history || []);
  let accessible = [];

  for (let x = i - 1; x < i + 2; x++) {
    for (let y = j - 1; y < j + 2; y++) {
      if (x < 0 || y < 0 || x >= boardSize || y >= boardSize || history.includes(tileCoordToKeyDict[[x, y]])) {} else {
        accessible.push(tileCoordToKeyDict[[x, y]]);
      }
    }
  }
  return accessible;
}

function getAccessCoords(coords, history) {
  let i = coords[0];
  let j = coords[1];
  history = (history || []);
  let accessible = [];

  for (let x = i - 1; x < i + 2; x++) {
    for (let y = j - 1; y < j + 2; y++) {
      if (x < 0 || y < 0 || x >= boardSize || y >= boardSize || history.includes(tileCoordToKeyDict[[x, y]])) {} else {
        accessible.push([x, y]);
      }
    }
  }
  return accessible;
}


function getAccessTiles(key, history, node) {

    let accessible = [];
    let accessKeys = getAccessKeys(key, history)
    let children = wordTrie.childList(node)

    for (let d = 0; d < accessKeys.length; d++) {
        if (children.includes(getLetterFromKey(accessKeys[d]))) {
            accessible.push(accessKeys[d]);
        }
    }
    return accessible;
}



var wordTrie = new trie();

buggleList = [];

fetch('../js/buggle/betterlist.txt')
  .then(response => response.text())
  .then((text) => {
    buggleList = text.split(/\r?\n/g);
    console.log('dictionary length: ' + buggleList.length);
    for (let i = 0; i < buggleList.length; i++) {
      word = buggleList[i];
      wordTrie.insert(word);
    }
    console.log('trie dictionary built');
    return buggleList;
  });

// ugh, i need to learn promise stuff for this to work
