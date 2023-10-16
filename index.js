let length;
let a;
let lowercaseLetters = [];
var rnd;
let nums = [];
for (let i=0; i<10; i++) {
    nums.push(String(i))
}

for (var i = 97; i <= 122; i++) {
    lowercaseLetters.push(String.fromCharCode(i));
}
const uppercaseLetters = lowercaseLetters.map(function (letter) {
    return letter.toUpperCase();
});

const symbols = ['!','@','#','$','%','&','*','?'];


function getRndInteger(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


document.getElementById("submitbtn").onclick = function () {
    let pass = '';
    var ele = document.getElementsByName("rb")
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            a = ele[i].value;
            length = document.getElementById('inpt2').value;
        }
        if (ele[0].checked==false & ele[1].checked==false) {
            window.alert("PLEASE SELECT ATLEAST 1 RADIOBUTTON");
            return false
        }
    }

    if (a=='1') {
        for (let i = 0; i < length; i++) {
            rnd = getRndInteger(1,3);
            if (rnd == 1) {
                pass+= lowercaseLetters[getRndInteger(0,lowercaseLetters.length-1)];
            }
            else if (rnd == 2) {
                pass+= uppercaseLetters[getRndInteger(0,lowercaseLetters.length-1)];
            } else {
                pass+= nums[getRndInteger(0,nums.length-1)];
            }
        }
    } else if (a=='2') {
        for (let i = 0; i < length; i++) {
            rnd = getRndInteger(1,4);
            if (rnd == 1) {
                pass+= lowercaseLetters[getRndInteger(0,lowercaseLetters.length-1)];
            }
            else if (rnd == 2) {
                pass+= uppercaseLetters[getRndInteger(0,lowercaseLetters.length-1)];               
            }
            else if (rnd == 3) {
                pass+= nums[getRndInteger(0,nums.length-1)];
            } 
            else if (rnd == 4) {
                pass+= symbols[getRndInteger(0,symbols.length-1)];
            }
        }
    }

    passbox = document.getElementById('inpt1');
    passbox.innerText = pass;
    passbox.style.opacity = 1;

}
