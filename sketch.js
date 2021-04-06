const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);
    if(bg){
        background(bg);
        }
    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var take= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var jf= await take.json() 
    // write code slice the datetime
    var date=jf.datetime
    var time=date.slice(11,13)
    console.log(time)
    // add conditions to change the background images from sunrise to sunset
    if(time>=07&&time<08){
        Bg="sunrise1.png"
    }else if(time>=08&&time<09){
        Bg="sunrise2.png"
    }else if(time>=09&&time<10){
        Bg="sunrise3.png"
    }else if(time>=10&&time<11){
        Bg="sunrise4.png"
    }else if(time>=11&&time<15){
        Bg="sunrise5.png"
    }else if(time>=15&&time<17){
        Bg="sunrise6.png"
    }else if(time>=17&&time<18){
        Bg="sunset7.png"
    }else if(time>=18&&time<19){
        Bg="sunset8.png"
    }else if(time>=19&&time<20){
        Bg="sunset9.png"
    }else if(time>=20&&time<21){
        Bg="sunset10.png"
    }else if(time>=21&&time<22){
        Bg="sunset11.png"
    }else if(time>=22&&time<07){
        Bg="sunset12.png"
    }
//load the image in backgroundImg variable here
bg=loadImage(Bg)
}
