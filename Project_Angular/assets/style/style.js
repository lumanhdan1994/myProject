$(document).ready(function () {

    //Open side bar
    $('#show-menu').click(function () {
        $('#Sidebar').css('width', '100%');
        $('.side-menu').css('right', '0%');
        $('.sidebar-bg').css('right', '70%');
        $('.side-menu').css('transition', 'all 0.3s');
        $('.sidebar-bg').css('transition', 'all 0.2s 0.1s');
    })
    // Close side bar
    $('.sidebar-bg').click(function () {
        $('#Sidebar').css('width', '0%');
        $('.side-menu').css('right', '-70%');
        $('.sidebar-bg').css('right', '0%');
        $('#Sidebar').css('transition', 'all 0.2s');
        $('.side-menu').css('transition', 'all 0.2s 0.05s');
        $('.sidebar-bg').css('transition', 'all 0.2s');
    })
    

});

