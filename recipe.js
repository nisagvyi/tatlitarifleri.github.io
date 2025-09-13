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
        Titles:[
            {
                title:'içindekiler',
                subTitles:[
                    {
                        subtitle:'MALZEMELER (6 küçük tart için)',
                        content:[
                            "Tart Tabanı:",
                            "200 gr un",
                            "100 gr tereyağ (soğuk, küp kesilmiş)",
                            "50 gr pudra şekeri",
                            "1 yumurta sarısı",
                            "1-2 yemek kaşığı soğuk su",
                            "Bir tutam tuz",
                        ]
                    },
                ]
            }
        ]
    }]




function renderRecipe() {
    var params = new URLSearchParams(window.location.search);
    var index = params.get('index');
    console.log(recipeData[index]);
    var contentContainerdiv = document.getElementById('contentContainer')
    var recipehtml = ''
    for (var i = 0; i < recipeData[index].Titles.length; i++) {
        recipehtml += `<p class="Title">${recipeData[index].Titles[i].title.toUpperCase()}</p>`
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
