var matkhau1 = document.getElementById("txtMatKhau");
var matkhau2 = document.getElementById("txtMatKhau_verify");
var tuoi = document.getElementById("dtpBirthday");

 function TenDangNhap() {
     var ten = document.getElementById("txtTenTK").value;
     if (ten.length !=0) {
         return true;
     }
     return false;
 }

 function MatKhau() {
     var mk = document.getElementById("txtMatKhau").value;
     if (mk.length !=0) {
         return true;
     }
     return false;
 }

 function XacNhanMatKhau() {
    var mk_xacnhan = document.getElementById("txtMatKhau_verify").value;
    if (mk_xacnhan.length !=0) {
        return true;
    }
    return false;
}

function Email() {
    var email = document.getElementById("email").value;
    if (email.length !=0) {
        return true;
    }
    return false;
}

 function KiemTraMatKhau(kiemtraMK1, kiemtraMK2, kiemtratuoi){  
    var kiemtraMK = (kiemtraMK1.length != 0 && kiemtraMK2.length != 0 && kiemtraMK1 === kiemtraMK2);

    if(kiemtraMK && kiemtratuoi >=18){  
        alert("Đăng ký thành công");  
        return true;
        }  
        else{  
        alert("Đăng ký thất bại");  
        return false;  
        }  
 }  

 function DangKy(){
    var kiemtraMK1 = txtMatKhau.value;  
    var kiemtraMK2 = txtMatKhau_verify.value; 
    var kiemtratuoi = tuoi.value;
    var ngaysinh = new Date(kiemtratuoi);
    var hientai = new Date(Date.now());
    var chenhlech = hientai - ngaysinh;
    var age = new Date(chenhlech);
    var t = age.getFullYear() - new Date(0).getFullYear();

    if(!TenDangNhap()){
        alert("Vui lòng nhập Tên")
        return false;
    }

    if(!MatKhau()){
        alert("Vui lòng nhập Mật Khẩu")
        return false;
    }

    if (!XacNhanMatKhau()){
        alert("Vui lòng nhận Xác Nhận Mật Khẩu")
        return false;
    }
    
    if (!Email()){
        alert("Vui lòng nhập lại Email")
        return false;
    }

    KiemTraMatKhau(kiemtraMK1, kiemtraMK2, t)
}
