$(document).ready(function () {
  // navigation menu effect
  $(".js--features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("stickey");
      } else {
        $("nav").removeClass("stickey");
      }
    },
    {
      offset: "65px",
    }
  );

  //   button scroll
  $(".js--scroll--to---plans").click(function () {
    $("html,body").animate(
      { scrollTop: $(".section-plans").offset().top },
      1000
    );
  });
  $(".js--scroll--to---start").click(function () {
    $("html,body").animate(
      { scrollTop: $(".section-features").offset().top },
      500
    );
  });

  //  navigation smooth scroll
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // animations on scroll
  $(".js--wp--1").waypoint(
    function (direction) {
      $(".js--wp--1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp--2").waypoint(
    function (direction) {
      $(".js--wp--2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp--3").waypoint(
    function (direction) {
      $(".js--wp--3").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );
});

// Mobile Navigation

$(".mobile--nav").click(function () {
  const nav = $(".main--nav");
  const mobile = $(".mobile--nav");
  if (mobile.hasClass("closed")) {
    mobile.removeClass("closed");
    nav.slideToggle(200);
    $(".mobile--nav").html('<ion-icon name="close-outline"></ion-icon>');
  } else {
    mobile.addClass("closed");
    nav.slideToggle(200);
    $(".mobile--nav").html(
      '<ion-icon name="reorder-three-outline"></ion-icon>'
    );
  }
});
