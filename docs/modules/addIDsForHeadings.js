const createLinkForID = require('./createLinkForID');

const addIDsForHeadings = ({ document }) => {
	const categoryTitles = document.querySelectorAll('article > h2');
	categoryTitles.forEach(title => {
		const parent = title.parentElement;
		title.parentElement.id = createLinkForID(title.innerHTML)
	});
}

module.exports = addIDsForHeadings;
