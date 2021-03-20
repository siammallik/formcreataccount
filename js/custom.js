var fname = document.getElementById('firstname');
var firstname_err = document.getElementById('err');

var lname = document.getElementById('lastname');
var lastname_err = document.getElementById('lst_err');

var email = document.getElementById('email');
var email_err = document.getElementById('eml_err');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


var pass = document.getElementById('password');
var pass_err = document.getElementById('pass_err');
var upper = /[A-Z]/;
var lower = /[a-z]/;
var number = /[0-9]/;
var spsl = /[#,$,%,£,&]/;
var minchar = pass.value.length < 8;

var conpass = document.getElementById('con-password');
var conpass_err = document.getElementById('conpass_err');

function sub(){
    if(fname.value == ''){
        firstname_err.innerHTML = 'Your first name was empty';
        fname.style.border = '2px solid red';
        fname.focus();
        return false;
    }
    if(lname.value == ''){
        lastname_err.innerHTML = 'Your last name was empty';
        lname.style.border = '2px solid red';
        lname.focus();
        return false;
    }
    if(email.value == ''){
        email_err.innerHTML = 'Your email was empty';
        email.style.border = '2px solid red';
        email.focus();
        return false;
    }
    if(!regex.test(email.value)){
        email_err.innerHTML = 'Enter valid email ';
        email.style.border = '2px solid red';
        email.focus();
        return false;
    }
    if(pass.value == ''){
        pass_err.innerHTML = 'You have to enter password';
        pass.style.border = '2px solid red';
        pass.focus();
        return false;
    }
    else if(!lower.test(pass.value)   || !minchar){
        pass_err.innerHTML = 'You must use least 8 chracters ';
        pass.style.border = '2px solid red';
        pass.focus();
        return false;
    }
    else if (!upper.test(pass.value)){
        pass_err.innerHTML = 'You must use uppercase';
        pass.style.border = '2px solid red';
        pass.focus();
        return false;
    }
    else if (!number.test(pass.value)){
        pass_err.innerHTML = 'You must use number';
        pass.style.border = '2px solid red';
        pass.focus();
        return false;
    }
    else if (!spsl.test(pass.value)){
        pass_err.innerHTML = 'You must use special character';
        pass.style.border = '2px solid red';
        pass.focus();
        return false;
    }
    if(conpass.value == ''){
        conpass_err.innerHTML = 'Please re-enter your password';
        conpass.style.border = '2px solid red';
        conpass.focus();
        return false;
    }

    else if (conpass.value != pass.value){
        conpass_err.innerHTML = 'Password does not match';
        conpass.style.border = '2px solid red';
        conpass.focus();
        return false;
    }
}

function errvalid(){
    if(fname.value != ''){
        firstname_err.innerHTML = '';
        fname.style.border = '2px solid green';
       
    }
    if(lname.value != ''){
        lastname_err.innerHTML = '';
        lname.style.border = '2px solid green';
       
    }
    if(email.value != ''){
        email_err.innerHTML = '';
        email.style.border = '2px solid green';
    }
    if(pass.value != ''){
        pass_err.innerHTML = '';
        pass.style.border = '2px solid green';
    }
    
}
function passshow(){
    var x = document.getElementById('password');
    if(x.type === 'password'){
        x.type = 'text';
    }
    else {
        x.type = 'password';
    }
}
function passshow2(){
    var x = document.getElementById('con-password');
    if(x.type === 'password'){
        x.type = 'text';
    }
    else {
        x.type = 'password';
    }
}

fname.addEventListener('blur' , errvalid);
lname.addEventListener('blur' , errvalid);
email.addEventListener('blur' , errvalid);
pass.addEventListener('blur' , errvalid);