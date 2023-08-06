window.onload = function(){

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('comments');
    var sendBtn = document.getElementById('sendMessage');
    var resetBtn = document.getElementById('resetMessage');
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    name.addEventListener('blur', function() {
        checkName();
    });
    name.addEventListener('blur', function() {
        reset(name);
    });

    email.addEventListener('blur', function() {
        checkEmail();
    });
    email.addEventListener('focus', function() {
        reset(email);
    });

    message.addEventListener('blur', function() {
        checkMessage();
    });
    message.addEventListener('focus', function() {
        reset(message);
    });
}