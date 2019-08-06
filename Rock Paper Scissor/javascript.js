$(document).ready(function(){
    var cScore= 0;
    var uScore= 0;
    const userChoice= document.getElementById("uChoice");
    const compChoice= document.getElementById("cChoice");
    const userScoreDiv= document.getElementById("userScore");
    const computerScoreDiv= document.getElementById("computerScore");
    const resultMessageDiv= document.getElementById("result");
    //Rock Function
    $("#r").click(function(){
        //Generate random number in [1, 2, 3]
        var computerChoice= Math.floor((Math.random() * 3) + 1);
        //1: Rock
        //2: Paper
        //3: Scissor
        console.log(computerChoice);
        //User: Rock | Computer: Rock
        if(computerChoice==1)
        {
            userChoice.innerHTML="Rock";
            compChoice.innerHTML="Rock";
            resultMessageDiv.innerHTML="Draw";
        }
        //User: Rock | Computer: Paper
        else if(computerChoice==2)
        {
            cScore++;
            computerScoreDiv.innerHTML= cScore;
            userChoice.innerHTML="Rock";
            compChoice.innerHTML="Paper";
            resultMessageDiv.innerHTML="Computer Wins";
            
        }
        //User: Rock | Computer: Scissor
        else if(computerChoice==3)
        {
            uScore++;
            userScoreDiv.innerHTML= uScore;
            userChoice.innerHTML="Rock";
            compChoice.innerHTML="Scissor";
            resultMessageDiv.innerHTML="You Win";
            
        }

        //Change css of image
        $(this).addClass("togborder");
        setTimeout(function(){
            $("#r").removeClass("togborder");
        }, 100);
    });

    //Paper Function
    $("#p").click(function(){
        var computerChoice= Math.floor((Math.random() * 3) + 1);
        console.log(computerChoice);
        //User: Paper | Computer: Rock
        if(computerChoice==1)
        {
            uScore++;
            userScoreDiv.innerHTML= uScore;
            userChoice.innerHTML="Paper";
            compChoice.innerHTML="Rock";
            resultMessageDiv.innerHTML="You Win";   
        }
        //User: Paper | Computer: Paper
        else if(computerChoice==2)
        {
            userChoice.innerHTML="Paper";
            compChoice.innerHTML="Paper";
            resultMessageDiv.innerHTML="Draw";
        }
        //User: Paper | Computer: Scissior
        else if(computerChoice==3)
        {
            cScore++;
            computerScoreDiv.innerHTML= cScore;
            userChoice.innerHTML="Paper";
            compChoice.innerHTML="Scissor";
            resultMessageDiv.innerHTML="Computer Wins";   
        }
        //Change css of image
        $(this).addClass("togborder");
        setTimeout(function(){
            $("#p").removeClass("togborder");
        }, 100);
    });

    //Scissor Function
    $("#s").click(function(){
        var computerChoice= Math.floor((Math.random() * 3) + 1);
        console.log(computerChoice);
        //User: Scissior | Computer: Rock
        if(computerChoice==1)
        {
            cScore++;
            computerScoreDiv.innerHTML= cScore;
            userChoice.innerHTML="Scissor";
            compChoice.innerHTML="Rock";
            resultMessageDiv.innerHTML="Computer Wins";
        }
        //User: Scissior | Computer: Paper
        else if(computerChoice==2)
        {
            uScore++;
            userScoreDiv.innerHTML= uScore;
            userChoice.innerHTML="Scissor";
            compChoice.innerHTML="Paper";
            resultMessageDiv.innerHTML="You Win";
        }
        //User: Scissior | Computer: Scissior
        else if(computerChoice==3)
        {
            userChoice.innerHTML="Scissor";
            compChoice.innerHTML="Scissor";
            resultMessageDiv.innerHTML="Draw";
        }
        //Change css of image
        $(this).addClass("togborder");
        setTimeout(function(){
            $("#s").removeClass("togborder");
        }, 100);
        
    });
});