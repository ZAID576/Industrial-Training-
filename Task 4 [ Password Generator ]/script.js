// ========================================
// PASSWORD GENERATOR - SHURU SE SHURU TAK
// ========================================
// 
// YEH PASSWORD GENERATOR APP KA MATLAB:
// Ek random password banate hain jo strong aur secure hota hai
// User apne hisaab se customize kar sakta hai
//

// ========================================
// STEP 1: HTML ELEMENTS KO SELECT KARO
// ========================================
//
// JavaScript mein se HTML elements nikalne ke liye querySelector/querySelectorAll use hote hain
// Jaise dekho - "id" aur "class" use karke elements ko select kar rahe hain
//

// Password display input - jaha par generated password likha hota hai
const passwordDisplay = document.getElementById('passwordDisplay');

// Length slider - jo drag karke password ka length set karte ho (4-32)
const lengthSlider = document.getElementById('lengthSlider');

// Length value display - jo number dikhaata hai current length ka
const lengthValue = document.getElementById('lengthValue');

// Checkboxes - password mein kya kya include karna hai
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

// Buttons - generate aur copy buttons
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

// ========================================
// STEP 2: CHARACTER SETS DEFINE KARO
// ========================================
//
// Password banane ke liye hume different characters ki zaroorat hoti hai
// Lowercase = a, b, c, d, ... z
// Uppercase = A, B, C, D, ... Z
// Numbers = 0, 1, 2, 3, ... 9
// Symbols = !, @, #, $, %, ^, &, *, etc.
//

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// ========================================
// STEP 3: LENGTH SLIDER - JAB USER DRAG KARE
// ========================================
//
// Jab user slider ko drag karta hai tab password ka length change hota hai
// Event listener = "jab kuch event hone tab..."
// input event = "jab slider value change ho tab"
//

lengthSlider.addEventListener('input', () => {
    // Slider ki current value lelo
    // lengthSlider.value = "6" ya "8" ya "10", etc.
    const currentLength = lengthSlider.value;
    
    // Display mein likha do yeh length
    // Jaise: "Password Length: 8"
    lengthValue.textContent = currentLength;
    
    // RESULT: User ko dikha jata hai "Ab password 8 characters ka hoga"
});

// ========================================
// STEP 4: GENERATE PASSWORD - MAIN FUNCTION
// ========================================
//
// Yeh function random password banata hai
// Random ka matlab = "kabhi kaise data aaye, kabhi kaise aaye"
// Security ke liye random password zaroori hota hai
//

