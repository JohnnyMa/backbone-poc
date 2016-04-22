var rfr = require('rfr');
var UserItemView = rfr('app/js/views/UserItemView.js');

var WorkspaceRouter = Backbone.Router.extend({

  routes: {
    "user": "user", // #help
    "help": "help", // #help
    "search/:query": "search", // #search/kiwis
    "search/:query/p:page": "search" // #search/kiwis/p7
  },


  user: function() {
    var userList = new UserItemView();
    userList.render();
  },

  help: function() {
    // TODO
  },

  search: function(query, page) {
    // TODO
  }

});