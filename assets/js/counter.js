const counted = false;
$(window).scroll(function () {{
  $(".count").each(function () {
      const $this = $(this);
      $this.prop("Counter", 0).animate(
          { Counter: $this.data("count") },
          {
              duration: 5000,
              easing: "swing",
              step: function (now) {
                  $this.text(Math.floor(now).toLocaleString());
              },
              complete: function () {
                  $this.text(Math.floor($this.data("count")).toLocaleString());
              },
          }
      );
  });
  counted = true;
}
});