async function download() {
    const url = document.getElementById("url").value;
    const resultDiv = document.getElementById("result");

    if (!url) {
        resultDiv.innerHTML = "Masukkan URL TikTok terlebih dahulu.";
        return;
    }

    resultDiv.innerHTML = "Memproses...";

    try {
        const response = await fetch(`https://api.tiklydown.me/api/download?url=${url}`);
        const data = await response.json();

        if (data.video && data.video.noWatermark) {
            resultDiv.innerHTML = `
                <br>
                <a href="${data.video.noWatermark}" target="_blank">
                    Klik di sini untuk download video tanpa watermark
                </a>
            `;
        } else {
            resultDiv.innerHTML = "Gagal mengambil video.";
        }

    } catch (error) {
        resultDiv.innerHTML = "Terjadi kesalahan.";
    }
}
