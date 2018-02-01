import { h } from 'preact';
import { shallow } from 'preact-render-spy';
import Hello from '../Hello';

describe('Hello component', () => {
	it('should render correctly', () => {
		const context = shallow(
			<Hello name="John Doe" />
		);
		expect(context).toMatchSnapshot();
	});

	it('should process click', () => {
		const context = shallow(
			<Hello name="John Doe" />
		);
		context.find('[onClick]').simulate('click');
		expect(context).toMatchSnapshot();
	});
});