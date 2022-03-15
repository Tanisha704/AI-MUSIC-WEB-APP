song1=""
song2=""

function preload(){                 
song1=loadSound('music.mp3')
song2=loadSound('music.mp3')
}
function setup(){
canvas=createCanvas(600,600)
canvas.center()
camera=createCapture(VIDEO)
camera.hide()
}
function draw(){
image(camera,0,0,600,600)
}
function play(){
    song.play()
}