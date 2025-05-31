let fileInput = document.querySelector("input#inputFile")
let imgURL = null

fileInput.addEventListener("change", function(event) {
    const file = event.target.files[0]

     if (!file) return

    imgURL = URL.createObjectURL(file)
})

function inputFileTrigger() {
    fileInput.click()
}

function generateTicket() {
    let page1 = document.querySelector("section#page1")
    let page2 = document.querySelector("section#page2")
    
    let username = document.querySelector("input#username")
    let useremail = document.querySelector("input#useremail")
    let usergithub = document.querySelector("input#usergithub")

    let nameOutput = document.querySelector("span.nameOutput")
    let emailOutput = document.querySelector("span#emailOutput")
    let githubOutput = document.querySelector("cite#githubOutput")
    let imageOutput = document.querySelector("img#imageOutput")

    let codeOutput = document.querySelector("strong#codeOutput")
    let code = ''

    for (let i = 0; i < 6; i++) {
        let numeral = '0123456789'
        const index = Math.floor(Math.random() * numeral.length)
        code += numeral[index]
    }

    nameOutput.innerHTML = username.value
    emailOutput.innerHTML = useremail.value
    githubOutput.innerHTML = usergithub.value
    imageOutput.src = imgURL
    codeOutput.innerHTML = `#${code}`
    //Fazer condicionais para que o código não funcione caso o email não esteja nos padrões requisitados.

    page1.classList.add('hidden')
    page2.classList.remove("hidden")
}