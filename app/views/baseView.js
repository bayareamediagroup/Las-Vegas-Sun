define(['jquery', 'underscore', 'backbone'],
    function ($, _, Backbone) {
        return baseView = Backbone.View.extend({
            el: "#content",
            render: function () {
                return this.$el.html(this.template(this.model.toJSON()));
            }
        });
    });
