document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;

    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    const numbers = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let characters = "";
    if (includeSymbols) characters += symbols;
    if (includeNumbers) characters += numbers;
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;

    if (characters === "") {
        alert("Selecione pelo menos uma opção de caractere!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copyPassword() {
    const password = document.getElementById('password');
    password.select();
    document.execCommand('copy');
    alert("Senha copiada para a área de transferência!");
}document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;

    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    const numbers = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let characters = "";
    if (includeSymbols) characters += symbols;
    if (includeNumbers) characters += numbers;
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;

    if (characters === "") {
        alert("Selecione pelo menos uma opção de caractere!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copyPassword() {
    const password = document.getElementById('password');
    password.select();
    document.execCommand('copy');
    alert("Senha copiada para a área de transferência!");
}