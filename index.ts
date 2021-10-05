let vardas: string = "Jurgis"

console.log("Labas, pasauli!");
console.log(`Zdarovas ${vardas}`);

const x: number = 1;
const y: number = 2;

1 + "1"; // "11"
1 + 1; // 2

const z = y + x;

const vardai: string[] = ["jonas", "maryte"];
vardai.push("jovita");

function pasisveikinti(pasisveikinimas: "Zdarova" | "Hello", vardas: string): void {
    console.log(`${pasisveikinimas} - ${vardas}`);
};
pasisveikinti("Zdarova", vardai[0]);

function suma(skaicius1: number, skaicius2: number): number {
    return skaicius1 + skaicius2;
};
suma(123, 43);
