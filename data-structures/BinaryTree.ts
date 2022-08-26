import BinaryTreeNode from "./BinaryTreeNode";

class BinaryTree<T> {
    public root: BinaryTreeNode<T> | null;


    constructor(value: T) {
        this.root = value == null?  null: new BinaryTreeNode(value);
    }

    size():number {
        if(!this.root) {
            return 0;
        }
        return this.root.size()
    }

    height():number  {
        return  !this.root ? 0 : this.root.height();
    }

}