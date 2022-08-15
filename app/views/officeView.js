define(['baseView', 'underscore', 'baseCollectionView'], 
    function(BaseView, _, baseCollectionView) {
        return officeView = BaseView.extend({
            initialize: function() {
                console.log("View -> office");
                this.listenTo(this.model, 'change', this.render);
            },

            el: '#office',

            template: _.template($("#office-template").html())
        });
    });
