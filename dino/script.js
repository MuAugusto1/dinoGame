const dino = document.querySelector('.dino');
const background  = document.querySelector('.background');
let jumping = false;
let position = 0;

function handleKeydown(event) {
    if(event.keyCode === 32){
        if(!jumping)
            jump();
    }
}

function jump(){

    jumping = true;

    let upInterval = setInterval(()=>{   
        if(position >= 130){
            clearInterval(upInterval);
            
            let downInterval = setInterval(()=>{ 
                if(position <= 0){
                  clearInterval(downInterval);
                  jumping = false;
                }
                else{
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 22);
        }
        else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 22);
}

function cactus(){
    const cac = document.createElement('div');
    let positionCactus = 1000;
    let randomTime = Math.random() * 6000;

    cac.classList.add("cactus");
    cac.style.left = 1000 + 'px';
    background.appendChild(cac);

    let leftInterval = setInterval(()=>{      
        if(positionCactus < -60){
            clearInterval(leftInterval);
            background.removeChild(cac);
        }else if(positionCactus>0 && positionCactus < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="gameOver">Game Over!</h1>';
        }else{
            positionCactus -= 10;
        cac.style.left = positionCactus+'px';
        }
    },22);

    setTimeout(cactus, randomTime);
}

cactus();
document.addEventListener('keydown', handleKeydown);
            
