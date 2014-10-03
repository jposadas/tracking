/* Tracking of Website */

(function(window, $, _undefined) {

	$(document).ready(function() {
		
		var tracking = new Firebase('https://sweltering-fire-7687.firebaseio.com/tracking');

		$.get('http://ipinfo.io', function(response) {

			tracking.push({
				'date': getCurrentDate(),
				'ip': response.ip,
				'city': response.city || '',
				'region': response.region || '',
				'country': response.country || ''
			});

		}, 'jsonp');

		

	});

	var getCurrentDate = function() {
		var d = new Date();

		var month = d.getMonth() + 1;
		var day = d.getDate();
		var hour = d.getHours();
		var minute = d.getMinutes();
		var second = d.getSeconds();

		var output = d.getFullYear() + '-' +
		    ((''+month).length<2 ? '0' : '') + month + '-' +
		    ((''+day).length<2 ? '0' : '') + day + ' ' +
		    ((''+hour).length<2 ? '0' :'') + hour + ':' +
		    ((''+minute).length<2 ? '0' :'') + minute + ':' +
		    ((''+second).length<2 ? '0' :'') + second;

		return output;
	};

})(window, jQuery);
