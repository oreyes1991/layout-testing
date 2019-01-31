import { MetaComponent } from '@rebelstack-io/metaflux';
import '../../handlers';
import './index.css';

class Map extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
		this.createMap = this.createMap.bind(this);
		this.createCoordsActives = this.createCoordsActives.bind(this);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.className = 'map';
		const layout = global._mapData.layout;
		const coords = global._mapData.coords;
		for (let i = 1; i <= 21; i++) {
			for (let j = 1; j <= 30; j++) {
				const el = document.createElement('div');
				el.className = 'point-transparent';
				el.setAttribute('coord', `${i}-${j}`)
				content.appendChild(el);
			}
		}
		this.createMap(layout, content);
		this.createCoordsActives(coords, content);
		return content;
	}
	/**
	 * create the shape of the map, 
	 * layout is a sting of 21 lines, 30 characters each line
	 * if char = 0 is transparent and 1 a blank point
	 */
	createMap (layout, m) {
		try {
			layout.split('\n').forEach((ln, i) => {
				ln.split('').forEach((n, j) => {
					let el = m.querySelectorAll(`[coord="${i + 1}-${j + 1}"]`);
					if (el[0]) {
						el[0].className = n === '1' ? 'point-blank' : 'point-transparent';
					}
				})
			})
		} catch (err) {
			console.error('Map.createMap', err);
		}
	}
	/**
	 * set the dots you wanna interact with in the map
	 */
	createCoordsActives (coords, m) {
		try {
			coords.forEach(c => {
				const el = m.querySelectorAll('[coord="'+ c.coord +'"]');
				el[0].className = 'point-active';
			})
		} catch (err) {
			console.error('Map.createCoordsActive', err);
		}
	}
	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
			'INCREMENT': action => {
				this.text.textContent = this.storage.getState().Main.value;
			}
		};
	}
}

window.customElements.define('mf-map', Map);
