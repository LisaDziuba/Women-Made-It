const addClassNameToUL = (document, ul, classNames) => {
	const getUL = document.querySelector(ul);
	classNames.map(c => getUL.classList.add(c));
}

const addTileClassNameToParent = (document) => {
	addClassNameToUL(document, '.design__tools ul', ['tiles', 'tiles--bg-light', 'tiles--bordered']);
	addClassNameToUL(document, '.how-it-works ul', ['how-it-works__workflow', 'workflow']);
	addClassNameToUL(document, '.cherry ul', ['tiles']);
	//how-it-works__workflow workflow--blogs workflow
	addClassNameToUL(document, '.how-it-works-two ul', ['how-it-works__workflow', 'workflow--blogs', 'workflow']);
};


const addTiles = (document) => {
	const palette = document.querySelectorAll('.design__tools ul li');

	palette.forEach((li) => {

		li.classList.add('tile');
		li.classList.add('tile--horizontal');

		const title = li.innerHTML.split(' — ')[0];
		const desc = li.innerHTML.split(' — ')[1].split('Made by ')[0];
		const author = li.innerHTML.split(' — ')[1].split('Made by ')[1].split('<img')[0];
		const imageLink = li.innerHTML.split(' — ')[1].split('Made by ')[1].split('<img')[1].split('"')[1];

		const tileText = document.createElement('div');
		tileText.classList.add('tile__text');
		tileText.innerHTML = `
				<p class="tile__description">${desc}</p>
				<div class="tile__link-wrapper">
					${author}
				</div>
		`;

		li.lastElementChild.parentNode.removeChild(li.lastElementChild);

		li.innerHTML = `
			<div class="tile__image" style="background-image: url('${imageLink}')"></div>
				${title}
			</div>
		`;

		li.appendChild(tileText);

	})

}

const Palette = ({ document }) => {
	addTileClassNameToParent(document);
	addTiles(document);
}

module.exports = Palette;
