$(".slider").each(function() {
    $(this).slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "39.3%",
        responsive: [{
                breakpoint: 4097,
                settings: {
                    centerPadding: "36.7%"
                }
            },
            {
                breakpoint: 3073,
                settings: {
                    centerPadding: "32.2%"
                }
            },
            {
                breakpoint: 2881,
                settings: {
                    centerPadding: "31%"
                }
            },
            {
                breakpoint: 2737,
                settings: {
                    centerPadding: "30%"
                }
            },
            {
                breakpoint: 2561,
                settings: {
                    centerPadding: "28.7%"
                }
            },
            {
                breakpoint: 2305,
                settings: {
                    centerPadding: "26.3%"
                }
            },
            {
                breakpoint: 1921,
                settings: {
                    centerPadding: "21.5%"
                }
            },
            {
                breakpoint: 1825,
                settings: {
                    centerPadding: "20%"
                }
            },
            {
                breakpoint: 1801,
                settings: {
                    centerPadding: "19.6%"
                }
            },
            {
                breakpoint: 1601,
                settings: {
                    centerPadding: "15.8%"
                }
            },
            {
                breakpoint: 1530,
                settings: {
                    centerPadding: "14.2%"
                }
            },
            {
                breakpoint: 1445,
                settings: {
                    centerPadding: "14%"
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    centerPadding: "11.8%"
                }
            },
            {
                breakpoint: 1310,
                settings: {
                    centerPadding: "9%"
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: "5%"
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    centerPadding: "12%"
                }
            }
        ],

        asNavFor: "#" + $(this).attr("id") + "-thum"
    });
});

$(".thumbnail").each(function() {
    $(this).slick({
        slidesToShow: 4,
        focusOnSelect: true,
        asNavFor: "#" + $(this).attr("id").replace("-thum", "")
    });
});