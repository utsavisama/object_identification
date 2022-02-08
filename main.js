cat = ""
object = [];
status = "";


function preload(){
cat = loadImage("dog_cat.jpg")
}

function setup(){
canvas = createCanvas(600, 400)
canvas.position(350,200)
objectDetector = ml5.objectDetector('cocossd', modelloaded)
document.getElementById("status").innerHTML = "Status : Detecting Objects!!!! "
}

function modelloaded(){
    console.log("Your Super, fast model is loaded now!!")
    status = true;
    objectDetector.detect(cat, gotresluts)
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
image(cat,0,0,600,400)
if(status !=""){
    for(var i = 0; i<object.length; i++){
        document.getElementById("status").innerHTML = "Status : OBJECTS DETECTED BY OUR SUPER FAST MODEL! "
        fill("purple")
        percent = floor(object[i].confidence*100)
        text(object[i].label + " " + percent+" % ", object[i].x+15,object[i].y+15)
        noFill()
        stroke("black")
        rect(object[i].x, object[i].y, object[i].width, object[i].height   )
}

}
}