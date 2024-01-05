
const getContainer = document.querySelector('.container')
console.dir(getContainer.firstElementChild)

const content = document.createElement('div')
const controls = document.querySelector('.controls')

content.classList.add('content')
content.textContent = "This is a new div via script block"
content.style.cssText = 'color:white; background-color: magenta; width 100px; height 100px; font-size: 32px;'

content.setAttribute('id','attribute')
content.getAttribute('attribute')
//content.setAttribute('style','color:orange')

// window.alert()
getContainer.classList.toggle('visible')


getContainer.appendChild(content)
//