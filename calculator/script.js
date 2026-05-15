let inp = document.querySelector("input");
let buttons = document.querySelectorAll("button");

for (let btn of buttons) {
    btn.addEventListener("click", () => {

        let btnText = btn.innerText;
        if (btnText == "C") {
            inp.value = "";
        }
        else if (btnText == "=") {
            inp.value = eval(inp.value);
        }
        else if (btnText == "x"){
            inp.value = inp.value.slice(0, -1);
        }
        else {
            inp.value += btnText;
        }
    })
}