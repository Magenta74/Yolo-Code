
    setInterval(ShowDateTime, 1000);


function ShowDateTime() {
    var d = new Date();
    var hour = d.getHours();
    var minute = AddLeadingZero(d.getMinutes());
    var second = AddLeadingZero(d.getSeconds());
    
    var gio = 23 - hour;
    var phut = 60 - minute;
    var giay = 60 - second;
    if (gio == 24) {
        gio--;
    }
    if (phut == 60) {
        gio--;
        phut == 59;
    }
    
    document.getElementById("lblTime").innerHTML = AddLeadingZero(gio) + ":" + AddLeadingZero(phut) + ":" + AddLeadingZero(giay);

    //     var daysOfWeek = ["Chủ Nhật", "thứ Hai", "thứ Ba", "thứ Tư", "thứ Năm", "thứ Sáu", "thứ Bảy"];
    //     document.getElementById("lblDaysOfWeek").innerHTML = daysOfWeek[d.getDay()];

    //     var day = AddLeadingZero(d.getDate());
    //     var month = AddLeadingZero(d.getMonth() + 1);
    //     var year = d.getFullYear();

    //     document.getElementById("lblDate").innerHTML = day + "/" + month + "/" + year;
    // }

    function AddLeadingZero(number) {
        if (number < 10) {
            return "0" + number;
        }
        return number;
    }
}