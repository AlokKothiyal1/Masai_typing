window.addEventListener("load",function(){
   
    setInterval(color_change,1000)

})

function color_change()
{
    var speed=document.getElementById('speedometer')
    var racer=document.getElementById('racer')
    speed.style.backgroundColor=create_color(255)
    racer.style.backgroundColor=create_color(255)
}

function random(num)
{
    return Math.floor(Math.random()*num)
}

function create_color(num)
{
    return `rgba(${random(255)},${random(255)},${random(255)},${random(255)})`
}