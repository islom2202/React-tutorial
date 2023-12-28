let name = {
  firstname: 'Islom',
  lastname: 'Saidaliev',
  fullname: function(){
     return this.firstname + ' ' + this.lastname
  }
}
let member = {
  firstname: 'Dilnoza',
  lastname: 'Karimova',
}
console.log(name.fullname.bind(member)()) // Dilnoza Karimova





