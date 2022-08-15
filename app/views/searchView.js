define(['baseView', 'underscore', 'baseCollectionView'], 
    function(BaseView, _, baseCollectionView) {
        return searchView = BaseView.extend({
            initialize: function() {
                console.log("View -> Search");
                this.listenTo(this.model, 'change', this.render);
            },

            el: '#search',

            template: _.template($("#search-template").html())
        });
    });
