function showTime(){
    let date = new Date();
    let hr = date.getHours(); // 0 - 23
    let min = date.getMinutes(); // 0 - 59
    let sec = date.getSeconds(); // 0 - 59
    let current_date = date.getDate(); // 1-31
    let month = date.getMonth(); // 0-11
    let year = date.getFullYear(); // yyyy

    if(hr <= 12){
        period = "AM"
        greeting = 'Morning'
    }
    else{
        hr = hr - 12;
        period = "PM";
        greeting = 'Evening'
    }

    
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    document.getElementById("greet").innerText = (`Good ${greeting}`);
    
    let time = `${hr}:${min}:${sec} ${period}`;
    document.getElementById("clock").innerText = time;
    
    setTimeout(showTime, 1000);   

    const months = ["Jan", "Feb", "Mar", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"]; 

    document.getElementById("curr_date").innerText = (`${current_date} ${months[month]} ${year}`);
}

showTime();
