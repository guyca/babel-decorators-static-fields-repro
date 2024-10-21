import { inject, injectable } from "react-obsidian";
import { MainGraph } from "./graph";

class Base {
  static something = 'something';
}

@injectable(MainGraph)
export class Main extends Base {
  @inject() foo!: String;
  @inject("foo") foo2!: String;
  @inject("foo") foo3!: String;

  static displayName = 'Main';

  baz?: String;
  bar = false

  static options() {
    return {}
  }

  print() {
    console.log(`injected {foo: ${this.foo}} into ${Main.displayName}`);
  }
}

new Main().print();