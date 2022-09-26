
 const et=document.querySelector('#emailtext')
 const bt=document.querySelector('#emailbutton')
 bt.addEventListener('click',()=>{
  
  const a=ValidateEmail()
 })

 function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(et.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
