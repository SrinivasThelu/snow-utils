var startDate = g_form.getValue('start_date');
var endDate = g_form.getValue('end_date');
if ('' !== startDate && '' !== endDate) {
    var ga = new GlideAjax('UtilsAjax');
    ga.addParam('sysparm_name', 'dateRangeValidationAjax');
    ga.addParam('sysparm_start_date', startDate);
    ga.addParam('sysparm_start_date', endDate);
    ga.getXML(function (response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        var isValid = (answer == 'true' || answer == true)
        if (!isValid) {
            g_form.getValue('start_date', '');
            g_form.showFieldMsg('start_date', 'Start date should not be after end date', 'info');
        }


    });
}