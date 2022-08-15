define(['baseModel'],
    function (BaseModel) {
        let glossaryModel = BaseModel.extend({
            initialize: function () {

                console.log("Model -> Daily");

                this.set('endPoint', 'https://api.weather.gov/glossary');

                this.fetch();
            },

            url: function () {
                return this.get('endPoint');
            }
        });

        return glossaryModel;
    });

// https://api.weather.gov/glossary
