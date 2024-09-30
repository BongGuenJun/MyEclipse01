// 마우스 진입 이벤트      
$(document).on('mouseenter', '.preview_div',function(){
// 재생 버튼 감추기        
$(this).find('img').hide();
// 썸네일 이미지를  gif 이미지로 변경        
$(this).css('background-image','url(gif보트.gif)');
});
// 마우스 아웃 이벤트      
$(document).on('mouseleave','.preview_div', function(){
  // 재생 버튼 보아기        
  $(this).find('img').show();
  // gif 이미지를  썸네일 이미지로 변경        
  $(this).css('background-image','url(gif섬네일.PNG)');
});
