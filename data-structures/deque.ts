import DoublyLinkedList from './DoublyLinkedList';

class Deque<T> extends DoublyLinkedList<T> {
    enqueue(element: T): void {
        this.push(element);
    }

    enqueueFront(element: T):void {
        this.unshift(element);
    }

    dequeue(): T| undefined { 
        return this.shift();
    }

    dequeueBack(): T | undefined { 
        return this.pop();
    }
}


export default Deque;
