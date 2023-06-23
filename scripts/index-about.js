$(document).ready(function () {
  $(".projects-h1").mouseenter(function () {
    $(this).css("font-size", "5rem");
  });

  $(".about-h1-1").mouseleave(function () {
    $(this).css("font-size", "3rem");
  });

  $(".about-h1-2").mouseenter(function () {
    $(this).css("font-size", "4rem");
  });

  $(".about-h1-2").mouseleave(function () {
    $(this).css("font-size", "3rem");
  });

  const photo1 = {
    name: "1",
    ext: "jpg",
    path: "slider-about",
    size: "1MB",
  };

  const photo2 = {
    name: "2",
    ext: "jpg",
    path: "slider-about",
    size: "1MB",
  };

  $(".about-h1-3").mouseenter(function () {
    $(this).css("font-size", "4rem");
  });

  $(".about-h1-3").mouseleave(function () {
    $(this).css("font-size", "3rem");
  });

  const photo3 = {
    name: "3",
    ext: "jpg",
    path: "slider-about",
    size: "1MB",
  };

  $(".projects-h1").mouseleave(function () {
    $(this).css("font-size", "4rem");
  });

  $(".about-h1-1").mouseenter(function () {
    $(this).css("font-size", "4rem");
  });

  const photo4 = {
    name: "4",
    ext: "jpg",
    path: "slider-about",
    size: "1MB",
  };

  const photo5 = {
    name: "5",
    ext: "jpg",
    path: "slider-about",
    size: "1MB",
  };

  const photo6 = {
    name: "6",
    ext: "jpg",
    path: "slider-about",
    size: "1MB",
  };

  $("h1, h2, h3").hover(
    function () {
      $(this).addClass("hover-effect");
    },
    function () {
      $(this).removeClass("hover-effect");
    }
  );

  const photo7 = {
    name: "7",
    ext: "jpg",
    path: "slider-about",
    size: "1MB",
  };

  // console logging for checking the data
  console.log(photo1, photo2, photo3, photo4);

  const photo8 = {
    name: "8",
    ext: "jpg",
    path: "slider-about",
    size: "1MB",
  };

  console.log(photo8, photo7, photo6, photo5);
});
