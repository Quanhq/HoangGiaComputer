jQuery(document).ready(function () { jQuery(function () { var a = true; var l = "#owl-main"; function g() { if (!a) { jQuery(l + " .caption .fadeIn-1, " + l + " .caption .fadeIn-2, " + l + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" }) } else { jQuery(l + " .caption .fadeIn-1, " + l + " .caption .fadeIn-2, " + l + " .caption .fadeIn-3").css({ opacity: 0 }) } } function d() { if (!a) { jQuery(l + " .caption .fadeInDown-1, " + l + " .caption .fadeInDown-2, " + l + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" }) } else { jQuery(l + " .caption .fadeInDown-1, " + l + " .caption .fadeInDown-2, " + l + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" }) } } function k() { if (!a) { jQuery(l + " .caption .fadeInUp-1, " + l + " .caption .fadeInUp-2, " + l + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" }) } else { $(l + " .caption .fadeInUp-1, " + l + " .caption .fadeInUp-2, " + l + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" }) } } function f() { if (!a) { jQuery(l + " .caption .fadeInLeft-1, " + l + " .caption .fadeInLeft-2, " + l + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" }) } else { jQuery(l + " .caption .fadeInLeft-1, " + l + " .caption .fadeInLeft-2, " + l + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" }) } } function i() { if (!a) { jQuery(l + " .caption .fadeInRight-1, " + l + " .caption .fadeInRight-2, " + l + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" }) } else { jQuery(l + " .caption .fadeInRight-1, " + l + " .caption .fadeInRight-2, " + l + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" }) } } function b() { jQuery(l + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" }); jQuery(l + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" }); jQuery(l + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" }) } function c() { jQuery(l + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" }); jQuery(l + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" }); jQuery(l + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" }) } function j() { jQuery(l + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" }); jQuery(l + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" }); jQuery(l + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" }) } function e() { jQuery(l + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" }); jQuery(l + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" }); jQuery(l + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" }) } function h() { jQuery(l + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" }); jQuery(l + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" }); jQuery(l + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" }) } jQuery(l).owlCarousel({ autoPlay: 5000, stopOnHover: true, navigation: true, pagination: true, singleItem: true, addClassActive: true, transitionStyle: "fade", navigationText: ["<i class='icon fa fa-angle-left'></i>", "<i class='icon fa fa-angle-right'></i>"], afterInit: function () { b(); c(); j(); e(); h() }, afterMove: function () { b(); c(); j(); e(); h() }, afterUpdate: function () { b(); c(); j(); e(); h() }, startDragging: function () { a = true }, afterAction: function () { g(); d(); k(); f(); i(); a = false } }); if (jQuery(l).hasClass("owl-one-item")) { jQuery(l + ".owl-one-item").data("owlCarousel").destroy() } jQuery(l + ".owl-one-item").owlCarousel({ singleItem: true, navigation: false, pagination: false }); jQuery(".home-owl-carousel").each(function () { var n = $(this); var m = n.data("item"); if (!m) { m = 4 } n.owlCarousel({ items: m, itemsTablet: [768, 2], navigation: true, pagination: false, navigationText: ["", ""] }) }); jQuery(".homepage-owl-carousel").each(function () { var n = $(this); var m = n.data("item"); if (!m) { m = 4 } n.owlCarousel({ items: m, itemsTablet: [768, 2], itemsDesktop: [1199, 2], navigation: true, pagination: false, navigationText: ["", ""] }) }); jQuery(".blog-slider").owlCarousel({ items: 2, itemsDesktopSmall: [979, 2], itemsDesktop: [1199, 2], navigation: true, slideSpeed: 300, pagination: false, navigationText: ["", ""] }); jQuery(".best-seller").owlCarousel({ items: 3, navigation: true, itemsDesktopSmall: [979, 2], itemsDesktop: [1199, 2], slideSpeed: 300, pagination: false, paginationSpeed: 400, navigationText: ["", ""] }); jQuery(".sidebar-carousel").owlCarousel({ items: 1, itemsTablet: [768, 2], itemsDesktopSmall: [979, 2], itemsDesktop: [1199, 1], navigation: true, slideSpeed: 300, pagination: false, paginationSpeed: 400, navigationText: ["", ""] }); jQuery(".brand-slider").owlCarousel({ items: 6, navigation: true, slideSpeed: 300, pagination: false, paginationSpeed: 400, navigationText: ["", ""] }); jQuery("#advertisement").owlCarousel({ items: 1, itemsDesktopSmall: [979, 2], itemsDesktop: [1199, 1], navigation: true, slideSpeed: 300, pagination: true, paginationSpeed: 400, navigationText: ["", ""] }) }); jQuery(function () { echo.init({ offset: 100, throttle: 250, unload: false }) }); jQuery(function () { jQuery(".rating").rateit({ max: 5, step: 1, value: 4, resetable: false, readonly: true }) }); jQuery(function () { if (jQuery(".price-slider").length > 0) { jQuery(".price-slider").slider({ min: 100, max: 700, step: 10, value: [200, 500], handle: "square" }) } }); jQuery(function () { jQuery("#owl-single-product").owlCarousel({ items: 1, itemsTablet: [768, 2], itemsDesktop: [1199, 1] }); jQuery("#owl-single-product-thumbnails").owlCarousel({ items: 4, pagination: true, rewindNav: true, itemsTablet: [768, 4], itemsDesktop: [1199, 3] }); jQuery("#owl-single-product2-thumbnails").owlCarousel({ items: 6, pagination: true, rewindNav: true, itemsTablet: [768, 4], itemsDesktop: [1199, 3] }); jQuery(".single-product-slider").owlCarousel({ stopOnHover: true, rewindNav: true, singleItem: true, pagination: true }) }); jQuery(function () { new WOW().init() }); jQuery("[data-toggle='tooltip']").tooltip() });