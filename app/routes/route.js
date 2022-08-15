define(['baseRoute'], 
    function (BaseRoute) {
        return route = BaseRoute.extend({
            initialize: function () {
                console.log("Route -> route");
            },

            routes: {
                '': 'start',
                'day/:d1': 'forecast_details',
                'day/:d2': 'forecast_details',
                'day/:d3': 'forecast_details',
                'day/:d4': 'forecast_details',
                'day/:d5': 'forecast_details',
                'day/:d6': 'forecast_details',
                'day/:d7': 'forecast_details',
                'day/:d8': 'forecast_details',
                'day/:d9': 'forecast_details',
                'day/:d10': 'forecast_details',
                'day/:d11': 'forecast_details',
                'day/:d12': 'forecast_details',
                'day/:d13': 'forecast_details',
                'day/:d14': 'forecast_details',
                delete: 'delete',
                sort: 'sort',
                '*default': 'defaultRoute'
            },

            forecast_details: function(name) {
                console.log("I am a test...", name);
            },

            start: function () {
                console.log('init -> start function route');
            },

            sort: function () {
                new sortView({
                    model: new sortModel(),
                    el: '#content'
                });
            },

            _default: function () {
                new deleteView({
                    model: new deleteModel(),
                    el: '#content'
                });
            }
        });
    });
