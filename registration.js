function validation (){
    if(document. formfill.username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if (document.fill.username.value.length<6){
        document.getElementaryById("result").innerHTML="atleast six letter*";
        return false
    }
    else if (document.formfill.email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.formfill.password.value==""){
        document.getElementById("result").innerHTML="enter your password";
        return false;
    }
    else if (document.formfill.cpassword.value.length<6){
        document.getElementById("result").innerHTML="password must be 6-digits";
        return false;
    }
    else if (document.formfill.password.value!==document.formfill.cpassword.value){
        document.getElementById("result").innerHTML="Enter confirm password";
        return false
    }
    else if (document.formfill.cpassword.value !==document.formfill.password. value){
        document.getElementById("result").innerHTML="password does'nt matched"; 
        return false;
    }
    else if (document.formfill.cpassword.value ==document.formfill.Cpassword. value){
        popup.classList.add("open-slide")
        return false; 
    }
}