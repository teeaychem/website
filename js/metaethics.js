var stars = []

function drawStar() {
  var angle = Math.random() * Math.PI * 2;
  var radius = Math.random() * 1 + 5
  var x = Math.cos(angle) * radius;
  var y = Math.sin(angle) * radius;
  var path = new Path.Circle({
    center: [view.center.x + x, view.center.y + y],
    radius: .2,
    strokeColor: 'black',
    style: {
      fillColor: 'white'
    },
    data: {
      "radius": radius,
      "angle": angle
    }
  })
  stars.push(path)
}

function updateStar(star) {
  var angle = star.data.angle
  var radius = star.data.radius
  var newRadius = star.data.radius * 1.04

  var x = Math.cos(angle) * newRadius;
  var y = Math.sin(angle) * newRadius;
  star.data.radius = newRadius
  star.bounds.width = star.bounds.width * 1.03
  star.bounds.height = star.bounds.height * 1.03
  star.position = new Point(view.center.x + x, view.center.y + y)
}

function testBounds() {
  for (var i = stars.length - 1; i >= 0; i--) {
    var star = stars[i]
    if ((view.viewSize.height > star.position.y  && star.position.y > 0)) {
      null
    } else {
      star.data.angle = Math.random() * Math.PI * 2;
      star.data.radius = Math.random() * 1 + 5
      star.bounds.width = .2
      star.bounds.height = .2
      star.position.x = Math.cos(star.data.angle) * star.data.radius;
      star.position.y = Math.sin(star.data.angle) * star.data.radius;
    }
  }
}

setInterval(function() {
  if (stars.length < 70) {
    drawStar()
  }
}, 100)



function onFrame(event) {
  // while (stars.length < 50) {
  //   drawStar()
  // }
  for (var i = 0; i < stars.length; i++) {
    updateStar(stars[i])
  }
  testBounds()
}