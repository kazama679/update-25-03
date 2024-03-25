const shopee = document.getElementsByClassName("shopee")[0];

// Gán sự kiện click cho thẻ div
shopee.addEventListener("click", load);
function load() {
    window.location.href = "../index.html";
}

//lấy dữ liệu về
let userADM = JSON.parse(localStorage.getItem("users"));

for (let i = 0; i < userADM.length; i++) {
    document.getElementById("ADMuser").innerHTML += 
    `
        <tr>
            <td>${i+1}</td>
            <td>${userADM[i].userName}</td>
            <td>${userADM[i].userId}</td>
            <td>${userADM[i].email}</td>
            <td>${userADM[i].address}</td>
            <td class="Tdbutton"><button class="button blockUser">Chặn</button></td>
        </tr>
    `
}