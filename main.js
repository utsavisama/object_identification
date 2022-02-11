cat = ""
object = [];
status = "";
var r = 0;
var g = 0;
var b = 0; 


function preload(){
cat = loadImage("dog_cat.jpg")
}

function setup(){
canvas = createCanvas(600, 400)
canvas.position(350,200)
video = createCapture(VIDEO)
video.size(600, 400)
video.hide()
objectDetector = ml5.objectDetector('cocossd', modelloaded)
document.getElementById("status").innerHTML = "Status : Detecting Objects!!!! "
}

function modelloaded(){
    console.log("Your Super, fast model is loaded now!!")
    status = true;
    objectDetector.detect(video, gotresluts)
}

function gotresluts(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        object = results;
    }

}

function draw(){
image(video,0,0,600,400)
r = random(255);
g = random(255);
b = random(255);
if(status !=""){
    for(var i = 0; i<object.length; i++){
        document.getElementById("status").innerHTML = "Status : OBJECTS DETECTED BY OUR SUPER FAST MODEL! "
        document.getElementById("status").innerHTML = "NUMBER OF OBJECTS DETECTED ARE :  "+object.length
        fill(r, g, b)
        percent = floor(object[i].confidence*100)
        text(object[i].label + " " + percent+" % ", object[i].x+15,object[i].y+15)
        noFill()
        stroke(r, g, b)
        rect(object[i].x, object[i].y, object[i].width, object[i].height   )
}

}
}