const fs = require("fs");

const obj = { a: 1 };

fs.readFile("data.json", "utf8", (err, text) => {
    if (err) {
        console.error(err);
        return;
    }
    const data = JSON.parse(text);
    data.push(obj);
    fs.writeFile("data.json", JSON.stringify(data), "utf8");
});
