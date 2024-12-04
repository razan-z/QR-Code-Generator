import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'url',
            message: 'Enter the URL to generate a QR code:',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the URL to generate a QR code:',
        },
    ])
    .then((answers) => {
        const userInput = answers.url;
        const fileNAme = answers.name;

        const qr_png = qr.image(userInput, { type: 'png' });
        qr_png.pipe(fs.createWriteStream(`${fileNAme.replace(/[^a-zA-Z0-9]/g, '_')}.png`));

        fs.appendFile('URL.txt', `${userInput}\n`, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('URL saved to URL.txt and QR code image generated!');
            }
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error('Prompt could not be rendered in the current environment.');
        } else {
            console.error('Something went wrong:', error);
        }
    });
