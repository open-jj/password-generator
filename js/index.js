const generateBTN = document.getElementById('generate');
const lengthINPUT = document.getElementById('length');
const charactersINPUT = document.getElementById('characters');
const passwordOUTPUT = document.getElementById('password');
const copyBTN = document.getElementById('copy');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

class Password {

    constructor(characters, length) {
        // Setting up variables
        this.characters = characters || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*-/:;=?@[\]^_`{}';
        this._length = parseInt(length) || 16;
    }

    generate() {
        var password = '';
        for (let i = 0; i < this._length; i++) {
            password += this.characters[Math.floor(Math.random() * this.characters.length)];
        }
        return password;
    }

}

generateBTN.addEventListener('click', function() {

    passwordOUTPUT.style.textDecoration = 'underline';
    passwordOUTPUT.textContent = new Password(charactersINPUT.value, lengthINPUT.value).generate();

});

copyBTN.addEventListener("click", async function() {
    navigator.clipboard.writeText(passwordOUTPUT.textContent);
    this.textContent = "Copied!";
    await sleep(2570);
    this.textContent = "Copy";
});