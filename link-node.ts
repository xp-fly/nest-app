export class LinkNode<T> {
  public value: T;
  public next: LinkNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
