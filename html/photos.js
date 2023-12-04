var data=null
var userId=null
$(document).ready(()=>{
  getPhotos()
})

const getID=()=>{
  let link=window.location.href;
  let id=link.slice(link.indexOf("id=")+3)
  userId=id
}

const getPhotos = () => {
  getID()
  console.log(userId);
  $.ajax({
    url: `${api}/photos?albumId=${userId}`,
    method: "get",
    success: (res) => {
      data = res;
      console.log(res);
      displayPhotos(res);
    },
    error: (err) => {
      console.log(err)
    },
  });
};
const displayPhotos = (data) => {
  $(".data").html("");
  data.map((item, key) => {
    $(".data").append(`
      <tr>
        <td>${key + 1}</td>
        <td>${item.title}</td>
        <td>
          <div class="btnBox">
            <a class="btnImg" onclick="openModal('${item.url}')">
              <img class="rasm" src="${item.thumbnailUrl}">
            </a>
          </div>
        </td>
      </tr>`);
  })}
const openModal = (url) => {
  $('#exampleModal').modal('show');
  $(".modal-dialog").html(`<img src="${url}">`);
};
