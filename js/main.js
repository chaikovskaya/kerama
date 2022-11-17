/*--GLOBAL--*/
var GLOBAL = GLOBAL || {};
GLOBAL.widthWindow = GLOBAL.widthWindow || {};
GLOBAL.FORMERROR = GLOBAL.FORMERROR || {};
GLOBAL.FORMERROR.REQUIRED = GLOBAL.FORMERROR.REQUIRED || '';
GLOBAL.FORMERROR.EMAIL = GLOBAL.FORMERROR.EMAIL || '';
GLOBAL.mobile = GLOBAL.mobile || 768;
GLOBAL.tablet = GLOBAL.tablet || 992;
GLOBAL.columnsStartLength = GLOBAL.columnsStartLength || 0;

GLOBAL.parseData = function parseData(data) {
    try {
        data = JSON.parse(data.replace(/'/gim, '"'));
    } catch(e) {
        data = {};
    }
    return data;
};


GLOBAL.owl = GLOBAL.owl || {};
GLOBAL.owl.common = GLOBAL.owl.common || {};
GLOBAL.owl.common.loop = true;
GLOBAL.owl.common.dots = false;
GLOBAL.owl.common.margin = 0;
GLOBAL.owl.common.responsiveClass = true;
GLOBAL.owl.common.autoHeight = true;
GLOBAL.owl.common.mouseDrag = true;
GLOBAL.owl.common.nav = false;
/*--/global--*/

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

function initDropdown() {
    if (typeof(Dropdown) === 'undefined' || !jQuery.isFunction(Dropdown)) {
        return false;
    }

    var common = {};

    $('.JS-Dropdown').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('dropdown'));
        new Dropdown(this, jQuery.extend({}, common, local));
    });
}

function initDropdownSearch() {
    if (typeof(Dropdown) === 'undefined' || !jQuery.isFunction(Dropdown)) {
        return false;
    }

    var common = {};

    $('.JS-DropSearch').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('dropdown'));
        new Dropdown(this, jQuery.extend({}, common, local));
    });
}

function initScroll() {
    $('.js-custom-scroll').each(function(){
        var customScroll = this;
        new SimpleBar(customScroll, {
            autoHide: false
        });
    });
}

function initValidate($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-form-validate');
    }

    $element.each(function() {
        var $element = jQuery(this),
            validator;

        validator = $element.validate({
            errorClass: 'form-error',
            validClass: 'form-success',
            submitHandler: function(form) {
                if (typeof(ajaxSubmit) == 'function') {
                    ajaxSubmit(form);
                }
            },
        });

        $.validator.messages.required = GLOBAL.FORMERROR.REQUIRED;
        $.validator.messages.email = GLOBAL.FORMERROR.EMAIL;
    });
}

function initMask() {
    $('.js-mask-phone').inputmask({
        mask: '+7 999 999 99 99',
        "tabThrough": true,
        "showMaskOnHover": false,
    });

    $('.js-mask-email').inputmask({
        alias: "email",
        "tabThrough": true,
        "showMaskOnHover": false,
    });
}

function initPopup() {
    $(".js-popup").fancybox({
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                '</button>'
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
    });
}

function initSelect() {
    $('.js-select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        arrowButtonMarkup: '<b class="selectric-button"><i class="selectric-icon"></i></b>',
    });
}

