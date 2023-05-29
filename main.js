let container = document.querySelector('.container')
let result = document.querySelector('.display-bottom')
let nbuttons = document.querySelectorAll('.nbutton')
let sbuttons = document.querySelectorAll('.sbutton')
let upperresult = document.querySelector('.display-top')
let fbuttons = document.querySelectorAll('.fbutton')
let Acbutton = document.querySelector('.allClear')
let CeButton = document.querySelector('.clearEntry')
let decimal = document.querySelectorAll('.decimal')
let equal = document.querySelector('.equal')
//Functions 
function add(){
            let a = parseFloat(upperresult.dataset.value)
            let b = parseFloat(result.dataset.value)
           let add =  a + b;
           result.innerHTML = '';
           result.innerHTML += add;
           result.dataset.value = "0";
           upperresult.innerHTML = '';
           upperresult.innerHTML += add + " " + "+"
           upperresult.dataset.value = '';
           upperresult.dataset.value += add;
           sClicked =  false;
           nclicked = true;
           fclicked = true;
           patternMode = true;
           pSclicked = false;
           pNclicked = false;
           decimalClicked = false;

}
function subtract(){
    let a = parseFloat(upperresult.dataset.value)
    let b = parseFloat(result.dataset.value)
   let subtract =  a - b;
   result.innerHTML = '';
   result.innerHTML += subtract;
   result.dataset.value = "0";
   upperresult.innerHTML = '';
   upperresult.innerHTML += subtract + " " + "-"
   upperresult.dataset.value = '';
   upperresult.dataset.value += subtract;
           sClicked =  false;
           nclicked = true;
           fclicked = true;
           patternMode = true;
           pSclicked = false;
           pNclicked = false;
           decimalClicked = false;

}
function divide(){
            let a = parseFloat(upperresult.dataset.value)
            let b = parseFloat(result.dataset.value)
            if(b == 0){
                alert("You Can't Divide With 0")
                result.innerHTML = '';
                result.dataset.value = '';
                upperresult.innerHTML = '';
                upperresult.dataset.value = '';
                patternMode = false;
                nclicked = false;
                sClicked = false;
                fclicked = false;
                decimalClicked = false;

            } else{
           let divide =  a / b;
           result.innerHTML = '';
           result.innerHTML += divide;
           result.dataset.value = "1";
           upperresult.innerHTML = '';
           upperresult.innerHTML += divide + " " + "÷"
           upperresult.dataset.value = '';
           upperresult.dataset.value += divide;
           sClicked =  false;
           nclicked = true;
           fclicked = true;
           patternMode = true;
           pNclicked = false;
           pSclicked = false;
           decimalClicked = false;
            }

}
function multiply(){

            let a = parseFloat(upperresult.dataset.value)
            let b = parseFloat(result.dataset.value)    
           let multiply =  a * b;
           result.innerHTML = '';
           result.innerHTML += multiply;
           result.dataset.value = "1";
           upperresult.innerHTML = '';
           upperresult.innerHTML += multiply + " " + "×"
           upperresult.dataset.value = '';
           upperresult.dataset.value += multiply;
           sClicked =  false;
           nclicked = true;
           fclicked = true;
           patternMode = true;
           pSclicked = false;
           pNclicked = false;
           decimalClicked = false;
       
    
}
function Padd(){
    let a = parseFloat(upperresult.dataset.value)
    let b = parseFloat(result.dataset.value)
   let add =  a + b;
   if(isNaN(add)){
    return;
   } else {
   result.innerHTML = '';
   result.innerHTML += add;
   upperresult.innerHTML = '';
   upperresult.innerHTML += add + " " + "+"
   upperresult.dataset.value = '';
   upperresult.dataset.value += add;
   result.innerHTML = '';
   result.dataset.value = '';
   decimalClicked = false;
   }
}
function Psubtract(){
           let a = parseFloat(upperresult.dataset.value)
           let b = parseFloat(result.dataset.value)
           let subtract =  a - b;
           if(isNaN(subtract)){
            return;
           } else {
           result.innerHTML = '';
           result.innerHTML += subtract;
           upperresult.innerHTML = '';
           upperresult.innerHTML += subtract + " " + "-"
           upperresult.dataset.value = '';
           upperresult.dataset.value += subtract;
           result.innerHTML = '';
            result.dataset.value = '';
            decimalClicked = false;
}
}
function Pdivide(){
    let a = parseFloat(upperresult.dataset.value);
            let b = parseFloat(result.dataset.value);
            if(b == 0){
                alert("You Can't Divide With 0");
                result.innerHTML = '';
                result.dataset.value = '';
                upperresult.innerHTML = '';
                upperresult.dataset.value = '';
                patternMode = false;
                nclicked = false;
                sClicked = false;
                fclicked = false;
                decimalClicked = false;
            }else{
           let divide =  a / b;
           if(isNaN(divide)){
           return;
           } else {
            result.innerHTML = '';
           result.innerHTML += divide;
           upperresult.innerHTML = '';
           upperresult.innerHTML += divide + " " + "÷"
           upperresult.dataset.value = '';
           upperresult.dataset.value += divide;
           result.innerHTML = '';
            result.dataset.value = '';
            decimalClicked = false;
           }
}

}
function Pmultiply(){
    
    let a = parseFloat(upperresult.dataset.value)
    let b = parseFloat(result.dataset.value)
    let multiply =  a * b;
    if(isNaN(multiply)){
        return;
      }  else {
    result.innerHTML = '';
    result.innerHTML += multiply;
    upperresult.innerHTML = '';
    upperresult.innerHTML += multiply + " " + "×"
    upperresult.dataset.value = '';
    upperresult.dataset.value += multiply;
    console.log(multiply)
    result.innerHTML = '';
    result.dataset.value = '';
    decimalClicked = false;;
    }
}

