// Navigation
const navigation_div = document.getElementById("navigation");
const upArrow_span = document.querySelector(".close-icon");
const save_a = document.getElementById("save-icon");
const upload_a = document.getElementById("upload-icon");
const upArrow_i = document.getElementById("close-icon");

// Color pickers
const redButton_btn = document.getElementById("button-red");
const blueButton_btn = document.getElementById("button-blue");
const greenButton_btn = document.getElementById("button-green");
const yellowButton_btn = document.getElementById("button-yellow");
const orangeButton_btn = document.getElementById("button-orange");
const whiteButton_btn = document.getElementById("button-white");

const resetButton_btn = document.getElementById("reset-button");

// Cube buttons
const cubeButtons_btn = document.querySelectorAll(".cube-buttons");




// Global variables
var redColor = false;
var blueColor = false;
var greenColor = false;
var yellowColor = false;
var orangeColor = false;
var whiteColor = false;

var counter;


//RESET -- Checked
function reset(){
    
    for(var i=0;i<cubeButtons_btn.length;i++){
        
        cubeButtons_btn[i].style.backgroundColor = "";    
        cubeButtons_btn[i].style.opacity = 0.5;
        cubeButtons_btn[i].style.border = "1px";
        cubeButtons_btn[i].style.borderStyle = "solid";       
    }

    counter = 0;
 
}



// PICKED BUTTON -- Checked
function pickedButton(color,click){
    
    switch (color){
       
        
        case "red":
            redButton_btn.style.opacity = 1;
            redButton_btn.classList.add("button-clicked");

            blueButton_btn.style.opacity = 0.5;
            blueButton_btn.classList.remove("button-clicked");
            greenButton_btn.style.opacity = 0.5;
            greenButton_btn.classList.remove("button-clicked");
            yellowButton_btn.style.opacity = 0.5;
            yellowButton_btn.classList.remove("button-clicked");
            orangeButton_btn.style.opacity = 0.5;
            orangeButton_btn.classList.remove("button-clicked");
            whiteButton_btn.style.opacity = 0.5;
            whiteButton_btn.classList.remove("button-clicked");
            boolValue("red");
            counter = 0;
            break;
        
        case "blue":
            blueButton_btn.style.opacity = 1;
            blueButton_btn.classList.add("button-clicked");

            redButton_btn.style.opacity = 0.5;
            redButton_btn.classList.remove("button-clicked");
            greenButton_btn.style.opacity = 0.5;
            greenButton_btn.classList.remove("button-clicked");
            yellowButton_btn.style.opacity = 0.5;
            yellowButton_btn.classList.remove("button-clicked");
            orangeButton_btn.style.opacity = 0.5;
            orangeButton_btn.classList.remove("button-clicked");
            whiteButton_btn.style.opacity = 0.5;
            whiteButton_btn.classList.remove("button-clicked");
            boolValue("blue");
            counter = 0;
            break; 
        
        case "green":
            greenButton_btn.style.opacity = 1;
            greenButton_btn.classList.add("button-clicked");

            redButton_btn.style.opacity = 0.5;
            redButton_btn.classList.remove("button-clicked");
            blueButton_btn.style.opacity = 0.5;
            blueButton_btn.classList.remove("button-clicked");
            yellowButton_btn.style.opacity = 0.5;
            yellowButton_btn.classList.remove("button-clicked");
            orangeButton_btn.style.opacity = 0.5;
            orangeButton_btn.classList.remove("button-clicked");
            whiteButton_btn.style.opacity = 0.5;
            whiteButton_btn.classList.remove("button-clicked");
            counter = 0;
            boolValue("green");
            break;

        case "yellow":
            yellowButton_btn.style.opacity = 1;
            yellowButton_btn.classList.add("button-clicked");

            redButton_btn.style.opacity = 0.5;
            redButton_btn.classList.remove("button-clicked");
            blueButton_btn.style.opacity = 0.5;
            blueButton_btn.classList.remove("button-clicked");
            greenButton_btn.style.opacity = 0.5;
            greenButton_btn.classList.remove("button-clicked");
            orangeButton_btn.style.opacity = 0.5;
            orangeButton_btn.classList.remove("button-clicked");
            whiteButton_btn.style.opacity = 0.5;
            whiteButton_btn.classList.remove("button-clicked");
            counter = 0;
            boolValue("yellow");
            break;

        case "orange":
            orangeButton_btn.style.opacity = 1;
            orangeButton_btn.classList.add("button-clicked");

            redButton_btn.style.opacity = 0.5;
            redButton_btn.classList.remove("button-clicked");
            blueButton_btn.style.opacity = 0.5;
            blueButton_btn.classList.remove("button-clicked");
            yellowButton_btn.style.opacity = 0.5;
            yellowButton_btn.classList.remove("button-clicked");
            greenButton_btn.style.opacity = 0.5;
            greenButton_btn.classList.remove("button-clicked");
            whiteButton_btn.style.opacity = 0.5;
            whiteButton_btn.classList.remove("button-clicked");
            counter = 0;
            boolValue("orange");
            break;

        case "white":
            whiteButton_btn.style.opacity = 1;
            whiteButton_btn.classList.add("button-clicked");

            redButton_btn.style.opacity = 0.5;
            redButton_btn.classList.remove("button-clicked");
            blueButton_btn.style.opacity = 0.5;
            blueButton_btn.classList.remove("button-clicked");
            yellowButton_btn.style.opacity = 0.5;
            yellowButton_btn.classList.remove("button-clicked");
            orangeButton_btn.style.opacity = 0.5;
            orangeButton_btn.classList.remove("button-clicked");
            greenButton_btn.style.opacity = 0.5;
            greenButton_btn.classList.remove("button-clicked");
            counter = 0;
            boolValue("white");
            break;                

    }
 

}

