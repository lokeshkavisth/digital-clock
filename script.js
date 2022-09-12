setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "AM";

  h = h == 0 ? (h = 12) : h;
  ampm = h > 12 ? (ampm = "PM") : ampm;
  h = h >= 12 ? h - 12 : h;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  $(".hour h1").text(h);
  $(".min h1").text(": " + m + " :");
  $(".sec h1").text(s);
  $(".ampm h1").text(ampm);
}, 1000);
