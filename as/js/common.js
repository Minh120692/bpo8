$(document).ready(function(){
	
	var isCardOpen = 0;
	
	$(window).scroll(function () {
		var scrollHeight = $(document).height();
		var scrollPosition = $(window).height() + $(window).scrollTop();

		var $footer = $("footer");
		var footHeight = $footer.length > 0 ? $footer.height() : 0;

		if (isCardOpen === 0) {
			if ($(this).scrollTop() > 400) {
				$(".cv").css({"bottom": "0"});

				if (footHeight > 0 && (scrollHeight - scrollPosition <= footHeight)) {
					$(".cv").css({"bottom": "-100%"});
				}else{
					$(".cv").css({"bottom": "0"});
				}
			}else{
				$(".cv").css({"bottom": "-100%"});
			}
		}
	});	
	$('.btn_close_cv').on('click', function(){
		$(".cv").css({"bottom": "-100%"});
		isCardOpen = '1';
	});	

    //header height thin
    $(function() {
        var dist = 50;
        $(window).scroll(function() {
            if ($(window).scrollTop() > dist) {
                $('.inner_header').addClass('thin');
            } else {
                $('.inner_header').removeClass('thin');
            }
        });
    });

    setupInView();
    hoverDropdown();
    slickSlider();
    underlineFeedbackFlow();
    underlineSolveProb();
    animationIntro();
});

//CTAボタンのhover処理
$(function(){
    $('.mouseover').each(function(){
        var src_off = $(this).find('img').attr('src');
        var src_on = src_off.replace('_off','_on');
        $('<img />').attr('src',src_on);
        $(this).hover(function(){
            $(this).find('img').attr('src',src_on);
        },function(){
            $(this).find('img').attr('src',src_off);
        }); 
    });
});

//Modal Window
$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});

$(function() {
    let currentPath = window.location.pathname.split('?')[0];

    currentPath = currentPath.replace(/\/index\.html$/, '/');
	currentPath = currentPath.replace(/\.html$/, '');

    if ($("#footTop_inc").length > 0) {
        $("#footTop_inc").load("/assets/inc/common_lower_footerTop.html", function() {
            switch (currentPath) {
                case '/function/cdp':
                    $('.p-common_overall_all_list__link_container:eq(0), .p-common_overall_all_list__link_container:eq(1)').remove();
                    break;

                case '/function/action':
                    $("#footTop_inc [data-cta-text]").html('MA（マーケティングオートメーション）で<br>データ活用・顧客育成の悩みを解決します');
                    $('.p-common_overall_botton_container').remove();
                    break;

                case '/function/analysis-new':
                    $('.p-common_overall_all_list__link_container:eq(2)').remove();
                    break;

                case '/function/mailmagazine/':
                    $("#footTop_inc [data-cta-text]").html('メール配信機能について詳しく知りたい方はこちら');
					$(".p-common_overall_all_list_main_item li:has(a[href='/function/mailmagazine/'])").html("メール施策をする");
                    break;

				case '/function/line/':
					$("#footTop_inc [data-cta-text]").html('LINE配信機能について詳しく知りたい方はこちら');
					$(".p-common_overall_all_list_main_item li:has(a[href='/function/line/'])").html("LINEを送る");
					break;
				case '/function/enquete/':
					$("#footTop_inc [data-cta-text]").html('データ活用により、自社ならではの<br>マーケティングを実現するならカスタマーリングス');
					$(".p-common_overall_all_list_main_item li:has(a[href='/function/enquete/'])").html("WEBアンケートをする");
					break;
				case '/function/webservice/':
					$("#footTop_inc [data-cta-text]").html('ワンプラットフォームで活用できる、効率的・効果的なWEB接客なら<br class="pc_none">カスタマーリングス');
					$(".p-common_overall_all_list_main_item li:has(a[href='/function/webservice/'])").html("WEB接客をする");
					break;
				case '/function/storeservice':
					$("#footTop_inc [data-cta-text]").html('店舗でのデータ活用により、CS（顧客満足度）向上を「店舗接客機能」で実現！');
					break;

			}
        });
    }
});

//追従CTA 2023.01.31 created
function PageTopAnime() {

    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $('#row_follow_cta').removeClass('DownMove');
        $('#row_follow_cta').addClass('UpMove');
    } else {
        if ($('#row_follow_cta').hasClass('UpMove')) {
            $('#row_follow_cta').removeClass('UpMove');
            $('#row_follow_cta').addClass('DownMove');
        }
    }

    var $footer = $('#footer');

    if ($footer.length > 0) {
        var footerOffset = $footer.offset();

        if (footerOffset && typeof footerOffset.top !== 'undefined') {
            var wH = window.innerHeight;
            var footerPos = footerOffset.top;

            if (scroll + wH >= (footerPos + 0)) {
                $('#row_follow_cta').addClass('DownMove');
            } else {
                if ($('#row_follow_cta').hasClass('UpMove')) {
                    $('#row_follow_cta').css('bottom', '0px');
                }
            }
        }
    }
}

function fadeinScroll() {
    $('.scroll-fadein').each(function() {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200) {
            $(this).addClass('scrollin');
        }
    });
}

// スクロールイベントで実行
$(window).scroll(function() {
    PageTopAnime();
    fadeinScroll();
    procedureShowHandle();
});

$(window).on('load', function() {
    PageTopAnime();
    fadeinScroll();
});

/* --------------------------------------------------------------------------
 * UTMパラメータ自動生成 ＆ 引継ぎ処理
 * -------------------------------------------------------------------------- */
