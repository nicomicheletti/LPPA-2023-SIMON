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

var scoreSpan;
var levelSpan;

var gameOverModal;
var restartBtn;

var rankingModal;
var rankingTable;

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

    scoreSpan = document.getElementById('score');
    levelSpan = document.getElementById('level');

    gameOverModal = document.getElementById('gameOver');
    restartBtn = document.getElementById('restartBtn');

    rankingModal = document.getElementById('ranking');
    rankingTable = document.getElementById('rankingResults');

    startBtn.addEventListener('click', handleStartBtn);
    rankingBtn.addEventListener('click', handleRankingBtn);

    redBtn.addEventListener('click', handleRedBtn);
    yellowBtn.addEventListener('click', handleYellowBtn);
    blueBtn.addEventListener('click', handleBlueBtn);
    greenBtn.addEventListener('click', handleGreenBtn);

    playerNameForm.addEventListener('keyup', validateName);
    playBtn.addEventListener('click', handlePlayBtn);

    restartBtn.addEventListener('click', handleRestartBtn);

    initButtons();
};