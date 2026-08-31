// slice and splice are synchronous methods, 
// but when wrapped inside a Promise or used with async/await, they execute at the scheduled async moment. 
// slice returns a copied array, while splice mutates the original array.”
function sliceData(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = arr.slice(1, 4); // copy
            resolve(result);
        }, 2000);
    });
}
async function run() {
    const data = [10, 20, 30, 40, 50];
    const sliced = await sliceData(data);
    console.log("Original:", data); // [10, 20, 30, 40, 50]
    console.log("Sliced:", sliced); // [20, 30, 40]
}

run();

