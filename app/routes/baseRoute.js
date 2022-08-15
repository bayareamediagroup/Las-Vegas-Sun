define(['jquery', 'underscore', 'backbone'], 
    function ($, _, Backbone) {
        return baseRoute = Backbone.Router.extend({
            initialize: function () {
                console.log("init -> baseRoute");
            }
        });
    });
