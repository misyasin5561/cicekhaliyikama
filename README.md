# Çiçek Halı Yıkama Web Sitesi

## 📋 Proje Hakkında

Çiçek Halı Yıkama şirketi için tasarlanmış modern, responsive ve SEO uyumlu web sitesi. Samsun bölgesinde halı, koltuk, yorgan ve perde yıkama hizmetleri sunan bir işletme için geliştirilmiştir.

## ✨ Özellikler

### 🎨 Tasarım
- **Modern ve Temiz Tasarım**: Kullanıcı dostu arayüz
- **Responsive Tasarım**: Tüm cihazlarda (mobil, tablet, masaüstü) uyumlu
- **Renk Şeması**: Ana renk #ffe501 (sarı) ile 60-30-10 kuralına uygun tasarım
- **Smooth Animasyonlar**: CSS ve JavaScript ile geliştirilmiş animasyonlar

### 📱 İşlevsellik
- **Hero Slider**: Otomatik dönen görsel slider (1920×1080px optimized)
- **Before-After Slider**: İnteraktif öncesi/sonrası karşılaştırma
- **Responsive Navigasyon**: Mobil uyumlu menü sistemi
- **WhatsApp Entegrasyonu**: Direkt WhatsApp iletişim butonları
- **FAQ Accordion**: Genişleyen soru-cevap bölümü
- **Galeri Filtreleme**: Kategoriye göre filtrelenebilir galeri
- **İletişim Formu**: WhatsApp'a yönlendiren akıllı form
- **Smooth Scrolling**: Yumuşak sayfa geçişleri

### 🔍 SEO Optimizasyonu
- **Meta Etiketleri**: Detaylı meta description ve keywords
- **Semantic HTML**: SEO dostu HTML yapısı
- **Alt Etiketleri**: Görsel erişilebilirliği için alt text
- **Open Graph**: Sosyal medya paylaşım optimizasyonu
- **Local SEO**: Samsun bölgesi odaklı anahtar kelimeler

## 📁 Dosya Yapısı

```
V2/
├── index.html              # Ana HTML dosyası
├── style.css               # CSS stil dosyası
├── script.js               # JavaScript dosyası
├── image-guidelines.md     # Resim optimizasyon rehberi
└── README.md               # Proje dokümantasyonu
```

## 🚀 Kurulum ve Çalıştırma

### 1. Basit HTTP Sunucusu ile

```bash
# Python 3.x ile
python -m http.server 8000

# Python 2.x ile
python -m SimpleHTTPServer 8000

# Node.js http-server ile
npx http-server -p 8000
```

### 2. Live Server (VS Code Extension)
- VS Code'da Live Server extension'ını yükleyin
- `index.html` dosyasına sağ tıklayıp "Open with Live Server" seçin

### 3. Doğrudan Browser'da
- `index.html` dosyasını browser'da açabilirsiniz, ancak bazı özellikler çalışmayabilir

## 📞 İletişim Ayarları

Aşağıdaki dosyalarda telefon numarası ve WhatsApp bilgilerini güncelleyin:

### index.html
```html
<!-- Telefon numaraları -->
<a href="tel:+905551234567">
<a href="https://wa.me/905551234567">
```

