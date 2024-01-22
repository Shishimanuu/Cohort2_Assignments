function clock(){
    let date = new Date;
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    session = "AM";

    if(hh==0) hh = 12;
    if(hh>12) {
        session = "PM";
        hh = hh-12;
    }
    if(hh < 10) hh = "0" + hh;
    if(mm < 10) mm = "0" + mm;
    if(ss < 10) ss = "0" + ss;

    console.clear()
    console.log(hh + ":" + mm + ":" + ss + " " + session)
    setTimeout(clock,1000);
}

clock()