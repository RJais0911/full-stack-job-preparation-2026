function spliceData(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const removed = arr.splice(1, 2); // mutates array
            resolve(removed);
        }, 2000);
    });
}
async function run() {
    const data = [10, 20, 30, 40, 50];
    const removedItems = await spliceData(data);

    console.log("Removed:", removedItems);  //[20, 30]
    console.log("After Splice:", data); //[10, 40, 50]
}

run();
