import { LinkedList } from "../linked-list";
import { Node } from "../node/node";

export class SinglyLinkedList extends LinkedList {

    constructor(node: Node | null = null) {
        super(node);
    }

    // creates a new node and inserts that node
    // with the provided data value into the linked list
    // @param - value: any - data to store into the linked list
    // @returns - void
    public insert(value: any): void {
        let tmp, p: Node;
        tmp = new Node(value);

        if (this.head == null) {
            this.head = tmp;
        } else {
            p = this.head;
            while (p.next != null) {
                p = p.next;
            }
            p.next = tmp;
        }
    }

    // deletes the head node and replaces it with head.next
    // or null if head.next does not exist.
    public deleteHead(): void {
        if (this.head) {
            let tmp = this.head;
            this.head = tmp.next;
        }
    }

    // deletes the last node in the linked list
    public deleteLastNode(): void {
        if (this.head) {
            let tmp, prev: Node;
            
            if(this.head.next == null) {
                this.head = null;
            } else {
                tmp = this.head;
                prev = tmp;
                while (tmp.next != null) {
                    prev = tmp;
                    tmp = tmp?.next;
                }
                prev.next = null;
            }
        }
    }

    // deletes a node with a specific value and connects 
    // the previous node and node.next
    public deleteSpecificNode(key: any) {
        let tmp, prev : Node | null;
        tmp = this.head;
        prev = null;

        // override head if data matches key
        if(tmp != null && tmp.data == key){
            this.head = tmp.next;
        }

        while(tmp != null && tmp.data != key){
            prev = tmp;
            tmp = tmp.next;
        }

        if( tmp == null ){
            return;
        }

        if(prev != null){
            prev.next = tmp.next;
        }
    }

    // prints the contents of the singly linked list as a string
    public toString(): string {
        let result: string = "";

        if (this.head != null) {
            let tmp: Node = this.head;
            while (tmp.next != null) {
                result = result + " " + tmp.data;
            }
            result = result + " " + tmp.data;
        }

        return result;
    }
}
