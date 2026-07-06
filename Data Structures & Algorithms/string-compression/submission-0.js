class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
       let insert = 0;
    let i = 0;

    while (i < chars.length) {
        let group = 1;

        while ((i + group) < chars.length && chars[i + group] === chars[i]) {
            group++;
        }

        chars[insert] = chars[i];
        insert++;

        if (group > 1) {
            let countString = String(group);

            for (let digit of countString) {
                chars[insert] = digit;
                insert++;
            }
        }

        i += group;
    }

    return insert;
    }
}
