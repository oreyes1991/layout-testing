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
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.className = 'map';
		const layoutPE = 
		`00000000000000000000000000000
		00000000000000000000000000000
		00000000000000000000000000000
		00000000000000000000000000000
		00000000000000000000000000000
		00000000000000111000000000000
		00000000000001111110000000000
		00000000000111111111111111000
		00100000111111111111111111000
		11110011111111111111111100100
		11111111111111111111100000000
		10111111111111111111000000000
		00111111111111111111000000000
		00001111111111111100000000000
		00000011111111111111000000000
		00000011111111111111000000000
		00000001111111111111111111100
		00000000111111111111111111111
		00000000001111111111111111111
		00000000000111111111111111111
		00000000000011111111111111111
		00000000000001111111111111111
		00000000000000001111111111111
		00000000000000000011011111111
		00000000000000000000000011111
		00000000000000000000000001011
		00000000000000000000000000000
		00000000000000000000000000000
		00000000000000000000000000000
		00000000000000000000000000000`;
		
		for (let i = 1; i <= 30; i++) {
			for (let j = 1; j <= 30; j++) {
				const el = document.createElement('div');
				el.className = 'point-transparent';
				el.setAttribute('coord', `${i}-${j}`)
				content.appendChild(el);
			}
		}

		this.createMap(layoutPE, content);
		return content;
	}
	/**
	 * 
	 */
	createMap (layout, m) {
		layout.split('\n').forEach((ln, i) => {
			ln.split('').forEach((n, j) => {
				let el = m.querySelectorAll(`[coord="${i + 1}-${j + 1}"]`);
				if (el[0]) {
					el[0].className = n === '1' ? 'point-blank' : 'point-transparent';
				}
			})
		})
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
