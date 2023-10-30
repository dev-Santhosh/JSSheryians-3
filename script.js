// document.querySelector("#center").addEventListener("mousemove", function(dets){
//     console.log(dets.clientX, dets.clientY);
// })

const btn=document.querySelector("#throttle");
     
    // Throttling Function
    const throttleFunction=(func, delay)=>{
     
      // Previously called time of the function
      let prev = 0; 
      return (...args) => {
        // Current called time of the function
        let now = new Date().getTime(); 
     
        // Logging the difference between previously 
        // called and current called timings
        console.log(now-prev, delay); 
         
        // If difference is greater than delay call
        // the function again.
        if(now - prev> delay){ 
          prev = now;
     
          // "..." is the spread operator here 
          // returning the function with the 
          // array of arguments
          return func(...args);  
        }
      }
    }
    document.querySelector("#center").addEventListener("click", throttleFunction((dets)=>{
      var div = document.createElement("div");
      div.classList.add("imagediv");
      div.style.left = dets.clientX+"px";
      div.style.top = dets.clientY+"px";
      var img = document.createElement("img");
      img.setAttribute("src","https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww");
      div.appendChild(img);
      document.body.appendChild(div);
      gsap.to(img,{
        y:"0",
        ease:Power1,
        duration:0.6,
      })
      gsap.to(img,{
        y:"100%",
        ease:Power2,
        delay:0.6,
        // duration:0.2,
      })
      setTimeout(function(){
        div.remove();
    },2000);
    }, 400));