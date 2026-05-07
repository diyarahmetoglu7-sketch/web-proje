// --- YÖNTEM 1: Native JavaScript Kontrolü ---
function validateNative() {
    // Form elemanlarını alalım
    var ad = document.getElementById("ad").value;
    var email = document.getElementById("email").value;
    var mesaj = document.getElementById("mesaj").value;
    
    // E-posta formatı için basit bir kontrol (Regex)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Boş alan kontrolü [cite: 16, 24]
    if (ad == "" || email == "" || mesaj == "") {
        alert("Lütfen tüm zorunlu alanları doldurunuz!");
        return false;
    }

    // E-posta format kontrolü [cite: 16, 24]
    if (!emailPattern.test(email)) {
        alert("Geçerli bir e-posta adresi giriniz!");
        return false;
    }

    // Her şey tamamsa formu PHP'ye gönder
    alert("Native JS: Kontrol başarılı, form gönderiliyor...");
    document.getElementById("iletisimFormu").submit();
}

// --- YÖNTEM 2: Vue.js Kontrolü ---
const { createApp } = Vue;

createApp({
    methods: {
        validateVue() {
            // Vue tarafında form verilerine erişim (Basitlik için HTML üzerinden çekiyoruz)
            const ad = document.getElementById("ad").value;
            const email = document.getElementById("email").value;

            if (ad === "" || email === "") {
                alert("Vue.js: Eksik bilgi girdiniz!");
            } else if (!email.includes("@")) {
                alert("Vue.js: Geçersiz e-posta!");
            } else {
                alert("Vue.js: Başarılı! Gönderiliyor...");
                document.getElementById("iletisimFormu").submit();
            }
        }
    }
}).mount('#iletisimFormu');