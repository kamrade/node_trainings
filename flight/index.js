var Flight = function() {

	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};

	this.fill = function(info) {
		for (var prop in this.data) {
			if (this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}		
	};

	this.triggerDepart = function() {
		this.data.actualDepart = Date.now();
	};
	
	this.triggerArrive = function() {
		this.data.actualArrive = Date.now();
	};
	
	this.getInformation = function() {
		return this.data;
	};

};

var counter = 0;
var dest = [];

exports.create = function(info) {
	var instance = new Flight();
	instance.fill(info);

	counter++;
	
	if (dest.indexOf( info['destination']) < 0 ) {
		dest.push( info['destination'] );
	}

	return instance;
};

exports.getCount = function() {
	return counter;
};

exports.getDestinations = function() {
	return dest;
};