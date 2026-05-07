<?php
// Formdan gelen verileri alıyoruz
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // Kendi öğrenci numaranı buraya yazmalısın
    $ogrenciNo = "b2412100001"; 
    $dogruEmail = b2412100001 . "@sakarya.edu.tr";
    $dogruSifre =b2412100001 ;

    // Bilgiler doğru mu kontrol ediyoruz
    if ($user == $dogruEmail && $pass == $dogruSifre) {
        // Başarılı giriş
        echo "<h1>Hoşgeldiniz " . htmlspecialchars($ogrenciNo) . "</h1>";
        // İstersen 3 saniye sonra ana sayfaya yönlendirebilirsin
        header("Refresh: 3; url=hakkinda.html"); 
    } else {
        // Hatalı giriş veya boş alan
        echo "<script>alert('Hatalı kullanıcı adı veya şifre!');</script>";
        // Tekrar login sayfasına yönlendiriyoruz
        header("Refresh: 0; url=login.html");
    }
} else {
    // Form dışı erişim engeli
    header("Location: login.html");
}
?>