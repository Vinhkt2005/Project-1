const notyf = new Notyf({
    duration: 3000,
    position: {
      x: 'right',
      y: 'top',
    },
  
    dismissible: true
  }); 
  
  let existNotify = sessionStorage.getItem("notify");
  if(existNotify) {
    existNotify = JSON.parse(existNotify);
    if(existNotify.code == "success") {
      notyf.success(existNotify.message);
    } else {
      notyf.error(existNotify.message);
    }
    sessionStorage.removeItem("notify");
  }
  
  const drawNotify = (code,message) =>{
    sessionStorage.setItem("notify", JSON.stringify({
      code: code,
      message: message,
    }));
  }