function fetchData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched:", id);
            resolve(id * 10);
        }, 1000);
    });
}

async function processData() {
    const ids = [1, 2, 3];

    for (const id of ids) {
        const result = await fetchData(id); // waits 1s each
        console.log("Result:", result);
    }

    console.log("All done!");
}

processData();
