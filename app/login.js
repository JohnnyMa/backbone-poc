var LoginView = Backbone.View.extend({
	el: '#container',
	events: {
		'click #login-btn': 'loginHandler'
	},

	render: function() {
		console.log(this.$el);
		this.$el.html(Marionette.Renderer.render("poc_login"));
		return this;
	},

	loginHandler: function() {
		console.log('loginHandler....');
	}
});

new LoginView().render();