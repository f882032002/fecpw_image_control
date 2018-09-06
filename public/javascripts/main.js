
/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 讓整個畫面自適應螢幕高度 start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(document).ready(() => {
    let _height = $(window).height();
    $('#app').css('height', _height)
  });
  
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 讓整個畫面自適應螢幕高度 end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
  
  
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Area Group) start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

  $(() => {
    $( ".area" ).draggable({
      cursor: 'pointer',
      helper: "clone",
      revert: "invalid",
    });
  });
  $()
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Area Group) end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
  
  
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Devices) start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */
  
  $(() => {
    $( ".item" ).draggable({
      cursor: 'pointer',
      helper: "clone",
      revert: "invalid",
    });
  });
 
  /* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */