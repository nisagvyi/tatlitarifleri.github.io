/**
 * ------------YAPILACAKLAR-----------
 * 
 * 1- var ile dizi oluştur ( index.js de örneği var )
 * 2- dizi ye her bir tarif için değerler ekle ( index.js de örneği var )
 * 2.1 - "url"den hangi tarife tıklandığını bul
 * 3- diziyi for döngüsü ile dizi boyutu kadar dön ( index.js de var )
 * 4- dizinin içindekileri html ile yazdır ( index.js de var )
 * 
 */

// örnek data

var recipeData = [{
    image: 'Pink-Cupcakes.jpg',
    Titles: [
        {
            title: 'içindekiler',
            subTitles: [
                {
                    subtitle: 'ÖZEL ARAÇLAR',
                    content: [
                        "3 adet 12'li kek kalıbı",
                        "Kek kalıpları",
                        "Stand mikser",
                        "4 su bardağı sıvı ölçü kabı",
                        "12 inçlik sıkma torbası",
                        "Bağlantı elemanı",
                        "Wilton Pembe jel gıda boyası",
                        "18 inçlik sıkma torbası",
                        "Ateco boru ucu #828",
                        "36 maraschino kirazı"
                    ]
                },
                {
                    subtitle: 'KEKLER',
                    content: [
                        "3 su bardağı (345 gram) kek unu",
                        "1 3/4 su bardağı (350 gram) toz şeker",
                        "1 yemek kaşığı kabartma tozu",
                        "1 çay kaşığı tuz",
                        "1 su bardağı (227 gram) oda sıcaklığında tuzsuz tereyağı",
                        "6 yumurta akı, oda sıcaklığında",
                        "1 yemek kaşığı vanilya özütü",
                        "1 su bardağı (227 gram) oda sıcaklığında ayran",
                        "1/2 su bardağı (120 gram) oda sıcaklığında ekşi krema",
                    ]
                },
                {
                    subtitle: 'PASTACI KREMASI DOLGUSU',
                    content: [
                        "2 su bardağı (454 gram) yarı yarıya",
                        "1/2 su bardağı (99 gram) toz şeker, bölünmüş",
                        "1/2 vanilya çubuğu, uzunlamasına ikiye bölünmüş, çekirdekleri çıkarılmış ve saklanmış",
                        "1/8 çay kaşığı tuz",
                        "5 büyük yumurta sarısı",
                        "3 yemek kaşığı mısır nişastası",
                        "4 yemek kaşığı (1/4 su bardağı/1/2 çubuk) tuzsuz tereyağı, 4 parçaya bölünmüş",
                    ]
                },
                {

                    subtitle: 'KREMA',
                    content: [
                        "2 su bardağı (454 gram) oda sıcaklığında tuzsuz tereyağı",
                        "1/2 su bardağı (8 yemek kaşığı) katı yağ",
                        "1/4 çay kaşığı tuz",
                        "6 1/2 su bardağı (734,5 gram) elenmiş pudra şekeri ",
                        "1 su bardağı (227 gram) krema",
                        "1/2 çay kaşığı badem özütü",
                        "Pembe jel gıda boyası",
                    ]
                },

            ]
        },
        {
            title: 'TALİMATLAR',
            subTitles: [
                {
                    subtitle: '',
                    content: [
                        "Fırın raflarından birini orta konuma, diğerini alt orta konuma getirin. Fırını 175 dereceye ısıtın.3 adet 12'li kek kalıbını kek kalıplarıyla kaplayın ve bir kenara koyun.",
                        "Mikser kasesine çırpma aparatını takarak kek ununu, şekeri, kabartma tozunu ve tuzu ekleyin ve düşük hızda karıştırın.",
                        "Mikser kasesine tereyağını azar azar ekleyin ve tüm tereyağı karışana kadar düşük hızda yaklaşık 1-2 dakika çırpın.",
                        "4 su bardağı sıvı ölçü kabına yumurta beyazlarını, vanilya özünü, ayranı ve ekşi kremayı ekleyip çırpın.",
                        "Ayran karışımının yarısını mikser kasesine ekleyin ve orta-yüksek hızda 1 dakika çırpın. Kalan ayran karışımını ekleyin ve düşük hızda yaklaşık 30 saniye, birleşene kadar çırpın.",
                        "azırladığınız kek hamurunu 3 yemek kaşığı büyüklüğünde yaylı dondurma kaşığı kullanarak kek kalıplarına paylaştırın ve 20-30 dakika pişirin (kek kalıplarını pişirme süresinin yarısından biraz fazla döndürün. Alt raftaki keklerin fırında birkaç dakika daha kalması gerekebilir) veya her kekin ortasına batırılan bir kürdan birkaç nemli kırıntıyla çıkana kadar pişirin.",
                        "Kekleri kalıplarında 10 dakika soğumaya bırakın, ardından tamamen soğuması için soğutma raflarına ters çevirin.",
                    ]
                },
                {
                    subtitle: 'PASTACI KREMASI',
                    content: [
                        "Orta boy bir tencereye süt kremasını, 6 yemek kaşığı şekeri, vanilya çekirdeğini ve tuzu ekleyin ve orta-yüksek ateşte ara sıra karıştırarak pişirin.",
                        "Bu arada bir kasede yumurta sarılarını, mısır nişastasını ve kalan 2 yemek kaşığı şekeri pürüzsüz bir kıvam alana kadar çırpın.",
                        "Yaklaşık 1 su bardağı sütlü krema karışımını yumurta sarısı karışımına ekleyip çırpın. Kalan sütlü krema karışımını yavaşça çırpın. Ateşi orta seviyeye düşürün ve pasta kreması koyulaşıp yüzeyinde kabarcıklar oluşmaya başlayana kadar, yaklaşık 30 saniye boyunca sürekli çırparak pişirmeye devam edin.Ocaktan alın, vanilya çubuğunu çıkarın ve tereyağını çırparak ekleyin. Pasta kremasını bir kaseye aktarın ve doğrudan kremanın yüzeyine streç film bastırın. Yaklaşık 3 saat veya 2 güne kadar buzdolabında donana kadar bekletin. ",
                    ]
                },
                {
                    subtitle: 'KREMA',
                    content: [
                        "Mikser kasesine çırpma aparatını takarak tereyağını, yağı ve tuzu orta hızda, yaklaşık 8 dakika,hafif ve kabarık olana kadar çırpın. Pudra şekeri, krema, vanilya ve badem özünü ekleyin ve yaklaşık dakika boyunca yavaşça karıştırın.",
                        "Mikser hızını orta-yüksek seviyeye getirin ve yaklaşık 6 dakika, hafif ve kabarık olana kadar çırpın. Pembe jel gıda boyasını ekleyin ve düşük hızda birleşene kadar karıştırın.",
                    ]
                },
                {
                    subtitle: 'MONTAJ',
                    content: [
                        "Bir bıçak kullanarak, her bir kekin ortasından bir koni kesin. Koni kısmını kekin konisinden kesin ve atın. Bu, kek doldurulduktan sonra tekrar kekin üzerine yerleştirilecek olan yuvarlak üst kısmı bırakır. 30 cm'lik bir sıkma torbasına bir bağlantı parçası takın ve pasta kreması dolgusuyla doldurun. Her bir kekin ortasına yaklaşık 1 yemek kaşığı dolgu sıkın ve kekin yuvarlak düz kısmını tekrar üzerine yerleştirin.",
                        "45 cm'lik bir sıkma torbasına Ateco #828 uç takın ve kremayı doldurun. Her bir kekin üzerine bir girdap sıkın. Her bir kekin üzerine gökkuşağı renkli nonpareil'ler serpin ve her bir kekin üzerine birer maraschino kirazı koyun.",
                    ]
                },
            ]
        }
    ]

},

{
    image: 'tartolet1.jpg',
    Titles: [
        {
            title: 'içindekiler',
            subTitles: [
                {
                    subtitle: ' Tart Tabanı (6 küçük tart için)',
                    content: [
                        "200 gr un",
                        "100 gr tereyağ (soğuk, küp kesilmiş)",
                        "50 gr pudra şekeri",
                        "1 yumurta sarısı",
                        "1-2 yemek kaşığı soğuk su",
                        "Bir tutam tuz",
                    ]
                },
                {
                    subtitle: 'Vanilyalı Krema Dolgusu',
                    content: [
                        "250 ml süt",
                        "2 yumurta sarısı",
                        "50 gr toz şeker",
                        "1 yemek kaşığı un",
                        "1 yemek kaşığı mısır nişastası",
                        "1 tatlı kaşığı vanilya özütü (veya 1 paket vanilin)",
                        "1 yemek kaşığı tereyağı (kıvam için, isteğe bağlı)",
                    ]
                },
                {
                    subtitle: 'Üzeri İçin',
                    content: [
                        "150 gr taze frambuaz",
                        "1 yemek kaşığı pudra şekeri",
                        "İsteğe bağlı: nane yaprağı, limon kabuğu rendesi",
                    ]
                },
            ]
        },
        {
            title: 'TALİMATLAR',
            subTitles: [
                {
                    subtitle: 'Tart Tabanı',
                    content: [
                        "Un, pudra şekeri ve tuzu geniş bir kapta karıştır.",
                        "Soğuk tereyağını ekleyip parmak uçlarınla kum gibi dağılana kadar yoğur.",
                        "Yumurta sarısını ve 1 yemek kaşığı soğuk suyu ekleyip hamuru toparla. Gerekirse 1 kaşık daha su ekleyebilirsin.",
                        "Hamuru streç filme sarıp buzdolabında 30 dakika dinlendir.",
                        "Dinlenen hamuru unlanmış zeminde aç, küçük tart kalıplarına yerleştir.",
                        "Tabanlarını çatalla del ve 180°C’de önceden ısıtılmış fırında 20 dakika kadar altın rengi alana dek pişir. Soğumaya bırak.",
                    ]
                },
                {
                    subtitle: 'Vanilyalı Krema',
                    content: [
                        "Sütü küçük bir tencerede ısıtmaya başla.",
                        "Ayrı bir kapta yumurta sarısı,şeker,un ve nişastayı çırp.",
                        "Sıcak sütü azar azar karışıma ekleyerek ılıt, sonra hepsini tencereye al.",
                        "Orta ateşte sürekli karıştırarak koyulaşana kadar pişir.",
                        "Ocaktan al, vanilya ve tereyağını ekleyip karıştır.",
                        "Üzerini streçle kapatıp soğumaya bırak (kabuklanmaması için streç film kremaya temas etmeli)."
                    ]
                },
                {
                    subtitle: 'Birleştirme',
                    content: [
                        "Soğuyan tart tabanlarına vanilyalı kremayı eşit şekilde doldur.",
                        "Üzerine taze frambuazları yerleştir.",
                        "Hafifçe pudra şekeri serperek kar yağdır.",
                        "Dilersen nane yaprağı veya limon kabuğu rendesiyle pastel bir dokunuş ekle.",
                    ]
                },
            ]
        }

    ]
},
{
    image: 'cheesecake.jpg',
    Titles: [
        {
            title: 'İçindekiler',
            subTitles: [
                {
                    subtitle: 'Taban İçin',
                    content: [
                        "200 gr yulaflı bisküvi",
                        "80 gr tereyağ (eritilmiş)",
                    ]
                },
                {
                    subtitle: 'Ara Katman (sponge cake)',
                    content: [
                        "2 yumurta",
                        "1/2 su bardağı toz şeker",
                        "1/2 su bardağı un",
                        "1/2 çay kaşığı kabartma tozu",
                        "1 tatlı kaşığı vanilin",
                    ]
                },
                {
                    subtitle: 'Cheesecake Dolgusu',
                    content: [
                        "600 gr krem peynir",
                        "200 ml krema",
                        "1 su bardağı pudra şekeri",
                        "2 yemek kaşığı mısır nişastası",
                        "2 yumurta",
                        "1 tatlı kaşığı vanilin",
                    ]
                },
                {
                    subtitle: 'Üst Sos (berry compote)',
                    content: [
                        "1 su bardağı karışık orman meyvesi (böğürtlen,frambuaz,kuş üzümü)",
                        "2 yemek kaşığı toz",
                        "1 tatlı kaşığı limon suyu",
                        "1 tatlı kaşığı nişasta (az suyla açılmış)",
                    ]
                },
            ]
        },
        {
            title: 'TALİMATLAR',
            subTitles: [
                {
                    subtitle: 'Taban',
                    content: [
                        "Bisküvileri rondoda un gibi çek.",
                        "Eritilmiş tereyağı ile karıştırıp kelepçeli kalıba bastırarak yay.",
                        "Buzdolabında 15 dakika dinlendir.",
                    ]
                },
                {
                    subtitle: 'Ara Katman (Sponge Cake)',
                    content: [
                        "Yumurtaları ve şekeri köpük olana kadar çırp.",
                        "Vanilin, kabartma tozu ve unu ekleyip spatula ile karıştır.",
                        "Yağlı kağıt serili tepside 170°C’de 10-12 dakika pişir.",
                        "Soğuyunca tabanın üzerine yerleştir.",
                    ]
                },
                {
                    subtitle: 'Cheesecake Dolgusu',
                    content: [
                        "Krem peynir ve pudra şekerini pürüzsüz olana kadar çırp.",
                        "Yumurtaları teker teker ekleyerek çırpmaya devam et.",
                        "Krema, vanilin ve nişastayı ekleyip karıştır.",
                        "Karışımı sponge cake’in üzerine dök.",
                    ]
                },
                {
                    subtitle: 'Pişirme',
                    content: [
                        "Kalıbı alüminyum folyo ile sarıp su banyosuna yerleştir.",
                        "Önceden ısıtılmış 160°C fırında 50-60 dakika pişir.",
                        "Fırından çıkınca oda sıcaklığında soğut, ardından buzdolabında en az 4 saat dinlendir.",
                    ]
                },
                {
                    subtitle: 'Berry Sos',
                    content: [
                        "Meyveleri, şekeri ve limon suyunu küçük tencerede ısıt.",
                        "Nişastalı suyu ekleyip koyulaşana kadar pişir.",
                        "Soğuyunca cheesecake’in üzerine dök.",
                    ]
                },
            ]
        }
    ]
},
{
    image: 'magnolia.jpg',
    Titles: [
        {
            title: 'İçindekiler',
            subTitles: [
                {
                    subtitle: 'Muhallebi İçin',
                    content: [
                        "2,5 su bardağı süt",
                        "1 adet yumurta sarısı",
                        "2 yemek kaşığı un",
                        "1 yemek kaşığı nişasta",
                        "4 yemek kaşığı toz şeker",
                        "1 paket vanilin",
                        "1 yemek kaşığı tereyağı",
                        "100 ml krema (isteğe bağlı, daha ipeksi doku için)",
                    ]
                },
                {
                    subtitle: 'Red Velvet Katı İçin',
                    content: [
                        "1 dilim red velvet kek (hazır ya da ev yapımı)",
                        "Alternatif: kırmızı renkli yumuşak bisküvi veya kırmızı kadife kek kırıntısı",
                    ]
                },
                {
                    subtitle: 'Meyve Katı İçin',
                    content: [
                        "Taze çilek, böğürtlen, yaban mersini, frambuaz",
                        "1 adet kiraz (sunum için)",
                    ]
                },
            ]
        },
        {
            title: 'Talimatlar',
            subTitles: [
                {
                    subtitle: 'Muhallebi Hazırlığı',
                    content: [
                        "Süt, yumurta sarısı, un, nişasta ve şekeri tencereye al.",
                        "Kısık ateşte sürekli karıştırarak koyulaşana kadar pişir.",
                        "Ocaktan aldıktan sonra vanilin ve tereyağını ekle, karıştır.",
                        "Soğuduktan sonra kremayı ekleyip mikserle çırp (isteğe bağlı).",
                    ]
                },
                {
                    subtitle: 'Katmanlama',
                    content: [
                        "Kupların dibine red velvet kek kırıntılarını yerleştir.",
                        "Üzerine bir kat muhallebi dök.",
                        "Meyveleri yerleştir (çilek dilimleri kenarlara, yaban mersini ortalara).",
                        "İsteğe göre bir kat daha muhallebi ve kek ekleyebilirsin.",
                    ]
                },
                {
                    subtitle: 'Sunum',
                    content: [
                        "Üst kısmı taze meyvelerle süsle.",
                        "Üst kısmı taze meyvelerle süsle.",
                        "Soğut ve servis et.",
                    ]
                },
            ]
        }
    ]
},
{
    image: 'donut.png',
    Titles: [
        {
            title: 'İçindekiler',
            subTitles: [
                {
                    subtitle: 'Hamuru İçin',
                    content: [
                        "1 su bardağı ılık süt",
                        "1 su bardağı ılık su",
                        "3 yemek kaşığı şeker",
                        "Yarım su bardağı sıvı yağ",
                        "1 paket instant maya ",
                        "1 fiske tuz",
                        "1 çay kaşığı tarçın",
                        "1 adet yumurta",
                        "5 su bardağı un",
                    ]
                },
            ]
        },
        {
            title: 'Talimatlar',
            subTitles: [
                {
                    subtitle: '',
                    content: [
                        "Yoğurma kabına 1 su bardağı ılık süt, 1 su bardağı ılık su, 3 yemek kaşığı şeker, yarım su bardağı sıvı yağ, 1 paket instant maya, bir fiske tuz, 1 çay kaşığı tarçın ve 1 adet yumurtayı alalım ve güzelce çırpalım.",
                        "Ardından unu yavaş yavaş ilave ederek çırpmaya devam edelim. Hamur kıvamı aldığında yoğurmaya başlayalım. Ben toplamda 5 su bardağı un kullanarak bu kıvamı elde ettim. Şu şekilde ele yapışmayan yumuşak bir hamur olunca streç filmle üzerini kapatalım. Daha sonra üzerini temiz bir bezle örterek 1 saat kadar mayalanmaya bırakalım.",
                        "Sürenin sonunda streç filmi çıkaralım ve hamuru unladığımız tezgaha alarak şöyle bir toparlayalım.",
                        "Ardından iki eşit parçaya bölelim. Ben bir parçasını kızartarak, diğer parçasını fırında pişirerek hazırlayacağım. Bekleteceğimiz hamuru streç filmle kapatıp bir kenara almayı unutmayalım.",
                        "Hamurumuzu merdane yardımıyla açalım. ",
                        "Şöyle 1 parmak kalınlığında açtıktan sonra bir kesme aparatı ya da bardak ağzıyla yuvarlaklar keselim.",
                        "Daha sonra bir şişe kapağı yardımıyla yuvarlakların ortasını da keserek halkalar elde edelim.",
                        "Pişirme kağıdımızı alalım ve fırın tepsisine yerleştirelim. Hazırladığımız halkaları pişirme kağıdının üzerine dizelim.",
                        "Ardından üzerlerini streç filmle kapatarak 10-15 dakika tepsi mayasına bırakalım.",
                        "Sürenin sonunda 180°C derece fırına verelim ve üzeri kızarana kadar pişirelim.Bu sırada kalan hamurumuzla aynı işlemleri tekrarlayalım. Bu arada şekil verdikten sonra arta kalan hamur parçalarını birleştirip tekrar açalım.",
                        "Elde ettiğimiz halkaları yine pişirme kağıdının üzerine dizelim. Daha sonra pişirme kağıdını bir makas yardımıyla halkaların boyutunda keselim.",
                        "Fırına verdiğimiz donutlar bu süre zarfında pişmiş olacaktır, onları bir kenarda soğumaya bırakabilirsiniz.",
                        "Donutları derin bir tencerede kızdırdığımız yağa bırakalım. ",
                        "Altı kızaran hamurları ters çevirerek her iki tarafının da kızarmasını sağlayalım. ",
                        "Kızarttığımız donutları havlu kağıt serili bir tabağa alalım ve süsleme aşamasına geçelim.",
                        "Öncelikle sıcak donutları tarçına batırarak pratik ve kolay bir şekilde süsleyelim.",
                        "Ardından kalan donutları benmari usulü erittiğimiz çikolataya batırarak süsleyelim. Ben sütlü çikolataya batırdığım donutlardan bazılarının üzerini beyaz çikolata ile de süsleyeceğim. Bunun için bir pişirme kağıdından üçgen şeklinde kestiğim parçaya koni şeklini veriyorum. Ardından uç kısımların birleştiği yeri katlıyorum. ",
                        "İçerisine erittiğimiz beyaz çikolatayı aktaralım ve üst kısmını katlayalım. Ardından ucunu bir makasla keselim. Süslemek istediğimiz donutun üzerinde çizgiler oluşturalım.",
                        "Aynı şekilde fırında pişirdiğimiz donutları da eritilmiş çikolataya batıralım. Daha sonra bir kısmını beyaz çikolata ile, bir kısmını da pasta süsleriyle renklendirelim. ",
                    ]
                },

                {
                    subtitle: 'Glazürler',
                    content: [
                        "Beyaz çikolata + gıda boyası (mavi, pembe, sarı)",
                        "Bitter çikolata + krema",
                        "Pudra şekeri + limon suyu + gıda boyası",
                    ]
                },
                {
                    subtitle: 'Süslemeler',
                    content: [
                        "Renkli şekerlemeler",
                        "İnce çekilmiş fındık/fıstık",
                        "Hindistan cevizi",
                        "Minik kalp veya yıldız şekilli süsler"
                    ]
                },
            ]
        }
    ]
},
{
    image: 'dondurmali-profiterol.jpg',
    Titles: [
        {
            title: 'İçindekiler',
            subTitles: [
                {
                    subtitle: 'Hamuru İçin',
                    content: [
                        "1 su bardağı su",
                        "1 su bardağı un",
                        "100 gr tereyağı",
                        "4 adet orta boy yumurta",
                        "1 çay kaşığı tuz",
                        "1 tatlı kaşığı toz şeker",
                    ]
                },
                {
                    subtitle: 'Kreması İçin',
                    content: [
                        "2,5 su bardağı süt",
                        "1 su bardağı toz şeker",
                        "3 yemek kaşığı un",
                        "1 adet yumurta sarısı",
                        "1 paket vanilya",
                        "(İsteğe bağlı) 1 paket krem şanti tozu (kremayı soğuduktan sonra eklemek için)",
                    ]
                },
                {
                    subtitle: 'Çikolata Sosu İçin',
                    content: [
                        "1 su bardağı süt",
                        "1 yemek kaşığı kakao",
                        "1 yemek kaşığı un",
                        "1 tatlı kaşığı toz şeker",
                        "50 gram bitter çikolata",
                    ]
                },
            ]
        },
        {
            title: 'Talimatlar',
            subTitles: [
                {
                    subtitle: '',
                    content: [
                        "Hamurun Hazırlanması: Bir tencerede su, tereyağı, tuz ve toz şekeri karıştırıp kaynatın. Kaynayan karışıma unu ekleyip hızlıca karıştırın. Hamur toparlanıp tencerenin kenarlarına yapışmayacak kıvama gelince ocaktan alın.",
                        "Hamur ılıdıktan sonra yumurtaları teker teker ekleyerek mikserle veya elinizle iyice karıştırın. Her yumurtayı ekledikten sonra hamurun pürüzsüz hale gelmesi için iyice çırpın. Hamur, yapışkan ve parlak bir kıvam alacaktır.",
                        "Hazırladığınız hamuru sıkma torbasına alın. Yağlı kağıt serili fırın tepsisine ceviz büyüklüğünde toplar sıkın.",
                        "Önceden ısıtılmış 180°C (350°F) fırında üzerleri kızarana kadar yaklaşık 30-35 dakika pişirin. Fırının kapağını kesinlikle açmayın, yoksa hamurlar söner. Pişen hamurları fırından çıkarıp soğumaya bırakın.",
                    ]
                },
                {
                    subtitle: 'Kremasının Hazırlanması',
                    content: [
                        "Bir tencereye süt, toz şeker, un ve yumurta sarısını alın. Tel çırpıcı ile karıştırarak orta ateşte kıvam alana kadar pişirin. Kaynamaya başlayınca ocaktan alın, vanilyayı ekleyip karıştırın ve soğumaya bırakın. Soğuyan kremayı isterseniz çırpılmış krem şanti tozuyla karıştırıp daha hafif bir kıvam elde edebilirsiniz.",
                    ]
                },
                {
                    subtitle: 'Çikolata Sosunun Hazırlanması',
                    content: [
                        "Bir tencerede süt, kakao, un ve toz şekeri karıştırın. Orta ateşte kıvam alana kadar pişirin. Ocaktan alıp içine bitter çikolatayı ekleyin ve eriyene kadar karıştırın.",
                    ]
                },
                {
                    subtitle: 'Birleştirme',
                    content: [
                        "Soğuyan profiterol hamurlarını enine ikiye kesin veya alt kısımlarından küçük bir delik açarak sıkma torbası yardımıyla krema doldurun.",
                        "Hazırladığınız profiterol toplarını servis tabağına dizin. Üzerlerine bolca ılık çikolata sosu gezdirerek hemen servis yapın.",
                    ]
                },
            ]
        }
    ]
},
{
    image: 'frambuazli-trilece.jpg',
    Titles: [
        {
            title: 'İçindekiler',
            subTitles: [
                {
                    subtitle: 'Kek İçin',
                    content: [
                        "5 yumurta",
                        "1,5 su bardağı şeker",
                        "1,5 su bardağı un",
                        "2 paket şekerli vanilin",
                        "1 silme çay kaşığı kabartma tozu",
                        "1 çimdik tuz",
                        "Fırın kabını yağlamak için 1 çay kaşığı tereyağı",
                    ]
                },
                {
                    subtitle: 'Şerbeti İçin',
                    content: [
                        "3 su bardağı süt",
                        "2 paket (400 ml) krema",
                        "1 su bardağı süt tozu",
                    ]
                },
                {
                    subtitle: 'Frambuaz Sosu İçin',
                    content: [
                        "3 su bardağı taze ya da dondurulmuş frambuaz",
                        "1 yemek kaşığı toz şeker",
                        "1 çay bardağı su",
                        "1 tatlı kaşığı nişasta (mısır veya buğday farketmez)",
                    ]
                },
            ]
        },
        {
            title: 'Talimatlar',
            subTitles: [
                {
                    subtitle: '',
                    content: [
                        "Yumurtaların aklarını ve sarılarını ayırın (akların içine 1 damla bile sarı karışmamalı)",
                        "Yumurta aklarını bir çimdik tuz ilavesiyle kar gibi olana kadar çırpın",
                        "Şekeri ekleyip 5 dk. daha çırpın",
                        "Sarıları ayrı bir kapta çırpın",
                        "Sarıları aklara yavaş yavaş ekleyerek çırpmaya devam edin",
                        "Unu, kabartma tozunu ve vanilinleri yavaş yavaş ekleyerek bir spatula ile pürüzsüz kıvam alana kadar karıştırın (köpüğünü söndürmeden)",
                        "22*22 cm çapında 8-9 cm derinliğinde bir fırın kabını yağlayın",
                        "Kek karışımını tepsiye dökün",
                        "160 derecede önceden ısıtılmış fırında kürdan temiz çıkana kadar (kek kürdanı batırıp çıkardığınızda kürdana hamur bulaşıyorsa henüz pişmemiştir) pişirin",
                        "Keki fırından alıp tamamen soğuması için bir kenara alın",
                        "Bu sırada şerbet için süt ve süt tozunu derin bir kabın içinde çırpın",
                        "Kremayı ekleyip 2 dk. daha çırpın",
                        "Sos için frambuaz ve şekeri bir sos tenceresine alıp ezerek frambuazlar tamamen yumuşayana kadar pişirin",
                        "Nişastayla suyu karıştırıp frambuazlara ekleyin ve sos koyulaşana kadar pişirin",
                        "Şerbeti (pişirmiyoruz) soğuyan kekin üzerine gezdirin",
                        "Kek şerbeti tamamen çektikten sonra üzerindeki köpükleri sıyırıp alın",
                        "Üzerine sosu gezdirin (sıcak, soğuk ya da ılık olması farketmez)",
                        "Buzdolabında 2 saat dinlendirip servis yapın",
                    ]

                },

            ]

        },
    ]
},
{
    image: 'meyveli_kruvasan.jpg',
    Titles: [
        {
            title: 'İçindekiler',
            subTitles: [
                {
                    subtitle: '',
                    content: [
                        "500 gr un",
                        "140 gr su",
                        "140 ml süt",
                        "55 gr şeker",
                        "40 gr tuzsuz tereyağ",
                        "11 gr instant maya",
                        "12 gr tuz",
                    ],
                },
                {
                    subtitle: 'Hamuru Açmak İçin',
                    content: [
                        "250 gr tuzsuz tereyağ",
                    ]
                },
                {
                    subtitle: 'Üzeri İçin',
                    content: [
                        "1 adet yumurta sarısı",
                        "1 yemek kaşığı süt",
                    ]
                },
            ]
        },
        {
            title: 'Talimatlar',
            subTitles: [
                {
                    subtitle: '',
                    content: [
                        "Kruvasan hamurunu geceden hazırlamak gerekiyor. Bu nedenle ilk olarak derin bir kap içerisine unu alın. Şeker ve tuzu ekleyip karıştırın.",
                        "Ortasını havuz şeklinde açın. Su, süt ve mayayı ayrı bir kapta karıştırıp aktifleştirin. Unun ortasına karışımı dökün.",
                        "Tereyağını da ekleyip karıştırın. Pürüzsüz bir hamur yoğurun.",
                        "Hamuru diktörgen şekline getirin. Yağlı kağıt serili borcama koyun ve üzerini streçleyip buzdolabına kaldırın.",
                        "Ertesi gün tereyağını ikiye bölün.",
                        "Yağlı kağıt arasına alın ve açın. Daha sonra dolaba kaldırın.",
                        "Hamuru dolaptan alın. Zemini hafif unlayın ve hamuru eşit kalınlıkta açın.",
                        "Tereyağını hamurun ortasına koyun ve kenarlarından kapatın. Uçlarındaki fazla hamuru biraz alın.",
                        "Tereyağlı hamuru nazikçe uzunlamasına açın.",
                        "Hamuru açarken oklavayla üzerine baskı uygulayarak nazikçe açmaya özen gösterin. Tereyağını taşırmayın.",
                        "Hamuru 3 kat katlayıp streçleyin ve buzdolabına kaldırın 30 dakika buzdolabında bekletin.",
                        "Süre sonunda hamuru dolaptan alın tekrar uzunlamasına açın ve yine aynı şekilde katlayın, streçleyip dolaba kaldırın.",
                        "30 dakika daha bekletin. 3. Kez de aynı işlemi yapın.",
                        "En son hamurunuz yaklaşık 60 cm boyunda 28 cm eninde açın ve kenarlarını düzgün bir şekilde kesin. Üçgenler elde edin.",
                        "Üçgenin uzun kenarına bir çizik ayın elinizle hamuru hafif açtırın ve sıkı bir şekilde sarın.",
                        "Yağlı kağıt serili fırın tepsisine dizin. Mayalanma en önemli süreç. En az 2-3 saat mayalanmasını sağlayın.",
                        "Yumurta sarısını sütle karıştırın ve kruvasanlara sürün.",
                        "Önceden ısıtılmış 200 derece fırında 10-15 dakika pişirin.",
                        "Arasına çikolata sürüp çilekle süsleyerek servis edebilirsiniz. Afiyet olsun.",

                    ]
                },
            ]
        },
    ]
},
{
    image: 'tiramusu.jpg',
    Titles: [
        {
            title: 'İçindekiler',
            subTitles: [
                {
                    subtitle: 'Tiramusu İçin Malzemeler',
                    content: [
                        "1 paket kedi dili",
                        "Kedi dilini ıslatmak için: 1,5 yemek kaşığı Türk kahvesi ve 1,5 kaşık toz şeker ",
                        "Üzeri için; kakao",
                    ]
                },
                {
                    subtitle: 'Muhallebisi İçin',
                    content: [
                        "1 litre süt",
                        "1 yumurta",
                        "3 yemek kaşığı un",
                        "3 yemek kaşığı nişasta",
                        "10 yemek kaşığı toz şeker",
                        "200 gram labne",
                        "1 kutu krema",
                    ]
                }
            ]
        },
        {
            title: 'Talimatlar',
            subTitles: [
                {
                    subtitle: '',
                    content: [
                        "Kedi dillerini ıslatmak için kahveli suyu hazırlayalım.",
                        "Kahve ve şekeri yarım bardak kadar ılık suda güzelce çözdürelim. Bir kenarda bekletelim.",
                        "Not: Türk kahvesi yerine granül kahve de kullanabilirsiniz",
                        "Şimdi tiramisu muhallebisini hazırlayalım.",
                        "Muhallebi için labne ve krema hariç tüm malzemeleri bir tencerede karıştırıp ocağa alalım.",
                        "Orta ateşte yoğunlaşana kadar pişirelim.",
                        "Ocaktan aldıktan sonra labne ve kremayı sırayla ekleyip güzelce çırpalım.",
                        "Kedi dillerini tek tek kahveli suda ıslatıp borcama tek sıra dizelim.",
                        "Üzerine muhallebinin yarısını gezdirelim.",
                        "Muhallebinin üzerine bir sıra daha ıslatılmış kedi dili dizelim.",
                        "Kalan muhallebiyi en üste güzelce yayalım.",
                        "Tiramisu tatlısını dinlendirelim. Soğuduktan sonra servis ederken üzerine bir süzgeç yardımıyla kakao serpelim. Afiyet olsun!",
                    ]
                },
            ]
        },
    ]
},
{
    image: 'sansebastian.jpg',
    Titles: [
        {
            title: 'İçindekiler',
            subTitles: [
                {
                    subtitle: '',
                    content: [
                        "600 g az tuzlu krem peynir",
                        "300 ml krema",
                        "1,5 su bardağı pudra şekeri",
                        "4 yumurta",
                        "1 yemek kaşığı un",
                    ]
                },
            ]
        },
        {
            title: 'Talimatlar',
            subTitles: [
                {
                    subtitle: '',
                    content: [
                        "Krem peyniri krema kıvamına gelene kadar çırpın",
                        "İçine kremayı ekleyip tamamen karışana kadar çırpın",
                        "Pudra şekerini ekleyip çırpın",
                        "Yumurtaları teker teker ekleyip çırpın",
                        "Unu azar azar ekleyip topaklanmamasına dikkat ederek çırpın",
                        "21 cm'lik bir kelepçeli kalıbı tereyağı ile yağlayın",
                        "İçine yağlı kağıt yerleştirip yağlı kağıdın üzerini de yağlayın",
                        "Cheesecake karışımını kalıba boşaltın",
                        "200 derecede önceden ısıtılmış fırında üzeri kahverengileşene kadar pişirin",
                    ]
                },
            ]
        },
    ]
}




]








