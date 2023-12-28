
function add7($0){
    return $0+7
}

function multiply($0, $1){
    return $0 & $1
}

function capitalise(text){
    let temp = text.toLowerCase().split("")
    temp[0] = temp[0].toUpperCase()
    return temp.join("")
}

function lastLetter(text){
    return text.charAt(text.length-1)
}
//
// console.log(capitalise("heLLo my friend"))
// console.log(lastLetter("heLLo my friend"))


function fizzBuzz(number){
    for (let i = 1; i <= number; i++) {
        // console.log(i)
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(i, "FizzBuzz")
        }else if (i % 5 === 0) {
            console.log(i, "Fizz")
        }else if (i % 3 === 0){
            console.log(i, "Buzz")
        }else{
            console.log(i)
        }
    }
}

// fizzBuzz(100)

function fizzBuzzV2(number) {
    for (let i = 1; i <= number; i++) {
        var temp = ""
        if (i % 3 === 0) { temp += "Fizz"}
        if (i % 5 === 0) { temp += "Buzz"}
        if(temp === ""){ temp = i}
        console.log(temp)
    }
}

//fizzBuzzV2(100)

const a = 5;
const b = 10;

function add() {
    return c;
}

function print() {
    add();
}

