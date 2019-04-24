var Utils = Class.create();
Utils.prototype = {
    initialize: function () {
    },

    dateRangeValidation: function (startDate, endDate) {
        /*
        var sgd1 = new GlideDate(); 
        sgd1.setDisplayValue('2014-07-18'); 
        var sgd2 = new GlideDate(); 
        sgd2.setDisplayValue('2014-07-19'); 
        new Utils().dateRangeValidation(sgd1,sgd2)
        */
        var duration = GlideDate.subtract(endDate, startDate);
        var msecs = duration.getNumericValue();
        // msecs >=0 its a valide range 
        return msecs >= 0;
    },

    getGlideDate: function (dateString) {
        var dateObj = new GlideDate();
        dateObj.setDisplayValue(date);
        return dateObj;

    },
    type: "Utils"
}