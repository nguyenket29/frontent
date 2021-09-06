$(document).ready(function () {
    $('#sliders').lightSlider({
        sliders:true,
        loop:false,
        item:4,
        onSliderLoad: function() {
            $('#sliders').removeClass('cS-hidden');
        } ,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });  
});
