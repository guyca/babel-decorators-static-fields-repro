import { inject, injectable } from "react-obsidian";
import { MainGraph } from "./graph";

@injectable(MainGraph)
export class Main {
  @inject() foo!: String;

  static displayName = 'Main';

  print() {
    console.log(`injected {foo: ${this.foo}} into ${Main.displayName}`);
  }
}

new Main().print();