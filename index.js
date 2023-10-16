let length;
let a;
let lowercaseLetters = [];

for (var i = 97; i <= 122; i++) {
    lowercaseLetters.push(String.fromCharCode(i));
}
const uppercaseLetters = lowercaseLetters.map(function (letter) {
    return letter.toUpperCase();
});

const symbols = ['!','@','#','$','%','&','*','?'];

document.getElementById("submitbtn").onclick = function () {
    var ele = document.getElementsByName("rb")
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            a = ele[i].value;
            length = document.getElementById('inpt2').value;
        }
        if (ele[0].checked==false & ele[1].checked==false) {
            window.alert("PLEASE SELECT ATLEAST 1 RADIOBUTTON")
            return false
        }
    }
}
