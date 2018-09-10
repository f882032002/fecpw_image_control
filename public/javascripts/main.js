/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 讓整個畫面自適應螢幕高度 start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(document).ready(() => {
  let _height = $(window).height();
  $('#app').css('height', _height)
});

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 讓整個畫面自適應螢幕高度 end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 幫每個項目加上刪除按鈕 start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(()=>{
  let delBtn = `
    <button class="del_btn">
      x
    </button>
`
  $('.item,.area').append(delBtn);
})

$('.del_btn')

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 幫每個項目加上刪除按鈕 end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Area Group) start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  $('.area').draggable({
    cursor: 'pointer',
    helper: "clone",
    revert: "invalid",
  });
});

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Area Group) end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Droppable (Map) start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  $('#map_img').droppable('.area', '.item');
});

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Droppable (Map) end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable (Devices) start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  $('.item').draggable({
    cursor: 'pointer',
    helper: "clone"
  });
});

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ jQuery ui Draggable end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */


/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 縮放按鈕 start ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

$(() => {
  let _width = 100; // 初始寬度

  $('#zoom').click(() => { // 放大圖片
    (_width == 300) ? (
      this.unbind()
    ) : (
      (_width += 10),
      $('#map_img img').css('width', _width + '%')
    );
  });

  $('#zoom_Out').click(() => { // 縮小圖片
    (_width == 100) ? (
      this.unbind()
    ) : (
      (_width -= 10),
      $('#map_img img').css('width', _width + '%')
    );
  });
})

/* ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ 縮放按鈕 end ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ */

let _position = $('#zoom').position()
console.log(_position)