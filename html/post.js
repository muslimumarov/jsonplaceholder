var data=null
$(document).ready(()=>{
  getUsers()
})
const getUsers=()=>{
  $.ajax({
    url:`${api}/posts`,
    method:"get",
    success:(res)=>{
      data=res
      console.log(res)
      getPost(res)
    },
    error:(err)=>{
      console.log(err);
    }

  })
}
const getPost=(data)=>{
  $('.data').html('')
  data.map((item, key)=>{
    $('.data').append(
      `<tr>
      <td>${key+1}</td>
      <td>${item.title}</td>
      <td><a onclick="openModal(${key})" class="btn btn-primary ">Body</a></td>
      <td><div class="btnBox">
      <a href="commets.html" class="btn btn-primary active">
      <i class="fa fa-eye" aria-hidden="true"></i></a></div></td>
      </tr>`
      )
    })
  }
  const openModal=(id)=>{
    $('#exampleModal').modal("show")
    $('.modal-body').html(data[id].body)
  }
