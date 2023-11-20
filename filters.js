const filterPhone=(phone)=>{
  if(phone!==null){
    return(phone.slice(0, phone.indexOf(" x")))
  }
  else{
    return('-')
  }
}
const filterAdress=(address)=>{
  if(address!=null){
    const {street, suite, city}=address
    var str=""
    if(city!=null){
        str+=city+", "
    }
    if(street!=null){
      str+=street+", "
  }
    if(suite!=null){
      str+=suite
  }else {
  str=str.slice(0, str.lastIndexOf(', '))
}
return(str)
  }else {
    return("-")
  }
}
const filterCompany=(company)=>{
  if(company!==null) {
    return(isnullData(company.name))
  }else {
    return('-')
  }
}
const isnullData=(a)=>{
  if(a==null){
    return("-")
  }else{
    return(a)
  }
}