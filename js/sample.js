$(function(){
  var navBox=$("header")
  navBox.hide();
  var TargetPos=94;

  $(window).scroll(function(){
    var ScrollPos=$(window).scrollTop();
    if(ScrollPos>TargetPos){
      navBox.fadeIn();
    }else{
      navBox.fadeOut();
    }
  });


});
