var data=null
$(document).ready(()=>{
  getUsers()
})
const getUsers=()=>{
  $.ajax({
    url:`${api}/photos`,
    method:"get",
    success:(res)=>{
      data=res
      console.log(res)
      getPhotos(res)
    },
    error:(err)=>{
      console.log(err);
    }

  })
}
const getPhotos = (data) => {
  $(".data").html("")
  data.map((item, key) => {
    $('.data').append(`
    <tr>
    <td >${key + 1}</td>
    <td >${item.title}</td>
    <td ><div class="btnBox"><a class="btnImg" onclick="openModall('${item.url}')"><img class="rasm" src="${item.thumbnailUrl}"></a></div></td>
    </tr>`)
  });
};
const openModall = (url) => {
  $('#exampleModal').modal('show');
  $(".modal-dialog").html(`<img src="${url}">`);
};