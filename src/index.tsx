import { h, render } from 'preact';
import App from './components/App';

const app = document.getElementById('app') as Element;

// Using app argument to fix hot updates - fresh app component will replace the existing one 
render(<App />, document.body, app);