function generatePassword() {
    // Step 1: Check karo kaun se character set use karna hai
    // Jaise agar user ne checkbox tick kiya hai lowercase ka
    // To lowercase characters use karna hai
    
    let availableChars = ''; // Khali string - usme characters add karenge
    
    // Agar lowercase checkbox tick hai to lowercase chars add karo
    if (lowercaseCheckbox.checked) {
        availableChars += lowercaseChars;
        // availableChars = "abcdefghijklmnopqrstuvwxyz"
    }
    
    // Agar uppercase checkbox tick hai to uppercase chars add karo
    if (uppercaseCheckbox.checked) {
        availableChars += uppercaseChars;
        // availableChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    
    // Agar numbers checkbox tick hai to number chars add karo
    if (numbersCheckbox.checked) {
        availableChars += numberChars;
        // availableChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    }
    
    // Agar symbols checkbox tick hai to symbol chars add karo
    if (symbolsCheckbox.checked) {
        availableChars += symbolChars;
        // availableChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()..."
    }
    
    // ========================================
    // ERROR HANDLING - AGAR KUCH GALAT HUA
    // ========================================
    //
    // Agar user ne koi bhi checkbox select nahi kiya
    // To availableChars khali rahega
    // Aisay password nahi ban sakta
    // So humko alert dikhana chahiye
    //
    
    if (availableChars.length === 0) {
        alert('Kum az kum ek option select karo!');
        // "Please select at least one option!"
        return; // Function yaha rukh jata hai, aagey code nahi chalega
    }
    
    // Step 2: Password length lelo slider se
    const passwordLength = lengthSlider.value;
    // passwordLength = "8" (jese likha tha slider par)
    
    // Step 3: Random password banao
    let password = '';
    // password = khali string
    // Usme characters add karenge
    
    // Loop = "bar bar kaam karna"
    // for (let i = 0; i < passwordLength; i++)
    // = "0 se passwordLength tak har ek number ke liye"
    //
    // JAISE:
    // passwordLength = 8
    // i = 0, 1, 2, 3, 4, 5, 6, 7 (total 8 times loop chalega)
    //
    
    for (let i = 0; i < passwordLength; i++) {
        // Random index nikalo
        // Math.random() = 0 se 0.99... ke beech random number
        // Math.floor() = pura number nikalo (decimal hata do)
        // Math.floor(Math.random() * availableChars.length) = 0 se availableChars.length-1 tak random index
        //
        // JAISE:
        // availableChars.length = 62 (62 characters available hain)
        // Math.random() = 0.456
        // Math.random() * 62 = 28.272
        // Math.floor(28.272) = 28 (yeh random index hai)
        //
        
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        
        // availableChars[randomIndex] = random character
        // availableChars[28] = availableChars mein 28th position par jo character hai
        //
        // Jaise availableChars = "abc...XYZ0123...!@#$"
        // randomIndex = 28
        // availableChars[28] = "Q" (agar 28th position par Q hai)
        //
        
        const randomChar = availableChars[randomIndex];
        
        // Password mein yeh random character add karo
        password += randomChar;
        // password = "" + "Q" = "Q"
        // password = "Q" + "w" = "Qw"
        // password = "Qw" + "3" = "Qw3"
        // ... aur yeh sab 8 times chalega (passwordLength = 8)
        // Final password = "Qw3@xK9m" (jaise)
    }
    
    // Step 4: Display mein password likha do
    passwordDisplay.value = password;
    // passwordDisplay.value = "Qw3@xK9m"
    // User ko dekha jata hai generated password
    
    // Copy button ko reset karo
    resetCopyButton();
    
    // RESULT: Ab screen par new password show hota hai!
}

// ========================================
// RESET COPY BUTTON - COPIED STATE KO HATAO
// ========================================
function resetCopyButton() {
    const svgIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>`;
    copyBtn.innerHTML = svgIcon;
    copyBtn.style.background = '#fff';
    copyBtn.style.color = '#667eea';
}

// ========================================
// STEP 5: COPY BUTTON - CLIPBOARD MEIN COPY KARO
// ========================================
//
// Jab user copy button press kare tab password clipboard mein copy ho jaye
// Clipboard = ek temporary storage jaha par copy kiya gaya data rakha jata hai
// Jab user Ctrl+V press kare to paste ho jata hai
//

copyBtn.addEventListener('click', () => {
    // Step 1: Password lelo display se
    const passwordText = passwordDisplay.value;
    // passwordText = "Qw3@xK9m"
    
    // Step 2: Check karo password khali to nahi
    if (passwordText === '') {
        alert('Pehle password generate karo!');
        // "Please generate a password first!"
        return;
    }
    
    // Step 3: Clipboard mein copy karo
    // navigator.clipboard.writeText() = clipboard mein text likha do
    // Yeh modern way hai copy karne ka
    //
    
    navigator.clipboard.writeText(passwordText).then(() => {
        // .then() = "jab copy ho jaye tab..."
        // Agar successfully copy ho gaya tab:
        
        // Button ka text change karo - dikhao user ko "Copied!"
        copyBtn.innerHTML = '✓ Copied';
        // Copied likha do button par
        
        copyBtn.style.background = '#4ade80';
        // Green color kar do button ka
        copyBtn.style.color = '#fff';
        
        // 2 seconds baad wapas original state mein aa jao
        setTimeout(() => {
            resetCopyButton();
        }, 2000);
        // setTimeout = "2000 millisecond (2 second) baad yeh function chalao"
        
    }).catch(() => {
        // .catch() = "agar error aaye tab..."
        // Agar clipboard support nahi hai (old browser)
        alert('Copy nahi hua. Manually copy karo!');
        // "Failed to copy. Try copying manually!"
    });
});

// ========================================
// STEP 6: GENERATE BUTTON EVENT LISTENER
// ========================================
//
// Jab user "Generate Password" button press kare
// Tab generatePassword() function call hona chahiye
//

generateBtn.addEventListener('click', generatePassword);
// Click karte hi generatePassword() function chalega
// Aur new password banaye jata hai

// ========================================
// STEP 7: BACKSPACE HANDLING - PASSWORD EDIT KARNE KE LIYE
// ========================================
//
// User input box mein password ko manually edit kar sakta hai
// Jaise backspace press kare to last character delete ho
// Ya manually type karke password change kar sakta hai
//

passwordDisplay.addEventListener('input', () => {
    // 'input' event = "jab user kuch likhe ya backspace de tab"
    // passwordDisplay.value = jo likha hua hai input box mein
    // Humko kuch karna nahi - automatically update ho jata hai
});

passwordDisplay.addEventListener('keydown', (e) => {
    // 'keydown' event = "jab user key press kare tab"
    
    // Agar user sirf copy button ya generate button se kaam le raha hai
    // Tab koi restriction nahi - user kuch bhi kar sakta hai
    // 
    // Backspace, Delete, typing - sab allowed hai
    // Isliye hum alag se kuch block nahi kar rahe
});

// ========================================
// STEP 8: INITIAL PASSWORD GENERATION
// ========================================
//
// App ke start mein hi ek password generate karo
// Taake user ko dekha jaye kaise kaam karta hai
//

generatePassword();
// Ek random password show ho jaye load ke time par

// ========================================
// PASSWORD GENERATOR CODE - CLEAN VERSION (WITHOUT COMMENTS)
// ========================================






const display = document.getElementById('passwordDisplay');
const slider = document.getElementById('lengthSlider');
const lengthDisplay = document.getElementById('lengthValue');
const checkboxes = {
    lowercase: document.getElementById('lowercase'),
    uppercase: document.getElementById('uppercase'),
    numbers: document.getElementById('numbers'),
    symbols: document.getElementById('symbols')
};
const generateButton = document.getElementById('generateBtn');
const copyButton = document.getElementById('copyBtn');

const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

slider.addEventListener('input', () => {
    lengthDisplay.textContent = slider.value;
});

function createPassword() {
    let chars = '';
    
    if (checkboxes.lowercase.checked) chars += charSets.lowercase;
    if (checkboxes.uppercase.checked) chars += charSets.uppercase;
    if (checkboxes.numbers.checked) chars += charSets.numbers;
    if (checkboxes.symbols.checked) chars += charSets.symbols;
    
    if (chars.length === 0) {
        alert('Select at least one option!');
        return;
    }
    
    let password = '';
    const length = slider.value;
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    display.value = password;
}

copyButton.addEventListener('click', () => {
    const passwordText = display.value;
    
    if (passwordText === '') {
        alert('Generate password first!');
        return;
    }
    
    navigator.clipboard.writeText(passwordText).then(() => {
        const originalHTML = copyButton.innerHTML;
        copyButton.innerHTML = '✓ Copied';
        copyButton.style.background = '#4ade80';
        copyButton.style.color = '#fff';
        
        setTimeout(() => {
            copyButton.innerHTML = originalHTML;
            copyButton.style.background = '#fff';
            copyButton.style.color = '#667eea';
        }, 2000);
    }).catch(() => {
        alert('Failed to copy!');
    });
});

generateButton.addEventListener('click', createPassword);

display.addEventListener('input', () => {});

display.addEventListener('keydown', () => {});

createPassword();
