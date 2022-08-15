define(['baseView', 'underscore', 'baseCollectionView'], 
    function(BaseView, _, baseCollectionView) {
        return observationView = BaseView.extend({
            initialize: function() {
                console.log("View -> Observation");
                this.listenTo(this.model, 'change', this.render);
            },

            el: '#observation',

            template: _.template($("#observation-template").html())
        });
    });
