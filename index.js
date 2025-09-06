// data içerikleri ---> resim, başlık, tanıtım mesajı, beğen, yorum

var posts = [
    {
        image: 'Pink-Cupcakes.jpg',
        title: 'Pastel Tatlar , Sade Mutluluk',
        message: 'Hayatın karmaşasında bazen en büyük huzur, en küçük detaylarda saklıdır. Bu tarif, pastel renklerin yumuşaklığıyla, sade ama etkileyici bir lezzet sunuyor. Her bir cupcake, içindeki neşeyi dışarıya taşıyan birer mutluluk tanesi gibi. Ne abartılı, ne gösterişli tam da olması gerektiği gibi: sade, tatlı ve içten. Eğer sen de mutfağında biraz huzur arıyorsan, bu tarif tam sana göre. ',
        like: 0,
        yorum: 0,
    },
    {
        image: 'tartolet1.jpg',
        title: 'Mutfağımda Kırmızı Bir An',
        message: 'Bazı tatlar konuşmaz, sadece hissettirir. Bu ahududulu tartlar da öyle ne bir gösteriş, ne bir iddia. Sadece dingin bir güzellik, sade bir mutluluk. Her bir tanesi, mutfağın sessizliğinde büyüyen bir huzur gibi. Eğer sen de günün telaşından bir an uzaklaşmak istiyorsan, bu tarif seni yavaşlatacak. ',
        like: 0,
        yorum: 0,
    },
    {
        image: 'cheesecake.jpg',
        title: 'Bir Dilimle Başlayan Masal',
        message: 'Bir dilim cheesecake, üstünde yaz sonu meyveleriyle süslenmiş… Bu tarif, sadece damakta değil, ruhun en sessiz köşesinde iz bırakır. Mutfağımda huzur ararken, bu tatlı bana dinginliğin ne kadar sade olabileceğini hatırlattı. Belki de bazen tek ihtiyacımız, bir dilim sevgiyle hazırlanmış bir tatlıdır.',
        like: 0,
        yorum: 0,
    },
    {
        image: 'magnolia.jpg',
        title: 'Bardakta Zarafet',
        message: 'Gümüş bir tepside sunulan iki zarif bardak… İçinde kat kat huzur, üstünde meyveyle süslenmiş bir tebessüm. Bu tatlı, sadece damakta değil, ruhun en sessiz köşesinde iz bırakıyor. Beyaz kremanın yumuşaklığıyla kırmızı meyvelerin canlılığı buluşuyor; tıpkı mutfakta geçen dingin bir öğleden sonra gibi.  Bugün, bir tatlının sadece lezzet değil, aynı zamanda bir duyguyu taşıyabileceğini hatırlatmak istedim. Belki de bu tarif, senin “mutfakta huzur” yolculuğunda küçük bir durak olur. ',
        like: 0,
        yorum: 0,
    },

    {
        image:'donut.png',
        title:'Gökkuşağı Şekerlemeleri',
        message:'Renkler nazikçe gülümsüyor, tatlar sessizce konuşuyor. Bu sayfa, bir tabakta toplanan neşenin ve huzurun küçük bir kutlamasıdır. Her donut, bir tebessüm; her tarif, bir sarılma gibi.',
        like: 0,
        yorum: 0,
    },
    {
        image:'dondurmali-profiterol.jpg',
        title:'Profiterolün Kalpten Gelen Hali',
        message:'Sessizce pişen hamurlar, sabırla doldurulan içler... Çikolata, kalpten gelen bir dokunuş gibi nazikçe aktı.Bu köşe, tatlının sadece bir lezzet değil, bir duyguyu taşıdığı anlara adanmıştır.Her profiterol, bir tebessüm; her sos, içsel bir kucaklaşma gibi.',
        like: 0,
        yorum: 0,
    },
    {
        image:'frambuazli-trilece.jpg',
        title:'Sütle Yazılmış Bir Masal',
        message:' Sessiz bir öğleden sonra, mutfağın köşesinde başlayan bir hikâye… Sütle ıslanmış kekin yumuşaklığı, meyvenin zarif dokunuşuyla buluştu. Her katı bir cümle, her dokunuşu bir virgül gibi. Bu tatlı, sadece bir tarif değil bir masalın en tatlı bölümü. Belki de huzurun en sade hali, bir kaşıkta saklı.',
        like: 0,
        yorum: 0,
    },
    {
        image:'meyveli_kruvasan.jpg',
        title:'Dakikalarla Mayalanan Huzur',
        message:'Sabahın ilk ışıklarıyla uyanan bir düş… Kat kat açılmış hamurun arasına gizlenmiş çilek dilimleri, Üzerine serpilmiş pudra şekeriyle bir masal gibi. Bu kruvasan, sadece bir tatlı değil bir sabah tebessümü, Belki de günün en pastel anı, bir lokmada saklı.',
        like: 0,
        yorum: 0,
    },
    {
        image:'tiramusu.jpg',
        title:'Kahveyle Yazılmış Sessiz Bir Akşam',
        message:'Gün yavaşça kapanırken, mutfağın köşesinde iki kadeh tiramisu… Kahveyle ıslanmış anlar, mascarpone’un yumuşaklığıyla sarılıyor. Altın kaşık sessizce bekliyor; belki bir sohbetin, belki bir tebessümün eşlikçisi. Bu tatlı, sadece bir lezzet değil bir akşamın kalp atışı.Işıklar loş, zaman yavaş, ve her lokma bir hatıra gibi.',
        like: 0,
        yorum:0,
    },
    {
        image:'sansebastian.jpg',
        title:'Karamelin Gölgesinde Çilekli Bir Sessizlik',
        message:'Kimi tatlılar yüksek sesle konuşmaz… Bu cheesecake, yanık üstüyle derinliği, çilekle neşeyi, çikolatayla şefkati anlatıyor. Her katı bir duygunun izi, her lokması bir iç çekiş gibi. Belki de bu tarif, mutfağın en sessiz ama en güçlü cümlesidir. Bir dilimle başlayan, kalbe dokunan bir akşam.',
        like: 0,
        yorum: 0,
    },

]



    

