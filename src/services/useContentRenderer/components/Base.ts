export abstract class Base<T> {
  protected abstract key: string;

  public data: T;

  constructor(data: T) {
    this.data = data;
  }

  getKey() {
    return this.key;
  }
}
