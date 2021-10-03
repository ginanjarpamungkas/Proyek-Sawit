//scroll faded start
(function($){
   $.fn.heroFade = function() {

   var self = this;
   var windowHeight = $(window)[0].innerHeight;
   var windowScrollTop = $(window).scrollTop();
   var heroFadeFunction = function(){

       return self.each(function() {
       if (windowScrollTop <= windowHeight) {
           var scrollPercent = windowScrollTop/windowHeight,
               scrollTransform = scrollPercent * 150;
           self.find('.background-mask').css({
           opacity: scrollPercent
           });
           self.find('#title-fade').css({
           'transform': 'translate(0, -' + scrollTransform + '%)',
           opacity: 1 - scrollPercent
           });
       }
       });
   }

   $(window).on('scroll', function() {
       windowHeight = $(window)[0].innerHeight;
       windowScrollTop = $(window).scrollTop();
       heroFadeFunction();
   });

   heroFadeFunction();return self;}
})(jQuery);

$(document).ready(function() {
      $('.header').heroFade();
});
//scroll faded end

$(document).on("click",".lock",function(e) {
   e.preventDefault()
})
$(document).ready(function() {
    $('.title-content').find('h3').addClass('zoomIn').removeClass('hide')
    $('.title-content').find('p').addClass('zoomIn').removeClass('hide')
    $('.lock').append("")
})

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerElement: "#headlineTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.headline-grid-left, .headline-grid-right').removeClass('hide').removeClass('zoomIn')
                                    $('.headline-grid-left, .headline-grid-right').addClass('zoomIn')
                                 })
                                 .on("leave",(e)=>{
                                    $('.headline-grid-left, .headline-grid-right').addClass('hide')
                                 })
                                 // // .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#contributorTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.title, .collection-logo').removeClass('hide').removeClass('zoomIn')
                                    $('.title, .collection-logo').addClass('zoomIn')
                                 })
                                 .on("leave",(e)=>{
                                    $('.title, .collection-logo').addClass('hide')
                                 })
                                 // .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#stories1Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.stories-content').eq(0).removeClass('hide').removeClass('zoomIn')
                                    $('.stories-content').eq(0).addClass('zoomIn')
                                 })
                                 .on("leave",(e)=>{
                                    $('.stories-content').eq(0).addClass('hide')
                                 })
                                 // .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#stories2Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.stories-content').eq(1).removeClass('hide').removeClass('zoomIn')
                                    $('.stories-content').eq(1).addClass('zoomIn')
                                 })
                                 .on("leave",(e)=>{
                                    $('.stories-content').eq(1).addClass('hide')
                                 })
                                 // .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#stories3Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.stories-content').eq(2).removeClass('hide').removeClass('zoomIn')
                                    $('.stories-content').eq(2).addClass('zoomIn')
                                 })
                                 .on("leave",(e)=>{
                                    $('.stories-content').eq(2).addClass('hide')
                                 })
                                 // .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#stories4Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.stories-content').eq(3).removeClass('hide').removeClass('zoomIn')
                                    $('.stories-content').eq(3).addClass('zoomIn')
                                 })
                                 .on("leave",(e)=>{
                                    $('.stories-content').eq(3).addClass('hide')
                                 })
                                 // .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#patners1Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.patners-grid-left').removeClass('hide').removeClass('zoomIn')
                                    $('.patners-grid-left').addClass('zoomIn')
                                 })
                                 .on("leave",(e)=>{
                                    $('.patners-grid-left').addClass('hide')
                                 })
                                 // .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#patners2Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.patner-list').removeClass('hide').removeClass('zoomIn')
                                    $('.patner-list').addClass('zoomIn')
                                 })
                                 .on("leave",(e)=>{
                                    $('.patner-list').addClass('hide')
                                 })
                                 // .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);