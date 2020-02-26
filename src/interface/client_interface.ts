declare namespace glFunctions {
  interface ClientInterface {
    getAll(): string[][];
    create(item: string): void;
    delete(id: string): void;
  }
}
