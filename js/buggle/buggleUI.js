// tiles are of the form [i, j]

var wordAttempt = [];
var usedTiles = [];
var accessibleTiles = [];
var tileList = [];
var processedTile = false;

var wordMode = false;



var tilesRoot = Math.sqrt(tiles.length);
var tileSize = 40;
var tileStart = 100;
var tileX = 100;
var tileY = 20;



for (i = 0; i < tiles.length; i++) {
  for (j = 0; j < tiles.length; j++) {

    var text = new PointText(new Point(tileX + tileSize / 2, tileY + tileSize / 2));
    text.fillColor = 'black';
    text.fontSize = 20;
    text.content = tiles[j][i];

    var shape = new Shape.Rectangle({
      point: [tileX, tileY],
      size: [tileSize, tileSize],
      strokeColor: 'black',
      fillColor: {
        hue: 50,
        saturation: 1,
        brightness: 1,
        alpha: .1,
      },
      data: {
        position: [i, j],
        key: tileList.length
      }
    });
    tileList.push(shape);
    tileX += tileSize + 10;
  }
  tileX = tileStart;
  tileY += tileSize + 10;
}



function isAccessible(key) {
  if (accessibleTiles.includes(key)) {
    return true;
  } else {
    return false;
  }
}

// returns true if coord is in used tiles
function testUsed(key) {
  if (usedTiles.includes(key)) {
    return true;
  } else {
    return false;
  }
}

// returns true if key is the same as last used
function testLastUsed(key) {
  if (key == (usedTiles[usedTiles.length - 2])) {
    return true;
  } else {
    return false;
  }
}

function removeLastUsed() {
  usedTiles.splice(usedTiles.length - 1, 1);
  wordAttempt = wordAttempt.slice(0, -1)
}



function onMouseDown(event) {
  // pick up what's under the mouse
  var hitResult = project.hitTest(event.point);
  if (hitResult) {
    // if a tile, continue
    tile = hitResult.item;
    // fix that a word is being made
    wordMode = true;
    // update colour
    selectTile(tile);

    // figure out the letter
    wordAttempt = getLetterFromCoord(tile.data.position);
    // get the trie node for the letter
    trieNode = wordTrie.goto(wordAttempt);


    // accessibleTiles.push(tileKeyToCoordDict[tile.data.key])
    // add the current tile to those used
    usedTiles.push(tile.data.key);
    // figure out which tiles are accessible, and store
    accessibleTiles = getAccessTiles(tile.data.key, usedTiles, trieNode);

    console.log(wordAttempt);
  }
}

function onMouseDrag(event) {
  hitResult = project.hitTest(event.point);
  if (hitResult) {

    if (processedTile == true) {

    } else {
      // console.log('within tile');
      tile = hitResult.item;

      if (wordMode == true) {

        if (testUsed(tile.data.key)) {

          if (testLastUsed(tile.data.key)) {

            deselectTile(tileList[usedTiles[usedTiles.length - 1]])
            removeLastUsed();
            accessibleTiles = getAccessKeys(tile.data.key, usedTiles);
          }
        } else if (isAccessible(tile.data.key)) {

          wordAttempt += getLetterFromCoord(tile.data.position);
          trieNode = wordTrie.goto(wordAttempt);
          usedTiles.push(tile.data.key);
          accessibleTiles = getAccessTiles(tile.data.key, usedTiles, trieNode);
          console.log('word so far: ' + wordAttempt);
          console.log(accessibleTiles);
          selectTile(tile);
        }
        console.log('used tiles: ' + JSON.stringify(usedTiles));
      }
      processedTile = true;
    }
  } else if (processedTile == true) {
    // console.log('left tile');
    processedTile = false;
  }
};


function onMouseUp(event) {
  if (wordMode == true) {
    if (trieNode.end) {
      console.log('wow, you made: ' + wordAttempt);
    } else {
      console.log('Oh, ' + wordAttempt + ' is not a word.');
    }
    clearTiles();
    wordMode = false;
    wordAttempt = [];
    usedTiles = [];
    accessibleTiles = [];
  }
};

function selectTile(tile) {
  tile.strokeColor = 'green';
}

function deselectTile(tile) {
  tile.strokeColor = 'black';
};

function clearTiles() {
  console.log('used start');
  console.log(usedTiles);
  console.log(usedTiles.length);
  for (i = 0; i < usedTiles.length; i++) {
    tile = tileList[usedTiles[i]];
    deselectTile(tile);
  }
};