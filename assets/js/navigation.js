const _d = document.body;

_d.onscroll = (e)  => {
	const _y = e.path ? e.path[1].scrollY : e.pageY
	isScrolledIntoView(_y);
	var header = document.getElementById("main-header");
	var sticky = header.offsetTop;
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

const places = ['machupichu', 'paracas', 'tarapoto']

places.forEach(p => {
	const dot = document.querySelector(`div[target="${p}"]`);
	dot.addEventListener('click', () => {
		onClicked(p);
	})
})


function onClicked (id) {
	const target = document.querySelector('#' + id);
	target.scrollIntoView();
}


function isScrolledIntoView(y) {
	try {
		const _arr = document.querySelector('.main') !== null ? document.querySelector('.main').children : [];
		for(let i = 0; i < _arr.length; i++) {
			if (_arr[i].offsetTop < (y + 150) && y < _arr[i].offsetTop + _arr[i].offsetHeight) {
				if (_arr[i].id !== 'navigation') {
					const target = document.querySelector(`div[target="${_arr[i].id}"]`);
					document.querySelector('#navigation > span > div.active').classList.remove('active');
					target.classList.add('active');
				}
			}
		}
	} catch {
		console.log('isScrolledIntoView');
	}
}