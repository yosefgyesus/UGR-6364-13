let myForm = document.forms.myForm
let message1 = document.getElementById("message1")
let message2 = document.getElementById("message2")
let message3 = document.getElementById("message3")
myForm.onsubmit = function(){
    if (myForm.fname.value == ""){
        message1.innerHTML = "Please enter your first name."
    }
    else{
        message1.innerHTML = ""
    }

    if (myForm.lname.value == ""){
        message2.innerHTML = "Please enter your last name."
    }
    else{
        message2.innerHTML = ""
    }

    if (myForm.email.value == ""){
        message3.innerHTML = "Please enter your email."
    }
    else{
        message3.innerHTML = ""
    }
}
login.onsubmit = function(){
    if(login.email.value == ""){
        message4.innerHTML = "Invalid email."
    }
    if(login.password.value == ""){
        message5.innerHTML = "Invalid password."
    }
}

myForm.fname.onfocus = function(){
    myForm.fname.style.border =  "4px solid pink";
}

myForm.fname.onblur = function(){
    myForm.fname.style.border =  "1px solid black";
}

myForm.lname.onfocus = function(){
    myForm.lname.style.border =  "4px solid pink";
}

myForm.lname.onblur = function(){
    myForm.lname.style.border =  "1px solid black";
}

myForm.email.onfocus = function(){
    myForm.email.style.border =  "4px solid pink";
}

myForm.email.onblur = function(){
    myForm.email.style.border = "1px solid black";
}

