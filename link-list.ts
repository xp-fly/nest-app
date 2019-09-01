import { LinkNode } from './link-node';

export class LinkList<T> {
  private head: LinkNode<T>;
  private tail: LinkNode<T>;

  add(node: LinkNode<T>) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  toArray(): T[] {
    const arr: T[] = [];
    let temp = this.head;
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    return arr;
  }
}
