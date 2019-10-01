$(".menu").mousemove(function(e) {
  var i = $(".circle"),
    s = e.pageX - i.offset().left,
    o = e.pageY - i.offset().top;

  TweenMax.to($(".circle"), 0.3, {
    x: ((s - i.width() / 2) / i.width()) * 50,
    y: ((o - i.height() / 2) / i.height()) * 50,
    scale: 1.2,
    ease: Power2.easeOut
  });

  TweenMax.to($(".text"), 0.3, {
    x: ((s - i.width() / 2) / i.width()) * 80,
    y: ((o - i.height() / 2) / i.height()) * 80,
    ease: Power2.easeOut
  });
});

$(".menu").mouseleave(function(e) {
  var i = $(".circle"),
    s = e.pageX - i.offset().left,
    o = e.pageY - i.offset().top;
  TweenMax.to($(".circle"), 0.3, {
    x: 0,
    y: 0,
    scale: 1,
    ease: Power2.easeOut
  });

  TweenMax.to($(".text"), 0.3, {
    x: 0,
    y: 0,
    ease: Power2.easeOut
  });
});
