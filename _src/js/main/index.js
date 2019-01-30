import '@webcomponents/webcomponentsjs';
import '../containers/main-container';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.createElement('main-container');
	console.log(document.querySelector('.left-side-content'));
	document.querySelector('.left-side-content').appendChild(container);
})
