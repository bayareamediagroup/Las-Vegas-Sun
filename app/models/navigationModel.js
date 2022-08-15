define(['baseModel'],
    function (BaseModel) {
        let navigationModel = BaseModel.extend({

            initialize: function () {

                console.log("init -> navigationModel");

                this.set('baseUrl', 'https://weather.ls.hereapi.com/weather/1.0/report.json');
                this.set('product', 'observation&oneobservation=true');
                this.set('apiKey', 'z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc');
                this.set('zipcode', '60611');
                this.set('metric', 0);

                this.fetch()
            },

            url: function () {
                return this.get('baseUrl') + "?product=" + this.get('product') + "&apiKey=" + this.get('apiKey') + "&zipcode=" + this.get('zipcode') + "&metric=" + this.get('metric');
            }
        });

        return navigationModel;
    });
