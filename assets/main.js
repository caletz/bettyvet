var Main = {

        handleLogoClick: function() {
            document.getElementById("brand").addEventListener("contextmenu", function(e) {
                return e.preventDefault(), window.location = "/logo/", !1
            })
        }
    },
    Helpers = {
        addClass: function(e, t) {
            document.querySelector(e).classList.add(t)
        },
        removeClass: function(e, t) {
            document.querySelector(e).classList.remove(t)
        },
        formatString: function(e) {
            return e.replace(/\W/g, "").toLowerCase()
        }
    },
    NavBar = function() {
        function e() {
            this.url = window.location.pathname, this.section = this.splitURL()[1], this.subsection = this.splitURL()[2]
        }
        return e.prototype = {
            splitURL: function() {
                return this.url.split("/")
            },
            setCurrentSubSection: function(e) {
                for (var t = document.querySelectorAll(e), n = 0; n <= t.length; n++)
                    if (this.subsection) {
                        var i = null != t.item(n) ? t.item(n).getAttribute("data-subsection") : "";
                        if (i === this.subsection) {
                            t.item(n).classList.add("current");
                            break
                        }
                    }
            },
            setCurrentSection: function(e) {
                for (var t = document.querySelectorAll(e), n = 0; n <= t.length; n++)
                    if (this.section) {
                        var i = null != t.item(n) ? t.item(n).getAttribute("data-section") : "";
                        if (i === this.section) {
                            t.item(n).classList.add("current");
                            break
                        }
                    }
            }
        }, e
    }(),
    IsMobile = {
        Android: function() {
            return !!navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return !!navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        iPhone: function() {
            return !!navigator.userAgent.match(/iPhone/i)
        },
        iPad: function() {
            return !!navigator.userAgent.match(/iPad/i)
        },
        Windows: function() {
            return !!navigator.userAgent.match(/IEMobile/i)
        },
        Any: function() {
            return this.Android() || this.BlackBerry() || this.iOS() || this.Windows()
        },
        None: function() {
            return !(this.Android() || this.BlackBerry() || this.iOS() || this.Windows())
        }
    },
    GameCTA = function() {
        function e() {}
        return e.prototype = {
            setMobileView: function() {
                var e = document.getElementsByTagName("body")[0];
                IsMobile.Any() && (IsMobile.iOS() ? e.classList.add("ios") : IsMobile.Android() ? e.classList.add("android") : IsMobile.Windows() && e.classList.add("windows"))
            },
            setFloatingLabel: function(e) {
                var t = document.getElementById(e),
                    n = 150,
                    i = Viewport.getElementYCoordinate(document.getElementById("footer")) - Viewport.getHeight();
                IsMobile.Any() && (IsMobile.Android() ? t.setAttribute("href", t.dataset.android) : IsMobile.iOS() && t.setAttribute("href", t.dataset.ios), window.addEventListener("scroll", function(e) {
                    var o = Viewport.getScrollTopPosition();
                    o > n && i > o ? t.classList.add("visible") : t.classList.remove("visible")
                }))
            }
        }, e
    }(),
    QueryStringParser = {
        parse: function() {
            for (var e = {}, t = window.location.search.substring(1).split("&"), n = 0; n < t.length; n++) {
                var i = t[n].split("=");
                e[i[0]] = decodeURIComponent(i[1])
            }
            return e
        }
    },
    TemplateParser = {
        parse: function(e, t) {
            for (var n in t) e = e.replace(new RegExp("{" + n + "}", "g"), t[n]);
            return e
        }
    },
    Viewport = {
        element: document.documentElement,
        getWidth: function() {
            return this.element.clientWidth
        },
        getHeight: function() {
            return this.element.clientHeight
        },
        getScrollLeftPosition: function() {
            return (window.pageYOffset || this.element.scrollLeft) - (this.element.clientLeft || 0)
        },
        getScrollTopPosition: function() {
            return (window.pageYOffset || this.element.scrollTop) - (this.element.clientTop || 0)
        },
        getElementYCoordinate: function(e) {
            return e.getBoundingClientRect().top - document.body.getBoundingClientRect().top
        }
    },
    JSONPLoader = {
        load: function(e, t, n) {
            var i = document.getElementsByTagName("head")[0],
                o = t.callback_id + Date.now();
            e += e.match(/\?/) ? "&callback=" + o : "?callback=" + o;
            var r = document.createElement("script");
            r.async = !0, r.setAttribute("type", "text/javascript"), r.setAttribute("src", e), r.onerror = function(e) {
                i.removeChild(e.target), delete window[o], t.onError.call(n || window, e)
            }, window[o] = function(e) {
                i.removeChild(r), delete window[o], t.onSuccess.call(n || window, e)
            }, i.appendChild(r)
        }
    },
    SocialBar = {
        setHeight: function(e) {
            setTimeout(function() {
                for (var t = 0, n = document.querySelectorAll(e), i = 0; i < n.length; ++i) {
                    var o = n[i].offsetHeight;
                    o > t && (t = o)
                }
                for (var i = 0; i < n.length; ++i) n[i].style.height = t + "px"
            }, 100)
        }
    };
window.addEventListener("load", function() {
 
});