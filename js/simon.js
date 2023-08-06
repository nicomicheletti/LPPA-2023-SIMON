'use strict';

var sequence = [];
var colors = ['red', 'yellow', 'blue', 'green'];
var playerName = '';

var highlightColor = function(color){
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
};

var handleStartBtn = function() {
    newGameModal.classList.add('showModal');
    console.log("click btn");
};

var handleRankingBtn = function() {
    console.log("ranking btn")
};

var handlePlayBtn = function() {
    console.log('newells')
    playerName = playerNameForm.value;
    playerNameForm.value = '';
    newGameModal.classList.remove('showModal');
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