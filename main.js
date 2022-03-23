song1=""
song2=""
left_wrist_x=0
left_wrist_y=0
right_wrist_x=0
right_wrist_y=0
score_leftwrist=0
function preload(){                 
song1=loadSound('music.mp3')
song2=loadSound('music.mp3')
}
function setup(){
canvas=createCanvas(600,600)
canvas.center()
camera1=createCapture(VIDEO)
camera1.hide()
poseNet=ml5.poseNet(camera1,modelLoaded)
poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("posenet is connected")
}



function play(){
    song.play()
}
function gotPoses(results){
    if (results.length>0) {
        console.log(results)
        left_wrist_x=results[0].pose.leftWrist.x;
        left_wrist_y=results[0].pose.leftWrist.y;
        right_wrist_x=results[0].pose.rightWrist.x;
        right_wrist_y=results[0].pose.rightWrist.y;
        score_leftwrist=results[0].pose.keypoints[9].score;
    }
   
}

function draw(){
    image(camera1,0,0,600,600)
    if (score_leftwrist>0.2) {
        circle(left_wrist_x,left_wrist_y,20)
      
     new_leftWrist_y=Number(left_wrist_y)
     new_leftWrist_y=floor(new_leftWrist_y)
     new_leftWrist_y=new_leftWrist_y/500

     
    }
}
