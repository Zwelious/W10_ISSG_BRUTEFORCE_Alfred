const crypto = require('crypto');

const targetHash = '5531a5834816222280f20d1ef9e95f69';

// Function to perform brute force attack
function bruteForcePin() {
    for (let i = 0; i <= 9999; i++) {
        // Convert the number to ensure it's a 4-digit string
        const pin = i.toString().padStart(4, '0');

        // Generate the MD5 hash of the PIN
        const hash = crypto.createHash('md5').update(pin).digest('hex');

        // Compare with the target hash
        if (hash === targetHash) {
            return pin;
        }
    }
    return null; // Return null if no match is found
}

const pin = bruteForcePin();
if (pin) {
    console.log(`Alice's PIN is: ${pin}`);
} else {
    console.log('PIN not found.');
}