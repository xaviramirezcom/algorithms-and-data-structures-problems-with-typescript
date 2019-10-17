import Node from './Node'


describe("Calculate height of binary tree - Recursive", () => {

    let root: Node | null = null

    beforeEach(() => {


        //              3
        //            /   \
        //          2       5
        //        /
        //      1

        root = new Node(1)
        root.left = new Node(2)
        root.right = new Node(5)
        root.left.left = new Node(1)
    })

    test("Length 3", () => {
        expect(Node.getHeight(root)).toEqual(3)
    })

    test("Length 4", () => {

        //                  6
        //                /
        //              3
        //            /   \
        //          2       5
        //        /
        //      1
    
        let newRoot = new Node(6)
        newRoot.left = root
        expect(Node.getHeight(newRoot)).toEqual(4)
    })
})