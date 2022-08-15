define(['baseModel'],
    function (BaseModel) {
        let alertModel = BaseModel.extend({

            initialize: function () {
                console.log("Model Alert");

                this.set('endPoint', 'https://api.weather.gov/alerts/active/area/');
                this.set('state', 'NV');

                this.fetch()
            },

            url: function () {
                return this.get('endPoint') + this.get('state');
            }
        });

        return alertModel;
    });

/* https://api.weather.gov/alerts/active/area/NV
 * */
