define(['baseModel'],
    function (BaseModel) {
        let dailyModel = BaseModel.extend({
            initialize: function () {

                console.log("Model -> Daily");

                this.set('endPoint', 'https://api.weather.gov/gridpoints/');
                this.set('gridId', 'VEF');
                this.set('gridX', '123');
                this.set('gridY','91');
                this.set('product', 'forecast');

                this.fetch();
            },

            url: function () {
                return this.get('endPoint') + this.get('gridId') + "/" + this.get('gridX') + "," + this.get('gridY') + "/" + this.get('product');
            }
        });

        return dailyModel;
    });

/* https://api.weather.gov/gridpoints/LWX/{gridX},{gridY}/forecast
 *
 * https://api.weather.gov/gridpoints/VEF/123,91/forecast
 * */
