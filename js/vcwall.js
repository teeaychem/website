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

  document.getElementById('wisdomOne').innerHTML = thewisdom[0];
  document.getElementById('wisdomTwo').innerHTML = thewisdom[1];
  document.getElementById('wisdomThree').innerHTML = thewisdom[2];

}

function mouseReleased(e) {
  newWisdom();
}

var callback = function(){
    newWisdom();

  document.getElementsByTagName("article")[0].addEventListener("mouseup", mouseReleased, false);
};
if (
    document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}




