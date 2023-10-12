let length;
let a1;

let lowercaseLetters = [];

for (var i = 97; i <= 122; i++) {
    lowercaseLetters.push(String.fromCharCode(i));
}
const uppercaseLetters = lowercaseLetters.map(function (letter) {
    return letter.toUpperCase();
});

const symbols = ['!','@','#','$','%','&','*','?'];

