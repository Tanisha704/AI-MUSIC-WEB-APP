song1=""
song2=""
left_wrist_x=0
left_wrist_y=0
right_wrist_x=0
right_wrist_y=0
score_leftwrist=0
score_rightwrist=0
function preload(){                 
song1=loadSound('music.mp3')
song2=loadSound('music2.mp3')
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
        score_rightwrist=results[0].pose.keypoints[10].score;
    }
   
}

function draw(){
    image(camera1,0,0,600,600)
    song2_status = song2.isPlaying();
    if (score_leftwrist>0.2) {
        circle(left_wrist_x,left_wrist_y,20)
        song1.stop()
      if (song2_status==false) {
       song2.play()
       document.getElementById("song").innerHTML="playing Peterpan Theme song "
      }
    
}

song1_status = song1.isPlaying();
if (score_rightwrist>0.2) {
    circle(right_wrist_x,right_wrist_y,20)
    song2.stop()
  if (song1_status==false) {
   song1.play()
   document.getElementById("song").innerHTML="playing Harry Potter Theme song "
  }

}
}


