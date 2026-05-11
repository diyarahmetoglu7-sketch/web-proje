// Bu fonksiyon internetten veri çekmeye yarar
async function verileriGetir() {
    try {
        // TV Maze isimli ücretsiz bir servisten "Batman" verilerini istiyoruz
        const cevap = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const veriler = await cevap.json();
        
        // HTML dosyasındaki boş kutuyu buluyoruz
        const kutu = document.getElementById('api-icerik');

        // Gelen her bir dizi için bir kart oluşturuyoruz
        veriler.forEach(eleman => {
            const dizi = eleman.show;
            const kart = `
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src="${dizi.image ? dizi.image.medium : 'https://via.placeholder.com/210x295'}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${dizi.name}</h5>
                            <p class="card-text">Puan: ${dizi.rating.average ? dizi.rating.average : 'Yok'}</p>
                            <a href="${dizi.url}" target="_blank" class="btn btn-sm btn-outline-primary">Detay</a>
                        </div>
                    </div>
                </div>
            `;
            kutu.innerHTML += kart;
        });
    } catch (hata) {
        console.log("Veri çekilirken bir hata oldu: ", hata);
    }
}

// Sayfa açılır açılmaz bu işlemi başlat[cite: 1]
window.onload = verileriGetir;