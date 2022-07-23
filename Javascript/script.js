function display() {
    document.querySelector(".menu").classList.toggle("invisible")
}
function move(where) {
    var arr = document.querySelectorAll(".pro-div");
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains("active")) {
            arr[i].classList.remove("active");
            if (arr[i].classList.contains("num1")) {
                num = 1;
            } else if (arr[i].classList.contains("num2")) {
                num = 2;
            } else {
                num = 3;
            }
        }
    }
    if (where == "left") {
        console.log("in");
        num = (num - 1) % 3;
    } else {
        num = (num + 1) % 3;
    }
    if (num == 0) {
        num = 3;
    }

    var className = "num" + num;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j].classList.contains(className)) {
            arr[j].classList.add("active");
            arr[j].classList.remove("invisible");
        } else {
            arr[j].classList.add("invisible");
        }
    }
}
setInterval(move, 5000);