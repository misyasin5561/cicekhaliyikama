# Çiçek Halı Yıkama - Resim Optimizasyon Rehberi

## 🎯 Hero Slider Resimleri

### Önerilen Boyutlar
- **Ana boyut**: 1920×1080 px (16:9 oran)
- **Tablet**: 1200×675 px  
- **Mobil**: 800×450 px
- **Dosya formatı**: JPG (JPEG)
- **Kalite**: 75-85% (Photoshop "Save for Web")
- **Dosya boyutu**: 200-500KB

### Örnek Ayarlar
```
Genişlik: 1920px
Yükseklik: 1080px
DPI: 72
Color Mode: RGB
Format: JPEG
Compression: 80%
```

## 🔧 Before-After Slider Resimleri

### Optimal Boyutlar
- **Ana boyut**: 800×600 px (4:3 oran)
- **Alternatif**: 1000×750 px (yüksek kalite)
- **Dosya formatı**: JPG
- **Kalite**: 70-80%
- **Dosya boyutu**: 100-300KB

### Önemli Notlar
- Her karşılaştırmada "öncesi" ve "sonrası" resimlerinin **aynı boyutta** olması kritik
- Aynı açı ve kompozisyonda çekilmiş olmalı
- Işık koşulları mümkün olduğunca benzer olmalı

## 📱 Responsive Görüntüler

### CSS'deki Tanımlar
```css
/* Mevcut ayarlar */
.before-after-wrapper {
    height: 300px; /* Desktop */
}

@media (max-width: 768px) {
    .before-after-wrapper {
        height: 250px; /* Mobile */
    }
}
```

### Bu Ayarlara Uygun Resim Boyutları
- **Desktop (300px yükseklik)**: 800×600px veya 1000×750px
- **Mobile (250px yükseklik)**: 667×500px veya 800×600px

## 🎨 Hizmet Türlerine Göre Resim Önerileri

### Halı Yıkama
- **Öncesi**: Kirli, lekeli halı
- **Sonrası**: Temiz, parlak halı
- **Açı**: Üstten 45° açı
- **Işık**: Doğal gün ışığı

### Koltuk Temizleme
- **Öncesi**: Lekeli, eskimiş koltuk
- **Sonrası**: Temiz, yenilenmiş koltuk  
- **Açı**: Yan açıdan veya önden
- **Işık**: Iç mekan aydınlatması

### Antik Halı Restorasyonu
- **Öncesi**: Yıpranmış, solmuş halı
- **Sonrası**: Restore edilmiş halı
- **Açı**: Detayları gösteren yakın çekim
- **Işık**: Stüdyo aydınlatması

## 🔍 SEO İçin Resim Optimizasyonu

### Dosya Adlandırma
```
Öncesi: hali-yikama-oncesi-kirli-hali.jpg
Sonrası: hali-yikama-sonrasi-temiz-hali.jpg
```

### Alt Text Örnekleri
```html
alt="Samsun halı yıkama öncesi kirli halı durumu"
alt="Çiçek halı yıkama sonrası temizlenmiş halı"
```

## 📊 Performans Optimizasyonu

### Sıkıştırma Araçları
- **TinyPNG**: Online sıkıştırma
- **Photoshop**: "Save for Web & Devices"
- **GIMP**: Export as JPEG (kalite 80%)

### Lazy Loading
- Mevcut: `loading="lazy"` attribute kullanılıyor
- Sayfa yüklenme hızını artırıyor

## 🌐 Browser Uyumluluğu

### Desteklenen Formatlar
- **JPG/JPEG**: ✅ Tüm browser'lar
- **PNG**: ✅ Transparency için
- **WebP**: ✅ Modern browser'lar (Chrome, Firefox, Safari)

### Format Önerileri
- **Fotoğraflar**: JPEG (küçük dosya boyutu)
- **Logolar/Grafikler**: PNG (şeffaflık)
- **Modern web**: WebP (en iyi sıkıştırma)

## 📏 Mevcut Slider Boyutları

### Hero Slider Konteyner
```css
.hero {
    height: 100vh; /* Tam ekran yüksekliği */
}
```
**Önerilen resim**: 1920×1080px

### Before-After Slider Konteyner  
```css
.before-after-wrapper {
    height: 300px; /* Sabit yükseklik */
}
```
**Önerilen resim**: 800×600px (4:3 oran)

## 🚀 Uygulama Adımları

1. **Resim Çekimi**: Aynı açı, aynı mesafe
2. **Düzenleme**: Photoshop/GIMP ile optimize etme
3. **Sıkıştırma**: TinyPNG ile dosya boyutu küçültme
4. **Upload**: Uygun dosya adı ile yükleme
5. **Test**: Farklı cihazlarda görüntü kontrolü

## 📱 Mobil Optimizasyon

### Responsive Images
```html
<img src="image-800.jpg" 
     srcset="image-400.jpg 400w, 
             image-800.jpg 800w, 
             image-1200.jpg 1200w"
     sizes="(max-width: 480px) 400px, 
            (max-width: 768px) 800px, 
            1200px"
     alt="Açıklayıcı metin">
```

### CSS Object-Fit
```css
.before-image img,
.after-image img {
    object-fit: cover; /* Aspect ratio korunur */
    object-position: center; /* Merkez odaklı */
}
```

---

**Önemli**: Bu rehberi takip ederek web sitenizin yüklenme hızını optimize edebilir ve kullanıcı deneyimini iyileştirebilirsiniz. 