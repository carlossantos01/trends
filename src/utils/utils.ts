export function converteNumberToKOrM(number: number): string {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(number % 1000000 === 0 ? 0 : 1) + "M";
    }
    if (number >= 1000) {
        return (number / 1000).toFixed(number % 1000 === 0 ? 0 : 1) + "K";
    }
    return number.toString();
}