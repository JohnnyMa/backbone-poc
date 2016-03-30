// Layout.js
(function() {
	// Create a new Layout.
	var layout = new Backbone.Layout({
		// Attach the Layout to the main container.
		el: "#container",

		// Use the previous defined template.
		//template: "#layout"
	});

	// Render the Layout.
	// layout.render();
	dust.render("table", {'name': 'jma'}, function(err, out) {
		$(self.el).html(out);
	});

	window.jma.ui.layout = layout;
})();