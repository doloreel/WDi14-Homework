var app = app || {};

app.AppView = Backbone.View.extend({

    el: '#main',
    render: function () {
        console.log("App view should be rendered now");
        var appViewTemplate = $("#appViewTemplate").html();
        this.$el.html( appViewTemplate );
        var secretInputView = new app.SecretInputView();
        secretInputView.render();

    }
})
