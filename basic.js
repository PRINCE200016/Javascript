function countVowels(string) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (const char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(count);
console.log( "arjun");}