'use strict'
window.onload = function(){

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('comments');
    var resetBtn = document.getElementById('resetMessage');
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    name.addEventListener('blur', function() {
        checkName();
    });
    name.addEventListener('focus', function() {
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

    function showError (input,textError) {
        var container = input.parentElement;
        var text = container.querySelector('p');
        text.textContent = textError;
        container.className = 'verification done';
    };

    function checkInput (input) {
        if (input.value === '') {
            showError(input,'Campos incompletos');
            return true;
        };
    };

    function symbolCheck (string) {
        var symbols = '!"#$%&/()=?¡¿|¨*][_:;,.-{}+¬°~^`@'+"'";
        var control = 0;
        for (var i=0; i < string.length; i++) {
            for(var x=0;x < symbols.length;x++) {
                if (string[i] == symbols[x]) {
                    control ++;
                };
            };
        };
        if (control == 0) {
            return false;
        } else {
            return true;
        };
    };

    function checkName (){
        if (checkInput(name)) {
            return 'Campo del nombre incompleto';
        } else if (name.value.length < 3) {
            showError(name,'Debe contener al menos 3 caracteres');
            return 'Nombre muy corto';
        } else if (symbolCheck(name.value)) {
            showError(name,'Ingresá un formato válido. No debe tener símbolos');
            return 'Formato inválido';
        } else {
            return '';
        }
    };

    function checkEmail () {
        if (checkInput(email)) {
            return 'Campo del correo incompleto';
        } else if (!emailFormat.test(email.value)){
            showError(email,'Por favor, ingresá un mail válido');
            return 'Formato inválido';
        } else {
            return '';
        };
    };

    function checkMessage(){
        if(checkInput(message)){
            return 'Campo de mensaje incompleto';
        } else if (message.value.length < 5){
            showError(message,'Debe contener al menos 5 caracteres');
            return 'El mensaje es muy breve';
        } else {
            return '';
        };
    };

    function reset (input) {
        var container = input.parentElement;
        container.className = 'verification';
    };

    resetBtn.addEventListener('click', function(e) {
        e.preventDefault();
        reset(name);
        name.value='';
        reset(email);
        email.value='';
        reset(message);
        message.value='';
    });
};