const optBtn = document.getElementsByClassName("opt"),
    startBtn = document.getElementById("start-btn"),
    optCon = document.getElementById("opt-con"),
    mainCon = document.getElementById("main-con"),
    guessCon = document.getElementById("guess-con"),
    hang = document.querySelectorAll(".hang"),
    resCon = document.getElementById("res-con"),
    winCon = document.getElementById("win"),
    lostCon = document.getElementById("lost");
let group = "",
    word = "",
    hangNumber = -1;

function ne() {
    mainCon.classList.add("hide");
    resCon.classList.add("hide");
    optCon.classList.remove("hide");
    startBtn.setAttribute("disabled", "disabled");
    optBtn[0].classList.remove("opt-select");
    optBtn[1].classList.remove("opt-select");
    document.querySelectorAll(".dis").forEach(value => value.classList.remove("dis"))
    guessCon.innerHTML = "";
    hangNumber = -1;
    group = "";
    word = "";
    hang.forEach(x => x.classList.add("hide"));
    winCon.classList.add("hide");
    lostCon.classList.add("hide");
}

function opt(el) {
    startBtn.removeAttribute("disabled")
    if (el == 0) {
        optBtn[1].classList.remove("opt-select");
        optBtn[0].classList.add("opt-select");
        group = "میوه‌ها"
    } else if (el == 1) {
        optBtn[0].classList.remove("opt-select");
        optBtn[1].classList.add("opt-select");
        group = "کشورها"
    }
}

function startGame() {
    optCon.classList.add("hide");
    mainCon.classList.remove("hide");
    let au = Math.floor(Math.random() * options2[group].length);
    word = options2[group][au].split("")
    for (var i = 0; i < word.length; i++) {
        let a = document.createElement("span");
        a.classList.add("guess");
        guessCon.appendChild(a);
    }
}
document.querySelectorAll(".letter").forEach(value => {
    value.onclick = () => {
        if (!value.classList.contains("dis")) {
            value.classList.add("dis")
            let d = false
            word.forEach((val, ind) => {
                if (val == value.innerText) {
                    d = true
                    document.querySelectorAll(".guess")[ind].innerText = word[ind]
                    check()
                }
            })

            if (!d) {
                hangNumber++;
                hang[hangNumber].classList.remove("hide")
                check(hangNumber)
            }

        }
    }
})

function check(dg) {
    if (dg == 5) {
        mainCon.classList.add("hide");
        resCon.classList.remove("hide");
        lostCon.classList.remove("hide");
        document.getElementsByClassName("w")[1].innerText = options[group][options2[group].indexOf(word.join(""))]
    } else {
        let ah = true
        word.forEach((value, index) => {
            let guess1 = document.getElementsByClassName("guess")[index]
            if (value != guess1.innerText) {
                ah = false
            }
        })
        if (ah) {
            mainCon.classList.add("hide");
            resCon.classList.remove("hide");
            winCon.classList.remove("hide");
            document.getElementsByClassName("w")[0].innerText = options[group][options2[group].indexOf(word.join(""))]
        }
    }
}
