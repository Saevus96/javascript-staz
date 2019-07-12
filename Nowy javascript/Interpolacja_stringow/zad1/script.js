const myPerson = {
    name: "Konrad",
    height: 190,
    calculateAge() {
        const date1 = new Date(1996, 3, 29);
        const date2 = new Date();
        let diff = new Date(date2.getTime() - date1.getTime());
        return diff.getUTCFullYear() - 1970;
    }
}

console.log(myPerson.calculateAge());