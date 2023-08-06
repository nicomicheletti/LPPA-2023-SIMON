'use strict';

var startBtn;
var rankingBtn;

var redBtn;
var yellowBtn;
var blueBtn;
var greenBtn;

var newGameModal;
var playerNameForm;
var playBtn;

var init = function() {
    startBtn = document.getElementById('startBtn');
    rankingBtn = document.getElementById('rankingBtn');

    redBtn = document.getElementById('redBtn');
    yellowBtn = document.getElementById('yellowBtn');
    blueBtn = document.getElementById('blueBtn');
    greenBtn = document.getElementById('greenBtn');

    newGameModal = document.getElementById('newGame');
    playerNameForm = document.getElementById('playerName');
    playBtn = document.getElementById('playBtn');

    startBtn.addEventListener('click', handleStartBtn);
    rankingBtn.addEventListener('click', handleRankingBtn);

    redBtn.addEventListener('click', handleRedBtn);
    yellowBtn.addEventListener('click', handleYellowBtn);
    blueBtn.addEventListener('click', handleBlueBtn);
    greenBtn.addEventListener('click', handleGreenBtn);

    playerNameForm.addEventListener('keyup', validateName);
    playBtn.addEventListener('click', handlePlayBtn);

};