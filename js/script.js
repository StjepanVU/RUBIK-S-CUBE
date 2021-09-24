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
const cubeButtons_kociembaSort = document.querySelectorAll(".kociemba-sort");
const cubeButtons_U = document.querySelectorAll(".U");
const cubeButtons_F = document.querySelectorAll(".F");
const cubeButtons_D = document.querySelectorAll(".D");
const cubeButtons_L = document.querySelectorAll(".L");
const cubeButtons_R = document.querySelectorAll(".R");
const cubeButtons_B = document.querySelectorAll(".B");




// Global variables
var redColor = false;
var blueColor = false;
var greenColor = false;
var yellowColor = false;
var orangeColor = false;
var whiteColor = false;

var counter;
let kociembaString = "";
var generatedString = false;

//RESET -- Checked
function reset(){
    
    for(var i=0;i<cubeButtons_btn.length;i++){
        
        cubeButtons_btn[i].style.backgroundColor = "";    
        cubeButtons_btn[i].style.opacity = 0.5;
        cubeButtons_btn[i].style.border = "1px";
        cubeButtons_btn[i].style.borderStyle = "solid";       
    }

    counter = 0;
    kociembaString = [];
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
        getString(); 
        
    })

    // Upload button clicked
    upload_a.addEventListener('click', () => {
        console.log("Upload");
        if(generatedString){
        sendString();
        }
        else{
            alert("Kociemba string nije generiran!");
        }
    })

    // Reset button clicked
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

// Change ID -- Checked
function changeId(){
    
    for(var i=0;i<9;i++){
        // U class
        
        cubeButtons_U[i].id = String(i);
        console.log("U" + cubeButtons_U[i].id);
        
    }
    

    for(var i=0;i<9;i++){
        // R class
        
        cubeButtons_R[i].id = String(9+i);
        console.log("R" + cubeButtons_R[i].id);
        
    }
    

    for(var i=0;i<9;i++){
        // F class
        //console.log(cubeButtons_U[i].id) = String(i);
        cubeButtons_F[i].id = String(18+i);
        console.log("R" + cubeButtons_F[i].id);
        
    }
    

    for(var i=0;i<9;i++){
        // D class
        //console.log(cubeButtons_U[i].id) = String(i);
        cubeButtons_D[i].id = String(27+i);
        
    }
    


    for(var i=0;i<9;i++){
        // L class
        //console.log(cubeButtons_U[i].id) = String(i);
        cubeButtons_L[i].id = String(36+i);
        
    }
    


    for(var i=0;i<9;i++){
        // B class
        //console.log(cubeButtons_U[i].id) = String(i);
        cubeButtons_B[i].id = String(45+i);
        
    }
    
}

// Set string values -- Checked
function setStringValues(bgColor){
    
    if (bgColor === "rgb(255, 255, 0)"){
        kociembaString+= "U";
    }
    else if (bgColor === "rgb(0, 0, 255)"){
        //kociembaString.push('F');
        kociembaString+= "F";
    }
    else if (bgColor === "rgb(255, 165, 0)"){
        //kociembaString.push('L');
        kociembaString+= "L";
    }
    else if (bgColor === "rgb(255, 0, 0)"){
        //kociembaString.push('R');
        kociembaString+= "R";
    }
    else if (bgColor === "rgb(4, 253, 4)"){
        //kociembaString.push('B');
        kociembaString+= "B";
    }
    else{
        //kociembaString.push('D');
        kociembaString+= "D";
    }

    
}

// GET STRING  -- Checked
function getString(){
      
    changeId();
    
    for(var i=0;i<cubeButtons_U.length;i++){
        if(i == 4){kociembaString+="U";}
        else{
        let bgColor = String(window.getComputedStyle(cubeButtons_U[i]).backgroundColor);
        setStringValues(bgColor);
        } 
    }
    for(var i=0;i<cubeButtons_R.length;i++){
        if(i == 4){kociembaString+="R";}
        else{
        let bgColor = String(window.getComputedStyle(cubeButtons_R[i]).backgroundColor);
        setStringValues(bgColor); 
        }
    }
     for(var i=0;i<cubeButtons_F.length;i++){
        if(i == 4){kociembaString+="F";}
        else{
        let bgColor = String(window.getComputedStyle(cubeButtons_F[i]).backgroundColor);
        setStringValues(bgColor); 
        }
    }
     for(var i=0;i<cubeButtons_D.length;i++){
        if(i == 4){kociembaString+="D";}
        else{
        let bgColor = String(window.getComputedStyle(cubeButtons_D[i]).backgroundColor);
        setStringValues(bgColor); 
        }
    }
     for(var i=0;i<cubeButtons_L.length;i++){
        if(i == 4){kociembaString+="L";}
        else{
        let bgColor = String(window.getComputedStyle(cubeButtons_L[i]).backgroundColor);
        setStringValues(bgColor); 
        }
    }
     for(var i=0;i<cubeButtons_B.length;i++){
        if(i == 4){kociembaString+="B";}
        else{
        let bgColor = String(window.getComputedStyle(cubeButtons_B[i]).backgroundColor);
        setStringValues(bgColor); 
        }
    }



    alert(kociembaString);
    console.log(kociembaString);
    generatedString = true;

    
    
}

// Send string to server -- Checked
function sendString(){
    $(function(){
    data = {"key": kociembaString}
    $.ajax({
        type: "POST",
        url:"http://192.168.1.140:3000/Rubiks" ,
        data: data,
        success: function(data){
            console.log("Successfull" + data);
        },
        dataType: "JSON"
      });
    });
}




// Calling the main() function
main();











