import Flux from 'flux';
import {Actions} from './actions';
import ExampleStore from "./example-store";

class Dispatcher extends Flux.Dispatcher {
}

export default (new Dispatcher());