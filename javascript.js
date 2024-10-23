let num1 = 0
let num2 = 0
let operation = 0

let n1 = document.querySelector("#n1")
let n2 = document.querySelector("#n2")
let n3 = document.querySelector("#n3")
let n4 = document.querySelector("#n4")
let n5 = document.querySelector("#n5")
let n6 = document.querySelector("#n6")
let n7 = document.querySelector("#n7")
let n8 = document.querySelector("#n8")
let n9 = document.querySelector("#n9")

let suma = document.querySelector("#sum")
let less = document.querySelector("#less")
let mult = document.querySelector("#mul")
let divi = document.querySelector("#division")
console.log(suma)

let inputE = document.querySelector('#entrada')

let block = document.querySelector('#div')

function sum(num1,num2){
    let soma = 0
    return soma = num1+num2
}


function dif(num1,num2){
    let dife = 0
    return dife = num1-num2
}


function mul(num1,num2){
    let mult = 0
    return mult = num1*num2
}


function division(num1,num2){
    let div = 0
    return div = num1/num2
}


function operate(num1,operate,num2){
    if(operate == "+"){
        secondN = 0
        ope = ""
        return sum(num1,num2)
    }else{
        if(operate == "-"){
            secondN = 0
            ope = ""
            return dif(num1,num2)
        }else{
            if(operate == "*"){
            secondN = 0
            ope = ""
               return mul(num1,num2)
            }else{
                if(operate == "/"){
                    secondN = 0
                    ope = ""
                    return division(num1,num2)
                }
            }
        }
    }
}
let fistN = 0
let secondN = 0
let num = 0
let div = document.querySelector('div')

// fuctions onclick in numbers
function nu1(){
    num = 1
    n1.textContent = num
    block.textContent = num
    if(fistN == 0){
        return fistN = num
    }else{
        if(secondN == 0){
            return secondN = num
        }
    }
}

function nu2(){
    num = 2
    n2.textContent = num
    block.textContent = num
    if(fistN == 0){
        return fistN = num
    }else{
        if(secondN == 0){
            return secondN = num
        }
    }
}

function num3(){
    num = 3
    n3.textContent = num
    block.textContent = num
    if(fistN == 0){
        return fistN = num
    }else{
        if(secondN == 0){
            return secondN = num
        }
    }
}

function num4(){
    num = 4
    n4.textContent = num
    block.textContent = num
    if(fistN == 0){
        return fistN = num
    }else{
        if(secondN == 0){
            return secondN = num
        }
    }
}

function num5(){
    num = 5
    n5.textContent = num
    block.textContent = num
    if(fistN == 0){
        return fistN = num
    }else{
        if(secondN == 0){
            return secondN = num
        }
    }
}

function num6(){
    num = 6
    n6.textContent = num
    block.textContent = num
    if(fistN == 0){
        return fistN = num
    }else{
        if(secondN == 0){
            return secondN = num
        }
    }
}

function num7(){
    num = 7
    n7.textContent = num
    block.textContent = num
    if(fistN == 0){
        return fistN = num
    }else{
        if(secondN == 0){
            return secondN = num
        }
    }
}

function num8(){
    num = 8
    n8.textContent = num
    block.textContent = num
    if(fistN == 0){
        return fistN = num
    }else{
        if(secondN == 0){
            return secondN = num
        }
    }
}

function num9(){
    num = 9
    n9.textContent = num
    block.textContent = num
    if(fistN == 0){
        return fistN = num
    }else{
        if(secondN == 0){
            return secondN = num
        }
    }
}
let simbol = ""
let ope = ""
function s(){
    simbol = "+"
    suma.textContent = simbol
    block.textContent = simbol
    if(ope == ""){
        return ope = simbol
    }
}

function l(){
    simbol = "-"
    less.textContent = simbol
    block.textContent = simbol
    if(ope == ""){
        return ope = simbol
    }
}

function m(){
    simbol = "*"
    mult.textContent = simbol
    block.textContent = simbol
    if(ope == ""){
        return ope = simbol
    }
}

function d(){
    simbol = "/"
    divi.textContent = simbol
    block.textContent = simbol
    if(ope == ""){
        return ope = simbol
    }
}
let result = 0
function work(){
    result = operate(fistN,ope,secondN)
    block.textContent = result 
    return fistN = result
}