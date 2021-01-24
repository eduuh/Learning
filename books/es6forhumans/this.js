function getContext(){
   console.log(this);
   console.log(typeof this)

   console.log(this === window)
}

getContext()