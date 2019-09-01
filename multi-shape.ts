import { LinkNode } from './link-node';
import { LinkList } from './link-list';

export class MultiShape<T> {
  private head: LinkNode<T>;
  private tail: LinkNode<T>;
  private aboveLinkList: LinkList<T>;
  private belowLinkList: LinkList<T>;

  constructor(head: T, tail: T) {
    this.head = new LinkNode(head);
    this.tail = new LinkNode(tail);
    this.aboveLinkList = new LinkList();
    this.belowLinkList = new LinkList();
  }

  add(node: T, compareFn: (head: LinkNode<T>, tail: LinkNode<T>, node: LinkNode<T>) => boolean) {
    const linkNode = new LinkNode(node);
  }

  private addByCompare(node: LinkNode<T>, compareFn: (head: LinkNode<T>, tail: LinkNode<T>, node: LinkNode<T>) => boolean) {
    if (compareFn.call(this, this.head, this.tail, node)) {
      this.belowLinkList.add(node);
    } else {
      this.aboveLinkList.add(node);
    }
  }

  toArray() {
    return [this.head.value, ...this.aboveLinkList.toArray(), this.tail.value, ...this.belowLinkList.toArray().reverse()];
  }
}
