class Solution {
    constructor() {
        this.parent = [];
        this.rank = [];
    }

    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        this.parent = new Array(n);
        this.rank = new Array(n);

        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }

        let result = n;
        for (let i = 0; i < edges.length; i++) {
            if (this.union(edges[i][0], edges[i][1]) === 1) {
                result--;
            }
        }

        return result;
    }

    /**
     * @param {number} node
     * @returns {number}
     */
    find(node) {
        let result = node;

        while (this.parent[result] !== result) {
            this.parent[result] = this.parent[this.parent[result]];
            result = this.parent[result];
        }

        return result;
    }

    /**
     * @param {number} n1
     * @param {number} n2
     * @returns {number}
     */
    union(n1, n2) {
        let p1 = this.find(n1);
        let p2 = this.find(n2);

        if (p1 === p2) {
            return 0;
        }

        if (this.rank[p2] > this.rank[p1]) {
            this.parent[p1] = p2;
            this.rank[p2] += this.rank[p1];
        } else {
            this.parent[p2] = p1;
            this.rank[p1] += this.rank[p2];
        }

        return 1;
    }
}
