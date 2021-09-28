let hitHat= document.getElementById("hithat");
let crash= document.getElementById("crash");
let tom1= document.getElementById("tom1");
let tom2= document.getElementById("tom2");
let tom3= document.getElementById("tom3");
let tom4= document.getElementById("tom4");
let redoblante= document.getElementById("redoblante");
let bombo= document.getElementById("bombo");

let audios = [
    {id:"hithat", sonido: hitHat},
    {id:"crash", sonido: crash},
    {id:"tom1", sonido: tom1},
    {id:"tom2", sonido: tom2},
    {id:"tom3", sonido: tom3},
    {id:"tom4", sonido: tom4},
    {id:"redoblante", sonido: redoblante},
    {id:"bombo", sonido: bombo}
]

document.addEventListener("click", function(event){
    let drum = event.target.dataset.pad;
    if(drum){
        loadAudio(drum);
    }
})

function loadAudio(namePad){
    for(let i=0;i<audios.length;i++){
        let drumkit = audios[i]
        if(namePad==drumkit.id){
            let audio = drumkit.sonido;
            audio.currentTime=0;
            audio.play();
        }
    }
}