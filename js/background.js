$('#landing-content').mousemove(function(e) {
  var amountMovedX = (e.pageX * -1 / 11);
  var amountMovedY = (e.pageY * -1 / 11);
  $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  console.log(amountMovedX);
});