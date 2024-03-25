const shopee = document.getElementsByClassName("shopee")[0];

// Gán sự kiện click cho thẻ div
shopee.addEventListener("click", load);
function load() {
    window.location.href = "../index.html";
}

//lấy dữ liệu về
let productADM = JSON.parse(localStorage.getItem("products"));

for (let i = 0; i < productADM.length; i++) {
    document.getElementById("ADMproduct").innerHTML += 
    `
    <tr>
        <td>${productADM[i].id}</td>
        <td>${productADM[i].name}</td>
        <td><img src=".${productADM[i].image}" alt="" width="150px"></td>
        <td>${productADM[i].price}</td>
        <td>${productADM[i].stock}</td>
        <td class="editAll"><button class="button edit">Sửa</button> <button class="button delete">Xóa</button></td>
    </tr>
    `
}




/* nút bấm về home */
let comeback = document.getElementsByClassName("topHeader");
comeback.addEventListener("click", back);
function back() {
    window.location.href = "./admin.home.html";
}