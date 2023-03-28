let character = document.getElementById('character')
let characterPos = character.getBoundingClientRect()

 function move(){
        let direction = null;
        let x = characterPos.left;
        let y = characterPos.top;

        character.style.left = x + 'px'
        character.style.top = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y-=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y+=1
            }
            character.style.left = x + 'px'
            character.style.top = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'a'){
                direction = 'west'
            }
            if(e.key === 'w'){
                direction = 'north'
            }
            if(e.key === 'd'){
                direction = 'east'
            }
            if(e.key === 's'){
                direction = 'south'
            }
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
        })
    }


    function main(){
        move()
        boxCollision()
    }
    main()


    function boxCollision(){
        setInterval(() => {
        let block3 = document.querySelector("#block3")
        let block3Pos = block3.getBoundingClientRect()
        let blockRight = block3Pos.right
        let blockLeft = block3Pos.left
        let blockTop = block3Pos.top
        let blockBottom = block3Pos.bottom
        let characterPos = character.getBoundingClientRect()
         if(characterPos.right > blockLeft ||
        characterPos.left < blockRight ||
        characterPos.bottom > blockTop ||
        characterPos.top < blockBottom) {
        console.log("im touhcing")
         }
            console.log(characterPos.left, blockRight)
        }, 10);
       
    } 


