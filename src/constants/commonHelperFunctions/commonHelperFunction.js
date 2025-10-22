


export function formatBalance(balance) {
    const numString = balance?.toString();
    // console.log("numString", numString);

    // Check if the number is less than 0.0000005
    if (Math.abs(Number(numString)) < 0.0000005) {
        return 0;
    }

    // Split the string into integer and fractional parts
    const parts = numString?.split(".");

    // If the fractional part has more than six digits, truncate it
    if (parts?.length > 1 && parts[1]?.length > 6) {
        return parseFloat(parts[0] + "." + parts[1]?.substring(0, 6));
    }

    return numString;
}