export default class Node {
    value: number
    left: Node | null = null
    right: Node | null = null


    constructor(value: number) {
        this.value = value
    }

    static getHeight = (root: Node | null): number => {
        if (root === null) {
            return 0
        }
        return 1 + Math.max(Node.getHeight(root.left), Node.getHeight(root.right))
    }
}