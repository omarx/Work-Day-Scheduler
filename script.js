let todayDate=dayjs().format('dddd, MMMM YYYY h:mm A');
let currentTime=dayjs().format('hA')
let currentTimeTest="AM";

//Converts to army time so I comparison can be done
function convertTo24Hour(time) {
  var hours = parseInt(time.substr(0, time.length - 2));
  var modifier = time.slice(-2).toUpperCase();

  if (modifier === "PM" && hours < 12) {
      hours += 12;
  } else if (modifier === "AM" && hours === 12) {
      hours = 0;
  }

  return hours < 10 ? '0' + hours : hours; // if you want to keep the leading zero
}


$(function () {
  $("#currentDay").append(todayDate);
   for (let i=9;i<18;i++){
    
    if(convertTo24Hour($('#hour-'+i+' > .py-3').text())===convertTo24Hour(currentTime)){
      $('#hour-'+i).addClass('present');
      
    }
    if(convertTo24Hour($('#hour-'+i+' > .py-3').text())<convertTo24Hour(currentTime)){
      $('#hour-'+i).addClass('past');
     
    }
    if(convertTo24Hour($('#hour-'+i+' > .py-3').text())>convertTo24Hour(currentTime)){
      $('#hour-'+i).addClass('future');
     
    }    
    $('#hour-'+i +' > .btn').on("click",function(){
          let textVal=$('#hour-'+i+' > .description').val();
          localStorage.setItem('hour-'+i,textVal)
        })
    $('#hour-'+i+' > .description').val(localStorage.getItem('hour-'+i))

   }
});
