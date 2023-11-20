var userId=null
$(document).ready(()=>{
var link=window.location.href
userId=link.slice(link.indexOf("userId=")+7)
userId=userId.replaceAll('/', '')
if(isNaN(Number(userId)) || userId.length==0) {
  goHome()
}
else {
  getData()
}
})
const goHome=()=>{
  var link=window.location.href
  var newlink=link.slice(0, link.indexOf('html/'))+"index.html"
  window.location.href=newlink
}
const getData=()=>{
  if(userId!==null) {
    $.ajax({
      url:`${api}/todos?userId=${userId}`,
      method: "get",
      success:(res)=>{
        console.log(res)
        if(res.length==0){
          goHome()
        }else{
          getTodos(res)
        }
      },
      error:(err)=>{
        goHome()
      }
    })
  }
}
const getTodos=(data)=>{
  $(".data").html("")
  data.map((item, key)=>{
    $('.data').append(` <tr>
    <td>${key+1}</td>
    <td>${item.title}</td>
  <td>
    <div class="icons_box">
    ${item.completed?`<i class="fa fa-check-circle-o done" aria-hidden="true"></i>`:
    `<i class="fa fa-times-circle-o undone" aria-hidden="true"></i>`}
    </div>
  </td>
  </tr>`)
  })
}
