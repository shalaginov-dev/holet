import $ from "@/assets/MainLayout/js/jquery";
// import './bootstrap.bundle.min'
// import './fontawesome.min'
// import './isotope.pkgd.min'
// import './js/wow.min'
// import 'js/main'




    // $(window).on('load', function () {
    //     $('.preloder-overlay').fadeOut(1000);
    // });
    //
    // // lightcase
    // // $('a[data-rel^=lightcase]').lightcase();
    //
    // $(document).ready(function () {
    //
    //     /*==== header Section Start here =====*/
    //     $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    //     // drop down menu width overflow problem fix
    //     $('ul').parent('li').on('hover', function () {
    //         var menu = $(this).find("ul");
    //         var menupos = $(menu).offset();
    //         if (menupos.left + menu.width() > $(window).width()) {
    //             var newpos = -$(menu).width();
    //             menu.css({
    //                 left: newpos
    //             });
    //         }
    //     });
    //     $('.menu li a').on('click', function (e) {
    //         var element = $(this).parent('li');
    //         if (element.hasClass('open')) {
    //             element.removeClass('open');
    //             element.find('li').removeClass('open');
    //             element.find('ul').slideUp(300, "swing");
    //         } else {
    //             element.addClass('open');
    //             element.children('ul').slideDown(300, "swing");
    //             element.siblings('li').children('ul').slideUp(300, "swing");
    //             element.siblings('li').removeClass('open');
    //             element.siblings('li').find('li').removeClass('open');
    //             element.siblings('li').find('ul').slideUp(300, "swing");
    //         }
    //     })
    //     $('.ellepsis-bar').on('click', function (e) {
    //         var element = $('.header-top');
    //         if (element.hasClass('open')) {
    //             element.removeClass('open');
    //             element.slideUp(300, "swing");
    //             $('.overlayTwo').removeClass('active');
    //         } else {
    //             element.addClass('open');
    //             element.slideDown(300, "swing");
    //             $('.overlayTwo').addClass('active');
    //         }
    //     });
    //     $('.header-bar').on('click', function () {
    //         $(this).toggleClass('active');
    //         $('.menu').toggleClass('active');
    //     })
    //
    //     //Header
    //     var fixed_top = $("header");
    //     $(window).on('scroll', function () {
    //         if ($(this).scrollTop() > 300) {
    //             fixed_top.addClass("header-fixed fadeInUp");
    //         } else {
    //             fixed_top.removeClass("header-fixed fadeInUp");
    //         }
    //     });
    //
    //     $(document).on('click', '.search, .search-close', function () {
    //         $(".search-input").toggleClass("open");
    //     });
    //     /*==== header Section End here =====*/
    //
    //
    //
    //     //wow js initialization
    //     new WOW().init();
    //
    // });
    //
    // $(window).on('load', function () {
    //
    //     /*===========================
    //     * Our properties filter(home 3)
    //     =============================*/
    //
    //     var $grid = $('.property__grid').imagesLoaded(function () {
    //         // init Isotope after all images have loaded
    //         $grid.isotope({
    //             itemSelector: '.property__grid-item',
    //             layoutMode: 'fitRows',
    //         });
    //     });
    //
    //     // bind filter button click
    //     $('.property__filter-btns').on('click', '.default__filter-btn', function () {
    //         var filterValue = $(this).attr('data-filter');
    //         $grid.isotope({
    //             filter: filterValue
    //         });
    //     });
    //     // change is-checked class on buttons
    //     $('.default__filter-btns').each(function (i, buttonGroup) {
    //         var $buttonGroup = $(buttonGroup);
    //         $buttonGroup.on('click', '.default__filter-btn', function () {
    //             $buttonGroup.find('.is-checked').removeClass('is-checked');
    //             $(this).addClass('is-checked');
    //         });
    //     });
    //
    // });
    //
    // $(window).on('load', function () {
    //
    //     /*===========================
    // * Gallery filter
    // =============================*/
    //     //init Isotope
    //     var $grid = $('.gallery__grid').isotope({
    //         itemSelector: '.gallery__grid-item',
    //         layoutMode: 'fitRows'
    //     });
    //
    //
    //     // layout Isotope after each image loads
    //     $grid.imagesLoaded().progress(function () {
    //         $grid.isotope('layout');
    //     });
    //
    //     // bind filter button click
    //     $('.gallery__filter-btns').on('click', '.default__filter-btn', function () {
    //         var filterValue = $(this).attr('data-filter');
    //         $grid.isotope({
    //             filter: filterValue
    //         });
    //     });
    //
    // });
    //
    // //counter up
    // $(window).on('scroll', function () {
    //     $('.counter').data('countToOptions', {
    //         formatter: function (value, options) {
    //             return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    //         }
    //     });
    //     // start all the timers
    //     $('.counter').each(count);
    //
    //     function count(options) {
    //         var $this = $(this);
    //         options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    //         $this.countTo(options);
    //     }
    // });
    //
    //
    //Banner slider 1

    //
    // //Banner slider 2
    // var swiper = new Swiper(".banner__slider2", {
    //     loop: true,
    //     speed: 800,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },
    //     navigation: {
    //         nextEl: ".banner__slider2-next",
    //         prevEl: ".banner__slider2-prev",
    //     },
    //     grabCursor: true,
    //     effect: "creative",
    //     creativeEffect: {
    //         prev: {
    //             shadow: true,
    //             translate: ["-20%", 0, -1],
    //         },
    //         next: {
    //             translate: ["100%", 0, 0],
    //         },
    //     },
    // });
    //
    // //Banner Slider 4
    // var swiper = new Swiper(".banner__slider4", {
    //     loop: true,
    //     slidesPerView: 1,
    //     speed: 800,
    //     grabCursor: true,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: true,
    //     },
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //         },
    //         992: {
    //             slidesPerView: 2,
    //         },
    //         1200: {
    //             slidesPerView: 3,
    //         },
    //     },
    //
    // });
    //
    // //Property for sale slider [home 2]
    // var swiper = new Swiper(".property__style2-slider", {
    //     loop: true,
    //     speed: 800,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },
    //     navigation: {
    //         nextEl: ".property__style2-next",
    //         prevEl: ".property__style2-prev",
    //     },
    //     grabCursor: true,
    //     effect: "creative",
    //     creativeEffect: {
    //         prev: {
    //             shadow: true,
    //             translate: ["-20%", 0, -1],
    //         },
    //         next: {
    //             translate: ["100%", 0, 0],
    //         },
    //     },
    // });
    //
    //
    //
    // //Feature Property slider [Home 1]
    // var swiper = new Swiper(".featProp__slider", {
    //     loop: true,
    //     speed: 800,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },
    //     pagination: {
    //         el: ".featProp__slider-pagination",
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return '<span class="' + className + '">' + (index + 1) + "</span>";
    //         },
    //     },
    //     grabCursor: true,
    //     effect: "creative",
    //     creativeEffect: {
    //         prev: {
    //             shadow: true,
    //             translate: ["-20%", 0, -1],
    //         },
    //         next: {
    //             translate: ["100%", 0, 0],
    //         },
    //     },
    // });
    //
    //
    // //featued Property slider [Home 2]
    // var swiper = new Swiper(".featProp2__thumbSlider", {
    //     loop: true,
    //     spaceBetween: 10,
    //     slidesPerView: 3,
    //     navigation: {
    //         nextEl: ".featProp2__thumbSlider-next",
    //         prevEl: ".featProp2__thumbSlider-prev",
    //     },
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 4,
    //         },
    //         1200: {
    //             slidesPerView: 5,
    //         }
    //     },
    // });
    // var swiper2 = new Swiper(".featProp2__slider", {
    //     loop: true,
    //     spaceBetween: 10,
    //     thumbs: {
    //         swiper: swiper,
    //     },
    // });
    //
    // //Feature Property slider [Home 3]
    // var swiper = new Swiper(".featProp3__slider", {
    //     loop: true,
    //     slidesPerView: 1,
    //     speed: 800,
    //     spaceBetween: 15,
    //     grabCursor: true,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: true,
    //     },
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //         },
    //         992: {
    //             slidesPerView: 2,
    //         },
    //         1200: {
    //             slidesPerView: 3,
    //         },
    //         1800: {
    //             slidesPerView: 4,
    //         },
    //     },
    //
    // });
    //
    //
    //
    //
    // //Testimonial Slider
    // var swiper = new Swiper(".testimonial__authorSlider", {
    //     loop: true,
    //     spaceBetween: -1,
    //     slidesPerView: 3,
    // });
    // var swiper2 = new Swiper(".testimonial__slider", {
    //     loop: true,
    //     autoplay: true,
    //     spaceBetween: 50,
    //     navigation: {
    //         nextEl: ".testimonial__slider-next",
    //         prevEl: ".testimonial__slider-prev",
    //     },
    //     thumbs: {
    //         swiper: swiper,
    //     },
    // });
    //
    //
    // //testimonial-slider 2
    // var swiper = new Swiper(".testimonial__slider2", {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     effect: "fade",
    //     autoplay: {
    //         delay: 3500,
    //         disableOnInteraction: false,
    //     },
    //     navigation: {
    //         nextEl: ".testimonial__slider2-next",
    //         prevEl: ".testimonial__slider2-prev",
    //     },
    //     loop: true,
    // });
    //
    // //testimonial-slider 3
    // var swiper = new Swiper(".testimonial__slider3", {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     autoplay: {
    //         delay: 3500,
    //         disableOnInteraction: false,
    //     },
    //     pagination: {
    //         el: ".testimonial__slider3-pagination",
    //         clickable: true,
    //     },
    //     loop: true,
    // });
    //
    //
    // //sponsor slider
    // var swiper = new Swiper(".sponsor__slider", {
    //     loop: true,
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //     speed: 800,
    //     grabCursor: true,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: true,
    //     },
    //     breakpoints: {
    //         576: {
    //             slidesPerView: 3,
    //         },
    //         768: {
    //             slidesPerView: 4,
    //         },
    //         992: {
    //             slidesPerView: 5,
    //         },
    //         1200: {
    //             slidesPerView: 6,
    //         }
    //     },
    //
    // });
    //
    //
    //
    // //Property gallery slider (Home 5)
    // var swiper = new Swiper(".propGallery__slider", {
    //     loop: true,
    //     slidesPerView: 1,
    //     spaceBetween: 8,
    //     speed: 800,
    //     grabCursor: true,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: true,
    //     },
    //     navigation: {
    //         nextEl: ".propGallery__slider-next",
    //         prevEl: ".propGallery__slider-prev",
    //     },
    //     breakpoints: {
    //         576: {
    //             slidesPerView: 2,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //         },
    //         1200: {
    //             slidesPerView: 4,
    //         }
    //     },
    //
    // });
    //
    //
    //
    // //Feature Property Widget slider
    // var swiper = new Swiper(".widget--featProp-slider", {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     autoplay: {
    //         delay: 3500,
    //         disableOnInteraction: false,
    //     },
    //     pagination: {
    //         el: ".widget--featProp-sliderPagination",
    //         clickable: true,
    //     },
    //     breakpoints: {
    //         576: {
    //             slidesPerView: 2,
    //         },
    //         992: {
    //             slidesPerView: 1,
    //         },
    //     },
    //     loop: true,
    // });
    //
    //
    // //Service slider
    // var swiper = new Swiper(".service__slider", {
    //     slidesPerView: 1,
    //     spaceBetween: 24,
    //     pagination: {
    //         el: ".service__slider-pagination",
    //         clickable: true,
    //     },
    //     autoplay: {
    //         delay: 3500,
    //         disableOnInteraction: false,
    //     },
    //     loop: true,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //         },
    //         1024: {
    //             slidesPerView: 3,
    //         },
    //         1200: {
    //             slidesPerView: 3,
    //             spaceBetween: 40,
    //         },
    //         1400: {
    //             slidesPerView: 4,
    //             spaceBetween: 40,
    //         },
    //     },
    // });
    //
    //
    // //Related slider
    // var swiper = new Swiper(".related__property", {
    //     slidesPerView: 1,
    //     spaceBetween: 24,
    //     autoplay: {
    //         delay: 3500,
    //         disableOnInteraction: false,
    //     },
    //     loop: true,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //         },
    //         1024: {
    //             slidesPerView: 3,
    //         },
    //     },
    // });
    //
    //
    //
    //
    //
    //
    // //---property find more option
    // $(".findProp__moreBtn").click(function () {
    //     if ($(this).closest(".findProp__moreToggle").hasClass("active")) {
    //         $(this).closest(".findProp__moreToggle").removeClass("active");
    //         $(this).closest(".findProp__moreToggle").find(".findProp__moreInputs").slideUp();
    //     } else {
    //         $(".findProp__moreToggle").removeClass("active");
    //         $(".findProp__moreToggle").find(".findProp__moreInputs").slideUp();
    //         $(this).closest(".findProp__moreToggle").addClass("active");
    //         $(this).closest(".findProp__moreToggle").find(".findProp__moreInputs").slideDown();
    //     }
    // })
    //
    //
    // //========== Scroll to top Start =========//
    // $(function () {
    //     $(window).on('scroll', function () {
    //         if ($(this).scrollTop() > 300) {
    //             $('.scrollToTop').css({
    //                 'bottom': '5%',
    //                 'opacity': '1',
    //                 'transition': 'all .5s ease'
    //             });
    //         } else {
    //             $('.scrollToTop').css({
    //                 'bottom': '-30%',
    //                 'opacity': '0',
    //                 'transition': 'all .5s ease'
    //             })
    //         }
    //     });
    //
    //     //Click event to scroll to top
    //     $('a.scrollToTop').on('click', function () {
    //         $('html, body').animate({
    //             scrollTop: 0
    //         }, 500);
    //         return false;
    //     });
    // });
    //
    // //========== Scroll to to top end =========//
    //
    //
    // //contact form js
    // $(function () {
    //     // Get the form.
    //     var form = $('#contact-form');
    //     // Get the messages div.
    //     var formMessages = $('.form-message');
    //     // Set up an event listener for the contact form.
    //     $(form).submit(function (e) {
    //         // Stop the browser from submitting the form.
    //         e.preventDefault();
    //         // Serialize the form data.
    //         var formData = $(form).serialize();
    //         // Submit the form using AJAX.
    //         $.ajax({
    //                 type: 'POST',
    //                 url: $(form).attr('action'),
    //                 data: formData
    //             })
    //             .done(function (response) {
    //                 // Make sure that the formMessages div has the 'success' class.
    //                 $(formMessages).removeClass('error');
    //                 $(formMessages).addClass('success');
    //                 // Set the message text.
    //                 $(formMessages).text(response);
    //                 // Clear the form.
    //                 $('#contact-form input, #contact-form textarea').val('');
    //             })
    //             .fail(function (data) {
    //                 // Make sure that the formMessages div has the 'error' class.
    //                 $(formMessages).removeClass('success');
    //                 $(formMessages).addClass('error');
    //                 // Set the message text.
    //                 if (data.responseText !== '') {
    //                     $(formMessages).text(data.responseText);
    //                 } else {
    //                     $(formMessages).text('Oops! An error occured and your message could not be sent.');
    //                 }
    //             });
    //     });
    // });

