var wisdoms = [
  [
    ["For every odd"],
    ["there is"],
    ["an even"],
  ],
  [
    ["Ifs don't"],
    ["change"],
    ["the world"],
  ],
  [
    ["Objects of choice"],
    ["are not"],
    ["objects of preference"]
  ],
  [
    ["Questions"],
    ["are the"],
    ["answer"],
  ],
  [
    ["Tokens can"],
    ["function as"],
    ["types"],
  ],
]

function newWisdom() {
  thewisdom = _.sample(wisdoms)

  $('#wisdomOne').html(thewisdom[0])
  $('#wisdomTwo').html(thewisdom[1])
  $('#wisdomThree').html(thewisdom[2])
}

function mouseReleased(e) {
  newWisdom();
}


$(document).ready(function() {

  newWisdom();

  document.getElementsByTagName("article")[0].addEventListener("mouseup", mouseReleased, false);

});