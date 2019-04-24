var startDate = g_form.getValue('startDate');
var endDate = g_form.getValue('endDate');
if ('' !== startDate && '' !== endDate) {
    var ga = new GlideAjax('DHHSPayrollUtilsAjax');
    ga.addParam('sysparm_name', 'dateRangeValidation');
    ga.addParam('startDate', startDate);
    ga.addParam('endDate', endDate);
    ga.getXML(function (response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        var isValid = (answer == 'true' || answer == true)
        if (!isValid) {
            g_form.getValue('start_date', '');
            g_form.showFieldMsg('test', 'This is a test', 'info');
        }


    });
}