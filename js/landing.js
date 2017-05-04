$(function () {
    
    var $sectionCache = $("section");
    
    function refreshNavbar() {
        var scrollTop = $(window).scrollTop();
        var a = 0;
        for (var i = 0; i < $sectionCache.length; i++) {
            var $section = $sectionCache.eq(i);
            var top = $section.offset().top;
            var height = $section.outerHeight();
            if (top < scrollTop + 3 && top + height > scrollTop + 3) {
                a = i;
            }
        }
        $("#page-nav a").removeClass("active");
        $("#page-nav a[data-href='#" + $sectionCache.eq(a).attr("id") + "']").addClass("active");
    }
    
    //
    $(window).scroll(function () {
        refreshNavbar();
    });
    
    $("#page-nav a").click(function () {
        var sec = $(this).attr("data-href");
        console.log(sec);
        $("body").animate({
            scrollTop: $(sec).offset().top
        }, 500);
    });
    
    refreshNavbar();
});
