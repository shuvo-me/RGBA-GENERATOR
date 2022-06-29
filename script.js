let color = document.getElementById("color");

color.parentElement.style.cursor="pointer"

function generateColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;

}

function copyColor(){
    navigator.clipboard.writeText(color.innerHTML).then(()=> alert('Copied!'));
    // alert("copied! ", color.innerHTML)
}

setInterval(generateColor,2000)
