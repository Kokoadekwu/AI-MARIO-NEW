img = "";
noseX = 0;
noseY = 0;
GameStatus = "";
marioX = 325;
marioY = 325;

function preload()
{
  world_start = loadSound("world_start.wav");
  setSprites();
  MarioAnimation();
  img = loadImage("mario05.png");
}

function setup() {
  canvas = createCanvas(1240, 336);
  canvas.parent('canvas');

  instializeSetup(mario);
  
  video = createCapture(VIDEO);
  video.size(800,400);
  video.parent('game_console');
  
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function game() {
	
	console.log("noseX = " + noseX +" ,noseY = "+ noseY);
}

function modelLoaded() {
  console.log('Model Loaded!');
}

function draw() {
  background("#D3D3D3");
  if(noseX < 300)
    {
      marioX = marioX - 1;
    }
  
  if(noseX > 300)
    {
      marioX = marioX + 1;
    }
  
  if(noseY < 150)
    {
      marioY = marioY - 1;
    }
  
  
  image(img,marioX, marioY, 40,70);
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}










