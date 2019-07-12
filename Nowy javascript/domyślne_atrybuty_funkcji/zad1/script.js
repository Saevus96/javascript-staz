const tab1 = [1, 2, 3, 6, 5];
const tab2 = [10, 20, 15, 4];

const tab3 = [...tab1, ...tab2];



tab3.sort((a, b) => {
    return a > b;
});
console.log(tab3);

const max = Math.max(...tab3);
console.log("max to : ", max);
const min = Math.min(...tab3);
console.log("min to : ", min);