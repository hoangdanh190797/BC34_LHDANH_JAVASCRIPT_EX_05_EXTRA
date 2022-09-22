doIt = () => {
  let ten = document.getElementById("hoTen").value;
  let tien = document.getElementById("thuNhap").value * 1;
  let nguoi = document.getElementById("phuThuoc").value * 1;

  thuNhapchiuThue = (a, b) => {
    return a - 4 - b * 1.6;
  };

  let content = ``;

  let thue = 0;

  if (tien <= 60) {
    thue = 0.05;
    let soTien = thuNhapchiuThue(tien, nguoi);
    let tienThue = soTien * thue;
    content += `Họ và tên: ${ten} - Tổng thu nhập năm: ${tien} - Thu nhập chịu thuế: ${soTien} - Phần trăm chịu thuế (Theo quy định): ${thue} -Tiền thuế tạm tính: ${tienThue}`;
  } else if (tien > 60 && tien <= 120) {
    thue = 0.1;
    let soTien = thuNhapchiuThue(tien, nguoi);
    let tienThue = soTien * thue;
    content += `Họ và tên: ${ten} - Tổng thu nhập năm: ${tien} - Thu nhập chịu thuế: ${soTien} - Phần trăm chịu thuế (Theo quy định): ${thue} -Tiền thuế tạm tính: ${tienThue}`;
  } else if (tien > 120 && tien <= 210) {
    thue = 0.15;
    let soTien = thuNhapchiuThue(tien, nguoi);
    let tienThue = soTien * thue;
    content += `Họ và tên: ${ten} - Tổng thu nhập năm: ${tien} - Thu nhập chịu thuế: ${soTien} - Phần trăm chịu thuế (Theo quy định): ${thue} -Tiền thuế tạm tính: ${tienThue}`;
  } else if (tien > 210 && tien <= 384) {
    thue = 0.2;
    let soTien = thuNhapchiuThue(tien, nguoi);
    let tienThue = soTien * thue;
    content += `Họ và tên: ${ten} - Tổng thu nhập năm: ${tien} - Thu nhập chịu thuế: ${soTien} - Phần trăm chịu thuế (Theo quy định): ${thue} -Tiền thuế tạm tính: ${tienThue}`;
  } else if (tien > 384 && tien <= 624) {
    thue = 0.25;
    let soTien = thuNhapchiuThue(tien, nguoi);
    let tienThue = soTien * thue;
    content += `Họ và tên: ${ten} - Tổng thu nhập năm: ${tien} - Thu nhập chịu thuế: ${soTien} - Phần trăm chịu thuế (Theo quy định): ${thue} -Tiền thuế tạm tính: ${tienThue}`;
  } else if (tien > 624 && tien <= 960) {
    thue = 0.3;
    let soTien = thuNhapchiuThue(tien, nguoi);
    let tienThue = soTien * thue;
    content += `Họ và tên: ${ten} - Tổng thu nhập năm: ${tien} - Thu nhập chịu thuế: ${soTien} - Phần trăm chịu thuế (Theo quy định): ${thue} -Tiền thuế tạm tính: ${tienThue}`;
  } else if (tien > 960) {
    thue = 0.35;
    let soTien = thuNhapchiuThue(tien, nguoi);
    let tienThue = soTien * thue;
    content += `Họ và tên: ${ten} - Tổng thu nhập năm: ${tien} - Thu nhập chịu thuế: ${soTien} - Phần trăm chịu thuế (Theo quy định): ${thue} -Tiền thuế tạm tính: ${tienThue}`;
  }

  document.getElementById("domInfo").innerHTML = content;
};

// function doIt() {
//     console.log(123);
// }

// let a = document.getElementById("doiTuong").options.value;
// console.log(a);

changeUI = () => {
  let a = document.getElementById("check").value;
  if (a == 1) {
    document.getElementById("phiKN").setAttribute("disabled", "");
  } else {
    document.getElementById("phiKN").removeAttribute("disabled", "");
  }
};

doItnow = () => {
  let maKhach = document.getElementById("maKH").value;
  let soKetnoi = document.getElementById("soKN").value * 1;
  let soKetnoiCaocap = document.getElementById("soKNCC").value * 1;
  let a = document.getElementById("check").value;
  let tongTien = 0;

  if (a == 1) {
    //Cá nhân
    let phiHoadon = 4.5 * 1;
    let phiDichvu = 20.5 * 1;
    let tienThuekenhCaocap = 7.5 * 1 * soKetnoiCaocap;
    tongTien = phiHoadon + phiDichvu + tienThuekenhCaocap;
  } else {
    //Doanh nghiệp
    let phiHoadon = 15 * 1;
    let phiDichvu = 0;

    if (soKetnoi <= 10) {
      phiDichvu = 75 * 1;
    } else {
      phiDichvu = 75 * 1 + (soKetnoi) * 5;
    }

    let tienThuekenhCaocap = 50 * 1 * soKetnoiCaocap;

    tongTien = phiHoadon + phiDichvu + tienThuekenhCaocap;
  }
  document.getElementById("domInfoB2").innerHTML = tongTien;
};
