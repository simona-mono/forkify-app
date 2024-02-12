import Fraction from 'fraction.js';

export const adjustQuantity = (quantity: string, servings: number): string => {
    if (!quantity) return ''; // return empty if quantity is not present
    
    const words = quantity.split(' ');
    const amount = words[0]; 

    // if the amount is a fraction
    if (amount.includes('/')) {
        const [numerator, denominator] = amount.split('/').map(Number);
        const adjustedNumerator = numerator * servings;
        return new Fraction(adjustedNumerator, denominator).toFraction(true) + (words[1] ? ' ' + words[1] : ''); // include unit if present
    // if the amount is an integer
    } else if (!isNaN(parseFloat(amount))) { 
        const adjustedAmount = parseFloat(amount) * servings;
        const formattedAmount = adjustedAmount % 1 === 0 ? adjustedAmount.toFixed(0) : adjustedAmount.toFixed(2); // eliminate decimal places
        return formattedAmount + (words[1] ? ' ' + words[1] : ''); // include unit if present
    } else {
        return ''; // return empty if amount is NaN
    }
};
