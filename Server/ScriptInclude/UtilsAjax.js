var UtilsAjax = Class.create();
UtilsAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    dateRangeValidationAjax: function () {
        var startDate = this.getParameter('sysparm_start_date');
        var endDate = this.getParameter('sysparm_end_date');
        startDate = utils.getGlideDate(startDate);
        endDate = utils.getGlideDate(endDate);
        return utils.dateRangeValidation(startDate, endDate)
    },

    getGlideDate: function (dateString) {
        var dob = new GlideDate();
        dob.setDisplayValue(date);
        dob.getByFormat("yyyy-MM-dd");
    },
    type: 'UtilsAjax'
});