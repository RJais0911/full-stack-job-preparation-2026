async function processObj() {
    const obj = { a: 1, b: 2, c: 3 };

    for (const key in obj) {
        const value = await new Promise((resolve) => {
            setTimeout(() => resolve(obj[key] * 2), 1000);
        });
        console.log(`${key}: ${value}`);
    }

    console.log("Object processing done!");
}

processObj();
