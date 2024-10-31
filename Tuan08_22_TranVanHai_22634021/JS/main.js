        //Mở và đóng modal
        var modal = document.getElementById("modal");
        const open = document.getElementById("open");
        const close = document.getElementById("close");
        const close1 = document.getElementById("close1");
        open.addEventListener("click", function() {
            modal.style.display = "block";
        })
        close.addEventListener("click", function() {
            modal.style.display = "none";
        })
        close1.addEventListener("click", function() {
                modal.style.display = "none";
            })
            //Thay đổi giá dịch vụ
        var dichVu = document.getElementById("dvu");
        var pDichVu = document.getElementById("pDvu");
        dichVu.addEventListener("change", function() {
                let total = 0;
                switch (dichVu.value) {
                    case "1":
                        total = 50000;
                        break;
                    case "2":
                        total = 100000;
                        break;
                }
                pDichVu.value = total;
                changeTotalPrice();

            })
            //Thay đổi giá đồ dùng
        var ck1 = document.getElementById("ck1");
        var ck2 = document.getElementById("ck2");
        var ck3 = document.getElementById("ck3");
        var pDoDung = document.getElementById("pDdung");
        ck1.addEventListener("change", changePriceDoDung);
        ck2.addEventListener("change", changePriceDoDung);
        ck3.addEventListener("change", changePriceDoDung);

        function changePriceDoDung() {
            let total = 0;
            if (ck1.checked)
                total += 20000;
            if (ck2.checked)
                total += 30000;
            if (ck3.checked)
                total += 40000;
            pDoDung.value = total;
            changeTotalPrice();

        }
        //Tính TotalPrice
        var totalPrice = document.getElementById("totalPrice");
        totalPrice.addEventListener("change", changeTotalPrice);

        function changeTotalPrice() {
            totalPrice.value = Number(pDichVu.value) + Number(pDoDung.value);
        }
        changeTotalPrice();
        //Đăng ký form
        var stt = 0;
        var submit = document.getElementById("submit");
        var table = document.getElementById("table");
        submit.addEventListener("click", function() {
            var id = document.getElementById("id").value;
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var erId = document.getElementById("er-id");
            var erName = document.getElementById("er-name");
            var erEmail = document.getElementById("er-email");

            var regId = /[0-9]{9}/;
            var regName = /(^[A-Z]{1}[a-z]+)(\s[A-Z]{1}[a-z]*)+$/;
            var regEmail = /^[\w-\.]+@iuh.edu.vn/g;

            if (id === "" || name === "" || email === "" || !(regId).test(id) || !(regName).test(name) || !(regEmail).test(email)) {
                alert("Hãy kiểm tra lại thông tin!");
                if (id === "")
                    erId.innerText = "Hãy nhập mã!";
                else if (!(regId).test(id))
                    erId.innerText = "Mã sai định dạng!";
                else
                    erId.innerText = "";
                if (name === "")
                    erName.innerText = "Hãy nhập tên!";
                else if (!(regName).test(name))
                    erName.innerText = "Tên sai định dạng!";
                else
                    erName.innerText = "";
                if (email === "")
                    erEmail.innerText = "Hãy nhập email!";
                else if (!(regEmail).test(email))
                    erEmail.innerText = "Email sai định dạng!";
                else
                    erEmail.innerText = "";
            } else {
                stt++;
                let html = `
            <tr>
                <td>${stt}</td>
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${pDichVu.value}</td>
                <td>${pDoDung.value}</td>
                <td>${totalPrice.value}</td>
                </tr>
        `;
                let row = table.insertRow();
                row.innerHTML = html;
                modal.style.display = "none";
                document.getElementById("id").value = "";
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
            }
        })