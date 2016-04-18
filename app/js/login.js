var AppLayoutView = Marionette.LayoutView.extend({
  template: Marionette.Renderer.render("poc_login"),

  regions: {
    content: "#container"
  }
});

var layoutView = new AppLayoutView();
layoutView.render();