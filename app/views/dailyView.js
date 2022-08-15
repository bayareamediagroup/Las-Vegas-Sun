define(['baseView', 'underscore', 'baseCollectionView'], 
    function(BaseView, _, baseCollectionView) {
        return dailyView = BaseView.extend({
            initialize: function() {
                console.log("init -> dailyView");
                this.listenTo(this.model, 'change', this.render);
            },

            el: '#daily',

            template: _.template($("#daily-template").html())
        });
    });
