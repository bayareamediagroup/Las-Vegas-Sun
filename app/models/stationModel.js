define(['baseModel'],
  function (BaseModel) {
    let stationModel = BaseModel.extend({
      initialize: function () {
        console.log("Model -> Station");

        this.set('endPoint', 'https://api.weather.gov');
        this.set('product', 'gridpoints'); 
        this.set('gridId', 'VEF');
        this.set('gridX', '123');
        this.set('gridY', '91');
        this.set('api', 'stations');

        this.fetch()
      },

      url: function () {
        return this.get('endPoint') + "/" + this.get('product') + "/" + this.get('gridId') + "/" + this.get('gridX') + "," + this.get('gridY') + "/" + this.get('api');
      }
    });
    return stationModel;
  });

/* https://api.weather.gov/gridpoints/VEF/123,91/stations
 * */
