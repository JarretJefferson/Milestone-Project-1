let character = document.getElementById('character')
character.style.bottom = '515px'
let move;

window.addEventListener('keydown',(e)=> {
    if (e.key === 'w') {
        move = setInterval(() => {
            let rect = character.getBoundingClientRect();
            console.log(window.getComputedStyle(character).getPropertyValue('bottom'))
            let currentBottom = rect.bottom;
            let newBottom = currentBottom + 10;
            character.style.bottom = newBottom + "px";
        }, 10); // adjust this value to control the speed of movement
    }
    if(e.key === 'a') {
        console.log("foward")
    }
    if(e.key === 's') {
        console.log("foward")
    }
    if(e.key === 'd') {
        console.log("foward")
       }
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === 'w') {
            clearInterval(move);
        }
    });