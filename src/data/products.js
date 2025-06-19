// Ürün verileri
const products = [
  // iPhone 15 Serisi
  { 
    id: 'iphone15', 
    name: 'iPhone 15', 
    price: 44999, 
    category: 'iphone15series', 
    image: '/images/iphone15series/iphone15.webp',
    description: 'A16 Bionic çip, gelişmiş kamera sistemi ve Dynamic Island özelliği ile iPhone 15, günlük kullanımda mükemmel performans sunar.',
    specs: ['6.1 inç Super Retina XDR Ekran', '128GB/256GB/512GB Depolama', 'A16 Bionic Çip', '48MP Ana Kamera', 'Dynamic Island', 'iOS 17']
  },
  { 
    id: 'iphone15plus', 
    name: 'iPhone 15 Plus', 
    price: 49999, 
    category: 'iphone15series', 
    image: '/images/iphone15series/iphone15plus.webp',
    description: 'Daha büyük ekran, daha uzun pil ömrü ve A16 Bionic çip ile iPhone 15 Plus, büyük ekran seven kullanıcılar için ideal.',
    specs: ['6.7 inç Super Retina XDR Ekran', '128GB/256GB/512GB Depolama', 'A16 Bionic Çip', '48MP Ana Kamera', 'Dynamic Island', 'iOS 17']
  },
  { 
    id: 'iphone15pro', 
    name: 'iPhone 15 Pro', 
    price: 59999, 
    category: 'iphone15series', 
    image: '/images/iphone15series/iphone15pro.webp',
    description: 'A17 Pro çip, titanyum tasarım ve Pro kamera sistemi ile iPhone 15 Pro, profesyonel kullanıcılar için üst düzey performans sunar.',
    specs: ['6.1 inç ProMotion Ekran', '128GB/256GB/512GB/1TB Depolama', 'A17 Pro Çip', 'Pro Kamera Sistemi', 'Titanyum Çerçeve', 'iOS 17']
  },
  { 
    id: 'iphone15promax', 
    name: 'iPhone 15 Pro Max', 
    price: 69999, 
    category: 'iphone15series', 
    image: '/images/iphone15series/iphone15promax.webp',
    description: 'En büyük ekran, en uzun pil ömrü ve en gelişmiş kamera sistemi ile iPhone 15 Pro Max, Apple\'ın en güçlü iPhone modeli.',
    specs: ['6.7 inç ProMotion Ekran', '256GB/512GB/1TB Depolama', 'A17 Pro Çip', 'Pro Kamera Sistemi (5x Optik Zoom)', 'Titanyum Çerçeve', 'iOS 17']
  },
  
  // iPhone 16 Serisi
  { 
    id: 'iphone16', 
    name: 'iPhone 16', 
    price: 54999, 
    category: 'iphone16series', 
    image: '/images/iphone16series/iphone16.webp',
    description: 'A18 çip, gelişmiş yapay zeka özellikleri ve yenilenmiş tasarımı ile iPhone 16, günlük kullanımda üstün performans sunar.',
    specs: ['6.1 inç Super Retina XDR Ekran', '128GB/256GB/512GB Depolama', 'A18 Çip', '48MP Ana Kamera', 'Apple Intelligence', 'iOS 18']
  },
  { 
    id: 'iphone16e', 
    name: 'iPhone 16e', 
    price: 49999, 
    category: 'iphone16series', 
    image: '/images/iphone16series/iphone16e.webp',
    description: 'iPhone 16 ailesinin ekonomik modeli olan iPhone 16e, temel iPhone deneyimini uygun fiyatla sunar.',
    specs: ['6.1 inç Retina XDR Ekran', '128GB/256GB Depolama', 'A18 Çip', '48MP Ana Kamera', 'Temel Apple Intelligence Özellikleri', 'iOS 18']
  },
  { 
    id: 'iphone16plus', 
    name: 'iPhone 16 Plus', 
    price: 59999, 
    category: 'iphone16series', 
    image: '/images/iphone16series/iphone16plus.webp',
    description: 'Daha büyük ekran, daha uzun pil ömrü ve A18 çip ile iPhone 16 Plus, büyük ekran seven kullanıcılar için ideal.',
    specs: ['6.7 inç Super Retina XDR Ekran', '128GB/256GB/512GB Depolama', 'A18 Çip', '48MP Ana Kamera', 'Apple Intelligence', 'iOS 18']
  },
  { 
    id: 'iphone16pro', 
    name: 'iPhone 16 Pro', 
    price: 69999, 
    category: 'iphone16series', 
    image: '/images/iphone16series/iphone16pro.webp',
    description: 'A18 Pro çip, gelişmiş yapay zeka özellikleri ve Pro kamera sistemi ile iPhone 16 Pro, profesyonel kullanıcılar için tasarlandı.',
    specs: ['6.3 inç ProMotion Ekran', '256GB/512GB/1TB Depolama', 'A18 Pro Çip', 'Pro Kamera Sistemi', 'Titanyum Çerçeve', 'iOS 18']
  },
  { 
    id: 'iphone16promax', 
    name: 'iPhone 16 Pro Max', 
    price: 79999, 
    category: 'iphone16series', 
    image: '/images/iphone16series/iphone16promax.webp',
    description: 'En büyük ekran, en uzun pil ömrü ve en gelişmiş kamera sistemi ile iPhone 16 Pro Max, Apple\'ın en güçlü iPhone modeli.',
    specs: ['6.9 inç ProMotion Ekran', '256GB/512GB/1TB Depolama', 'A18 Pro Çip', 'Pro Kamera Sistemi (5x Optik Zoom)', 'Titanyum Çerçeve', 'iOS 18']
  },
  
  // iPad Serisi
  { 
    id: 'ipada16', 
    name: 'iPad (10. Nesil)', 
    price: 14999, 
    category: 'ipad', 
    image: '/images/ipad/ipada16.webp',
    description: 'A16 Bionic çip, 10.9 inç Liquid Retina ekran ve USB-C bağlantısı ile yeni iPad, günlük kullanım için ideal.',
    specs: ['10.9 inç Liquid Retina Ekran', '64GB/256GB Depolama', 'A16 Bionic Çip', '12MP Geniş Açı Kamera', 'USB-C Bağlantısı', 'iPadOS 17']
  },
  { 
    id: 'ipadair', 
    name: 'iPad Air', 
    price: 24999, 
    category: 'ipad', 
    image: '/images/ipad/ipadair.webp',
    description: 'M2 çip, 10.9 inç Liquid Retina ekran ve ince tasarımı ile iPad Air, hem iş hem de eğlence için mükemmel bir tablet.',
    specs: ['10.9 inç Liquid Retina Ekran', '128GB/256GB/512GB Depolama', 'M2 Çip', '12MP Geniş Açı Kamera', 'USB-C Bağlantısı', 'iPadOS 17']
  },
  { 
    id: 'ipadpro', 
    name: 'iPad Pro', 
    price: 34999, 
    category: 'ipad', 
    image: '/images/ipad/ipadpro.webp',
    description: 'M4 çip, Liquid Retina XDR ekran ve profesyonel kamera sistemi ile iPad Pro, en güçlü iPad modeli.',
    specs: ['11 inç/12.9 inç Liquid Retina XDR Ekran', '256GB/512GB/1TB/2TB Depolama', 'M4 Çip', 'Pro Kamera Sistemi', 'Thunderbolt 4 Bağlantısı', 'iPadOS 17']
  },
  
  // MacBook Serisi
  { 
    id: 'airm4', 
    name: 'MacBook Air M4', 
    price: 39999, 
    category: 'macbook', 
    image: '/images/macbook/airm4.webp',
    description: 'M4 çip, ince ve hafif tasarım, uzun pil ömrü ile MacBook Air, günlük kullanım için ideal bir dizüstü bilgisayar.',
    specs: ['13.6 inç Liquid Retina Ekran', '8GB/16GB/24GB RAM', '256GB/512GB/1TB SSD', 'M4 Çip', '18 Saat Pil Ömrü', 'macOS Sequoia']
  },
  { 
    id: 'prom4', 
    name: 'MacBook Pro M4', 
    price: 49999, 
    category: 'macbook', 
    image: '/images/macbook/prom4.webp',
    description: 'M4 çip, ProMotion ekran ve profesyonel bağlantı seçenekleri ile MacBook Pro, profesyonel kullanıcılar için tasarlandı.',
    specs: ['14.2 inç Liquid Retina XDR Ekran', '16GB/32GB RAM', '512GB/1TB/2TB SSD', 'M4 Çip', '22 Saat Pil Ömrü', 'macOS Sequoia']
  },
  { 
    id: 'prom4max', 
    name: 'MacBook Pro M4 Max', 
    price: 69999, 
    category: 'macbook', 
    image: '/images/macbook/prom4max.webp',
    description: 'M4 Max çip, büyük ekran ve maksimum performans ile MacBook Pro, en zorlu görevler için üst düzey güç sunar.',
    specs: ['16.2 inç Liquid Retina XDR Ekran', '32GB/64GB/96GB RAM', '1TB/2TB/4TB/8TB SSD', 'M4 Max Çip', '20 Saat Pil Ömrü', 'macOS Sequoia']
  },
  
  // Apple Watch Serisi
  { 
    id: 'watchseries10', 
    name: 'Apple Watch Series 10', 
    price: 14999, 
    category: 'watch', 
    image: '/images/watch/watchseries10.webp',
    description: 'Daha büyük ekran, gelişmiş sağlık özellikleri ve uzun pil ömrü ile Apple Watch Series 10, günlük yaşamınızı kolaylaştırır.',
    specs: ['41mm/45mm Always-On Retina Ekran', 'Gelişmiş Sağlık Sensörleri', 'Hızlı Şarj', 'Su Geçirmezlik (50m)', '18 Saat Pil Ömrü', 'watchOS 11']
  },
  { 
    id: 'watchultra', 
    name: 'Apple Watch Ultra', 
    price: 29999, 
    category: 'watch', 
    image: '/images/watch/watchultra.webp',
    description: 'Dayanıklı titanyum kasa, gelişmiş GPS ve 36 saat pil ömrü ile Apple Watch Ultra, macera severler için tasarlandı.',
    specs: ['49mm Always-On Retina Ekran', 'Titanyum Kasa', 'Çift Frekanslı GPS', 'Derinlik Ölçer', '36 Saat Pil Ömrü', 'watchOS 11']
  },
  { 
    id: 'watchcharge', 
    name: 'Apple Watch Şarj Standı', 
    price: 1499, 
    category: 'watch', 
    image: '/images/watch/watchcharge.webp',
    description: 'Apple Watch\'unuzu şık bir şekilde şarj etmenizi sağlayan manyetik şarj standı.',
    specs: ['Manyetik Şarj', 'Tüm Apple Watch Modelleriyle Uyumlu', 'Şık Tasarım', 'USB-C Bağlantı', 'Hızlı Şarj Desteği']
  },
  
  // AirPods Serisi
  { 
    id: 'airpodsgen4', 
    name: 'AirPods (4. Nesil)', 
    price: 4999, 
    category: 'airpods', 
    image: '/images/airpods/airpodsgen4.webp',
    description: 'Geliştirilmiş ses kalitesi, aktif gürültü engelleme ve uzun pil ömrü ile AirPods 4. Nesil, günlük kullanım için ideal.',
    specs: ['Aktif Gürültü Engelleme', 'Uyarlanabilir EQ', '6 Saat Pil Ömrü (30 Saat Şarj Kutusu ile)', 'USB-C Şarj', 'Kablosuz Şarj', 'Ter ve Su Direnci']
  },
  { 
    id: 'airpodsprogen2', 
    name: 'AirPods Pro (2. Nesil)', 
    price: 7999, 
    category: 'airpods', 
    image: '/images/airpods/airpodsprogen2.webp',
    description: 'Gelişmiş aktif gürültü engelleme, uyarlanabilir şeffaflık modu ve H2 çip ile AirPods Pro, premium bir ses deneyimi sunar.',
    specs: ['H2 Çip', 'Gelişmiş Aktif Gürültü Engelleme', 'Uyarlanabilir Şeffaflık Modu', '6 Saat Pil Ömrü (30 Saat Şarj Kutusu ile)', 'USB-C Şarj', 'IPX4 Su Direnci']
  },
  { 
    id: 'airpodsmax', 
    name: 'AirPods Max', 
    price: 14999, 
    category: 'airpods', 
    image: '/images/airpods/airpodsmax.webp',
    description: 'Yüksek kaliteli ses, aktif gürültü engelleme ve lüks tasarım ile AirPods Max, en üst düzey kulaklık deneyimi sunar.',
    specs: ['H1 Çip', 'Aktif Gürültü Engelleme', 'Uzamsal Ses', '20 Saat Pil Ömrü', '9 Adet Mikrofon', 'Dijital Taç']
  },
  
  // Aksesuarlar
  { 
    id: '20w_power_adapter', 
    name: '20W USB-C Güç Adaptörü', 
    price: 699, 
    category: 'accessory', 
    image: '/images/accessory/20w_power_adapter.webp',
    description: 'iPhone, iPad ve AirPods için hızlı şarj desteği sunan 20W USB-C güç adaptörü.',
    specs: ['20W Güç Çıkışı', 'USB-C Bağlantı', 'Kompakt Tasarım', 'Hızlı Şarj Desteği']
  },
  { 
    id: 'airtag', 
    name: 'AirTag', 
    price: 999, 
    category: 'accessory', 
    image: '/images/accessory/airtag.webp',
    description: 'Eşyalarınızı kolayca bulmanızı sağlayan Apple AirTag, Bul uygulaması ile entegre çalışır.',
    specs: ['Ultra Geniş Bant Çipi', 'Hassas Konum Bulma', 'Değiştirilebilir Pil', 'IP67 Su ve Toz Direnci', 'Bul Uygulaması Entegrasyonu']
  },
  { 
    id: 'applepencil', 
    name: 'Apple Pencil', 
    price: 3499, 
    category: 'accessory', 
    image: '/images/accessory/applepencil.webp',
    description: 'iPad\'iniz için hassas çizim ve yazı yazma deneyimi sunan Apple Pencil.',
    specs: ['Düşük Gecikme Süresi', 'Basınç Hassasiyeti', 'Eğim Algılama', 'Manyetik Bağlantı', 'USB-C Şarj']
  },
  { 
    id: 'appletv', 
    name: 'Apple TV 4K', 
    price: 4999, 
    category: 'accessory', 
    image: '/images/accessory/appletv.webp',
    description: '4K HDR içerik, Dolby Atmos ses ve A15 Bionic çip ile Apple TV 4K, ev eğlence sisteminizi yükseltir.',
    specs: ['A15 Bionic Çip', '4K HDR Desteği', 'Dolby Atmos', '32GB/64GB/128GB Depolama', 'HDMI 2.1', 'Wi-Fi 6']
  },
  { 
    id: 'homepod', 
    name: 'HomePod', 
    price: 7999, 
    category: 'accessory', 
    image: '/images/accessory/homepod.webp',
    description: 'Oda doldurucı ses, uzamsal ses desteği ve Siri entegrasyonu ile HomePod, akıllı ev deneyiminizi yükseltir.',
    specs: ['Yüksek Kaliteli Ses', 'Uzamsal Ses Desteği', 'Siri Entegrasyonu', 'Akıllı Ev Kontrolü', 'Oda Algılama Teknolojisi']
  },
  { 
    id: 'homepodmini', 
    name: 'HomePod mini', 
    price: 2999, 
    category: 'accessory', 
    image: '/images/accessory/homepodmini.webp',
    description: 'Kompakt boyut, 360 derece ses ve Siri entegrasyonu ile HomePod mini, her odaya uygun akıllı hoparlör.',
    specs: ['360 Derece Ses', 'S5 Çip', 'Siri Entegrasyonu', 'Akıllı Ev Kontrolü', 'Intercom Özelliği']
  },
  { 
    id: 'magicmouse', 
    name: 'Magic Mouse', 
    price: 2499, 
    category: 'accessory', 
    image: '/images/accessory/magicmouse.webp',
    description: 'Multi-Touch yüzeyi ve şık tasarımı ile Magic Mouse, Mac deneyiminizi tamamlar.',
    specs: ['Multi-Touch Yüzey', 'Kablosuz Bağlantı', 'Şarj Edilebilir Pil', '1 Ay Pil Ömrü', 'Bluetooth Bağlantı']
  },
  { 
    id: 'magsafecharger', 
    name: 'MagSafe Şarj Cihazı', 
    price: 999, 
    category: 'accessory', 
    image: '/images/accessory/magsafecharger.webp',
    description: 'iPhone 12 ve sonrası modeller için manyetik hizalama ve hızlı kablosuz şarj sunan MagSafe şarj cihazı.',
    specs: ['15W Kablosuz Şarj', 'Manyetik Hizalama', 'USB-C Bağlantı', 'Kompakt Tasarım']
  },
  { 
    id: 'usb-c_to_typec1m', 
    name: 'USB-C to USB-C Kablosu (1m)', 
    price: 499, 
    category: 'accessory', 
    image: '/images/accessory/usb-c_to_typec1m.webp',
    description: 'Dayanıklı örgü kaplama ve yüksek veri aktarım hızı sunan 1 metre uzunluğunda USB-C to USB-C kablosu.',
    specs: ['1 Metre Uzunluk', 'USB 3.1 Gen 2', '10Gbps Veri Aktarım Hızı', '100W Güç İletimi', 'Dayanıklı Örgü Kaplama']
  },
  { 
    id: 'watch_charger', 
    name: 'Apple Watch Manyetik Şarj Kablosu', 
    price: 799, 
    category: 'accessory', 
    image: '/images/accessory/watch_charger.webp',
    description: 'Tüm Apple Watch modelleriyle uyumlu, 1 metre uzunluğunda manyetik şarj kablosu.',
    specs: ['1 Metre Uzunluk', 'Manyetik Bağlantı', 'USB-C Konnektör', 'Hızlı Şarj Desteği']
  }
];

export default products;
