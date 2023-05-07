let slider = tns({
  container: ".my-slider",
  nav: false,
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  loop: true,
  fixedWidth: 850,
  edgePadding: false,
  controls: false,
  responsive: {
    0: {
      fixedWidth: 280,
      gutter: 0,
      fixedHeight: true,
      items: 1,
    },
  },
});
