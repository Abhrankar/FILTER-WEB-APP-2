noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png', 'https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet Loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x= " + results[0].pose.nose.x);
        console.log("nose y= " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 175;
        noseY = results[0].pose.nose.y - 45;
    }
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(mustache, noseX, noseY, 60, 40);
}

function take_snapshot() {
    save("filterimage.png");
}