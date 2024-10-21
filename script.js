// TODO: Implement the password generation logic based on user input

const getRandomChar = (charset) => {
    const randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
};

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let availableChars = '';
    let password = '';

// TODO: Create a variable for the character set based on selected options
    if(options.includeUppercase)availableChars += uppercase;
    if(options.includelowecase)availableChars += lowercase;
    if(options.includeNumbers)availableChars += numbers;
    if(options.includeSpecialChars)availableChars += specialChars;

// TODO: Generate the password based on the selected criteria
    if(!availableChars.length){
        return"select one of the criteria";
    }

    for(let i=0;i<length;i++){
        password+=
    getRandomChar(availableChars);
    }

    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
const copyToClipboard = (text) => {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Password disalin ke clipboard!');
};

document.getElementById('generateBtn').addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked,
    };

    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').innerText = password;
});

// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
    const password = document.getElementById('passwordOutput').innerText;
    if (password) {
        copyToClipboard(password);
    } else {
        alert('Tidak ada password untuk disalin.');
    }
});





