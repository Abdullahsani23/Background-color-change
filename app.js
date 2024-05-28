
// function randomColor(){
// var showColor = document.getElementById("bgChange")
// var red = Math.floor(Math.random()*256)
// var green = Math.floor(Math.random()*256)
// var blue = Math.floor(Math.random()*256)
// var color = `rgb(${red} , ${green} , ${blue})`
// console.log(color);
// // color = showColor
// document.body.style.backgroundColor = color
// showColor.innerText = color
// }
// setInterval(randomColor, 1000)



function colorChange(){
    var red = Math.floor(Math.random()*256)
    var green = Math.floor(Math.random()*256)
    var blue = Math.floor(Math.random()*256)
    var color = `rgb(${red} , ${green} , ${blue})`
    console.log(color);
    var showColor = document.getElementById("bgChange")
    showColor.innerText = color
    document.body.style.backgroundColor = color
}
setInterval(colorChange, 1000)


