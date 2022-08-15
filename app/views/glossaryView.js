define(['baseView', 'underscore', 'baseCollectionView'], 
    function(BaseView, _, baseCollectionView) {
        return glossaryView = BaseView.extend({
            initialize: function() {
                console.log("Init -> Glossary");
                this.listenTo(this.model, 'change', this.render);
            },

            el: '#glossary',

            template: _.template($("#glossary-template").html())
        });
    });
