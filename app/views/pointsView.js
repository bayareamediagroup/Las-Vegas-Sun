define(['baseView', 'underscore', 'baseCollectionView'], 
    function(BaseView, _, baseCollectionView) {
        return pointsView = BaseView.extend({
            initialize: function() {
                console.log("View -> Points");
                this.listenTo(this.model, 'change', this.render);
            },

            el: '#points',

            template: _.template($("#points-template").html())
        });
    });
