const btn1 = document.getElementById("btn_1");
const btn2 = document.getElementById("btn_2");
const btn3 = document.getElementById("btn_3");


btn2.onclick = () => {
    btn2.style.backgroundColor = "#f00";
    btn1.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "transparent";
    document.body.classList.remove("theme_3");
    document.body.classList.add("theme_2");
}
btn3.onclick = () => {
    btn3.style.backgroundColor = "#0ff";
    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
    document.body.classList.remove("theme_2");
    document.body.classList.add("theme_3");
}
btn1.onclick = () => {
    btn1.style.backgroundColor = "#f00";
    btn3.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
    document.body.classList.remove("theme_3");
    document.body.classList.remove("theme_2");
}


