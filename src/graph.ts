import {singleton, graph, provides, ObjectGraph} from 'react-obsidian';

@singleton() @graph()
export class MainGraph extends ObjectGraph {
  @provides()
  foo() {
    return 'foo';
  }
}