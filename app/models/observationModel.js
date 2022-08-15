define(['baseModel'],
    function (BaseModel) {
        let observationModel = BaseModel.extend({
            initialize: function () {
                console.log("Model -> Observation");

                this.set('endPoint', 'https://api.weather.gov/stations');
                this.set('station', 'KLVS');
                this.set('product', 'observations/latest');
                this.set('qc', true);

                this.fetch()
            },

            url: function () {
                return this.get('endPoint') + "/" + this.get('station') + "/" + this.get('product') + "?require_qc=" + this.get('qc');
            }
        });

        return observationModel;
    });

/* https://api.weather.gov/stations/KLVS/observations/latest?require_qc=false
 * */
