let ball = {
    x: 100,
    y: 100,
    xspeed: 3,
    yspeed: 2,
    r: 25,
    color: [255, 0, 0]
  };
  
  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
  
    // Draw ball
    fill(ball.color);
    noStroke();
    ellipse(ball.x, ball.y, ball.r * 2);
  
    // Move ball
    ball.x += ball.xspeed;
    ball.y += ball.yspeed;
  
    // Bounce off walls
    if (ball.x - ball.r < 0 || ball.x + ball.r > width) {
      ball.xspeed *= -1;
      ball.color = [random(255), random(255), random(255)];
    }
    if (ball.y - ball.r < 0 || ball.y + ball.r > height) {
      ball.yspeed *= -1;
      ball.color = [random(255), random(255), random(255)];
    }
  }