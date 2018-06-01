var wisdoms = [
  ["For every odd", "there is", "an even"],
  ["Ifs don't", "change", "the world"],
  ["Objects of choice", "are not", "objects of preference"],
  ["Questions", "are the", "answer"],
  ["Tokens can", "function as", "types"],
  ["Conversation is about", "turning", "QUDs into QEDs"],
  ["The goal", "is not", "environment dependent"],
  ["Beauty is in", "the mind", "of the beholder"],
  ["The conclusion", "cannot", "narrow the context"],
]

function makeWords() {
  wisdom = _.sample(wisdoms)

  opentype.load('../shared/fonts/IBM_Plex_Mono/IBMPlexMono-Bold.ttf', function(err, font) {
    if (err) {
      alert('Could not load font: ' + err);
    } else {
      var pathOne = font.getPath(wisdom[0], 0, 0, 50);
      textOneSVG = pathOne.toSVG(2);
      textOne = project.importSVG(textOneSVG);
      textOne.visible = true
      textOne.fillColor = 'white';
      textOne.strokeColor = 'black';
      var pathTwo = font.getPath(wisdom[1], 0, 0, 50);
      textTwoSVG = pathTwo.toSVG(2);
      textTwo = project.importSVG(textTwoSVG);
      textTwo.visible = true
      textTwo.fillColor = 'white';
      textTwo.strokeColor = 'black';
      var pathThree = font.getPath(wisdom[2], 0, 0, 50);
      textThrSVG = pathThree.toSVG(2);
      textThr = project.importSVG(textThrSVG);
      textThr.visible = true
      textThr.fillColor = 'white';
      textThr.strokeColor = 'black';

      textOne.position = view.center;
      textOne.position.y -= 50;
      textTwo.position = view.center;
      textThr.position = view.center;
      textThr.position.y += 50;

      textOne.onMouseDrag = function(event) {
        this.position += event.delta;
      }
      textTwo.onMouseDrag = function(event) {
        this.position += event.delta;
      }
      textThr.onMouseDrag = function(event) {
        this.position += event.delta;
      }
    }
  })
}



makeWords()