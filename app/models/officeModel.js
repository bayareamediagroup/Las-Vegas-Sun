define(['baseModel'],
    function (BaseModel) {
        let officeModel = BaseModel.extend({
            initialize: function () {

                console.log("Model -> office");

                this.set('endPoint', 'https://api.weather.gov/offices/');
                this.set('id', 'ABQ');

                this.fetch();
            },

            url: function () {
                return this.get('endPoint') + this.get('id');
            }
        });

        return officeModel;
    });
/* https://api.weather.gov/offices/ABQ
 * */
