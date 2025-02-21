let buttons = document.querySelectorAll("button");
let clearBtn = document.querySelector("#clear");
let string = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        } else if (e.target.innerText == "AC") {
            string = "";
            document.querySelector("input").value = string;
        } else if (e.target.innerText == "DEL") {
            string = string.slice(0, -1);
            document.querySelector("input").value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerText;
            document.querySelector("input").value = string;
        }
    });
});


// clearBtn.addEventListener("click", () => {
//     inputText.innerText = "0";
// });



