define(['baseView', 'underscore', 'baseCollectionView'], 
    function(BaseView, _, baseCollectionView) {
        return navigationView = BaseView.extend({
            initialize: function() {

                console.log("init -> navigationView");

                this.listenTo(this.model, 'change', this.render);
            },

            el: '#navigation',

            template: _.template($("#navigation-template").html())
        });
    });
