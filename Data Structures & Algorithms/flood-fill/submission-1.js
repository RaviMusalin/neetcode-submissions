class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
    const original = image[sr][sc]
    if (original === color) return image

    function recurse(r, c) {
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== original) {
            return
        }

        image[r][c] = color

        recurse(r + 1, c)
        recurse(r - 1, c)
        recurse(r, c + 1)
        recurse(r, c - 1)
    }

    recurse(sr, sc)
    return image
}
}