function randomInt(min, max){return Math.floor(Math.random() * (max - min) + min)};var genKey = document.getElementById("gen");var encButton = document.getElementById("enc");var decButton = document.getElementById("dec");var copyButton = document.getElementById("copy");if(encButton){encButton.addEventListener("click",encText)};if(decButton){decButton.addEventListener("click",decText)};if(copyButton){copyButton.addEventListener("click",copyText)};if(genKey){genKey.addEventListener("click",createKey)};function encText(){var textInput = document.getElementById("encText").value;var keyInput = document.getElementById("encKey").value;var output = document.getElementById("encOutput");if(keyInput === textInput){alert("The Secret Key Should Not Have The Same Value As The Text");return;}else if(keyInput.length < 16){alert("The Secret Key Value Should Not Be Less Than 16 Characters");return;}else{var cryptText = CryptoJS.AES.encrypt(textInput,keyInput);output.innerText = cryptText;}}function decText(){var textInput = document.getElementById("decText").value;var keyInput = document.getElementById("decKey").value;var output = document.getElementById("decOutput");var decText = CryptoJS.AES.decrypt(textInput,keyInput).totring(CryptoJS.enc.Utf8);output.innerText = decText;}function copyText(){var text = document.getElementById("encOutput").innerText;navigator.clipboard.writeText(text);}function createKey(){var key = randomInt(1000000000000000, 9999999999999999);var text = document.getElementById("encKey");text.value = key;}