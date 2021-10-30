$(document).ready(function() {

    $(() => {
        $(document).scroll(() => {
            var scroll = $(this).scrollTop();
            $('.custom').toggleClass('onscroll', scroll > 100);
        });
    });

    $(() => {
        $(document).scroll(() => {
            var scroll = $(this).scrollTop();
            $('.copyright').toggleClass('sticky', scroll > 500);
        });
    });

    $(() => {
        $('.menu .nav-item').click(e => {
            $(e.currentTarget).toggleClass('menu-active');
        });
    });

    $(() => {
        $('.service-absolute').click(e => {
            var h4 = $(e.currentTarget).find('.service-content h4').text();
            var p = $(e.currentTarget).find('.service-content p').text();
            $('.service-sec-inner').find('h4').text(h4);
            $('.service-sec-inner').find('p').text(p);
            $('.service-heading1').fadeOut(0);
            $('.service-heading2').fadeIn('slow');
        });
    });

    $(() => {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(function() {
        $('.slide-one-item').owlCarousel({
            animateOut: 'slideOutLeft',
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            smartSpeed: 1000,
            autoplay: true,
            dots: false,
            nav: true,
            navText: ['<p>Prev</p><img src="src/images/arrow-left.png" />', '<p>Next</p><img src="src/images/arrow-right.png" />']
        });
    });

    $(function() {
        $('.test-form-slider').owlCarousel({
            animateOut: 'faseOut',
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            smartSpeed: 1000,
            autoplay: true,
            dots: false,
            nav: false
        });
    });

    $(function() {
        $('.portfolio1').owlCarousel({
            animateOut: 'slideOutDown',
            animateIn: 'slideInLeft',
            items: 1,
            margin: 20,
            stagePadding: 0,
            dots: false,
            nav: false,
            loop: true,
            autoplay: true,
            smartSpeed: 1500
        });
    });


    $(function() {
        $('.portfolio2').owlCarousel({
            animateOut: 'slideOutUp',
            animateIn: 'slideInRight',
            items: 1,
            margin: 20,
            // stagePadding: 0,
            dots: false,
            nav: false,
            loop: true,
            autoplay: true,
            smartSpeed: 1500
        });
    });

    $(function() {
        $('.clients').owlCarousel({
            items: 3,
            margin: 20,
            dots: false,
            nav: false,
            loop: true,
            autoplay: true,
            smartSpeed: 1500
        });
    });

    // (() => {
    //     Fancybox.defaults.infinite = 0;
    //     Fancybox.bind("[data-fancybox]", {
    //         infinite: false,
    //     });
    // });
});

$(document).ready(function() {
    // Set iframe attributes when the show instance method is called
    $("#videoModal").on("show.bs.modal", function(event) {
        let button = $(event.relatedTarget); // Button that triggered the modal
        let url = button.data("video"); // Extract url from data-video attribute
        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    // Remove iframe attributes when the modal has finished being hidden from the user
    $("#videoModal").on("hidden.bs.modal", function() {
        $("#videoModal iframe").removeAttr("src allow");
    });
});