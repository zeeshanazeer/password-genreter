
    var smallAlpa="abcdefghijklmnopqrstuvwxyz";
    var capAlpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number="0123456789";
    var specChar="`~!@#$%^&*()_+=-/.,?><;'";

    var range=document.querySelector("#range");
    var display=document.querySelector("#display");
    var rangeNum=document.querySelector("#rangeNum");
    var smallAlpaletterChackBox=document.querySelector("#lover");
    var numberChackBox=document.querySelector("#num");
    var symbolChackBox=document.querySelector("#spical");
    var showPassword=document.querySelector(".show");
    var hidePassword=document.querySelector(".hide");
    display.value += "password";

    function show(){
        display.type="password";
        display.style.fontweight="bolder";
        showPassword.style.display="none";
        hidePassword.style.display="block";

    }

    showPassword.addEventListener("click",() => {

        display.type="password";
        display.style.fontweight="bolder";
        showPassword.style.display="none";
        hidePassword.style.display="block";
    });

    hidePassword.addEventListener("click",() => {

        display.type="password";
        display.style.fontweight="bolder";
        showPassword.style.display="block";
        hidePassword.style.display="none";
    });


    function passwordshow(){
        var result= "";
        var finalResult="";
        rangeNum.innerHTML=range.value
        result=capAlpha;
    

    if(
        smallAlpaletterChackBox.chacked &&
        numberChackBox.chacked &&
        symbolChackBox.chacked
    ){
        console.log("smallAlpha, number and specChar");
        result +=smallAlpha + number + specChar;
    }

    else if(
        smallAlpaletterChackBox.chacked &&
        numberChackBox.chacked &&
        !symbolChackBox.chacked
    ){
        console.log("smallAlpha, number");
        result +=smallAlpha + number;
    }

    else if(
        smallAlpaletterChackBox.chacked &&
        !numberChackBox.chacked &&
        symbolChackBox.chacked
    ){
        console.log("smallAlpha and spacChar");
        result +=smallAlpha + number;
    }

    else if(
        !smallAlpaletterChackBox.chacked &&
        numberChackBox.chacked &&
        symbolChackBox.chacked
    ){
        console.log("number and spacChar");
        result += number + spacChar;
    }


    else if(
        smallAlpaletterChackBox.chacked &&
        !numberChackBox.chacked &&
        !symbolChackBox.chacked
    ){
        console.log("smallAlpha");
        result +=smallAlpha + number;
    }

    else if(
        !smallAlpaletterChackBox.chacked &&
        numberChackBox.chacked &&
        !symbolChackBox.chacked
    ){
        console.log("number");
        result +=smallAlpha + number;
    }

    else if(
        !smallAlpaletterChackBox.chacked &&
        !numberChackBox.chacked &&
        symbolChackBox.chacked
    ){
        console.log("spacChar");
        result += number + spacChar;
    }
    for(var i=0; i<range.value; i++){
        finalResult += result(Math.ceil(Math.random()* result-1));
    }
    display.value=finalResult
}
