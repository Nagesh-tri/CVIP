var intrvl =null;
console.log(intrvl);

function init() {
    addBgrnd();
}
function addBgrnd() {
    var apiUrl = 'https://source.unsplash.com/random';
    fetch(apiUrl)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Error fetching random image');
        }
      return response.url;
    })
    .then(function(imageUrl) {
      body.style.backgroundImage = `url(${imageUrl})`;
    })
    .catch(function(error) {
        console.error(error);
    });
    
}
// Change background every 5 seconds (for demonstration purposes)
// setInterval(addBgrnd, 1000);
//additional functinalities
var pbtn =document.getElementById('pause');
function pauseBg() {
    if (pbtn.innerHTML==="Pause") {
        clearInterval(intrvl);
        pbtn.innerHTML="Resume"
        document.getElementById('change').disabled =false;
        console.log(intrvl);
    }
    else{
        intrvl=setInterval(addBgrnd, 1000);
        pbtn.innerHTML="Pause";
        document.getElementById('change').disabled =true;
    }
}
document.getElementById('change').disabled =true;
document.getElementById('change').addEventListener('click',()=>{
    addBgrnd()
})
document.getElementById('remove').addEventListener('click',()=>{
    clearInterval(intrvl);
    body.style.removeProperty('background-image');
    pbtn.innerHTML="Resume"
    document.getElementById('change').disabled =false;


})
//call above fxn when cliced 
pbtn.addEventListener('click', pauseBg);
//
intrvl=setInterval(addBgrnd, 1000);
//on loading booting fxn
window.addEventListener('load',function(){
    init(); 
})