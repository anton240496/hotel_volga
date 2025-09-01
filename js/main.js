document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.rules_spisok_que');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });
});

$('.nomerabout_foto').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class=" arrow slick_prev"></div>',
    nextArrow: '<div class=" arrow slick_next"></div>',
    responsive: [
        {
            breakpoint: 891,
            settings: {
                arrows: false,
                dots: true
            }
        }
    ]
});



$('.othernomer_inner').slick({
    infinite: true,
    // variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<div class=" arrow slick_prev"></div>',
    nextArrow: '<div class=" arrow slick_next"></div>',
    responsive: [
        {
            breakpoint: 891,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 590,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }
    ]
});