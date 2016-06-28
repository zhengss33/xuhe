(function($){
    "use strict";
    var BackTop = function(el,opts){
        var self = this;
        this.opts = $.extend({}, BackTop.defaults, opts);
        this.$el = $(el);
        this.window = $(window);

        this.$el.click(function() {
            if ( self.opts.mode == "animateTop" ) {
                self.animateTop();
            }else if ( self.opts.mode == "goTop") {
                self.goTop();
            }           
        });
        this.window.scroll(function() {
            self.checkPosition();
        }); 
    };

    BackTop.defaults = {
        mode: "animateTop",
        pos: $(window).height(),
        speed: 800
    };

    BackTop.prototype.animateTop = function(){
        var self = this;

        if (self.window.scrollTop() > 0 ) {
            if (!self.$el.is(':animated')) {
                $("body,html").animate({
                    scrollTop: 0
                },self.opts.speed);
            }
        }
    };  

    BackTop.prototype.goTop = function(){
        $("body,html").scrollTop(0);
    };

    BackTop.prototype.checkPosition = function(){
        if (this.window.scrollTop() > this.opts.pos) {
            this.$el.fadeIn();
        }else{
            this.$el.fadeOut();
        }
    };

    $.fn.extend({
        backTop: function(opts){
            return this.each(function() {
                new BackTop(this,opts);
            });
        }
    });
    
})(jQuery);