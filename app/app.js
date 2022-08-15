require.config({
    baseUrl: 'app',
    paths: {
        backbone:   'https://backbonejs.org/backbone-min',
        jquery:     'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
        react:      'https://unpkg.com/react@17/umd/react.development',
        react_dom:  'https://unpkg.com/react-dom@17/umd/react-dom.development',
        typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/4.6.2/typescript.min',
        underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.2/underscore-min',

        /* Models
         * */
        baseModel: 'models/baseModel',
        alertModel: 'models/alertModel',
        observationModel: 'models/observationModel',
        dailyModel: 'models/dailyModel',
        hourlyModel: 'models/hourlyModel',
        officeModel: 'models/officeModel',
        stationModel: 'models/stationModel',
        locationModel: 'models/locationModel',
        pointsModel: 'models/pointsModel',
        glossaryModel: 'models/glossaryModel',
        searchModel: 'models/searchModel',

        /* Views
         * */
        baseView: 'views/baseView',
        baseCollectionView: 'views/baseCollectionView',
        collectionView: 'views/collectionView',
        alertView: 'views/alertView',
        observationView: 'views/observationView',
        dailyView: 'views/dailyView',
        hourlyView: 'views/hourlyView',
        locationView: 'views/locationView',
        officeView: 'views/officeView',
        pointsView: 'views/pointsView',
        searchView: 'views/searchView',
        stationView: 'views/stationView',
        glossaryView: 'views/glossaryView',

        /* Collections
         * */
        baseCollection: 'collections/baseCollection',
        collection: 'collections/collection',
        genderCollection: 'collections/genderCollection',

        /* Routes
         * */
        baseRoute: 'routes/baseRoute',
        route: 'routes/route'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            /* this makes sure: jquery and underscore are loaded before backbone */
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },

    waitSeconds: 10
});

define(['collectionView', 
    'collection', 
    'route', 
    'officeModel', 
    'alertModel', 
    'locationModel', 
    'stationModel', 
    'observationModel', 
    'dailyModel', 
    'hourlyModel', 
    'pointsModel', 
    'glossaryModel',
    'searchModel'],
    function (collectionView, 
        collection, 
        route, 
        officeModel, 
        alertModel, 
        locationModel, 
        stationModel, 
        observationModel, 
        dailyModel, 
        hourlyModel, 
        pointsModel, 
        glossaryModel,
        searchModel) {

        new route();

        Backbone.history.start();

        new collectionView ({
            collection: new collection([
                new officeModel,
                new alertModel,
                new locationModel,
                new stationModel,
                new observationModel,
                new dailyModel,
                new hourlyModel,
                new pointsModel,
                new glossaryModel, 
                new searchModel
            ])
        });
    });

/* Asynchronous Module Definition */
