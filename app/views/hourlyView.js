define(['baseView', 'underscore', 'baseCollectionView'], 
    function(BaseView, _, baseCollectionView) {
        return hourlyView = BaseView.extend({
            initialize: function() {
                console.log("View -> Hourly");
                this.listenTo(this.model, 'change', this.render);
            },

            el: '#hourly',

            template: _.template($("#hourly-template").html())
        });
    });
