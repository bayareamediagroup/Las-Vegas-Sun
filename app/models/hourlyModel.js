define(['baseModel'],
    function (BaseModel) {
        let hourlyModel = BaseModel.extend({
            initialize: function () {

                console.log("Model -> Hourly");

                this.set('endPoint', 'https://api.weather.gov/gridpoints/');
                this.set('gridId', 'MTR');
                this.set('gridX', '85');
                this.set('gridY','105');
                this.set('product', 'forecast/hourly');

                this.fetch();
            },

            url: function () {
                return this.get('endPoint') + this.get('gridId') + "/" + this.get('gridX') + "," + this.get('gridY') + "/" + this.get('product');
            }
        });

        return hourlyModel;
    });

/*
* https://api.weather.gov/gridpoints/LWX/97,71/forecast/hourly
* */
