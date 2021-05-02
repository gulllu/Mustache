noseY = 0;
noseX = 0;
function preload(){
    image1 = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', getpose);
}

function draw(){
  image(video, 0,0,300,300);
  image(image1, noseX,noseY,50,50);
}

function take_snapshot(){
    save("Pic.png");
}

function modelloaded(){
    console.log("Model loaded successfully");
}

function getpose(result_array){
    if (result_array.length > 0){
        console.log(result_array);
        noseX = result_array[0].pose.nose.x-25;
        noseY = result_array[0].pose.nose.y-5;
    }
}