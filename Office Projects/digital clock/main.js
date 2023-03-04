const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const month = document.querySelector('.month');
const day = document.querySelector('.day');
const year = document.querySelector('.year');

function setDate(){
    //The "new Date" method helps to get the current time from the device
    const now = new Date(); 
  
    // Now the information of month, day, year has to be received from the device
    const mm = now.getMonth();
    const dd = now.getDate();
    const yyyy = now.getFullYear();

    //Now the information of sec, min, hours has to be received from the device
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hrs = now.getHours();

    //I have stored the names of all the months in the constant named "monthName"
    const monthName = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

    //Zero will be added when the time is below 10
  
    //As a result, time will always be two characters long
    if (hrs < 10) {
        hours.innerHTML = '0' + hrs;
    } else {
        hours.innerHTML = hrs;
    }

    if (secs < 10) {
        seconds.innerHTML = '0' + secs;
    } else {
        seconds.innerHTML = secs;
    }

    if (mins < 10) {
        minutes.innerHTML = '0' + mins;
    } else {
        minutes.innerHTML = mins;
    }
    //"innerHTML" is used to display all the information in the webpage
    month.innerHTML = monthName[mm];
    day.innerHTML = dd;
    year.innerHTML = yyyy;
}

  //All of the above calculations are stored in "setDate".

//Now with the help of "setInterval" that calculation has to be updated every 1 second. This will update the time every second.
  
//1 second = 1000 milliseconds
setInterval(setDate, 1000);