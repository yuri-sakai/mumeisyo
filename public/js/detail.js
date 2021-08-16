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
        <h2>${data.text}</h2>
        <div class="title-icon">
          <img  src="${data.profilePicUrl}" alt="">
        </div>
        <p>by testname</p>
      </div>
      <p>何人の人が保存しました</p>
      <h3 >subtitle</h3>
            <p>massages Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="article-photo col-md-8 offset-md-2">
              <img src="./images/test5.jpg" alt="main-image">
            </div>
            <h3>TAGS</h3>
            <button type="button" class="btn btn-primary">Tags</button>
            <button type="button" class="btn btn-primary">Tags</button>
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
