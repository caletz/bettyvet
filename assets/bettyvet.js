var Page;
Page = function() {
    function e() {
        var e = new GameCTA;
        e.setMobileView(), e.setFloatingLabel("cta-label"), Helpers.addClass("body", "tropicats")
    }
    var t = {};
    return t.controls = document.querySelectorAll(".gallery-navigation > a"), t.items = document.querySelectorAll(".gallery .gallery-cell"), e.prototype.events = {
        addEventListener: function(e, t, l, r) {
            l = r ? l.bind(r) : l, e.addEventListener(t, l, !1)
        }
    }, e.prototype.handleClick = function(e) {
        e.preventDefault();
        var t = document.querySelector('.gallery .gallery-cell[data-cell="' + e.target.getAttribute("data-cell") + '"]');
        this.hideAll(), e.target.classList.add("current"), t.classList.add("current")
    }, e.prototype.handleResize = function() {
        var e = document.querySelector(".gallery");
        if (window.innerWidth < 640) {
            var t = document.querySelector(".gallery-cell").clientHeight;
            e.setAttribute("style", "height: " + t + "px")
        } else e.setAttribute("style", "")
    }, e.prototype.setGallery = function() {
        var e = t.controls;
        window.setTimeout(this.handleResize, 50), this.events.addEventListener(window, "resize", this.handleResize);
        for (var l = 0; l < e.length; l++) {
            var r = null != e.item(l) ? e.item(l).getAttribute("data-cell") : "";
            "" != r && (t.current = r, this.events.addEventListener(e.item(l), "click", this.handleClick, this))
        }
    }, e.prototype.hideAll = function() {
        for (var e = t.items, l = t.controls, r = 0; r < e.length; r++) {
            var n = null != e.item(r) ? e.item(r).getAttribute("data-cell") : "";
            "" != n && (e.item(r).classList.remove("current"), l.item(r).classList.remove("current"))
        }
    }, e
}(), window.addEventListener("load", function() {
    var e = new Page;
    e.setGallery()
});