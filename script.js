function hitung() {
    let sisi = document.getElementById('sisi').value;
    sisi = parseFloat(sisi);

    if (!isNaN(sisi) && sisi > 0) {
        let luas = sisi * sisi;
        let keliling = 4 * sisi;

        document.getElementById('hasil').innerHTML = `
            <p>Luas: <strong>${luas}</strong></p>
            <p>Keliling: <strong>${keliling}</strong></p>
        `;
    } else {
        document.getElementById('hasil').innerHTML = "<p style='color:red;'>Masukkan angka yang valid!</p>";
    }
}
