$(document).ready(function () {
  var animatedText = $(".h1-we");
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop() + windowHeight;

    animatedText.each(function () {
      var elementOffset = $(this).offset().top;

      if (scrollPosition > elementOffset) {
        $(this).addClass("animate");
      } else {
        $(this).removeClass("animate");
      }
    });
  });

  $("#quote").mouseenter(function () {
    $(this).css("font-size", "1.5rem");
  });

  $("#quote").mouseleave(function () {
    $(this).css("font-size", "1rem");
  });

  var animatedText2 = $(".h5-we");
  var windowHeight2 = $(window).height();

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop() + windowHeight2;

    animatedText2.each(function () {
      var elementOffset = $(this).offset().top;

      if (scrollPosition > elementOffset) {
        $(this).addClass("animate");
      } else {
        $(this).removeClass("animate");
      }
    });
  });

  $("#quote-text").mouseenter(function () {
    $(this).css("font-size", "2.5rem");
  });

  $("#quote-text").mouseleave(function () {
    $(this).css("font-size", "2rem");
  });

  var animatedText3 = $('.h5-footer-we');
  var text = animatedText3.text();
  var words = text.split(' ');
  var animatedWords = words.map(function(word) {
    var letters = word.split('');
    var animatedLetters = letters.map(function(letter) {
      return '<span>' + letter + '</span>';
    });
    return '<span>' + animatedLetters.join('') + '</span>';
  });
  animatedText3.html(animatedWords.join(' '));
});
