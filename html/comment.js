var data=null
$(document).ready(()=>{
  getComment()
})
const getComment=()=>{
  $.ajax({
    url:`${api}/comments`,
    method:"get",
    success:(res)=>{
      data=res
      console.log(res)
      getUser(res)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
  const getUser=(data)=>{
  $('.data').html('')
  data.map((item, key)=>{
    $('.data').append(
       `<tr>
      <td>${key+1}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td><a onclick="openModall(${key})" class="btn btn-primary ">Body</a></td>
      </tr>`
    )
  })
  }
const openModall=(id)=>{
  $('#exampleModal').modal('show')
  $('.modal-body').html(data[id].body)
}