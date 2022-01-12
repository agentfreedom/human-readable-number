module.exports = function toReadable (number) {
    const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

    if (number < 20) { 
        return num[number];
    } else if (number < 100) {
        return tens[~~(number/10)-2] + (digit? " " + num[digit]: "");
    }
}
