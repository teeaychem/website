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
  [
    ["Conversation is about"],
    ["turning"],
    ["QUDs into QEDs"],
  ],
  [
    ["The goal"],
    ["is not"],
    ["environment dependent"],
  ],
  [
    ["Beauty is in"],
    ["the mind"],
    ["of the beholder"],
  ],
  [
    ["The conclusion"],
    ["cannot"],
    ["narrow the context"],
  ],
]

function newWisdom() {
  thewisdom = _.sample(wisdoms)

  $("#wisdomOne").html(thewisdom[0]);
  $("#wisdomTwo").html(thewisdom[1]);
  $("#wisdomThree").html(thewisdom[2]);

  $('#wisdomOne').novacancy({
    'reblinkProbability': 0.1,
    'blinkMin': 0.2,
    'blinkMax': 0.6,
    'loopMin': 8,
    'loopMax': 10,
    'color': 'blue',
  });
  $('#wisdomTwo').novacancy({
    'blink': 1,
    'off': 1,
    'color': 'Red',
  });

  $('#wisdomThree').novacancy({
    'reblinkProbability': 0.1,
    'blinkMin': 0.2,
    'blinkMax': 0.6,
    'loopMin': 8,
    'loopMax': 10,
    'color': 'green ',
  });
  console.log('t')
}

function mouseReleased(e) {
  newWisdom();
}

$(document).ready(function() {
  newWisdom();
  document.getElementsByTagName("article")[0].addEventListener("mouseup", mouseReleased, false);
});