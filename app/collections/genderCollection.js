define(['baseCollection'], 
    function(BaseCollection) {
        return genderCollection = BaseCollection.extend({
            initialize: function() {
                console.log("init -> genderCollection");
            }
        });
    }
);