(function() {
    const targetUrlKeyword = 'mieruka-engine.com';
    const contactUrlPrefix = 'https://form.pa-consul.co.jp/cre/';
    const azureKeyword = 'eastasia.azurestaticapps.net';
    const utmParamKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    let currentUrlParams = new URLSearchParams(window.location.search);

    if (!currentUrlParams.has('utm_source')) {
        const referrer = document.referrer;
        let source = '';
        let medium = '';

        if (!referrer) {
            source = 'direct';
            medium = 'none';
        } else {
            try {
                const host = new URL(referrer).hostname;
                if (host.indexOf('mieruka-engine.com') === -1) {
                    if (host.indexOf('google') !== -1) {
                        source = 'google';
                        medium = 'organic';
                    } else if (host.indexOf('yahoo') !== -1) {
                        source = 'yahoo';
                        medium = 'organic';
                    } else if (host.indexOf('bing') !== -1) {
                        source = 'bing';
                        medium = 'organic';
                    } else if (host.indexOf('duckduckgo') !== -1) {
                        source = 'duckduckgo';
                        medium = 'organic';
                    } else if (host.indexOf('naver') !== -1) {
                        source = 'naver';
                        medium = 'organic';
                    } else {
                        source = host;
                        medium = 'referral';
                    }
                }
            } catch (e) {}
        }

        if (source && medium) {
            currentUrlParams.set('utm_source', source);
            currentUrlParams.set('utm_medium', medium);
            const newUrl = window.location.origin + window.location.pathname + '?' + currentUrlParams.toString() + window.location.hash;
            window.history.replaceState(null, '', newUrl);
        }
    }

    const paramsToForward = {};
    utmParamKeys.forEach(key => {
        if (currentUrlParams.has(key)) {
            paramsToForward[key] = currentUrlParams.get(key);
        }
    });

    if (Object.keys(paramsToForward).length === 0) return;

    function applyParamsToLink(link) {
        if (link.dataset.utmMeProcessed) return;

        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;

        try {
            const url = new URL(link.href);
            const isTargetLink =
                url.href.startsWith(contactUrlPrefix) ||
                url.href.includes(targetUrlKeyword) ||
                url.hostname.includes(azureKeyword);

            if (isTargetLink) {
                let hasChanged = false;
                for (const [key, value] of Object.entries(paramsToForward)) {
                    if (!url.searchParams.has(key)) {
                        url.searchParams.set(key, value);
                        hasChanged = true;
                    }
                }
                if (hasChanged) {
                    link.href = url.toString();
                }
                link.dataset.utmMeProcessed = "true";
            }
        } catch (e) {}
    }

    document.querySelectorAll('a[href]').forEach(applyParamsToLink);

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return;
                if (node.tagName === 'A') {
                    applyParamsToLink(node);
                }
                node.querySelectorAll('a[href]').forEach(applyParamsToLink);
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();

function setupInView() {
    if (typeof inView !== 'undefined') {
        inView.threshold(0.3);
        inView('.fadein-slideup').on('enter', function(el) {
            el.classList.remove('inview-hidden');
        });
    }
}

function hoverDropdown() {
    var dropdownToggles = document.querySelectorAll('[data-toggle="dropdown"]');
    for (var i = 0; i < dropdownToggles.length; i++) {
        dropdownToggles[i].addEventListener('mouseenter', function() {
            if ($(window).width() > 991) {
                this.click();
                this.blur();
            }
        });
    }
}

function slickSlider() {
    if ($('.slick-slider').length) {
        $('.slick-slider').each(function() {
            $(this).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }
}

function underlineFeedbackFlow() {
    var $textFlow = $('.feedback-flow .text-flow');

    if ($textFlow.length) {
        $textFlow.each(function() {
            var that = this;
            $(window).on('scroll', function() {
                var screenHeight = $(window).innerHeight();
                var topElement = $(that).offset().top;
                var heightElement = $(that).height();
                var currentTop = $(window).scrollTop();
                var topActive = (topElement - screenHeight + heightElement) < currentTop;
                if (topActive) {
                    $(that).addClass('active');
                }
            });
        });
    }
}

function underlineSolveProb() {
    var $solveAnimate = $('.solve-animate');

    if ($solveAnimate.length) {
        $solveAnimate.each(function() {
            var that = this;
            $(window).on('scroll', function() {
                var screenHeight = $(window).innerHeight();
                var topElement = $(that).offset().top;
                var heightElement = $(that).height();
                var currentTop = $(window).scrollTop();
                var topActive = (topElement - screenHeight + heightElement) < currentTop;
                if (topActive) {
                    $(that).addClass('active');
                }
            });
        });
    }
}

function animationIntro() {
    if ($('.about-us').length) {
        $('.about-us').each(function() {
            $(this).find('.image-single').addClass('active');
        });
    }
}

function procedureShowHandle() {
    var $elem = $('#procedureShow');
    var showClss = 'active';

    if ($elem.hasClass(showClss) || !$elem.length) {
        return;
    }

    var $steps = $elem.find('.step');
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $elem.offset().top;

    if ((docViewBottom > elemTop + 200) && (elemTop > docViewTop)) {
        $elem.addClass(showClss);

        $steps.each(function(i) {
            var timeWait = 600 * i;
            var that = this;

            var interval = setInterval(function() {
                $(that).addClass('show');
                clearInterval(interval);
            }, timeWait);
        });
    }
}
