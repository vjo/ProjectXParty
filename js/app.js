(function() {

	function byId(id) {
		return document.getElementById(id);
	}

	function update() {

		var start = new Date(2012, 05, 09, 20, 30, 00, 000);
		var ts = countdown(start, null);

		document.getElementById('counter').innerHTML = ts.toHTML("span") || "";
	}

	setInterval(update, 1000/30);

})();