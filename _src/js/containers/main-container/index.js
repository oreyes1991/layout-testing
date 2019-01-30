import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../handlers';
import '../../components/map';

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.id = 'map-container';
		const counter = document.createElement('mf-map');
		content.appendChild(counter);
		return content;
	}
}

window.customElements.define('main-container', MainContainer);
