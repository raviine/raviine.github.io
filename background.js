$(document).on('mousemove', (event) => {
  $('.follower').css({
    left: event.clientX,
    top: event.clientY,
  });
});