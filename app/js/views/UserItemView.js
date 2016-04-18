var UserItemView = Marionette.ItemView.extend({
	tagName: 'li',
	template: _.template('<%= firstName %> <%= lastName %>'),
	onRender: function() {
		// After render functionality here
	},
	onClose: function() {
		// Do some cleanup here
	}
});

export UserItemView;