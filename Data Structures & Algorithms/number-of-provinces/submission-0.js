class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     */
    findCircleNum(isConnected) {
        let adjacency = {}

        for (let i = 0; i < isConnected.length; i++) {
            for (let j = 0; j < isConnected[0].length; j++) {
                let val = isConnected[i][j]

                if (val === 1) {
                    if (!adjacency[i]) {
                        adjacency[i] = [j]
                    } else {
                        adjacency[i].push(j)
                    }
                }
            }
        }

        let visited = new Set()
        let count = 0

        for (let key in adjacency) {
            let keyNum = parseInt(key)
            count += dfs(keyNum)
        }

        function dfs(currNode) {
            if (visited.has(currNode)) return 0
            visited.add(currNode)

            let neighbours = adjacency[currNode] 

            for (let n of neighbours) {
                dfs(n)
            }

            return 1
        }

        return count
    }
}
