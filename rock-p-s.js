let computerChoice,myChoice,result,compMove,myMove;
            
            document.querySelector('.jsScores').innerHTML=`Wins : ${score.win}, Losses : ${score.loss}, Ties : ${score.tie}`;

            function computerGeneration()
            {
                let random = Math.random();
                if(random >=0 && random <= 1/3)
                {
                    computerChoice = 'rock';
                    compMove ='rock';
                }
                else if(random > 1/3 && random <= 2/3)
                {
                    computerChoice = 'paper';
                    compMove = 'paper'
                }
                else if(random > 2/3 && random <= 1)
                {
                    computerChoice = 'scissor';
                    compMove = 'scissors';
                }

            }

            function calculate(myChoice,myMove)
            {
                let score = JSON.parse(localStorage.getItem('score')) || {
                win:0,loss:0,tie:0
            };
                computerGeneration();
                if(myChoice === computerChoice)
                {
                    result = 'Tie';
                    score.tie++;
                }
                else
                {
                    if(myChoice === 'rock' && computerChoice === 'scissor' || myChoice === 'paper' && computerChoice === 'rock' 
                    || myChoice === 'scissor' && computerChoice === 'paper')
                    {
                        result = 'Won';
                        score.win++;
                    }
                    else{
                        result = 'Lost';
                        score.loss++;
                    }
                }
                document.querySelector('.jsResult').innerHTML=result;
                console.log(computerChoice,myChoice);
                document.querySelector('.jsMoves').innerHTML=`My Choice <img class="jsMov${myMove}" src="Images/${myMove}-emoji.png"> Computer Choice : <img class=jsMov${compMove} src="Images/${compMove}-emoji.png">`;
                localStorage.setItem('score',JSON.stringify(score));
                document.querySelector('.jsScores').innerHTML=`Wins : ${score.win}, Losses : ${score.loss}, Ties : ${score.tie}`;
                
            }
            function resetScores()
            {
                localStorage.removeItem('score');
                document.querySelector('.jsResult').innerHTML='';
                document.querySelector('.jsMoves').innerHTML='';
                document.querySelector('.jsScores').innerHTML=`Wins : ${0}, Losses : ${0}, Ties : ${0}`;

            }