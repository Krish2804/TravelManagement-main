
$(document).ready(function () {
    $("#emp").click(function () {
        OpenForm('/Default/form', 'Call');
    });

    $("#dash").click(function () {
        OpenForm('/Home/Dashboard', 'Call');
    });
    $("#reg").click(function () {
        OpenForm('/Home/Register', 'Call');
    });

});



$(document).ajaxStart(function () {
    $('#dynamicContainer').css('filter', 'blur (8px)');
    $('.loader').show();
})
    .ajaxComplete(function () {
        $('.loader').hide();
        $('#dynamicContainer').css('filter', 'blur (0px)');

    });

function OpenForm(Action, Title) {
    $.ajax({
        url: Action,
        dataType: 'html',
        traditional: true,
        type: 'POST',
        success: function (content) {
            $("#dynamicContainer").html(content);
            $("#h1Title").html(Title);
            $("#liTitle").html(Title);

        }
    });
}