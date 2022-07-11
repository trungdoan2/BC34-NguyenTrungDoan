document.getElementById('btnTinhLuong').onclick = function () {
    var soNgayLam = document.getElementById ("soNgayLam").value;
    var luongNgay = 100000;
    var total = soNgayLam * luongNgay;
    //format VND
    var format = new Intl.NumberFormat("vn-VN");
    var totalVND = format.format(total) + "vnd";
  
  
   document.getElementById('thongBaoTinhLuong').innerHTML = totalVND;
  }

  document.getElementById('btnTrungBinh').onclick = function () {
    var number1 = document.getElementById ('soThu1').value * 1;
    var number2 = document.getElementById ('soThu2').value * 1;
    var number3 = document.getElementById ('soThu3').value * 1;
    var number4 = document.getElementById ('soThu4').value * 1;
    var number5 = document.getElementById ('soThu5').value * 1;
    sum = number1 + number2 + number3 + number4 + number5;
    var medium = sum / 5;
 
    showInfo = "<p>Kết quả: " + medium + "</p>"
 
    document.getElementById('thongBaoTrungBinh').innerHTML = showInfo;
 
 
 }
 
 
 document.getElementById('btnQuyDoi').onclick = function () {
   var giaUsd = 23000;
   var soTienUsd = document.getElementById ('soTienUsd').value;
 
   var quyDoi = giaUsd * soTienUsd;
  
   var format = new Intl.NumberFormat("vn-VN");
 
   showInfo = "<p>Số tiền vnd: " + format.format(quyDoi) + " vnd</p>"
 
   document.getElementById('thongBaoVnd').innerHTML = showInfo;
 
  
   
 }
 
 document.getElementById('btnKetQua').onclick = function () {
   var longs = document.getElementById('chieuDai').value * 1;
        var witdh = document.getElementById('chieuRong').value * 1;
 
        var chuVi = (longs + witdh) * 2;
        var dienTich = longs * witdh;
   
        showInfo = "<p>Diện Tích:" + dienTich + "</p>Chu Vi:" + chuVi + "";
 
       document.getElementById("thongBaoSP").innerHTML = showInfo;
 
       
 }
 
 document.getElementById('btnTinhTong').onclick = function () {
   var n = document.getElementById('so2Cs').value;
   var num1 = n % 10; 
        var num2 =  Math.floor(n / 10) ; 
        sum = num1 + num2;
   showInfo = "<p>Kết quả: " + sum + "</p>"
   document.getElementById("thongBaoTong").innerHTML = showInfo;
 }