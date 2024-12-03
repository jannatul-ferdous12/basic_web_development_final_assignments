$(document).ready(function (e) {

    function showView(viewName) {
        window.location.href = viewName+'.html';
    }

    $('[data-launch-view]').click(function (e) {
        e.preventDefault();
        var viewName = $(this).attr('data-launch-view');
        showView(viewName);
    });

});