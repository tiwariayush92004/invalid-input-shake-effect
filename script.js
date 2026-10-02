function validateInput(){
    let inputfield = document.getElementById("inputField");
    let inputValue = inputfield.value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if(inputValue === ""){
        inputfield.classList.add("shake")
        errorMessage.style.visibility = "visible";

        setTimeout(function(){
            inputfield.classList.remove("shake");
            errorMessage.style.visibility = "hidden";
        },6000);
    }else{
        alert("Valid Input")
    }
}