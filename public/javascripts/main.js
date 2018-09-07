
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 讓整個畫面自適應螢幕高度 start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(document).ready(() => {
    let _height = $(window).height();
    $('#app').css('height', _height)
  });
  
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 讓整個畫面自適應螢幕高度 end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
  
  
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Area Group) start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  $(() => {
    $( '.area' ).draggable({
      cursor: 'pointer',
      helper: "clone",
      revert: "invalid",
    });
  });

  
  
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Area Group) end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
  
  $(() => { 
    $('#map_img').droppable('.area','.item');
    
  });

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Devices) start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
  
  $(() => {
    $( '.item' ).draggable({
      cursor: 'pointer',
      helper: "clone"
    });
  });
 
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */




  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 縮放按鈕 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
  let _width = 100; // 初始寬度

  $('#zoom').click(() => {
    _width += 10 ;  
    $('#map_img img').css('width', _width + '%')
  });

  $('#zoom_Out').click(() => {
    _width -= 10 ;  
    $('#map_img img').css('width', _width + '%')
  });

  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 縮放按鈕 ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */