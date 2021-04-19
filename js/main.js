var block = document.querySelectorAll(".block");
var colorBlock = document.querySelectorAll(".color-block");
var currentColor;


for (i=0; i!== colorBlock.length; i++){
    switch (colorBlock[i].id){
        case "black"    : colorBlock[i].style.backgroundColor="black";
        break;
        case "red"      : colorBlock[i].style.backgroundColor="red";
        break;
        case "blue"     : colorBlock[i].style.backgroundColor="blue";
        break;
        case "green"    : colorBlock[i].style.backgroundColor="green";
        break;
        case "yellow"   : colorBlock[i].style.backgroundColor="yellow";
        break;
        case "pink"     : colorBlock[i].style.backgroundColor="pink";
        break;
        case "purple"   : colorBlock[i].style.backgroundColor="purple";
        break;
        case "orange"   : colorBlock[i].style.backgroundColor="orange";
        break;
        case "darkblue" : colorBlock[i].style.backgroundColor="darkblue";
        break;
    }
}

function pickColor(event){
    currentColor = event.path[0].style.backgroundColor;
    console.log(currentColor);
    document.querySelector(".currentColor").textContent = `${currentColor}`
}


colorBlock.forEach(function(item) {
    item.addEventListener('click', pickColor);
});


function changeColor(event){
    event.path[0].style.backgroundColor = currentColor;
    console.log(currentColor);
}


block.forEach(function(item) {
    item.addEventListener('click', changeColor);
});

function reset(){
    block.forEach(function(item) {
        item.style.backgroundColor = "black";
    });
}

document.querySelector("#reset").addEventListener('click', reset);


