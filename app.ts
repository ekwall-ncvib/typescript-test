console.log("Hello");

let apa: any = "hello";
const nisse: number = 1;

for (let i: number = 0; i < 10; i++) {
    if (i === nisse) {
        apa = "hello again";
    }
}

console.log(apa);