// BOOL VALUE OF A COLOR -- Checked
function boolValue(color){
    
    if(color === "red"){
        redColor = true;
        blueColor = false;
        greenColor = false;
        yellowColor = false;
        orangeColor = false;
        whiteColor = false;
    }
    if(color === "blue"){
        redColor = false;
        blueColor = true;
        greenColor = false;
        yellowColor = false;
        orangeColor = false;
        whiteColor = false;
    }
    if(color === "green"){
        redColor = false;
        blueColor = false;
        greenColor = true;
        yellowColor = false;
        orangeColor = false;
        whiteColor = false;
    }
    if(color === "yellow"){
        redColor = false;
        blueColor = false;
        greenColor = false;
        yellowColor = true;
        orangeColor = false;
        whiteColor = false;
    }
    if(color === "orange"){
        redColor = false;
        blueColor = false;
        greenColor = false;
        yellowColor = false;
        orangeColor = true;
        whiteColor = false;
    }
    if(color === "white"){
        redColor = false;
        blueColor = false;
        greenColor = false;
        yellowColor = false;
        orangeColor = false;
        whiteColor = true;
    }
}




function main(){

    // COLOR PICKER BUTTONS EVENTS
    
    // Red button clicked
    redButton_btn.addEventListener('click', () =>{
        console.log("Red button");
        pickedButton("red");
                                       
    })
    
    blueButton_btn.addEventListener('click', () =>{
        console.log("Blue button");
        pickedButton("blue");
        
    })
    greenButton_btn.addEventListener('click', () =>{
        console.log("Green button");
        pickedButton("green");
        
    })
    yellowButton_btn.addEventListener('click', () =>{
        console.log("Yellow button");
        pickedButton("yellow");
        
    })
    orangeButton_btn.addEventListener('click', () =>{
        console.log("Orange button");
        pickedButton("orange");
        
    })
    whiteButton_btn.addEventListener('click', () =>{
        console.log("White button");
        pickedButton("white");    
        
    })


    
    // SIDEBAR EVENTS
    
    // Up arrow clicked
    upArrow_span.addEventListener('click', () => {
        console.log("Down arrow");
        const icon = document.getElementById("close-icon");
        hoverSidebar(icon);

               
    })

    // Save button clicked
    save_a.addEventListener('click', () =>{
        console.log("Save");
        //generateString();
    })

    upload_a.addEventListener('click', () => {
        console.log("Upload");
        //sendString();
    })

    resetButton_btn.addEventListener('click', () =>{
        reset();
    })
    
}




// BUTTON HANDLER -- Checked
function handler(btnId){
    
   console.log(parseInt(btnId));
   //console.log(parseInt(cubeButtons_btn[btnId-1].id));
   var pressedButton = cubeButtons_btn[btnId-1];
   colorButton(pressedButton); 
   
    
}

// COLOR BUTTONS -- Checked
function colorButton(pressedButton){
    
    console.log(counter);
    if(counter < 8){    
            if(redColor){
                pressedButton.style.backgroundColor = "red";
                pressedButton.style.opacity = "1";
                pressedButton.style.border = "2px";
                pressedButton.style.borderStyle = "solid";
                
            }
            if(blueColor){
                pressedButton.style.backgroundColor = "blue";
                pressedButton.style.opacity = "1";
                pressedButton.style.border = "2px";
                pressedButton.style.borderStyle = "solid";
                
            }
            if(greenColor){
                pressedButton.style.backgroundColor = "rgb(4, 253, 4)";
                pressedButton.style.opacity = "1";
                pressedButton.style.border = "2px";
                pressedButton.style.borderStyle = "solid";
                
            }
            if(yellowColor){
                pressedButton.style.backgroundColor = "yellow";
                pressedButton.style.opacity = "1";
                pressedButton.style.border = "2px";
                pressedButton.style.borderStyle = "solid";
                
            }
            if(orangeColor){
                pressedButton.style.backgroundColor = "orange";
                pressedButton.style.opacity = "1";
                pressedButton.style.border = "2px";
                pressedButton.style.borderStyle = "solid";
                        
            }
            if(whiteColor){
                pressedButton.style.backgroundColor = "white";
                pressedButton.style.opacity = "1";
                pressedButton.style.border = "2px";
                pressedButton.style.borderStyle = "solid";
                
                
            }
    }
    
    counter++;

}


// HOVER SIDEBAR -- Checked
function hoverSidebar(icon){
    
    if(icon.classList.contains('fa-chevron-up')){
        navigation_div.style.height = "60px";
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
    else if(icon.classList.contains('fa-chevron-down')){
        navigation_div.style.height = "500px";
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}






// Calling the main() function
main();













////////////////////////////////
/*------Dummy functions-------*/
////////////////////////////////

// CUBE BUTTONS
 /* 
cubeButtons_btn.forEach(el => el.addEventListener('click', () =>{
        handler();        
})) */
// BOOLEAN
/*
function colorValue(color){ 
    switch(color){
        case "red":
            var redColor = true;
            var blueColor = false;
            var greenColor = false;
            var yellowColor = false;
            var orangeColor = false;
            var whiteColor = false;
            break;

            ...
} */

function setId(pressedButton){

}

