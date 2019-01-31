import '@webcomponents/webcomponentsjs';
import '../containers/main-container';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.createElement('main-container');
	document.querySelector('.right-side-content').appendChild(container);
})
