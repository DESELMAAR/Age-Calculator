const btn = document.querySelector(".btn");

btn.addEventListener("click",() =>{

  var d1 = document.querySelector(".day").value;
  var m1 = document.querySelector(".month").value;
  var y1 = document.querySelector(".year").value;
  const error= document.getElementById('error');

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();

if(isNaN(d1)||isNaN(m1)||isNaN(y1) ){
error.innerText='Not a valid entry';

}else if(d1>31 || m1>12||y1>y2 ||d1==='' || m1===''||y1===''){

  error.innerText='Entry not correct'
}else{

  var dayresult = document.querySelector(".dayresult");
  var monthresult = document.querySelector(".monthresult");
  var yearesult = document.querySelector(".yearesult");


  // console.log('fullyear'+y2)
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
  }
  if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
  }
  dayresult.innerHTML =`<span>${d2 - d1}</span>  days`  ;
  monthresult.innerHTML=`<span>${m2 - m1}</span>  months`;
  yearesult.innerHTML=`<span>${y2 - y1}</span> years`;

  error.innerText='';

}
}

)