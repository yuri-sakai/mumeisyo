$(".slide").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
});

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
        console.log(doc.id, " => ", doc.data());
        var data = doc.data();
        let element = document.getElementById("mumeisyos");
        element.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="item">
              <div class="item-content">
                  <div class="my-custom-content">
                      <a href="carddetail.html"><img src="${data.imageUrl}"></a>
                      <p class="map-post"><i class="fas fa-map-marker-alt"></i>名古屋市千種区</p>
                      <p>${data.text}</p>
                  </div>
              </div>
            </div>
          `
        );
      });
      imagesLoaded(".grid").on("progress", () => {
        var grid = new Muuri(".grid");
      });
    });
}

loadMumeisyo();
