define(['baseModel'],
    function (BaseModel) {
        let pointsModel = BaseModel.extend({

            initialize: function () {

                console.log("Model -> Points");

                this.set('endPoint', 'https://api.weather.gov/points/');
                this.set('lat', '36.0376');
                this.set('lon', '-115.0763');

                this.fetch()
            },

            url: function () {
                return this.get('endPoint') + this.get('lat') + "," + this.get('lon');
            }
        });

        return pointsModel;
    });

/*
    1. https://api.weather.gov/points/36.0376,-77.0352
    2. Get gridX and gridY from properties 
    3. pass gridX and gridY to:
       https://api.weather.gov/gridpoints/LWX/{gridX},{gridY}/forecast
    4.  */
