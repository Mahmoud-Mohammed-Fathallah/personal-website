function display() {
    document.querySelector(".menu").classList.toggle("menu-show")
}
function move(where) {
    var arr = document.querySelectorAll(".pro-div");
    var num = 0;
    let element;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains("current")) {
            if (arr[i].classList.contains("num1")) {
                num = 1;
            } else if (arr[i].classList.contains("num2")) {
                num = 2;
            } else {
                num = 3;
            }
            arr[i].classList.add("leaving");
            arr[i].classList.remove("current");
            element = arr[i];
            setTimeout(()=>{
                element.classList.remove("leaving")
            },1000)
        }
    }
    if (where == "left") {
        console.log(num);
        num = (num - 1) % 3;
        console.log(num);
    } else {
        num = (num + 1) % 3;
    }
    if (num == 0) {
        num = 3;
    }

    var className = ".num" + num;
    document.querySelector(className).classList.add("current");
    
}
setInterval(move,5000);
