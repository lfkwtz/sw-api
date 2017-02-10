class ItemsService {
	/*@ngInject*/
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
		this.searchResults = [];
	}

	getItems(query) {
		this.$http.get(`https://swapi.co/api/people/?search=${query}`)
		.then((results) => {
			const data = results.data.results;
			this.searchResults = data;
		})
		// return this.$q.resolve([
		// 		{ id: 1, title: 'Sports', img: 'http://lorempixel.com/300/300/sports'},
		// 		{ id: 31, title: 'Cute little kitties!', img: 'http://lorempixel.com/300/300/cats'},
		// 		{ id: 15, title: 'Serious business', img: 'http://lorempixel.com/300/300/business'},
		// 		{ id: 125, title: 'The team', img: 'http://lorempixel.com/300/300/people'}
		// 	]);
	}
}

export default ItemsService;
