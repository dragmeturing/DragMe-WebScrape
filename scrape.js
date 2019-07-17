var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://www.facebook.com/search/events/?q=Denver%20Drag&epa=SERP_TAB")
  .wait("img")
  
  .evaluate(() => {
    var nameNodes = document.querySelectorAll("h1");
    var list = [].slice.call(nameNodes);
    return list.map(node => {
      return node.innerText;
    });
  })
  .end()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Search failed:", error);
  });
