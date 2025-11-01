class ListNode<T> {
    constructor(public value: T, public next?: ListNode<T>) {
    }
}

class LinkedList<T> {

    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;

    add(value: T) {
        const newNode = new ListNode<T>(value);
        if (!this.root || !this.tail) {
            this.length = 1;
            this.root = newNode;
            this.tail = newNode;
        } else {
            // let current = this.root;
            // while (current.next) {
            //     current = current.next;
            // }
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }
    insertAt(value: T, pos: number) {
        if (pos > -1 && pos < this.length && this.root) {
            let current = this.root;
            let index = 0;
            let previous = current;
            let node = new ListNode(value);

            if (pos === 0) {
                node.next = this.root;
                this.root = node;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    removeAt(pos: number) {
        if (pos > -1 && pos < this.length && this.root) {
            let current = this.root;
            let previous: ListNode<T> = current;
            let index = 0;

            if (pos === 0 ) {
                // @ts-ignore
                this.root = current.next;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current;
        } else {
            return null;
        }
    }

    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    get size() {
        return this.length;
    }

    get rootValue() {
        return this.root?.value;
    }

    get tailValue() {
        return this.tail?.value;
    }

}


const numberList = new LinkedList<number>();
numberList.add(1)
numberList.add(2)
numberList.add(3)
numberList.add(30)
numberList.add(-100)
numberList.insertAt(10, 2);

const namesList = new LinkedList<string>();

console.log(numberList.size);
console.log(numberList.rootValue);
console.log(numberList.tailValue);
numberList.print();
numberList.removeAt(2);
console.log(`\nRemoved element at position 2`);
numberList.print();