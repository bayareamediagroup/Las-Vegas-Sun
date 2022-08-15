define(['baseModel'],
    function (BaseModel) {
        let searchModel = BaseModel.extend({
            initialize: function () {
                console.log("Model -> Search");
                this.set('endPoint', 'https://api.weather.gov/alerts/active/area/');
                this.set('state', 'NV');

                this.fetch()
            },

            url: function () {
                return this.get('endPoint') + this.get('state');
            }
        });

        return searchModel;
    });

/* https://api.weather.gov/alerts/active/area/NV
 * */
