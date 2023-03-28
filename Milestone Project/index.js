let character = document.getElementById('character')

 function move(){
        let direction = null;
        let characterPos = character.getBoundingClientRect()
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
    }
    main()
