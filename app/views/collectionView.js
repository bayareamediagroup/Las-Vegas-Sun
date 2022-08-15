define(['baseCollectionView', 'officeView', 'alertView', 'locationView', 'stationView', 'observationView', 'dailyView', 'hourlyView', 'pointsView', 'glossaryView', 'searchView'],
    function (BaseCollectionView, officeView, alertView, locationView, stationView, observationView, dailyView, hourlyView, pointsView, glossaryView, searchView) {
        return collectionView = BaseCollectionView.extend({

            initialize: function () {
                new officeView ({
                    model: this.collection.at(0)
                });

                new alertView ({
                    model: this.collection.at(1)
                });

                new locationView ({
                    model: this.collection.at(2)
                });

                new stationView ({
                    model: this.collection.at(3)
                });

                new observationView ({
                    model: this.collection.at(4)
                });

                new dailyView ({
                    model: this.collection.at(5)
                });

                new hourlyView ({
                    model: this.collection.at(6)
                });

                new pointsView({
                    model: this.collection.at(7)
                });

                new glossaryView ({
                    model: this.collection.at(8)
                });

                new searchView ({
                    model: this.collection.at(9)
                });
            }
        });
    });
