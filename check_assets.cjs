
const fs = require('fs');
const path = require('path');

const dir = 'src/assets/testimonials';
const files = fs.readdirSync(dir);

const imports = [
    'Sandeep.jpg',
    'Manoj.jpg',
    'Naushad.jpg',
    'Ayush.jpg',
    'Keerthi.jpg',
    'Vinay.jpg',
    'Richard.jpg',
    'Raksha.jpg'
];

console.log('--- Files in ' + dir + ' ---');
files.forEach(f => console.log(f));

console.log('\n--- Verification ---');
imports.forEach(imp => {
    if (files.includes(imp)) {
        console.log(`[OK] ${imp} exists.`);
    } else {
        // Check for case-insensitive match
        const match = files.find(f => f.toLowerCase() === imp.toLowerCase());
        if (match) {
            console.log(`[MISMATCH] ${imp} not found, but found ${match}`);
        } else {
            console.log(`[MISSING] ${imp} not found.`);
        }
    }
});
