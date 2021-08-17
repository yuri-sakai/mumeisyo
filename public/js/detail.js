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
      <div class="title-row">
        <h2>${data.mumeisyoName}</h2>
        <div class="title-icon">
          <img  src="${data.profilePicUrl}" alt="">
        </div>
        <p>by ${data.name}</p>
        <p>place ${data.mumeisyoPlace}</p>
      </div>
      <p>何人の人が保存しました</p>
          <p>${data.text}</p>
          <h3>TAGS</h3>
          <button type="button" class="btn btn-primary">${data.mumeisyoTag}</button>
          <h3>手がかり</h3>
          <p>map</p>
          <p style="height:300px"></p>
          <p></p>
          <p></p>
          <p></p>
        `
      );
    });
}
detail_mumeisyo();
