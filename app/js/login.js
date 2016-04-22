var AppLayoutView = Marionette.LayoutView.extend({
  template: Marionette.Renderer.render("tpl_poc_login"),

  regions: {
    content: "#container"
  }
});

var layoutView = new AppLayoutView();
layoutView.render();