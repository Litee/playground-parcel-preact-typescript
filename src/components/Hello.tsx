import { h, Component } from 'preact';

export default class Hello extends Component<HelloProps, any> {
	render(props: HelloProps) {
		let time = new Date().toLocaleTimeString();
		return <div className="greeting">Hello {props.name}! Time is {time}.</div>;
	}
}

export interface HelloProps {
	name: string;
}