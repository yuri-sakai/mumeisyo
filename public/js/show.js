function loadMumeisyo() {
  var query = firebase
    .firestore()
    .collection("mumeisyo")
    .orderBy("timestamp", "desc")
    .limit(12)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        var data = doc.data();
        let element = document.getElementById("mumeisyos");
        element.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="item">
              <div class="item-content">
                  <div class="my-custom-content">
                      <a href="carddetail.html?photoid=${doc.id}"><img src="${data.imageUrl}"></a>
                      <p class="map-post"><i class="fas fa-map-marker-alt"></i>${data.mumeisyoPlace}</p>
                      <p>${data.mumeisyoName}</p>
                  </div>
              </div>
            </div>
          `
        );
      });
      $(".grid").imagesLoaded({ background: true }, function () {
        var grid = new Muuri(".grid");
      });
    });
}

function loadRecomend() {
  var query = firebase
    .firestore()
    .collection("mumeisyo")
    .orderBy("timestamp", "desc")
    .limit(5)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        var data = doc.data();
        let element = document.getElementById("recomendation");
        element.insertAdjacentHTML(
          "afterbegin",
          `
          <div>
            <a href="carddetail.html?photoid=${doc.id}"">
              <img src="${data.imageUrl}" alt="">
            </a>
          </div>
          `
        );
      });
      $(".slide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        arrows: false,
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: "0",
      });
    });
}

$(function () {
  var rotate = function (rotateLogo, angle) {
    rotateLogo.css({
      transform: "rotate(" + angle + "deg)",
    });
  };
  $(window).scroll(function () {
    rotate($("#rotateLogo"), $(window).scrollTop() * 0.2);
  });
});

loadRecomend();
loadMumeisyo();
