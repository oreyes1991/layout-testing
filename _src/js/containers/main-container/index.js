import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../handlers';
import '../../components/map';

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.id = 'map-container';
		const title = document.createElement('h2');
		const subTitle = document.createElement('span');
		title.innerHTML = global._mapData.title || 'empty';
		subTitle.innerHTML = global._mapData.subTitle || 'empty';
		const map = document.createElement('mf-map');
		content.append(title, subTitle, map);
		return content;
	}
}

window.customElements.define('main-container', MainContainer);
