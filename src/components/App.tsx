import { h, Component } from 'preact'; 
import Hello from './Hello';

export default class App extends Component<any, any> {
    render() {
        return (<div id="app"><Hello name="Andy"></Hello></div>);
    }
}