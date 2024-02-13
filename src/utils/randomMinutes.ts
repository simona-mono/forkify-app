export function getRandomNumber(): number {
    const min = 6;
    const max = 25;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min) * 5;
    return randomNumber;
}

