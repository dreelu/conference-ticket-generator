function CreateTicket() {
    const main1 = document.querySelector("main#main1")
    const main2 = document.querySelector("main#main2")

    let NameInput = document.querySelector("input#NameInput")
    let EmailInput = document.querySelector("input#EmailInput")
    let GithubInput = document.querySelector("input#GithubInput")

    let NameOutput = document.querySelector("span#NameOutput")
    let EmailOutput = document.querySelector("span#EmailOutput")

    if (NameInput.value.trim() === '' ||
        EmailInput.value.trim() === '' ||
        GithubInput.value.trim() === ''
    ){
        window.alert("Hello world!");
    } else {
        main1.style.display = "none"
        main2.style.display = "block"
    }
    //versão teste do condicional

    NameOutput.innerHTML = `${NameInput.value}`
    EmailOutput.innerHTML = `${EmailInput.value}`
    
}