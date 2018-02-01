import { h, Component } from 'preact';

export default class Hello extends Component<HelloProps, HelloState> {
	clickHandler: () => void;

	constructor() {
		super();
		this.state.counter = 0;
		this.clickHandler = () => {
			this.setState({counter : this.state.counter + 1});
		}
	}

	render(props: HelloProps, state: HelloState) {
		return <a class="greeting" onClick={this.clickHandler} href="#">Hello, {props.name}! You clicked me {state.counter} times.</a>;
	}
}

export interface HelloProps {
	name: string;
}

export interface HelloState {
	counter: number;
}