const arr_kategori = {
    "sosial" : {
        "abodemen" : 10000,
        "tarif" : 300,
        "pajak" : 0
    },
    "rumah" : {
        "abodemen" : 30000,
        "tarif" : 500,
        "pajak" : 0.1
    },
    "apartemen" : {
        "abodemen" : 50000,
        "tarif" : 750,
        "pajak" : 0.15
    },
    "industri" : {
        "abodemen" : 75000,
        "tarif" : 1000,
        "pajak" : 0.2
    },
    "villa" : {
        "abodemen" : 100000,
        "tarif" : 1250,
        "pajak" : 0.25
    }
}

function calculate(){
    var nama = document.getElementById("name").value;
    var kategori = document.getElementById("kategori").value;
    var jumlah = document.getElementById("jumlah").value;

    if (nama == ""){
        alert("Harap isi nama terlebih dahulu")
    }
    else if (jumlah == ""){
        alert("Masukkan jumlah hari pemakaian")
    }
    else{
        let isiTabel = document.getElementById("isiTabel")
        let data_tagihan = arr_kategori[kategori]
        let abodemen = data_tagihan.abodemen
        isiTabel.innerHTML = ""
        for (let i = 1; i <= jumlah; i++) {
            let tarif = data_tagihan.tarif*i
            let subtotal = tarif + abodemen
            console.log(data_tagihan,tarif,abodemen,subtotal)
            
            isiTabel.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${tarif}</td>
                <td>${abodemen}</td>
                <td>${subtotal}</td>
            </tr>`
        }

        let subtot = document.getElementById('subTotal')
        let pajak = document.getElementById('pajak')
        let bayar = document.getElementById('bayar')
        subtot.innerText = `Subtotal : ${data_tagihan.tarif*jumlah + abodemen}`
        pajak.innerText = `Pajak : ${data_tagihan.pajak*(data_tagihan.tarif*jumlah + abodemen)}`
        bayar.innerText = `Total Bayar : ${(data_tagihan.tarif*jumlah + abodemen) + (data_tagihan.pajak*(data_tagihan.tarif*jumlah + abodemen))}`
    }
}