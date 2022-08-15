define(['jquery', 'underscore', 'backbone'], 
    function ($, _, Backbone) {
        return baseCollection = Backbone.Collection.extend({
            initialize: function() {
                console.log("init -> baseCollection");
            }
        });
    });
