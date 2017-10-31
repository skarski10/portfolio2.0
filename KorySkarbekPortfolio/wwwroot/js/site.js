$(document).ready(function () {
    $('#heyloo-info').hide();
    $('.project-picture').hover(function () {
        $('#heyloo-info').fadeIn();
    }, function(){
        $('#heyloo-info').fadeOut();
    });
});
