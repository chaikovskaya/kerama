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
            }
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
                '<svg class="fancybox-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10.4461 0.553928C10.1401 0.248002 9.64414 0.248002 9.33821 0.553928L5.5 4.39214L1.66179 0.553929C1.35586 0.248002 0.859855 0.248002 0.553928 0.553928C0.248002 0.859855 0.248002 1.35586 0.553928 1.66179L4.39214 5.5L0.553929 9.33821C0.248002 9.64414 0.248002 10.1401 0.553928 10.4461C0.859855 10.752 1.35586 10.752 1.66179 10.4461L5.5 6.60786L9.33821 10.4461C9.64414 10.752 10.1401 10.752 10.4461 10.4461C10.752 10.1401 10.752 9.64414 10.4461 9.33821L6.60786 5.5L10.4461 1.66179C10.752 1.35586 10.752 0.859855 10.4461 0.553928Z" fill="#202430"/>\n' +
                '</svg>' +
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
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                    loop: false,
                },
                768: {
                    spaceBetween: 16,
                },
                992: {
                    loop: isStart,
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
            loop: false,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true,
            breakpoints: {
                0: {
                    simulateTouch: false,
                },
                768: {
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
            loop: false,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            spaceBetween: 20,
            breakpoints: {
                0: {
                    simulateTouch: false,
                },
                768: {
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
            loop: false,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
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

var sliderBrands;
function initSliderBrands() {
    jQuery('.js-slider-brands').each(function() {
        var $slider = $(this),
            $list = $(this).find('.js-slider-list'),
            sliderLength = $slider.find('.swiper-slide').length,
            $count = $slider.find('.js-slider-count');

        var isStart = sliderLength > 1 ? true : false;

        sliderBrands = new Swiper($list[0], {
            loop: false,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            freeMode: true,
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
                    //allowTouchMove: false,
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
            loop: false,
            pagination: false,
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
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
                '<svg class="fancybox-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10.4461 0.553928C10.1401 0.248002 9.64414 0.248002 9.33821 0.553928L5.5 4.39214L1.66179 0.553929C1.35586 0.248002 0.859855 0.248002 0.553928 0.553928C0.248002 0.859855 0.248002 1.35586 0.553928 1.66179L4.39214 5.5L0.553929 9.33821C0.248002 9.64414 0.248002 10.1401 0.553928 10.4461C0.859855 10.752 1.35586 10.752 1.66179 10.4461L5.5 6.60786L9.33821 10.4461C9.64414 10.752 10.1401 10.752 10.4461 10.4461C10.752 10.1401 10.752 9.64414 10.4461 9.33821L6.60786 5.5L10.4461 1.66179C10.752 1.35586 10.752 0.859855 10.4461 0.553928Z" fill="#202430"/>\n' +
                '</svg>' +
                '</button>',
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
                '<i class="fancybox-close-icon las la-times"></i>' +
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
                '<i class="fancybox-close-icon las la-times"></i>' +
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
                '<i class="fancybox-close-icon las la-times"></i>' +
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
                '<i class="fancybox-close-icon las la-times"></i>' +
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
        src  : $(this).data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<svg class="fancybox-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10.4461 0.553928C10.1401 0.248002 9.64414 0.248002 9.33821 0.553928L5.5 4.39214L1.66179 0.553929C1.35586 0.248002 0.859855 0.248002 0.553928 0.553928C0.248002 0.859855 0.248002 1.35586 0.553928 1.66179L4.39214 5.5L0.553929 9.33821C0.248002 9.64414 0.248002 10.1401 0.553928 10.4461C0.859855 10.752 1.35586 10.752 1.66179 10.4461L5.5 6.60786L9.33821 10.4461C9.64414 10.752 10.1401 10.752 10.4461 10.4461C10.752 10.1401 10.752 9.64414 10.4461 9.33821L6.60786 5.5L10.4461 1.66179C10.752 1.35586 10.752 0.859855 10.4461 0.553928Z" fill="#202430"/>\n' +
                '</svg>' +
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

function initResizeWindow() {
    var width = $(window).outerWidth();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';

    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';

    } else {
        GLOBAL.widthWindow = '';

    }
}

$(document).ready(function () {
    initResizeWindow();
    $(window).resize(function(){
        initResizeWindow();
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
    initSliderProductsNav();
    initSliderBrands();
    initSliderInspiration();
    initSliderArticles();
    initMobileMenu();
    initForm();
    initAjaxMore();
    initShowMore();
    initTooltip();
    initPopupProfile();
    initPopupCity();
});
