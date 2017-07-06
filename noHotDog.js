var button = document.querySelector("#hotdogButton");
var buttonText = document.querySelector("#buttonText");
var body = document.querySelector("body");

button.addEventListener("click", function() {
    if (body.classList == "hotdog") {
        // alert("Tick!");
        body.classList.remove("hotdog");
        body.classList.add("notHotDog");
        buttonText.textContent = "Hot Dog";
    }
    else{
        // alert("Tock!");
        body.classList.remove("notHotDog");
        body.classList.add("hotdog");
        buttonText.textContent = "Not Hot Dog";        
    }
})
