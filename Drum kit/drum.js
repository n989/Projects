let button=document.querySelectorAll(".drum");
// var i;

function sound(word)
{
    switch (word) {
        case "w":
            let tom1=new Audio('/img/tom-1.mp3');
            tom1.play();
        
        case "a":
            let tom2 =new Audio('/img/tom-2.mp3');
            tom2.play();
        break;
        case "s":
            let tom3 =new Audio('/img/tom-3.mp3');
            tom3.play();
        break;
        
        case "d":
            let tom4=new Audio('/img/tom-4.mp3');
            tom4.play();
        break;
        
        case "j":
            let snare=new Audio('/img/snare.mp3');
            snare.play();
        break;
        
        case "k":
            let crash=new Audio('/img/crash.mp3');
            crash.play();
        break;
        case "l":
            let kick=new Audio('/img/kick-bass.mp3');
            kick.play();
        break;
    
        default:
            console.log(word);
        break;
    }
}

function anima(word){
    let ab=document.querySelector("."+word);

    ab.classList.add("pressed");


    setTimeout(function(){
        ab.classList.remove("pressed")},100);
    // ab.classList.add("pressed");
}
for(i=0;i<button.length;i++)
{
    button[i].addEventListener("click",function (){
        // this.style.color="blue";
        let word=this.innerHTML;

        sound(word);
        anima(word);
        // console.log(this.innerHTML);
    });
}



document.addEventListener("keypress",function(event){
   
    sound(event.key);
    anima(event.key);
})
// let sound=new Audio('/img/tom-1.mp3');
// sound.play();
