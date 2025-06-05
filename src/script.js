let generalError = false
let fileInput = document.querySelector("input#inputFile")
const inputFileDiv = document.querySelector("div#inputFileDiv")
let imgURL = null

function fakeHover() {
    inputFileDiv.classList.add('bg-Neutral-500-transparent','cursor-pointer')
}
function removeFakeHover() {
    inputFileDiv.classList.remove('bg-Neutral-500-transparent','cursor-pointer')
}
inputFileDiv.addEventListener("mouseover", fakeHover)
inputFileDiv.addEventListener("mouseout", removeFakeHover)


fileInput.addEventListener("change", function(event) {
    const iconFile = document.querySelector("div#uploadIcon")
    const InputFileText = document.querySelector("p#inputFileText")
    const InputFileButtons = document.querySelector("div#inputFileButtons")

    const file = event.target.files[0]
    const maxSize = 500 * 1024
     if (!file) return

    if (file.size > maxSize) {
        const fileWarning = document.querySelector("small#fileWarning")
        fileWarning.innerHTML = 'File too large. Please upload a photo under 500KB'
        fileWarning.style.color = 'hsl(7, 88%, 67%)'
        generalError = true
    }
    
    inputFileDiv.onclick = null
    imgURL = URL.createObjectURL(file)
    
    iconFile.style.backgroundImage = `url('${imgURL}')`
    iconFile.classList.add('bg-cover', 'border-2', 'border-Neutral-500')
    InputFileButtons.classList.remove('hidden')
    InputFileText.classList.add('hidden')
    inputFileDiv.removeEventListener("mouseover", fakeHover)
    inputFileDiv.removeEventListener("mouseout", removeFakeHover)
    removeFakeHover()
})

function removeImage() {
  imgURL = null
  

  const iconFile = document.querySelector("div#uploadIcon")
  const InputFileText = document.querySelector("p#inputFileText")
  const InputFileButtons = document.querySelector("div#inputFileButtons")

  iconFile.style.backgroundImage = "url('/assets/images/icon-upload.svg')"
  iconFile.classList.remove('bg-cover', 'border-2', 'border-Neutral-500')
  InputFileButtons.classList.add('hidden')
  InputFileText.classList.remove('hidden')

  inputFileDiv.addEventListener("mouseover", fakeHover)
  inputFileDiv.addEventListener("mouseout", removeFakeHover)
  inputFileDiv.onclick = inputFileTrigger
  fakeHover()
}

function inputFileTrigger() {
    fileInput.click()
}

 document.querySelector("button#InputFilleButton1").addEventListener("click", removeImage)



function generateTicket() {
    let page1 = document.querySelector("section#page1")
    let page2 = document.querySelector("section#page2")
    
    let username = document.querySelector("input#username")
    let useremail = document.querySelector("input#useremail")
    let usergithub = document.querySelector("input#usergithub")

    let nameOutput = document.getElementsByClassName("nameOutput")
    let emailOutput = document.querySelector("span#emailOutput")
    let githubOutput = document.querySelector("cite#githubOutput")
    let imageOutput = document.querySelector("img#imageOutput")

    let codeOutput = document.querySelector("strong#codeOutput")
    let code = ''

    if (fileInput.value === '') {
        generalError = true
    }
    if (username.value === '') {
        const nameWarning = document.querySelector("div#nameWarning")
        nameWarning.classList.remove('hidden')
        generalError = true
    } else {
        nameWarning.classList.add('hidden')
        generalError = false
    }
    if (usergithub.value === '') {
        const githubWarning = document.querySelector("div#githubWarning")
        githubWarning.classList.remove('hidden')
        generalError = true
    } else {
        githubWarning.classList.add('hidden')
        generalError = false
    }

    if (useremail instanceof HTMLInputElement) {
        if (useremail.value === '' || !useremail.checkValidity()) {
            document.querySelector("div#emailWarning").classList.remove('hidden')
            useremail.style.borderColor = 'hsl(7, 88%, 67%)'
            generalError = true
        } else {
            document.querySelector("div#emailWarning").classList.add('hidden')
            useremail.style.borderColor = 'hsl(245, 15%, 58%)'
        }
    }

    if (generalError) return

    for (let i = 0; i < 6; i++) {
        let numeral = '0123456789'
        const index = Math.floor(Math.random() * numeral.length)
        code += numeral[index]
    }

    for (let element of nameOutput) {
        element.innerHTML = username.value
    }
    emailOutput.innerHTML = useremail.value
    githubOutput.innerHTML = usergithub.value
    imageOutput.src = imgURL
    codeOutput.innerHTML = `#${code}`

    page1.classList.add('hidden')
    page2.classList.remove("hidden")
}