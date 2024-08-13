$(document).ready(function(){
    $('#newTab').on('click', 'li:not(.on) button', function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
    })
})