a=document.querySelectorAll('button')
let s=document.querySelectorAll('.card ')
let r=document.querySelectorAll('.a')
let im=["bg.jpg","gym.jpg","cal.jpg","vail.jpg"]
let i=0;
for(item of s)
{
    console.log(r.length)
    item.addEventListener('click',(e)=>
    {
       
        console.log(im[i])
        bt=e.target.innerText;
        console.log(bt)
      if(bt=='|>>')
      {
        document.getElementById("ids").innerHTML='||'
         
     r[i].play()
         
      }
      else if(bt=='||')
      {
        document.getElementById("ids").innerHTML='|>>'
        r[i].pause()

      }
      else if(bt=='<<')
      {r[i].pause()
        r[i].currentTime=0;
          if(i==0)
          {
              i=0;
          }
          else{
              i--;

          }
          document.getElementById('im').src=im[i]
im[i].classList.add("anime");

          r[i].play()
document.getElementById("ids").innerHTML='|>>'
      }
      else if(bt=='>>')
      {r[i].pause()
        r[i].currentTime=0;
        if(i>=r.length-1)
        {
            i=r.length-1;
        }
        else{
            i++;

        }
        document.getElementById('im').src=im[i]
        im[i].classList.add("anime");
     
r[i].play()
document.getElementById("ids").innerHTML='|>>'
      }
  
    });
}
