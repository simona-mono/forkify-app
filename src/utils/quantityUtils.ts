import Fraction from 'fraction.js';

export const adjustQuantity = (quantity: string, servings: number): string => {
    if (!quantity) return ''; // return empty if quantity is not present
    
    const words = quantity.split(' ');
    const amount = words[0]; 

    // if the amount is a fraction
    if (amount.includes('/')) {
        const [numeratorStr, denominatorStr] = amount.split('/');
        const numerator = parseInt(numeratorStr); // parse numerator into an integer
        const denominator = parseInt(denominatorStr); // parse denominator into an integer

        if (isNaN(numerator) || isNaN(denominator)) {
            return ''; // return empty string if numerator or denominator is not a number
        }

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
