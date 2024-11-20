const game=()=>{
    let PlayerScore=0;
    let CompScore=0;
    moves=0;

    const MovesLeft=document.querySelector('.movesleft h3')
    const ResultDisplay=document.querySelector('.result');
    const TotalPlayerScore=document.querySelector('th:nth-child(1)')
    const TotalCompScore=document.querySelector('th:nth-child(2)')
    const resetButton=document.querySelector('#reset')
    const PlayerChoice=document.querySelectorAll('.choice')

    PlayerChoice.forEach(option =>{
        option.addEventListener('click',()=>{
            if(moves<3){
                moves++;
                MovesLeft.innerText=`Moves Left:${3-moves}`
                const playerChoice=option.classList[1]
                const computerChoice=getComputerChoice();
                const winner=DetermineWinner(playerChoice,computerChoice)
                ResultDisplay.textContent=`You choose ${playerChoice}  Computer choose ${computerChoice} ${winner}`
                UpdateScore();
                if(moves===3){
                    gameOver();
                }
            }
        });
    });
    
    const getComputerChoice=()=>{
        const choices=['rock','paper','scissors']
        return choices[Math.floor(Math.random() * 3)];
    };

    const DetermineWinner=(Player,Computer)=>{
        if(Player===Computer){
            return 'It\'s a Tie!';
        }
        if (
            (Player === 'rock' && Computer === 'scissors') ||
            (Player === 'paper' && Computer === 'rock') ||
            (Player === 'scissors' && Computer === 'paper')
        ) {
            PlayerScore++;
            return 'You Won!';
        } else {
            CompScore++;
            return 'Computer Won!';
        }
    };

    const UpdateScore=(winner)=>{
        TotalPlayerScore.innerHTML=`Player:${PlayerScore}`
        TotalCompScore.innerHTML=`Computer:${CompScore}`
    }

    const gameOver=()=>{
        const chooseMove=document.querySelector('.move')
        MovesLeft.computedStyleMap.display="none"

        if(PlayerScore>CompScore){
            ResultDisplay.textContent="You Won The Game!!"
        }
        else if(CompScore>PlayerScore){
            ResultDisplay.textContent="Computer Won The Game!!"
        }
        else{
            ResultDisplay.textContent = 'It\'s a Tie!';
        }
        resetButton.style.display='block'
        resetButton.addEventListener('click',()=>{
            window.location.reload()
        });
    };
};

game()