function renderRecipe() {
    var params = new URLSearchParams(window.location.search);
    var index = params.get('index');
    console.log(recipeData[index]);
    var contentContainerdiv = document.getElementById('contentContainer')
    var recipehtml = ''
    for (var i = 0; i < recipeData[index].Titles.length; i++) {
        recipehtml += `<p class="Title">${recipeData[index].Titles[i].title.toLocaleUpperCase('tr-Tr')}</p>`
        for (var j = 0; j < recipeData[index].Titles[i].subTitles.length; j++) {
            var lihtml = ''
            for (var k = 0; k < recipeData[index].Titles[i].subTitles[j].content.length; k++) {
                lihtml += `<li>${recipeData[index].Titles[i].subTitles[j].content[k]}</li>`
            }
            recipehtml += `
            <div class="description">
                <span class="subTitle">${recipeData[index].Titles[i].subTitles[j].subtitle}</span>
                <ol class="dies">
                 ${lihtml}
                </ol>
            </div>
            `
        }
    }
    contentContainerdiv.innerHTML = recipehtml
}

function renderImage() {
    var params = new URLSearchParams(window.location.search);
    var index = params.get('index');
    var imageContainer = document.getElementById('imageContainer')
    var imagehtml = `<img src="${recipeData[index].image}" width="580" height="430">`
    imageContainer.innerHTML = imagehtml
}

renderImage()
renderRecipe()

function homePage(){
    window.location.href = 'index.html'
}
