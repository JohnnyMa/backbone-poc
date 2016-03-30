(function() {
	window.jma = {};
	jma.controllers = {};
	jma.model = {};
	jma.app = {};
	jma.template = {};

	var MyApplication = Marionette.Application.extend({
		initialize: function(options) {
			// TODO load initial data here...
			console.log('My container:', options.container);
		}
	});

	// Although applications will not do anything
	// with a `container` option out-of-the-box, you
	// could build an Application Class that does use
	// such an option.
	var options = {
			something: "some value",
			another: "#some-selector"
		},
		app = new MyApplication({
			container: '#main'
		});

	app.on("before:start", function(options) {
		options.moreData = "Yo dawg, I heard you like options so I put some options in your options!";
	});

	app.on("start", function(options) {
		console.log('start options:');
		console.log(options);
		if (Backbone.history) {
			Backbone.history.start();
		}
	});

	app.start(options);
	jma.app = app;


})();