define(['baseModel'],
    function (BaseModel) {
        let locationModel = BaseModel.extend({
            initialize: function () {
                console.log("Model -> Location");

                this.set('endPoint', 'https://api.weather.gov/points');
                this.set('lat', '36.0376'); 
                this.set('lon', '-115.0763'); 

                this.fetch()
            },

            url: function () {
                return this.get('endPoint') + "/" + this.get('lat') + "," + this.get('lon');
            }
        });
        return locationModel;
    });

/* https://api.weather.gov/points/36.0376,-115.0763
 * */