var sliderMainBanner;
function initSliderMainBanner() {
    jQuery('.js-slider-main-banner').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderMainBanner = new Swiper($slider[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 16,
                },
                992: {
                    spaceBetween: 28,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

var sliderMainCategory;
function initSliderMainCategory() {
    jQuery('.js-slider-main-category').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderMainCategory = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            freeMode: true,
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 15,
                },
                992: {
                    spaceBetween: 20,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

var sliderMainActions;
function initSliderMainActions() {
    jQuery('.js-slider-main-actions').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderMainActions = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 15,
                    loop: sliderLength > 2 ? true : false,
                },
                992: {
                    spaceBetween: 20,
                    loop: sliderLength > 3 ? true : false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

var sliderProducts;
function initSliderProducts() {
    jQuery('.js-slider-products').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderProducts = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 15,
                    loop: sliderLength > 3 ? true : false,
                },
                992: {
                    spaceBetween: 20,
                    loop: sliderLength > 5 ? true : false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

var sliderProductsNav;
function initSliderProductsNav() {
    jQuery('.js-slider-products-nav').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list');

        sliderProductsNav = new Swiper($list[0], {
            loop: false,
            pagination: false,
            navigation: false,
            slidesPerView: 'auto',
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 10,
                },
                768: {
                    spaceBetween: 15,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderProductsNav() {
    if (sliderProductsNav) {
        sliderProductsNav.destroy();
    }
    sliderProductsNav = undefined;
}

var sliderBrands;
function initSliderBrands() {
    jQuery('.js-slider-brands').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderBrands = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            freeMode: true,
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 0,
                },
                768: {
                    spaceBetween: 0,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

var sliderInspiration;
function initSliderInspiration() {
    jQuery('.js-slider-inspiration').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderInspiration = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 15,
                },
                992: {
                    spaceBetween: 20,
                },
            },
            on: {
                afterInit: function () {
                },
                init: function () {
                    initTooltip();
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                    initTooltip();
                },
                touchMove: function () {
                    Tipped.hide(".js-tooltip");
                },
            },
        });
    });
}

var sliderArticles;
function initSliderArticles() {
    jQuery('.js-slider-articles').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderArticles = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                    },
                768: {
                    spaceBetween: 15,
                    loop: sliderLength > 3 ? true : false,
                },
                992: {
                    spaceBetween: 20,
                    loop: sliderLength > 5 ? true : false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

function initMobileMenu() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-MobileMenu').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('mobilemenu'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initForm() {
    jQuery('.js-form').each(function() {
        var $checkbox = $(this).find('.js-form-checkbox'),
            $button = $(this).find('.js-form-button'),
            classDisabled = $(this).data('form-disabled');

        if ($checkbox.is(':checked')) {
            $button.removeClass(classDisabled);
        } else {
            $button.addClass(classDisabled);
        }

        $checkbox.on("change", function(e) {
            e.stopPropagation();
            if ($checkbox.is(':checked')) {
                $button.prop("disabled", false);
                $button.removeClass(classDisabled);
            } else {
                $button.prop("disabled", true);
                $button.addClass(classDisabled);
            }
        });
    });
}

function openPopupSuccess(url) {
    if (typeof(url) == 'undefined') {
        url = '/';
    }

    $.fancybox.open({
        src  : url,
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                "</button>"
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupAddedBasket(url) {
    if (typeof(url) == 'undefined') {
        url = '/';
    }

    $.fancybox.open({
        src  : url,
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
            initQuantity();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                "</button>"
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initShowMore(showmoreExtra) {
    if (typeof(ShowMore) === 'undefined' || !jQuery.isFunction(ShowMore)) {
        return false;
    }
    var common = {
            start: function () {},
            toggle: function () {}
        },
        showmoreExtra = showmoreExtra || {};

    $('.JS-ShowMore').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('showmore'));
        new ShowMore(this, jQuery.extend({}, common, local, showmoreExtra));
    });
}

function initTooltip() {
    $('.js-tooltip').each(function() {
        var $content = $(this).find('.js-tooltip-content'),
            classElement = 'inspiration-tpd-tooltip';

        Tipped.create($(this), $content, {
            containment: {
                selector: '.inspiration-pic',
                padding: 0
            },
            position: {
                target: 'bottom',
                tooltip: 'bottomleft'
            },
            size: 'x-small',
            skin: 'light',
            hideOthers: true,
            hideOnClickOutside: true,
            showOn: 'click',
            hideOn: 'click',
            onShow: function (content, element) {
                $(".tpd-tooltip").addClass(classElement);
            },
        });
    });
}

function openPopupForgotPassword($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-popup-forgot-password');
    }

    $.fancybox.open({
        src  : $element.data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initForm();
            initMask();
            initPopupRegistration();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                "</button>"
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupForgotPassword() {
    $(".js-open-forgot-password").on('click', function() {
        $.fancybox.close();
        openPopupForgotPassword($(".js-open-forgot-password"));
    });
}

function openPopupCode(srcData) {
    $.fancybox.open({
        src  : srcData,
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initMask();
            initPopupRegistration();
            initPopupProfile();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                "</button>"
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupCode() {
    $(".js-open-code").on('click', function() {
        $.fancybox.close();
        openPopupCode($(".js-open-code"));
    });
}

function openPopupRegistration($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-popup-registration');
    }

    $.fancybox.open({
        src  : $element.data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initForm();
            initMask();
            initPopupProfile();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                "</button>"
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupRegistration() {
    $(".js-open-registration").on('click', function() {
        $.fancybox.close();
        openPopupRegistration($(".js-open-registration"));
    });
}

function openPopupProfile($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-popup-profile');
    }

    $.fancybox.open({
        src  : $element.data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initForm();
            initMask();
            initPopupRegistration();
            initPopupForgotPassword();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                "</button>"
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupProfile() {
    $(".js-open-profile").on('click', function() {
        $.fancybox.close();
        openPopupProfile($(".js-open-profile"));
    });
}

function initPopupCity() {
    $(".js-popup-city").fancybox({
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                '</button>'
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
        afterShow: function (data) {
            initScroll();
        },
    });
}

function initPopupCallback() {
    $element = $('.js-popup-callback');

    $element.fancybox({
        src  : $element.data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                '</button>'
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initForm();
            initMask();
        },
    });
}

function openPopupBuy($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-popup-buy');
    }

    var query = [];
    var url = $element.data('src');
    if ($element.attr('data-id')) query.push('id=' + $element.attr('data-id'));
    if ($element.attr('data-quantity')) query.push('quantity=' + $element.attr('data-quantity'));
    if ($element.attr('data-measure')) query.push('measure=' + $element.attr('data-measure'));
    if ($element.attr('data-basket')) query.push('basket=' + $element.attr('data-basket'));
    if (query.length) url += '?'+query.join('&');

    $.fancybox.open({
        src  : url,
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initForm();
            initMask();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                "</button>"
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupBuy() {
    $(".js-open-buy").on('click', function() {
        console.log("true");
        $.fancybox.close();
        openPopupBuy($(this));
    });
}

function initTextFilterCity() {
    $('.js-textfilter-city').each(function(){
        var $element = $(this),
            $input = $(this).find('.js-textfilter-city-input'),
            classActive = $element.data('textfilter-class') || 'active';

        $input.jcOnPageFilter({
            animateHideNShow: true,
            focusOnLoad: true,
            highlightColor: "transparent",
            textColorForHighlights: "inherit",
            caseSensitive: false,
            hideNegatives: true,
            parentSectionClass: "js-textfilter-city-list",
            parentLookupClass: "js-textfilter-city-parent",
            childBlockClass: "js-textfilter-city-child"
        });

        $input.keyup(function(e) {
            var len = $element.find('.js-textfilter-city-child span').length;
            if (len > 0) {
                $element.addClass(classActive);
            } else {
                $element.removeClass(classActive);
            }
        });
    });
}

function initSearch() {
    $('.js-search').each(function(){
        var $element = $(this),
            classDynamic = $(this).data('search-dynamic'),
            $input = $(this).find('.js-search-input'),
            $link = $(this).find('.js-search-reset');

        $link.on('click', function(e, data) {
            $input.val('').trigger('keyup');
            $element.removeClass(classDynamic);
        });

        $input.on('input', function(e, data) {
            var val = $input.val();
            if (val != '') {
                $element.addClass(classDynamic);
            } else {
                $element.removeClass(classDynamic);
            }
        });
    });
}

function initQuantity() {
    if (typeof(Quantity) === 'undefined' || !jQuery.isFunction(Quantity)) {
        return false;
    }

    var common = {};

    $('.JS-Quantity').not('.JS-Quantity-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('quantity'));
        new Quantity(this, jQuery.extend({}, common, local));
    });
}

function initPopupBasket() {
    $('.js-popup-basket').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);
                    initScroll();
                    initQuantity();
                    initPopupBuy();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initPopupWishlist() {
    $('.js-popup-wishlist').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);
                    initScroll();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initPopupProduct() {
    $(".js-popup-product").fancybox({
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                "</button>"
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
        afterShow: function (data) {
            initShowMore();
            initGalleryCard();
            initPopupBuy();
            if(typeof initJsAfterAjax == 'function') {
                initJsAfterAjax();
            }
        },
    });
}

function initGalleryCard() {
    let $slider = $(".js-gallery-card-thumbs"),
        $list = $slider.find('.js-slider-list'),
        sliderLength = $slider.find('.swiper-slide').length,
        $buttonPrev = $slider.find('.js-gallery-card-prev'),
        $buttonNext = $slider.find('.js-gallery-card-next');

    let isStart = sliderLength > 1 ? true : false;

    let galleryThumbs = new Swiper($list[0], {
        loop: false,
        slidesPerView: "auto",
        autoHeight: true,
        pagination: false,
        threshold: 10,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                spaceBetween: 6,
            },
            720: {
                spaceBetween: 6,
            },
            992: {
                spaceBetween: 8,
            },
        }
    });
    let galleryTop = new Swiper(".js-gallery-card-main", {
        loop: isStart,
        direction: "horizontal",
        spaceBetween: 40,
        navigation: false,
        pagination: false,
        thumbs: {
            swiper: galleryThumbs
        },
        slidesPerView: "auto",
        threshold: 10,
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
            720: {
                spaceBetween: 15,
            },
            992: {
                spaceBetween: 15,
            },
        },
    });
    $buttonPrev.on('click', function(e) {
        galleryTop.slidePrev();
    });
    $buttonNext.on('click', function(e) {
        galleryTop.slideNext();
    });
};

let galleryPhotoThumbs,
    galleryPhotoTop;
function initPhotoCard() {
    let $slider = $(".js-photo-card-thumbs"),
        $list = $slider.find('.js-slider-list'),
        sliderLength = $slider.find('.swiper-slide').length,
        $buttonPrev = $slider.find('.js-gallery-card-prev'),
        $buttonNext = $slider.find('.js-gallery-card-next');

    let isStart = sliderLength > 1 ? true : false;

    galleryPhotoThumbs = new Swiper($list[0], {
        loop: false,
        slidesPerView: "auto",
        autoHeight: true,
        pagination: false,
        threshold: 10,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                spaceBetween: 6,
            },
            720: {
                spaceBetween: 6,
            },
            992: {
                spaceBetween: 8,
            },
        }
    });
    galleryPhotoTop = new Swiper(".js-photo-card-main", {
        loop: isStart,
        direction: "horizontal",
        spaceBetween: 40,
        navigation: false,
        pagination: false,
        thumbs: {
            swiper: galleryPhotoThumbs
        },
        slidesPerView: "auto",
        threshold: 10,
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
            720: {
                spaceBetween: 15,
            },
            992: {
                spaceBetween: 15,
            },
        },
    });
    $buttonPrev.on('click', function(e) {
        galleryPhotoTop.slidePrev();
    });
    $buttonNext.on('click', function(e) {
        galleryPhotoTop.slideNext();
    });
};

function initMenu() {
    if (typeof(Menu) === 'undefined' || !jQuery.isFunction(Menu)) {
        return false;
    }

    var common = {};

    $('.JS-Menu').not('.JS-Menu-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('menu'));
        new Menu(this, jQuery.extend({}, common, local));
    });
}

function initMainmenu() {
    $('.js-main-menu-item').each(function(){
        let $element = $(this),
            $switcher = $('.js-main-menu-switcher'),
            classActive = $switcher.data('mainmenu-class');

        $element.hover(
            function () {
                $switcher.removeClass(classActive);
            },
            function () {
            }
        );
    });
}

function initAccordion() {
    if (typeof(Accordion) === 'undefined' || !jQuery.isFunction(Accordion)) {
        return false;
    }

    var common = {};

    $('.JS-Accordion').not('.JS-Accordion-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('accordion'));
        new Accordion(this, jQuery.extend({}, common, local));
    });
}

function initSliderRange() {
    jQuery('.js-slider-range').each(function() {
        var $element = $(this),
            $track = $element.find('.js-slider-range-track'),
            $textMin = $element.find('.js-slider-rating-text-min'),
            $textMax = $element.find('.js-slider-rating-text-max'),
            $labelMin = $element.find('.js-slider-range-label-min').text() || '',
            $labelMax = $element.find('.js-slider-range-label-max').text() || '',
            $currency = $element.find('.js-slider-range-currency').html() || '';

        var min = Number($(this).find('.min-price').attr('data-value'));
        var max = Number($(this).find('.max-price').attr('data-value'));
        
        var minValue = Number($(this).find('.min-price').val()) || min;
        var maxValue = Number($(this).find('.max-price').val()) || max;

        $track.slider({
            range: true,
            min: min,
            max: max,
            drag: true,
            values: [minValue, maxValue],
            classes: {
                "ui-slider-handle": "slider-range-button",
                "ui-slider-range": "slider-range-quantity"
            },
            slide: function (event, ui) {
                if (ui.values[0] <= min) ui.values[0] = '';
                if (ui.values[1] >= max) ui.values[1] = '';
                $element.find('.js-slider-range-min').val(ui.values[0]);
                $element.find('.js-slider-range-max').val(ui.values[1]);

                $element.find('.js-slider-range-min').trigger('keyup').trigger('change');
                $element.find('.js-slider-range-max').trigger('keyup').trigger('change');

                $textMin.html( $labelMin + " " + ui.values[0] + " " + $currency );
                $textMax.html( $labelMax + " " + ui.values[1] + " " + $currency );
            },
            stop: function (event, ui) {
                if (ui.values[0] <= min) ui.values[0] = '';
                if (ui.values[1] >= max) ui.values[1] = '';
                $element.find('.js-slider-range-min').val(ui.values[0]);
                $element.find('.js-slider-range-max').val(ui.values[1]);

                $element.find('.js-slider-range-min').trigger('keyup').trigger('change');
                $element.find('.js-slider-range-max').trigger('keyup').trigger('change');
            },
            create: function() {
            },
        });

        $element.find('.js-slider-range-min').on('change keyup', function() {
            $track.slider('values', 0, this.value);
        });

        $element.find('.js-slider-range-max').on('change keyup', function() {
            $track.slider('values', 1, this.value);
        });
    });
}

var sliderCatalog;
function initSliderCatalog() {
    jQuery('.js-slider-catalog').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderCatalog = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            spaceBetween: 15,
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                },
                768: {
                    loop: sliderLength > 3 ? true : false,
                },
                992: {
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderCatalog() {
    if (sliderCatalog) {
        sliderCatalog.destroy();
    }
    sliderCatalog = undefined;
}

function initPopupFilter() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-PopupFilter').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('mobilemenu'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initOpenFilter() {
    $('.js-catalog-filter-link').each(function(){
        let $element = $(this);

        $element.on('click', function(e, data) {
            $('.JS-PopupFilter .JS-MobileMenu-Burger').trigger('click');
        });
    });
}

function initAjaxMoreCatalog() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        beforeSend: function () {
        },
        success: function () {
            initShowMore();
        }
    };

    $('.JS-AjaxMoreCatalog').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

let sliderCategory;
function initSliderCategory() {
    jQuery('.js-slider-category').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderCategory = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 15,
                    loop: sliderLength > 2 ? true : false,
                },
                992: {
                    spaceBetween: 20,
                    loop: sliderLength > 3 ? true : false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

let sliderCatalogSections;
function initSliderCatalogSections() {
    jQuery('.js-slider-catalog-sections').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderCatalogSections = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            freeMode: true,
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 15,
                },
                992: {
                 },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}
function reInitSliderCatalogSections() {
    if (sliderCatalogSections) {
        sliderCatalogSections.destroy();
    }
    sliderCatalogSections = undefined;
}

function initAjaxMoreCatalogSections() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    let lastElement;

    let common = {
        beforeSend: function () {
            if ( GLOBAL.widthWindow == 'isTablet' || GLOBAL.widthWindow == 'isMobile') {
                if (sliderCatalogSections != undefined) {
                    reInitSliderCatalogSections();
                }
                lastElement = $(".js-slider-catalog-sections .swiper-slide").length;
            }
        },
        success: function () {
            if ( GLOBAL.widthWindow == 'isTablet' || GLOBAL.widthWindow == 'isMobile') {
                if (sliderCatalogSections == undefined) {
                    initSliderCatalogSections();
                    sliderCatalogSections.slideTo(lastElement, 1000, false);
                }
            }
        }
    };

    $('.JS-AjaxMoreCatalogSections').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initTab() {
    if (typeof(Tab) === 'undefined' || !jQuery.isFunction(Tab)) {
        return false;
    }

    var common = {};

    jQuery('.JS-Tab').not('.JS-Tab-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('tab'));
        new Tab(this, jQuery.extend({}, common, local));
    });
}

var sliderFormat;
function initSliderFormat() {
    jQuery('.js-slider-format').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 2 ? true : false;

        sliderFormat = new Swiper($list[0], {
            loop: false,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            spaceBetween: 15,
              breakpoints: {
                0: {
                    simulateTouch: false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderFormat() {
    if (sliderFormat) {
        sliderFormat.destroy();
    }
    sliderFormat = undefined;
}

var sliderCharacteristicsNav;
function initSliderCharacteristicsNav() {
    jQuery('.js-slider-characteristics-nav').each(function() {
        var $slider = $(this),
            $list = $slider.find('.js-slider-list');

        sliderCharacteristicsNav = new Swiper($list[0], {
            loop: false,
            pagination: false,
            navigation: false,
            slidesPerView: 'auto',
            threshold: 10,
            freeMode: true,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 39,
                },
                768: {
                    spaceBetween: 39,
                },
                992: {
                    spaceBetween: 60,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderCharacteristicsNav() {
    if (sliderCharacteristicsNav) {
        sliderCharacteristicsNav.destroy();
    }
    sliderCharacteristicsNav = undefined;
}

function initPopupGallery() {
    $(".js-popup-gallery").fancybox({
        loop: true,
        infobar: false,
        toolbar  : false,
        smallBtn : true,
        arrows : false,
        animationEffect: "fade",
        hash : false,
        backFocus: false,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon"></i>' +
                '</button>'
        },
        beforeClose: function (instance) {
        },
        afterShow: function(instance, current) {
            if ( instance.group.length > 1 && current.$content ) {
                current.$content.append('' +
                    '<div class="fancybox-nav-block">' +
                    '<button class="fancybox-button fancybox-button--arrow_left prev" data-fancybox-prev>' +
                    '<span class="fancybox-button-icon fancybox-button-icon_left"><span class="fancybox-button-arrow"></span></span>\n' +
                    '</button>' +
                    '<button class="fancybox-button fancybox-button--arrow_right next" data-fancybox-next>' +
                    '<span class="fancybox-button-icon fancybox-button-icon_right"><span class="fancybox-button-arrow"></span></span>\n' +
                    '</button>' +
                    '</div>'
                );
            }
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
    });
}

function initShowMoreProps(showmoreExtra) {
    if (typeof(ShowMore) === 'undefined' || !jQuery.isFunction(ShowMore)) {
        return false;
    }
    var common = {
            start: function () {},
            toggle: function () {}
        },
        showmoreExtra = showmoreExtra || {};

    $('.JS-ShowMore-Props').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('showmore'));
        new ShowMore(this, jQuery.extend({}, common, local, showmoreExtra));
    });
}

function initTabCharacteristics() {
    if (typeof(Tab) === 'undefined' || !jQuery.isFunction(Tab)) {
        return false;
    }

    var common = {
        onToggle: function (elem) {
            if (sliderCharacteristicsNav) {
                let index = elem.index();
                sliderCharacteristicsNav.slideTo(index, 600, false);
            }
        },
    };

    jQuery('.JS-Tab-Characteristics').not('.JS-Tab-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('tab'));
        new Tab(this, jQuery.extend({}, common, local));
    });
}

function initSticky() {
    if (typeof(StickyFix) === 'undefined' || !jQuery.isFunction(StickyFix)) {
        return false;
    }

    var common = {
        update: function (){
        }
    };

    $('.JS-Sticky').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('sticky'));
        new StickyFix(this, jQuery.extend({}, common, local));
    });
}

function initTextareaSize() {
    $('.js-textarea-size').on('input', function (e) {
        e.target.style.innerHeight = 'auto';
        e.target.style.height = e.target.scrollHeight + "px";
    });
}

function initAjaxMore() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        beforeSend: function () {
        },
        success: function () {
        }
    };

    $('.JS-AjaxMore').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initRadioSwitch() {
    $(".js-radio-switch").each(function(){
        var $element = $(this),
            $input = $element.find('.js-radio-switch-input'),
            $field = $element.find('.js-radio-switch-field'),
            classActive = $element.data('radio-switch-class') || 'active';

        $input.on('change.js-radio-active', function(e){
            e.stopPropagation();
            if ($input.is(':checked') && !$element.hasClass()) {
                $element.addClass(classActive);
            } else {
                $element.removeClass(classActive);
                $field.val('');
            }
        });
    });
}

function initValidateOrder($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-form-validate-order');
    }

    function initValidateSection(element) {
        var $parent = $(element).closest('.js-form-validate-order-item');
        var $input = $parent.find('input[required]').filter(function( index ) {
            if ($(this).val() == '') {
                return $(this);
            }
        });

        if ($input.length <= 0 && !$parent.hasClass()) {
            $parent.addClass('order-list-item_active');
        } else {
            $parent.removeClass('order-list-item_active');
        }
    }

    $element.each(function() {
        var $element = jQuery(this),
            validator;

        validator = $element.validate({
            errorClass: 'form-error',
            validClass: 'form-success',
            submitHandler: function(form) {
                if (typeof(ajaxSubmit) == 'function') {
                    ajaxSubmit(form);
                }
            },
            onfocusout: function(element, event) {
                initValidateSection(element);
            },
            onclick: function(element, event) {
                initValidateSection(element);
            },
            success: function(label) {
            },
        });

        $.validator.messages.required = GLOBAL.FORMERROR.REQUIRED;
        $.validator.messages.email = GLOBAL.FORMERROR.EMAIL;
    });
}

var sliderSolution;
function initSliderSolution() {
    jQuery('.js-slider-solution').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderSolution = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 15,
                    loop: sliderLength > 2 ? true : false,
                },
                992: {
                    spaceBetween: 20,
                    loop: sliderLength > 2 ? true : false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

var sliderSchedule;
function initSliderSchedule() {
    jQuery('.js-slider-schedule').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list');

        sliderSchedule = new Swiper($list[0], {
            loop: false,
            pagination: false,
            navigation: false,
            slidesPerView: 'auto',
            threshold: 10,
            freeMode: true,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 10,
                },
                768: {
                    spaceBetween: 15,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

var sliderActions;
function initSliderActions() {
    jQuery('.js-slider-actions').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderActions = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 15,
                    loop: sliderLength > 2 ? true : false,
                },
                992: {
                    spaceBetween: 20,
                    loop: sliderLength > 3 ? true : false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderActions() {
    if (sliderActions) {
        sliderActions.destroy();
    }
    sliderActions = undefined;
}


function initAjaxMoreActions() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var lastElement;

    var common = {
        beforeSend: function () {
            if ( GLOBAL.widthWindow == 'isTablet' || GLOBAL.widthWindow == 'isMobile') {
                if (sliderActions != undefined) {
                    reInitSliderActions();
                }
                lastElement = $(".js-slider-actions .swiper-slide").length;
            }
        },
        success: function () {
            if ( GLOBAL.widthWindow == 'isTablet' || GLOBAL.widthWindow == 'isMobile') {
                if (sliderActions == undefined) {
                    initSliderActions();
                    sliderActions.slideTo(lastElement, 1000, false);
                }
            }
        }
    };

    $('.JS-AjaxMore-Actions').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initExpand() {
    jQuery('.js-expand').each(function() {
        var $element = $(this),
            $block = $element.find('.js-expand-block'),
            $link = $element.find('.js-expand-link'),
            local = GLOBAL.parseData(jQuery(this).data('expand')),
            classActive = local.classActive || 'active',
            classShow = local.classShow || 'show',
            heightParent = parseInt($block.css('min-height'),10) || 21,
            heightChild = $block.height();

        if (heightChild > heightParent) {
            $element.addClass(classActive);

            $link.on("click", function() {
                $element.addClass(classShow);
            });
        }
    });
}

function initFiles() {
    jQuery('.js-file').each(function() {
        let $element = $(this),
            $input = $element.find('.js-file-input'),
            $img = $element.find('.js-file-img'),
            classActive = $element.data('file-active'),
            deleteText = 'Удалить';

        let srcImg = $input.attr('value');
        if (srcImg.length > 0) {
            $img.css('background-image', 'url("' + srcImg + ' ")');
        }

        $input.MultiFile({
            STRING: {
                remove: deleteText + '<span class="file-close-icon"></span>',
                toomany: 'Maximum: $max',
            },
            previewCss: 'max-height:100%; max-width:100%;',
            afterFileAppend: function () {
                $element.removeClass(classActive)
                    .addClass(classActive);
            },
            FileRemove: function () {
                $element.removeClass(classActive);
            },
        });
    });
}

var sliderWishlist;
function initSliderWishlist() {
    jQuery('.js-slider-wishlist').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderWishlist = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                    slidesPerView: "auto",
                },
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 15,
                    loop: sliderLength > 3 ? true : false,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    loop: sliderLength > 4 ? true : false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

var sliderContacts;
function initSliderContacts() {
    jQuery('.js-slider-contacts').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderContacts = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            threshold: 10,
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 15,
                    loop: sliderLength > 3 ? true : false,
                },
                992: {
                    spaceBetween: 20,
                    loop: sliderLength > 3 ? true : false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

var sliderClientsStages;
function initSliderClientsStages() {
    jQuery('.js-slider-clients-stages').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderClientsStages = new Swiper($list[0], {
            loop: false,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            threshold: 10,
            spaceBetween: 9,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    slidesPerView: "auto",
                },
                768: {
                    slidesPerView: "auto",
                },
                992: {
                    slidesPerView: 3,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                },
            },
        });
    });
}

function initAjaxMoreInspiration() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        beforeSend: function () {
        },
        success: function () {
            initTooltip();
            initPopupProduct();
        }
    };

    $('.JS-AjaxMore-Inspiration').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

var sliderInspirationProjects;
function initSliderInspirationProjects() {
    jQuery('.js-slider-inspiration-projects').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderInspirationProjects = new Swiper($list[0], {
            loop: isStart,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                768: {
                    spaceBetween: 15,
                    loop: sliderLength > 2 ? true : false,
                },
                992: {
                    spaceBetween: 20,
                    loop: sliderLength > 2 ? true : false,
                },
            },
            on: {
                afterInit: function () {
                },
                init: function () {
                    initTooltip();
                },
                slideChangeTransitionEnd: function () {
                    var index = $slider.find('.swiper-slide-active').data('slider-index');
                    if (index < 10) {
                        index = '0' + index;
                    }
                    $count.text(index);
                    initTooltip();
                },
                touchMove: function () {
                    Tipped.hide(".js-tooltip");
                },
            },
        });
    });
}

function initResizeWindow() {
    var width = $(window).outerWidth();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';
        if (sliderCatalog == undefined) {
            initSliderCatalog();
        }
        if (sliderCatalogSections == undefined) {
            initSliderCatalogSections();
        }
        if (sliderFormat == undefined) {
            initSliderFormat();
        }
        let localExtraProps = GLOBAL.parseData(jQuery('.JS-ShowMore-Props').data('showmore-extra'));
        initShowMoreProps(localExtraProps);

        if (sliderCharacteristicsNav == undefined) {
            initSliderCharacteristicsNav();
        }
        if (sliderActions == undefined) {
            initSliderActions();
        }
        if (sliderProductsNav == undefined) {
            initSliderProductsNav();
        }
    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';
        if (sliderCatalog == undefined) {
            initSliderCatalog();
        }
        if (sliderCatalogSections == undefined) {
            initSliderCatalogSections();
        }
        if (sliderFormat) {
            reInitSliderFormat();
        }

        let localExtraProps = GLOBAL.parseData(jQuery('.JS-ShowMore-Props').data('showmore-extra'));
        initShowMoreProps(localExtraProps);

        if (sliderCharacteristicsNav == undefined) {
            initSliderCharacteristicsNav();
        }
        if (sliderActions == undefined) {
            initSliderActions();
        }
        if (sliderProductsNav == undefined) {
            initSliderProductsNav();
        }
    } else {
        GLOBAL.widthWindow = '';
        if (sliderCatalog) {
            reInitSliderCatalog();
        }
        if (sliderCatalogSections) {
            reInitSliderCatalogSections();
        }
        if (sliderFormat) {
            reInitSliderFormat();
        }
        initShowMoreProps();
        if (sliderCharacteristicsNav) {
            reInitSliderCharacteristicsNav();
        }
        if (sliderActions) {
            reInitSliderActions();
        }
        if (sliderProductsNav) {
            reInitSliderProductsNav();
        }
    }
}

$(document).ready(function () {
    initResizeWindow();
    $(window).resize(function(){
        initResizeWindow();
        initSticky();
    });

    initDropdown();
    initDropdownSearch();
    initScroll();
    initValidate();
    initMask();
    initPopup();
    initSelect();
    initSliderMainBanner();
    initSliderMainCategory();
    initSliderMainActions();
    initSliderProducts();
    initSliderBrands();
    initSliderInspiration();
    initSliderArticles();
    initMobileMenu();
    initForm();
    initShowMore();
    initTooltip();
    initPopupProfile();
    initPopupCity();
    initPopupCallback();
    initTextFilterCity();
    initSearch();
    initPopupBasket();
    initPopupWishlist();
    initQuantity();
    initPopupProduct();
    initGalleryCard();
    initPhotoCard();
    initMenu();
    initMainmenu();
    initPopupBuy();
    initAccordion();
    initSliderRange();
    initPopupFilter();
    initOpenFilter();
    initAjaxMoreCatalog();
    initSliderCategory();
    initAjaxMoreCatalogSections();
    initTab();
    initPopupGallery();
    initTabCharacteristics();
    initSticky();
    initTextareaSize();
    ymaps.ready(initMap);
    initAjaxMore();
    initRadioSwitch();
    initValidateOrder();
    initSliderSolution();
    initSliderSchedule();
    initAjaxMoreActions();
    initExpand();
    initFiles();
    initSliderWishlist();
    initSliderContacts();
    initSliderClientsStages();
    initAjaxMoreInspiration();
    initSliderInspirationProjects();
});
