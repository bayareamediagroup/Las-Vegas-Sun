define(['jquery', 'underscore', 'backbone'], 
    function ($, _, Backbone) {

        let baseModel = Backbone.Model.extend({
            initialize: function () {
                console.log('init -> baseModel')
            },
            defaults: {
                baseUrl: 'https://weather.ls.hereapi.com/weather/1.0/report.json?',
                apiKey: 'z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc',
                metric: 'false',
                city: 'oakland',
                state: 'ca'
            }
        })
        return baseModel;
    })
