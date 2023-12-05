let rgb = 255;
let darkenBackgroundColor = setInterval(()=> {
    if(rgb>0){
        rgb -= 2;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
    } 
    clearInterval(colorChangeInterval);
}, 50);
