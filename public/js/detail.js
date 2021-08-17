function detail_mumeisyo() {
  const params = new URLSearchParams(location.search);
  const photo_id = params.get("photoid");

  var query = firebase
    .firestore()
    .collection("mumeisyo")
    .doc(photo_id)
    .get()
    .then((doc) => {
      console.log(doc.data());
      var data = doc.data();
      let element = document.getElementById("mumeisyo-detail");
      element.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="post-detail-photo text-center">
        <img  src="${data.imageUrl}" alt="main-image">
        </div>
      <div class="row title-row">
        <div class="col-md-6 offset-md-2">
          <h2>${data.mumeisyoName}</h2>
          <p><i class="fas fa-map-marker-alt"></i>${data.mumeisyoPlace}</p>
        </div>
        <div class="col-md-3">
          <p class="title-icon"><img  src="${data.profilePicUrl}" alt=""></p>
          <p>by ${data.name}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 offset-md-2">
          <p>${data.text}</p>
          <h3>TAGS</h3>
          <button type="button" class="btn btn-primary">${data.mumeisyoTag}</button>
          <p style="height:300px"></p>
          <p></p>
          <p></p>
          <p></p>
        </div>

      </div>

         
        `
      );
    });
}
detail_mumeisyo();
