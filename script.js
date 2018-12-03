var name = 'Maria Leonor Nogueira'
$('.logocontainer').hover(
  function() {
    $('.logo').fadeOut(0, function() {
      $('.logocontainer').prepend(name)
    })
  },
  function() {
    $(this).empty()
    $(this).prepend('<img class="logo" src="maria_nono_logo_2.gif" />')
    $('.logo').fadeIn('fast')
  }
)



$('.thumbnails a').on('mousemove', function() {
  var title = $(this)
    .find('.project-title')
    .text()
  $('.cursor').html(title)
  $('.cursor').css({left: event.pageX - 180, top: event.pageY - 220})
})

$('.thumbnails a').on('mouseleave', function() {
  $('.cursor').empty()
})
