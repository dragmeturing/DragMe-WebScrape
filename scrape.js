var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://www.facebook.com/events/435603610346472/")
  .wait("._63ew")
  .evaluate(() => {
    var img = document.querySelector(".scaledImageFitWidth");
    var title = document.querySelector("#seo_h1_tag");
    var date = document.querySelector('._xkh');
    // var description = document.querySelector('');
    return date
    // return title.innerText
    // return img.src;
  })
  .end()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Search failed:", error);
  });
