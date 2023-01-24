showTime = () =>{
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let mo = date.getMonth();
    let dd = date.getDate();
    let yyyy = date.getFullYear();
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = dd + "." +  mo+1 + "." + yyyy + " ~ " + hh + ":" + mm + ":" + ss;
     let text;
    if(date.getDay()==1){
        text="Pazartesi";
    }else if(date.getDay()==2){
        text="Salı";
    }else if(date.getDay()==3){
        text="Çarşamba" 
    }else if(date.getDay()==4){
        text="Perşembe" ;
    }else if(date.getDay()==5){
        text="Cuma";
    }else if(date.getDay()==6){
        text="Cumartesi";
    }else {
        text="Pazar";
    }
    document.querySelector("#dateSpan").innerHTML = `${time} ${text}`; 
    let t = setTimeout(function(){ showTime() }, 1000);
  }
showTime();