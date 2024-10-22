// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";
  
    // TODO: Create a variable for the character set based on selected options
  
    let characterPool = "";
    if (options.includeUppercase) characterPool += uppercase;
    if (options.includeLowercase) characterPool += lowercase;
    if (options.includeNumbers) characterPool += numbers;
    if (options.includeSpecialChars) characterPool += specialChars;
  
    if (characterPool === "") {
      throw new Error("At least one character type must be selected.");
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characterPool.charAt(
        Math.floor(Math.random() * characterPool.length)
      );
    }
  
    return password;
  };
  
  // TODO: Generate the password based on the selected criteria
  
  function handleGeneratePassword() {
    const length = parseInt(document.getElementById("length").value);
    const options = {
      includeUppercase: document.getElementById("includeUppercase").checked,
      includeLowercase: document.getElementById("includeLowercase").checked,
      includeNumbers: document.getElementById("includeNumbers").checked,
      includeSpecialChars: document.getElementById("includeSpecialChars").checked,
    };
  
    try {
          const password = generatePassword(length, options);
          document.getElementById("passwordOutput").textContent = password;
      } catch (error) {
          alert(error.message); 
      }
  
    // TODO: Add event listener to the button to call generatePassword and display the output
  
    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").textContent = password;
  }
  // BONUS: Implement the copy to clipboard functionality
  
  function copyToClipboard() {
      const password = document.getElementById("passwordOutput").textContent;
      if (password) {
          navigator.clipboard.writeText(password).then(() => {
              alert("Password copied to clipboard!");
          });
      } else {
          alert("No password to copy!");
      }
  };
  module.exports = {
      generatePassword
  };