### script.js
```javascript
// WhatsApp numarası
window.open(`https://wa.me/905551234567?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
```

## 🎯 Servis Bölgeleri

Web sitesi aşağıdaki Samsun bölgeleri için optimize edilmiştir:

- **Canik** - Halı, koltuk, yorgan, perde yıkama
- **Atakum** - Profesyonel temizlik hizmetleri  
- **İlkadım** - Kaliteli yıkama hizmetleri
- **Tekkeköy** - Güvenilir temizlik çözümleri
- **Samsun Merkez** - Hızlı servis hizmeti

## 🔧 Özelleştirme

### Renk Değişiklikleri
`style.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #ffe501;      /* Ana sarı renk */
    --secondary-color: #2c3e50;    /* Koyu gri */
    --accent-color: #34495e;       /* Vurgu rengi */
}
```

### Resim Değişiklikleri
HTML'deki `src` ve `background-image` özelliklerini kendi resimlerinizle değiştirin.

### İçerik Güncellemeleri
- Hizmet açıklamaları
- Şirket bilgileri
- SSS içeriği
- Galeri görsel kategorileri

## 📊 SEO Anahtar Kelimeler

Web sitesi aşağıdaki anahtar kelimeler için optimize edilmiştir:

**Ana Anahtar Kelimeler:**
- Samsun Halı Yıkama
- Samsun Koltuk Yıkama  
- Samsun Yorgan Yıkama
- Samsun Perde Yıkama
- Samsun Profesyonel Temizlik

**Bölgesel Anahtar Kelimeler:**
- Canik Halı Yıkama
- Atakum Halı Yıkama
- İlkadım Halı Yıkama
- Tekkeköy Halı Yıkama

## 🌐 Browser Uyumluluğu

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile Safari
- ✅ Chrome Mobile

## 📱 Responsive Breakpoint'ler

- **Desktop**: 1200px ve üzeri
- **Tablet**: 768px - 1199px
- **Mobile**: 767px ve altı
- **Small Mobile**: 480px ve altı

## 🔒 Güvenlik

- Form validasyonu
- XSS koruması
- HTTPS kullanımına uygun
- Güvenli WhatsApp entegrasyonu

## 📈 Performans

- **Lazy Loading**: Görseller için geciktirilmiş yükleme
- **Optimized Images**: Sıkıştırılmış görsel formatları
- **Minified Code**: CSS ve JS optimizasyonu (production için)
- **CDN**: Font Awesome ve Google Fonts CDN kullanımı

## 🛠️ Teknik Özellikler

### HTML5
- Semantic HTML elementleri
- Meta viewport tag
- Structured data markup ready

### CSS3
- CSS Grid ve Flexbox
- CSS Variables (Custom Properties)
- CSS Animations ve Transitions
- Media Queries

### JavaScript (ES6+)
- Module pattern
- Event delegation
- Intersection Observer API
- Modern DOM manipulation

## 🚀 Production Deployment

1. **Görsel Optimizasyonu**: TinyPNG veya benzeri araçlarla görselleri sıkıştırın
2. **CSS Minification**: CSS kodunu minify edin
3. **JS Minification**: JavaScript kodunu minify edin
4. **GZIP Compression**: Server'da GZIP sıkıştırmayı aktif edin
5. **Cache Headers**: Uygun cache header'ları ayarlayın

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🆘 Destek

Herhangi bir sorun yaşadığınızda:

1. Browser geliştirici araçlarından console'u kontrol edin
2. JavaScript hatalarını kontrol edin
3. CSS yüklenmesini kontrol edin
4. Network sekmesinden kaynak yüklenmesini kontrol edin

## 🎯 Ana Özellikler

1. **Modern Hero Slider**: 3 farklı slogan ve görsel (1920×1080px)
2. **Before-After Karşılaştırma**: İnteraktif öncesi/sonrası slider
3. **Hizmet Kartları**: Halı, Koltuk, Yorgan, Perde yıkama
4. **Hakkımızda**: Şirket tanıtımı ve özellikler
5. **Servis Bölgeleri**: Samsun ilçeleri
6. **SSS**: Müşteri sorularına cevaplar
7. **Galeri**: Filtrelenebilir önce/sonra fotoğrafları
8. **İletişim**: Form ve iletişim bilgileri
9. **Sabit Butonlar**: WhatsApp ve Hemen Ara

### 🆕 Before-After Slider Özellikleri:
- **3 Hizmet Karşılaştırması**: Halı Yıkama, Koltuk Temizleme, Antik Halı Restorasyonu
- **Mouse & Touch Support**: Masaüstü ve mobil uyumluluk
- **Smooth Animations**: 0.3s yumuşak geçişler
- **Optimal Resim Boyutu**: 800×600px (4:3 oran)
- **SEO Optimized**: Açıklayıcı alt text'ler
- **Image Quality**: Öncesi %70, sonrası %85 kalite
- **File Size**: 100-300KB optimize edilmiş dosya boyutu

## 📊 Resim Optimizasyon Rehberi

### Hero Slider (Ana Slider)
- **Boyut**: 1920×1080px (16:9 oran)
- **Format**: JPEG
- **Kalite**: 80-85%
- **Dosya boyutu**: 200-500KB

### Before-After Slider
- **Boyut**: 800×600px (4:3 oran)
- **Format**: JPEG
- **Kalite**: Öncesi 70%, Sonrası 85%
- **Dosya boyutu**: 100-300KB
- **Önemli**: Her karşılaştırmada aynı boyut ve açı kullanın

*Detaylı resim rehberi için `image-guidelines.md` dosyasına bakın.*

## 📞 İletişim

**Çiçek Halı Yıkama**
- 📱 WhatsApp: +90 555 123 45 67
- 📞 Telefon: +90 555 123 45 67
- 📍 Konum: Samsun, Türkiye

---

**Not**: Bu web sitesi demo amaçlı hazırlanmıştır. Gerçek iş kullanımı için telefon numaralarını ve iletişim bilgilerini güncelleyin. 