function renderPosts() {
    var parent = document.getElementById("contentContainer")
   
    var posthtml = ""

    for ( var i =0; i<posts.length; i++){
        posthtml += `<div onclick="navigate(${i})" class="square">
              <div class="square1">
                 <img src="${posts[i].image}" width="500" height="380">
              </div>
              <div class="square2">
                <p class="write1">${posts[i].title}</p>
                <span class="write2"> ${posts[i].message}</span>
                <div class="post-footer">
                   <button class="like-btn">❤️Beğen ${posts[i].like}</button>
                   <button class="comment-btn"> 💬Yorum Yap ${posts[i].yorum}</button>
                   
                </div>
                </div>
            </div>`
    }
    
    parent.innerHTML=posthtml
}

renderPosts()


function navigate(index) { 
    window.location.href = `recipe.html?index=${index}`
}


/**
 *  var postHtml

    for ( var i=0; i < posts.length; i++){

        postHtml += `<div onclick="navigate()" class="square">
              <div class="square1">
                 <img src="Pink-Cupcakes.jpg" width="500" height="380">
              </div>
              <div class="square2">
                <p class="write1">"Pastel Tatlar , Sade Mutluluk"</p>
                <span class="write2"> Hayatın karmaşasında bazen en büyük huzur, en küçük detaylarda saklıdır. Bu tarif, pastel renklerin yumuşaklığıyla, sade ama etkileyici bir lezzet sunuyor. Her bir cupcake, içindeki neşeyi dışarıya taşıyan birer mutluluk tanesi gibi. Ne abartılı, ne gösterişli tam da olması gerektiği gibi: sade, tatlı ve içten. Eğer sen de mutfağında biraz huzur arıyorsan, bu tarif tam sana göre. </span>
                <div class="post-footer">
                   <button class="like-btn">❤️Beğen</button>
                   <button class="comment-btn"> 💬Yorum Yap</button>
                   
                </div>
                </div>
            </div>`
        
    }
 */