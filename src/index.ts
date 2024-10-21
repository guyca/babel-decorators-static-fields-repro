import { inject, injectable } from "react-obsidian";
import { MainGraph } from "./graph";

class Base {
  static something = 'something';
}

@injectable(MainGraph)
export class Main extends Base {
  @inject() foo!: String;

  static displayName = 'Main';

  print() {
    console.log(`injected {foo: ${this.foo}} into ${Main.displayName}`);
  }
}

new Main().print();