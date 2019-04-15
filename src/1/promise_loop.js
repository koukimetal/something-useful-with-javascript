// https://stackoverflow.com/questions/40328932/javascript-es6-promise-for-loop/40329190
for (let i = 0, p = Promise.resolve(); i < 10; i++) {
    p = p.then(
        // eslint-disable-next-line no-unused-vars
        _ =>
            new Promise(resolve =>
                setTimeout(function() {
                    console.log(i);
                    resolve();
                }, 1000)
            )
    );
}
console.log("hello");
