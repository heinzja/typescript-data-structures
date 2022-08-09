export class Node {

    public data: any;
    public next: Node | null;

    constructor(data: any = null, next: Node | null = null) {
        this.data = data;
        this.next = next;
    }

}
