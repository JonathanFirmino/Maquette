var carrousel = { 

    nbSlide: 0,
    nbCurrent: 1,
    elemCurrent: null,
    elem: null,

    init: function (elem) {
        this.nbSlide = elem.find('.slide').length; // On parcours le carrousel grace à l'id slide en html

        //Creer la pagination
        elem.append(`<div class="navigation"></div>`);
        for (var i = 1; i <= this.nbSlide; i++) {
            elem.find(".navigation").append("<span>" + i + "</span>");
        }

        elem.find(".navigation.span").click(function () {
            carrousel.gotoSlide($(this).text());
        })

        // initialisation du carrousel
        this.elem = elem;
        elem.find(".slide").hide();
        elem.find(".slide:first").show();
        this.elemCurrent = elem.find(".slide:first")
    },

    gotoSlide: function (num) {
        if (num == this.this.nbCurrent) {
            return false;
        }
        this.elemCurrent.fadeOut();
        this.elem.find("#slide" + num).fadeIn();
        this.nbCurrent = num;
        this.elemCurrent = this.elem.find("#slide" + num)

    }
}

$(function () {
    carrousel.init($("#carrousel"));
});