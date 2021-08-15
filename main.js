canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
car2_width = 100;
car2_height = 90;
car1_image = "car1.png";
car2_image = "car2.jpeg";
car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 100;
background_image = "racing.jpeg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBakground;
    background_imgTag.src = background_image;
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBakground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38") {
        c1_up();
        console.log("up");
    }
    if (keypressed == "40") {
        c1_down();
        console.log("down");
    }
    if (keypressed == "37") {
        c1_left();
        console.log("left");
    }
    if (keypressed == "39") {
        c1_right();
        console.log("right");
    }
} {
    if (keypressed == "87")
        c2_up();
    console.log("w");
}
if (keypressed == "83") {
    c2_down();
    console.log("s");
}
if (keypressed == "65") {
    c2_left();
    console.log("a");
}
if (keypressed == "68") {
    c2_right();
    console.log("d");
}

function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed, x= " + car1_x + "y= " + car1_y);
        uploadBakground();
        uploadcar1();
        uploadcar2();
    }
}

function down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, x= " + car1_x + "y= " + car1_y);
        uploadBakground();
        uploadcar1();
        uploadcar2();
    }
}

function left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("when left arrow is pressed, x= " + car1_x + "y= " + car1_y);
        uploadBakground();
        uploadcar1();
        uploadcar2();
    }
}

function right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("when up arrow is pressed, x= " + car1_x + "y= " + car1_y);
        uploadBakground();
        uploadcar1();
        uploadcar2();
    }
}

function c2up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("when up arrow is pressed, x= " + car2_x + "y= " + car2_y);
        uploadBakground();
        uploadcar1();
        uploadcar2();
    }
}

function c2down() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("when down arrow is pressed, x= " + car2_x + "y= " + car2_y);
        uploadBakground();
        uploadcar1();
        uploadcar2();
    }
}

function c2left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("when left arrow is pressed, x= " + car2_x + "y= " + car2_y);
        uploadBakground();
        uploadcar1();
        uploadcar2();
    }
}

function c2right() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("when up arrow is pressed, x= " + car2_x + "y= " + car2_y);
        uploadBakground();
        uploadcar1();
        uploadcar2();
    }
}
if (car1_x > 700) {
    console.log("Car1 Won")
    document.getElementById('game_status').innerHTML = "Car1 Won!!!!!"
}