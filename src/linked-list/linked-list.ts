import { Node } from "./node/node";

export abstract class LinkedList {
    public head: Node | null;

    constructor(node: Node | null = null) {
        this.head = node;
    };

    public abstract insert(node: Node): void;

}
