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
   $('.burger-container').click(function(){
      $(this).toggleClass('open');
      $('.navbar-mobile').toggleClass('open');
      $('body').toggleClass('scroll');
   });

    $('.title-content').find('h3').addClass('zoomInFade').removeClass('hide')
    $('.title-content').find('p').addClass('zoomInFade').removeClass('hide')
    setInterval(() => {
      $('.navbar').addClass('fadeInDown').removeClass('hide')
    }, 500);
    $('.lock').find('.image').append('<div class="padlock"><i class="fa fa-lock"></i></div>')
})

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerElement: "#headlineTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.headline-grid-left, .headline-grid-right').removeClass('hide').removeClass('zoomInFade')
                                    $('.headline-grid-left, .headline-grid-right').addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.headline-grid-left, .headline-grid-right').addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#contributorTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.title, .collection-logo').removeClass('hide').removeClass('zoomInFade')
                                    $('.title, .collection-logo').addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.title, .collection-logo').addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#stories1Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.stories-content').eq(0).removeClass('hide').removeClass('zoomInFade')
                                    $('.stories-content').eq(0).addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.stories-content').eq(0).addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#stories2Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.stories-content').eq(1).removeClass('hide').removeClass('zoomInFade')
                                    $('.stories-content').eq(1).addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.stories-content').eq(1).addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#stories3Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.stories-content').eq(2).removeClass('hide').removeClass('zoomInFade')
                                    $('.stories-content').eq(2).addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.stories-content').eq(2).addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#stories4Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.stories-content').eq(3).removeClass('hide').removeClass('zoomInFade')
                                    $('.stories-content').eq(3).addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.stories-content').eq(3).addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#patners1Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.patners-grid-left').removeClass('hide').removeClass('zoomInFade')
                                    $('.patners-grid-left').addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.patners-grid-left').addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#patners2Trigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.patner-list').removeClass('hide').removeClass('zoomInFade')
                                    $('.patner-list').addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.patner-list').addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#descriptionTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.description').removeClass('hide').removeClass('zoomInFade')
                                    $('.description').addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.description').addClass('hide')
                                 })
                                 .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#teams"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.teams').find('h3').removeClass('hide').removeClass('zoomInFade')
                                    $('.teams').find('h3').addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.teams').find('h3').addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#partners"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.partners-container').removeClass('hide').removeClass('zoomInFade')
                                    $('.partners-container').addClass('zoomInFade')
                                    $('.partners').find('h3').removeClass('hide').removeClass('zoomInFade')
                                    $('.partners').find('h3').addClass('zoomInFade')
                                    $('.partners').find('p').show().removeClass('zoomInFade')
                                    $('.partners').find('p').addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.partners-container').addClass('hide')
                                    $('.partners').find('h3').addClass('hide')
                                    $('.partners').find('p').hide()
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#shareTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.sosmed').removeClass('hide').removeClass('zoomInFade')
                                    $('.sosmed').addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.sosmed').addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#mainTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.artikel-main').find('p').removeClass('hide').removeClass('zoomInFade')
                                    $('.artikel-main').find('p').addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.artikel-main').find('p').addClass('hide')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#linkTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('.link-story').removeClass('hide').removeClass('zoomInFade')
                                    $('.link-story').addClass('zoomInFade')
                                 })
                                 .on("leave",(e)=>{
                                    $('.link-story').addClass('hide')
                                 })
                                 // .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
$(document).on("click","#dropdown",function(e) {
   if ($(this).data('toggle') == "hide") {
      $('.dropdown-list').removeClass('hide').removeClass('fadeOutUp').addClass('fadeInLeft')
      $(this).data('toggle',"show")
      $(this).attr('data-toggle',"show")
   }else{
      $('.dropdown-list').removeClass('fadeInLeft').addClass('fadeOutUp')
      $('.dropdown-list').addClass('hide')
      $(this).data('toggle',"hide")
      $(this).attr('data-toggle',"hide")
   }
})

let scroll_position = 0;
let scroll_direction;

window.addEventListener('scroll', function(e){
    let w = window.innerWidth;
    scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? 'up' : 'down';
    scroll_position = (document.body.getBoundingClientRect()).top;

    if (scroll_direction == 'up' && scroll_position < -50 && w < 480) {
      $(".navbar-burger").show()    
    } else {
      $(".navbar-burger").hide()    
    }
});