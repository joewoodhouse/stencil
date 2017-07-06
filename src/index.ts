import * as interfaces from './util/interfaces';

export {
  VNodeData,
  CssClassObject,
} from './util/interfaces';

export declare const Component: interfaces.ComponentDecorator;

export declare const h: interfaces.Hyperscript;

export declare const Ionic: interfaces.Ionic;

export declare const Listen: interfaces.ListenDecorator;

export declare const Method: interfaces.MethodDecorator;

export declare const Prop: interfaces.PropDecorator;

export declare const State: interfaces.StateDecorator;

export declare const PropWillChange: interfaces.PropChangeDecorator;

export declare const PropDidChange: interfaces.PropChangeDecorator;

export * from './compiler';
