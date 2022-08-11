import Node, { DummyHeadNode, DummyTailNode, AbstractNode } from "./Node";

class DoublyLinkedList<T> {
  protected _dummyHead: DummyHeadNode;
  protected _dummyTail: DummyTailNode;
  protected _length: number;

  constructor() {
    this._dummyHead = new DummyHeadNode();
    this._dummyTail = new DummyTailNode();
    this._dummyHead.next = this._dummyTail;
    this._dummyTail.prev = this._dummyHead;
    this._length = 0;
  }

  push(element: T): number {
    const newLastNode = new Node(element);
    const lastNode = this._dummyTail.prev as AbstractNode;
    newLastNode.prev = lastNode;
    newLastNode.next = this._dummyTail;
    lastNode.next = newLastNode;
    this._length++;
    return this._length;
  }

  unshift(element: T): number {
    const newFirstNode = new Node(element);
    const firstNode = this._dummyHead.next as AbstractNode;
    newFirstNode.prev = this._dummyHead;
    newFirstNode.next = firstNode;
    firstNode.prev = newFirstNode;
    this._dummyHead.next = newFirstNode;
    this._length++;

    return this._length;
  }

  shift(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const firstNode = this._dummyHead.next as Node<T>;
    const newFirstNode = firstNode.next as AbstractNode;
    this._dummyHead.next = newFirstNode;
    newFirstNode.next = null;
    newFirstNode.prev = null;
    this._length--;

    return firstNode.value;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const lastNode = this._dummyTail.prev as Node<T>;
    const newLastNode = lastNode.prev as AbstractNode;
    this._dummyTail.prev = newLastNode;
    newLastNode.next = this._dummyTail;
    lastNode.next = null;
    lastNode.prev = null;
    this._length--;

    return lastNode.value;
  }

  isEmpty(): boolean {
    return this._length === 0;
  }

  front(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return (this._dummyHead.next as Node<T>).value;
  }

  back(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return (this._dummyTail.prev as Node<T>).value;
  }

  toArray(): Array<T> {
    const arr = [];
    let curr = this._dummyHead.next as Node<T>;

    for (let i = 0; i < this._length; i++) {
      arr.push(curr.value);
      curr = curr.next as Node<T>;
    }

    return arr;
  }

  static fromArray<T>(arr: Array<T>): DoublyLinkedList<T> {
    const dll = new DoublyLinkedList<T>()
    arr.forEach((el)=> dll.push(el))
    
    return dll
  }

  headNode(): Node<T> | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const head = this._dummyHead.next as Node<T>
    const tail = this._dummyTail.prev as Node<T>
    head.prev = null
    tail.next = null
    this._dummyHead.next = this._dummyTail
    this._dummyTail.prev = this._dummyHead
    this._length = 0

    return head
  }

  get  length(): number {
    return this._length
  }
}

export default DoublyLinkedList
