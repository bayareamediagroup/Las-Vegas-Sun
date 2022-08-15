define(['baseView', 'underscore', 'baseCollectionView'], 
    function(BaseView, _, baseCollectionView) {
        return alertView = BaseView.extend({
            initialize: function() {
                console.log("View -> Alert");
                this.listenTo(this.model, 'change', this.render);
            },

            el: '#alert',

            template: _.template($("#alert-template").html())
        });
    });
