// Animasi hati
function buatHati() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.querySelector(".love-bg").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(buatHati, 300);
  
  const slides = [
    {
      foto: "assets/download.gif",
      gif: null,
      pesan: "Haii Cantikk, akuu ada sesuatu buatt kamuu semogaaa kamuu sukaa yaa cantikk"
    },
    {
      foto: "assets/image.jpg",
      gif: null,
      pesan: "Haii, aku Sendyy. sebelumnya aku mau ngucapin banyak-banyak terima kasih sama kamu, karena udah nerima aku untuk jadi pasangan kamu. jujur, aku awalnya ngerasa kurang buat kamu, karena manaa mungkinn cowoo yangg biasaa ini bisaa untukk dapatinn hatii kamuu hehe tapii ternyataa bisaaa >.< . Aku mauuu minta maaf juga, kamu harus nunggu yang lumayan lama ya. Tapi sekarang, aku bisa miliki kamu sepenuhnya. Aku bener-bener nggak bisa ekspresikan senangnya aku dan bahagianya aku. Selama penantian yang lumayan panjang, akhirnya sampai juga di titik ini, yang mempersatukan kita. semoga perjalanan kita berdua selalu didatangkan oleh hal-hal yang baikkk yaaa.  I loveeee youuuu moreeee 💖"
    },
    {
      foto: "assets/image2.jpg",
      gif: null,
      pesan: "haloooo cantikkk, terimakasihh udahh mauuu menemanii akuu selamaaa inii. akuu benerr benerr sangatttt happyyy, dann benerr bener bahagiaa bangett bisaa milikii kamuu. Kamuu tauu gasii? kamuu ituuu masyaa allahh, cantikkkk syekalii, lucuuu, imuppp, pokoknyaa semuaanyaa dehh! kamuu tidakk perluu overthikingg tentangg apapunn yaaa, butt I stayy forr youu babyy🫂. Oiyaaa, kalauu kamuu sedihh, jangann raguu untukk bilangg yaaa sayangg. akuuu harappp kitaaa bener benerrr bisaaa selamanyaa buatt jalanii inii semuaa. i really really really loveeee youuuuu baby🌹"
    },
    {
        foto: "assets/image3.jpg",
        gif: null,
        pesan: "i will never stop loving you, i will always love you. if you need me, when the world is not on your side, when your days are not going well, i will always be here. i will never leave, even if i have to fight many things. i will always by your side. i loveeee youuuuu💐💕."
      },

      {
        foto: "assets/image.gif",
        gif: "",
        pesan: "cukuppp sekiannn dariii manusiaa yangg selaluu kangenn kamuu inii. Akuu harappp kamuu sukaaa samaa apaa yangg udahhh akuu buatt. Kalauu adaa salahh kataa, mohonn dimaafkann, namanyaa jugaa manusiaa.babaiiii, I loveeeee youuuu sayangkuu, cintakuu, cantikku 🌹❤️"
      },
  ];
  let indexSlide = 0;

const fotoElement = document.createElement("img");
fotoElement.style.width = "300px";
fotoElement.style.borderRadius = "20px";

const gifElement = document.createElement("img");
gifElement.style.width = "300px";
gifElement.style.marginTop = "10px";
gifElement.style.display = "none"; // default: disembunyikan

const pesanElement = document.createElement("p");
pesanElement.style.marginTop = "10px";
pesanElement.style.fontSize = "18px";
pesanElement.style.textAlign = "center";

// Tempelkan ke container
const container = document.getElementById("fotoContainer");
container.appendChild(fotoElement);
container.appendChild(gifElement);
container.appendChild(pesanElement);

// Fungsi tampilkan slide
function tampilkanSlide() {
  const data = slides[indexSlide];
  
  // Gambar
  fotoElement.src = data.foto;

  // GIF
  if (data.gif) {
    gifElement.src = data.gif;
    gifElement.style.display = "block";
  } else {
    gifElement.style.display = "none";
  }

  // Pesan
  pesanElement.textContent = data.pesan;
}

// Tombol ganti
document.getElementById("gantiFotoBtn").addEventListener("click", () => {
  indexSlide = (indexSlide + 1) % slides.length;
  tampilkanSlide();
});

// Inisialisasi pertama
tampilkanSlide();

  
// Buat elemen audio
const audio = document.createElement("audio");
audio.controls = true;
audio.autoplay = true;
audio.loop = true;

const source = document.createElement("source");
source.src = "assets/here with me.mp3";
source.type = "audio/mpeg";

audio.appendChild(source);
musikContainer.appendChild(audio);
