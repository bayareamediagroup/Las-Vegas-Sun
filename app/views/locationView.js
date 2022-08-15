define(['baseView', 'underscore', 'baseCollectionView'], 
    function(BaseView, _, baseCollectionView) {
        return locationView = BaseView.extend({
            initialize: function() {
                console.log("View -> Location");
                this.listenTo(this.model, 'change', this.render);
            },

            el: '#location',

            template: _.template($("#location-template").html())
        });
    });
