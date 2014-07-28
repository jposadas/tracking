(function ($) {

	var tracking = new Firebase('https://sweltering-fire-7687.firebaseio.com/tracking');

	$(document).ready(function () {

		$.ajax( { 
		  url: 'http://freegeoip.net/json/', 
		  type: 'POST', 
		  dataType: 'jsonp',
		  success: function(location) {
		    console.log(location);
		    tracking.push({ 
		    	'time': getCurrentDate(),
		    	'country_code': location.country_code,
		    	'country': location.country_name,
		    	'ip_address': location.ip
		    });
		  }
		});

		

	});

	var getCurrentDate = function() {
		var d = new Date();

		var month = d.getMonth()+1;
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

	$('#get-count').click(function() {
		tracking.once('value', function(snapshot) {
			var count = snapshot.numChildren();
			console.log(count);
		});
	});

})(jQuery);