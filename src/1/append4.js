const fs = require('fs');
const util = require('util');
const obj = {a: 1};

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

(async () => {
    try {
        const append = async () => {
            const text = await readFileAsync('data.json', 'utf8');
            const data = JSON.parse(text);
            data.push(obj);
            await writeFileAsync('data.json', JSON.stringify(data), 'utf8'); 
        }
        for (let i = 0; i < 3; i++) {
            await append();
        }
    } catch (e) {
        console.error(e);
    }
})();