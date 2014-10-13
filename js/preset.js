// on change select field for preset
$("#preset").change(function() {
    var values = $("#preset option:selected").val();
    var percentages = values.split(',');
    $.map(percentages, function(value, key) {
        if (value != "") {
            $("#g" + key).val(value);
        };
    });
});