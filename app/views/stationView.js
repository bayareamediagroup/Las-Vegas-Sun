define(['baseView', 'underscore', 'baseCollectionView'], 
  function(BaseView, _, baseCollectionView) {
    return stationView = BaseView.extend({
      initialize: function() {
        console.log("View -> Station");
        this.listenTo(this.model, 'change', this.render);
      },

      el: '#station',

      template: _.template($("#station-template").html())
    });
  });
