let num1 = 0
let num2 = 0
let operation = 0


let n2 = document.querySelector("#n2")
let n3 = document.querySelector("#n3")
let n4 = document.querySelector("#n4")
let n5 = document.querySelector("#n5")
let n6 = document.querySelector("#n6")
let n7 = document.querySelector("#n7")
let n8 = document.querySelector("#n8")
let n9 = document.querySelector("#n9")




console.log(inputE.value)

function sum(num = []){
    let soma = 0
    for(let i = 0; i < num.length; i++){
        soma += num[i]
    }
    return soma
}


function dif(num = []){
    let dife = 0
    for(let i = 0; i < num.length; i++){
        dife -= num[i] 
    }
    return dife
}


function mul(num = []){
    let mult = 1
    for(let i = 0; i< num.length; i++){
        mult *= num[i] 
    }
    return mult
}


function division(num = []){
    let div = 1
    for(let i = 0; i < 1; i++){
        div = num[i] / num[i+1]
    }
    return div
}


function operate(operator,num1,num2){
    if(operate == "+"){
        let arrayS = [num1,num2]
        console.log(sum(arrayS))
    }else{
        if(operate == "-"){
            let arrayD = [num1,num2]
            console.log(dif(arrayD))
        }else{
            if(operate == "*"){
                let arrayM = [1,2,3]
                console.log(mul(arrayM))
            }else{
                if(operate == "/"){
                    let arrayDiv = [8,4]
                    console.log(division(arrayDiv))
                }
            }
        }
    }
}
let n1 = document.querySelector("#n1")
let inputE = document.querySelector('#entrada')
let num = 0
let div = document.querySelector('div')
// fuctions onclick in numbers
n1.addEventListener('click',function(){ 
    num = 1
    inputE.value.innerHTML = num
})