createCalc()

let decimalClicked = false;
decimal.forEach( function(button){
    button.addEventListener('click', function(){
    if(decimalClicked == false){
    result.innerHTML += button.value;
    result.dataset.value += button.value;
    decimalClicked = true;
    } else {
        return;
    }
})
})

function createCalc(){
for(let i = 0; i < 20; i++){
container.style.gridTemplateColumns = "repeat(5, 1fr)"
container.style.gridTemplateRows = "repeat(4, 1fr)"

    }
}
let pNclicked = true;
let pSclicked = true;
let nclicked = false;
nbuttons.forEach(function(button) {
    button.addEventListener('click', function(){
        if(nclicked == false || Ceclicked == true){
        result.innerHTML +=  button.value;
        result.dataset.value += button.value;
        Ceclicked = false;

        }
        if(sClicked == true && nclicked == false){
            result.innerHTML = '';
            result.innerHTML += button.value;
            result.dataset.value = '';
            result.dataset.value += button.value;
            nclicked = true;
        } 
    })
})
let Ceclicked = false;
let patternMode = false;
let fclicked = false;
fbuttons.forEach(function(button){
    button.addEventListener('click', function(){
       if(sClicked == true && patternMode == false){
        if(button.value == "×"){
            multiply();
        } else if(button.value == "+"){
            add();
        } else if(button.value == "÷"){
            divide();
        }
          else if(button.value == "-"){
            subtract();
        }
    }
})
})

nbuttons.forEach(function(button){
    button.addEventListener('click', function(){
        if(pNclicked == false){
            result.innerHTML +=  button.value;
            result.dataset.value += button.value;
        }
    })
})
sbuttons.forEach(function(button){
    button.addEventListener('click', function(){
        if(patternMode == true){
            if(button.value == "×"){
                Pmultiply();
        } else if(button.value == "+"){
                Padd();
        } else if (button.value == "÷"){
                Pdivide(); 
        }
         else if (button.value == "-"){
                Psubtract();
         }    
    }
    })
})



let sClicked = false;
sbuttons.forEach(function(button){
    button.addEventListener('click', function(){
        if(result.dataset.value != "" && sClicked == false && patternMode == false){
        upperresult.innerHTML += result.dataset.value + " " + button.value;
        upperresult.dataset.value += result.dataset.value;
        sClicked = true;
        decimalClicked = false;
        }
    })
})

CeButton.addEventListener('click', function(){
    if(result.dataset.value == ""){
        alert("Can't Delete Without Any Input!")
    } else {
    result.innerHTML = '';
    result.dataset.value = '';
    upperresult.innerHTML = '';
    upperresult.dataset.value = '';
    patternMode = false;
    nclicked = false;
    sClicked = false;
    fclicked = false;
    Ceclicked = true;
    pNclicked = true;
    pSclicked = true;
    decimalClicked = false;
    }
})

equal.addEventListener('click', function(){
    if(sClicked == true && patternMode == false){
        if(upperresult.innerHTML.includes("×")){
            multiply();
            result.dataset.value = "";
            result.innerHTML = "";
        } else if(upperresult.innerHTML.includes('+')){
            add();
            result.dataset.value = "";
            result.innerHTML = "";
        } else if(upperresult.innerHTML.includes("÷")){
            divide();
            result.dataset.value = "";
            result.innerHTML = "";
        }
          else if(upperresult.innerHTML.includes("-")){
            subtract();
            result.dataset.value = "";
            result.innerHTML = "";
        }
    }
})