const fs = require('fs');

const obj = {a: 1};

const readFileAsync = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, text) => {
            if (err) {
                reject(err);
            }
            resolve(text);
        });
    });
}

(async () => {
    try {
        const text = await readFileAsync('data.json');
        const data = JSON.parse(text);
        data.push(obj);
        fs.writeFile ("data.json", JSON.stringify(data), 'utf8');
    } catch (e) {
        console.error(e);
    }
})();