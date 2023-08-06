'use strict';

var sequence = [];
var colors = ['red', 'yellow', 'blue', 'green'];
var sequencePlayer = [];
var playerName = '';
var level = 0;
var initialValidation = 0;
var score = 0;
var totalScore = 0;

var initButtons = function(){
    playBtn.disabled = true;
    redBtn.disabled = true;
    yellowBtn.disabled = true;
    blueBtn.disabled = true;
    greenBtn.disabled = true;
}

var startSimon = function(){
    startBtn.disabled = true;
    rankingBtn.disabled = true;
    var colorPos = Math.floor(Math.random()*4);
    var newColor = colors[colorPos];
    sequence.push(newColor);
    setTimeout(showSequence, 2000);
}

var showSequence = function() {
    increaseLevel();
    sequence.forEach(function(color,i){
        setTimeout(function(){
            switch(color) {
                case 'red':
                    redBtn.classList.toggle('highlight');
                    setTimeout(function(){ redBtn.classList.toggle('highlight'); }, 1000);
                    break;
                case 'yellow':
                    yellowBtn.classList.toggle('highlight');
                    setTimeout(function(){ yellowBtn.classList.toggle('highlight'); }, 1000);
                    break;
                case 'blue':
                    blueBtn.classList.toggle('highlight');
                    setTimeout(function(){ blueBtn.classList.toggle('highlight'); }, 1000);
                    break;
                case 'green':
                    greenBtn.classList.toggle('highlight');
                    setTimeout(function(){ greenBtn.classList.toggle('highlight'); }, 1000);
                    break;
            }
        }, i*2000)
});
    setTimeout(playerPlay,sequence.length*1750);
}

var playerPlay = function(){
    if(sequence.length > sequencePlayer.length){
        playerGo();
    } else {
        simonPlay();
        setTimeout(function(){
            score = score + (level*10);
            scoreSpan.innerHTML = score;
        },300)
        startSimon();
    }
}

var playerGo = function() {
    redBtn.disabled = false;
    yellowBtn.disabled = false;
    blueBtn.disabled = false;
    greenBtn.disabled = false;
}

var increaseLevel = function() {
    level++;
    levelSpan.innerHTML = level;
    initialValidation = 0;
    sequencePlayer = [];
}

var handleStartBtn = function() {
    newGameModal.classList.add('showModal');
    console.log("click btn");
};

var handleRankingBtn = function() {
    console.log("ranking btn")
};

var handlePlayBtn = function() {
    playerName = playerNameForm.value;
    playerNameForm.value = '';
    newGameModal.classList.remove('showModal');
    startSimon();
};

var checkPlayerName = /^[\w\s]{3,20}$/;
var validateName = function() {
    var errorName = document.getElementById('errorNameMsg');
    if(checkPlayerName.test(playerNameForm.value)){
        errorName.classList.remove('showError');
        playBtn.disabled = false;
    }
    else {
        errorName.classList.add('showError');
        playBtn.disabled = true;
    }
}

var handleRedBtn = function() {
    console.log('click en handleRedBtn');
};

var handleYellowBtn = function() {
    console.log('click en handleYellowBtn');
};

var handleBlueBtn = function() {
    console.log('click en handleBlueBtn');
};

var handleGreenBtn = function() {
    console.log('click en handleGreenBtn');
};