canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
var nasa_images=["mars.jpg","mars_2.jpg","mars_3.jpg","mars_4.jpg"];
random=Math.floor(Math.random()*4);
console.log(random);
background_image=nasa_images[random];
rover_image="rover.png";
rover_X=10;
rover_y=10;
rover_width=100;
rover_height=90;

function add(){
    background_image_tag=new Image();
    background_image_tag.onload=upload_background;
    background_image_tag.src=background_image;

   rover_image_tag=new Image();
    rover_image_tag.onload=upload_rover;
    rover_image_tag.src=rover_image;
}
function upload_background(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);

}
function upload_rover(){
    ctx.drawImage(rover_image_tag, rover_X,rover_y , rover_width, rover_height);
    
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
   var keyPressed= e.keyCode;
    console.log(keyPressed);
    if (keyPressed== '38'){
        up();
        console.log("up");
       
    }
    if (keyPressed== '40'){
        down();
        console.log("down");
       
    }
    if (keyPressed== '37'){
       left();
        console.log("left");
       
    }
    if (keyPressed== '39'){
        right();
        console.log("right");
       
    }

}

function up(){
    if (rover_y>=0){
        rover_y= rover_y -10;
        console.log("x="+ rover_X+"y="+ rover_y);
        upload_background();
        upload_rover();
    }
}
function down(){
    if (rover_y<=500){
        rover_y= rover_y +10;
        console.log("x="+ rover_X+"y="+ rover_y);
        upload_background();
        upload_rover();
    }
}
function right(){
    if (rover_X<=800){
        rover_X= rover_X +10;
        console.log("x="+ rover_X+"y="+ rover_y);
        upload_background();
        upload_rover();
    }
}
function left(){
    if (rover_X>=0){
        rover_X= rover_X-10;
        console.log("x="+ rover_X+"y="+ rover_y);
        upload_background();
        upload_rover();
    }
}