'use strict';

var startBtn;
var rankingBtn;

var init = function() {
    startBtn = document.getElementById('startBtn');
    rankingBtn = document.getElementById('rankingBtn');

    startBtn.addEventListener('click', handleStartBtn);
    console.log('newells');
};