var canvas = new fabric.Canvas("myCanvas");

block_height = 30;
block_width = 30;

player_x = 10;
player_y = 10;

player_object = "";
block_object = "";

function update_player(){
    fabric.Image.fromURL("player.png",function (Img){
        player_object = Img;

        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_x,
            left:player_y
        })
        canvas.add(player_object);
    })
}
update_player()

function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_object = Img;

        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:player_x,
            left:player_y
        })
        canvas.add(block_object);
    })
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if ( keyPressed == 80 && e.shiftKey == true){
        block_width += 10;
        block_height += 10;
        if (block_height > 300){
            block_height = 30;
            block_width = 30;
        }
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
        console.log(block_height);
        console.log(block_width);
    }
    if ( keyPressed == 77 && e.shiftKey == true){
        block_width -= 10;
        block_height -= 10;
        if (block_height < 30){
            block_height = 30;
            block_width = 30;
        }
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
        console.log(block_height);
        console.log(block_width);
    }
    if(keyPressed == '70'){
        console.log("face drawn");
        new_image("ironman_face.png");
    }
    if(keyPressed == '72'){
        console.log("left hand drawn");
        new_image("captain_america_left_hand.png");
    }
    if(keyPressed == '82'){
        console.log("right hand drawn");
        new_image("thor_right_hand.png");
    }
    if(keyPressed == '66'){
        console.log("body drawn");
        new_image("spiderman_body.png");
    }
    if(keyPressed == '76'){
        console.log("leg drawn");
        new_image("hulk_legs.png");
    }
    if( keyPressed == '38'){
        console.log(" up arrow has been pressed");
        up()
    }
    if( keyPressed == '40'){
        console.log(" down arrow has been pressed");
        down()
    }
    if( keyPressed == '37'){
        console.log(" left arrow has been pressed");
        left()
    }
    if( keyPressed == '39'){
        console.log(" right arrow has been pressed");
        right()
    }
} 
function up(){
    if (player_x >= 0){
        player_x = player_x - block_height;
        console.log("block image height = " + block_height);
        canvas.remove(player_object);
        update_player();
    }
}
function down(){
    if (player_x <= 400){
        player_x = player_x + block_height;
        console.log("block image height = " + block_height);
        canvas.remove(player_object);
        update_player();
    }
}
function left(){
    if (player_y >= 0 ){
        player_y = player_y - block_width;
        console.log("block image width = " + block_width);
        canvas.remove(player_object);
        update_player();
    }
}
function right(){
    if (player_y <=  700){
        player_y = player_y + block_width;
        console.log("block image width = " + block_width);
        canvas.remove(player_object);
        update_player();
    }
}

