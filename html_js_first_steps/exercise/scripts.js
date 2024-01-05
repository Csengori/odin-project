
const getContainer = document.querySelector('.container')

const addParagraph = document.createElement("p")
addParagraph.style.cssText = 'color: red'
addParagraph.textContent = "Hey I'm red!"

const addHtag = document.createElement("h3")
addHtag.style.cssText = 'color: blue'
addHtag.textContent = "I’m a blue h3!"

const addPtagForDiv = document.createElement("p")
addPtagForDiv.style.cssText = 'color: blue'
addPtagForDiv.textContent = "ME TOO!"

const addHtagForDiv = document.createElement("h1")
addHtag.style.cssText = 'color: blue'
addHtag.textContent = "I’m in a div"

const addDiv = document.createElement('div')
addDiv.setAttribute('class',"container-inner")

getContainer.appendChild(addParagraph)
getContainer.appendChild(addHtag)
addDiv.appendChild(addHtagForDiv)
addDiv.appendChild(addPtagForDiv)
getContainer.appendChild(addDiv)


const button = document.querySelector('#btn');
button.onclick = () => alert("Hello World!")

const button2 = document.querySelector('#btn2')
button2.addEventListener('click', () => window.alert('Hello world!!'))
button2.addEventListener('click',  (e) => console.log(e))
button2.addEventListener('click',  (e) => {
    console.log(e.target)
    console.log(e.target.style.background = 'orange')
})

function helloWorldAlert(){
    window.alert("Yallah world!")
}

const buttonGroup = document.querySelectorAll('button')
buttonGroup.forEach((button) => {
    button.addEventListener('click', () => alert(button.id))
})



// let sum = (a, b) => a + b;
//
// /* This arrow function is a shorter form of: */
//
// let sum2 = function(a, b) {
//     return a + b;
// };
//
// function addition(a, b) {
//     return a + b
// }
//
// let sum3 = addition(3,3)
//
//
// // function ask(question, yes, no) {
// //     if (confirm(question)) yes();
// //     else no();
// // }
//
// // ask(
// //     "Do you agree?",
// //     function() { alert("You agreed."); },
// //     function() { alert("You canceled the execution."); }
// // );
//
// let ask = (question, yes, no) => question ? yes() : no()
//
// ask(
//     "Do you agree?",
//     () => { alert("You agreed."); },
//     ()  => { alert("You canceled the execution."); }
// );
