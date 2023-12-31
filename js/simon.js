'use strict';

var sequence = [];
var colors = ['red', 'yellow', 'blue', 'green'];
var sequencePlayer = [];
var playerName = '';
var level = 0;
var initialValidation = 0;
var score = 0;
var totalScore = 0;
var players = [];
var playersJSON;
var orderBy = 'score';
var sortOrder = 'desc';
var timer = 0;
var penalizationInterval;
var elapsedTime = 0;

var initButtons = function(){
    playBtn.disabled = true;
    redBtn.disabled = true;
    yellowBtn.disabled = true;
    blueBtn.disabled = true;
    greenBtn.disabled = true;
};

var increaseLevel = function() {
    level++;
    levelSpan.innerHTML = level;
    initialValidation = 0;
    sequencePlayer = [];
};

var showSequence = function() {
    increaseLevel();
    sequence.forEach(function(color,i){
        setTimeout(function(){
            switch(color) {
                case 'red':
                    redBtn.classList.toggle('highlight');
                    setTimeout(function(){ redBtn.classList.toggle('highlight'); }, 700);
                    break;
                case 'yellow':
                    yellowBtn.classList.toggle('highlight');
                    setTimeout(function(){ yellowBtn.classList.toggle('highlight'); }, 700);
                    break;
                case 'blue':
                    blueBtn.classList.toggle('highlight');
                    setTimeout(function(){ blueBtn.classList.toggle('highlight'); }, 700);
                    break;
                case 'green':
                    greenBtn.classList.toggle('highlight');
                    setTimeout(function(){ greenBtn.classList.toggle('highlight'); }, 700);
                    break;
            }
        }, i*1000)
});
    setTimeout(playerPlay,sequence.length*1000);
};

var updateTime = function() {
    elapsedTime++;
    document.getElementById('time').innerHTML = elapsedTime;
};

var penalize = function() {
    score -= 5;
    if (score < 0) {
        score = 0;
    }
    scoreSpan.innerHTML = score;
};

var startSimon = function(){
    startBtn.disabled = true;
    rankingBtn.disabled = true;
    var colorPos = Math.floor(Math.random()*4);
    var newColor = colors[colorPos];
    sequence.push(newColor);
    getResults();
    setTimeout(showSequence, 1000);
    timer = setInterval(updateTime, 1000);
    penalizationInterval = setInterval(penalize, 20000);
};

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
};

var playerGo = function() {
    redBtn.disabled = false;
    yellowBtn.disabled = false;
    blueBtn.disabled = false;
    greenBtn.disabled = false;
};

var validateSelection = function() {
    if(sequence[initialValidation] == sequencePlayer[initialValidation]){
        initialValidation++;
        score = score + 5;
        scoreSpan.innerHTML = score;
        playerPlay();
    } else {
        gameOver();
    }
};

var simonPlay = function() {
    redBtn.disabled = true;
    yellowBtn.disabled = true;
    blueBtn.disabled = true;
    greenBtn.disabled = true;
};

var gameOver = function() {
    simonPlay();
    totalScore = score;
    if (totalScore < 0){
        totalScore = 0;
    }
    saveResult(playerName, totalScore, level);
    restartSimon();
    clearInterval(timer);
    clearInterval(penalizationInterval);
    gameOverModal.classList.add('showModal');
};

var saveResult = function(playerName, totalScore, level) {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var day = currentDate.toLocaleDateString();
    var playerResult = {
        name: playerName,
        score: totalScore,
        level: level,
        date: day,
        hour: hours + ':' + minutes
    };
    players.push(playerResult);
    playersJSON = JSON.stringify(players);
    localStorage.setItem('playersData', playersJSON);
};

var getResults = function() {
    if (localStorage.getItem('playersData') != null){
        playersJSON = localStorage.getItem('playersData');
        players = JSON.parse(playersJSON);
    }
    if (orderBy === 'score') {
        players.sort(function(a, b) {
            return sortOrder === 'asc' ? a.score - b.score : b.score - a.score;
        });
    }
    if (orderBy === 'date') {
        players.sort(function(a, b) {
            var dateA = a.date + ' ' + a.hour;
            var dateB = b.date + ' ' + b.hour;
            if (dateA > dateB){
                return sortOrder === 'asc' ? -1 : 1;
            } else if (dateA < dateB) {
                return sortOrder === 'asc' ? 1 : -1;
            } else {
                return 0;
            }
        });
    }
};

var addResult = function(player) {
    var row = document.createElement('tr');
    var nameResult = document.createElement('td');
    var scoreResult = document.createElement('td');
    var levelResult = document.createElement('td');
    var dateResult = document.createElement('td');
    var hourResult = document.createElement('td');
    nameResult.textContent = player.name;
    scoreResult.textContent = player.score;
    levelResult.textContent = player.level;
    dateResult.textContent = player.date;
    hourResult.textContent = player.hour;
    row.appendChild(nameResult);
    row.appendChild(scoreResult);
    row.appendChild(levelResult);
    row.appendChild(dateResult);
    row.appendChild(hourResult);
    rankingTable.appendChild(row);
};

var restartSimon = function(){
    sequence = [];
    sequencePlayer = [];
    level = 0;
    score = 0;
    redBtn.classList.remove('highlight');
    yellowBtn.classList.remove('highlight');
    blueBtn.classList.remove('highlight');
    greenBtn.classList.remove('highlight');
    levelSpan.innerHTML = level;
    scoreSpan.innerHTML = score;
};

var handleStartBtn = function() {
    newGameModal.classList.add('showModal');
};

var handleRankingBtn = function() {
    rankingTable.innerHTML = '';
    getResults();
    players.forEach(addResult);
    rankingModal.classList.add('showModal');
};

var handlePlayBtn = function() {
    playerName = playerNameForm.value;
    playerNameForm.value = '';
    newGameModal.classList.remove('showModal');
    clearInterval(penalizationInterval);
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
};

var handleRedBtn = function() {
    redBtn.classList.add('highlight');
    setTimeout(function(){
        redBtn.classList.remove('highlight')
    },150);
    sequencePlayer.push('red');
    validateSelection();
};

var handleYellowBtn = function() {
    yellowBtn.classList.add('highlight');
    setTimeout(function(){
        yellowBtn.classList.remove('highlight')
    },150);
    sequencePlayer.push('yellow');
    validateSelection();
};

var handleBlueBtn = function() {
    blueBtn.classList.add('highlight');
    setTimeout(function(){
        blueBtn.classList.remove('highlight')
    },150);
    sequencePlayer.push('blue');
    validateSelection();
};

var handleGreenBtn = function() {
    greenBtn.classList.add('highlight');
    setTimeout(function(){
        greenBtn.classList.remove('highlight')
    },150);
    sequencePlayer.push('green');
    validateSelection();
};

var handleRestartBtn = function() {
    gameOverModal.classList.remove('showModal');
    startSimon();
};

var updateRanking = function() {
    rankingTable.innerHTML = '';
    getResults();
    players.forEach(addResult);
};

var orderByScore = function() {
    orderBy = 'score';
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    updateRanking();
};

var orderByDate = function() {
    orderBy = 'date';
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    updateRanking();
};