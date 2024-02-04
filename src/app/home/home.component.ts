import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  index : number = 0;

  images: string[] = [
    "assets/images/home.jpg",
    "assets/images/home1.jpg",
    "assets/images/home-1.jpg",
    "assets/images/home2.jpg",
    "assets/images/home3.jpg"
  ];

  texts: string[] = [
    "Discover the latest in fashion at Roger's Store, your go-to destination for trendy and stylish clothing. Immerse yourself in a world of fashion where every piece tells a story and every style reflects your unique personality.",

    "🛍️ Explore Our Collections: Browse through our curated collections featuring a diverse range of clothing, from casual wear to sophisticated ensembles. Whether you're looking for the perfect outfit for a special occasion or adding a touch of flair to your everyday wardrobe, we have something for everyone.",

    "🌟 Quality and Style, Unmatched: At Roger's Store, we believe in offering not just clothing, but an experience. Our garments are crafted with precision and attention to detail, ensuring the highest quality and the latest fashion trends. Elevate your style with pieces that resonate with elegance and sophistication.",

    "🤩 Stay Fashionable, Stay Confident: Fashion is not just about what you wear; it's a statement. Embrace your individuality and express yourself through our versatile and on-trend selections. Our goal is to empower you to feel confident and fabulous every day.",

    "📦 Shop with Confidence: Enjoy a seamless shopping experience with secure transactions and swift deliveries. Our customer support team is here to assist you at every step, making your shopping journey with us delightful and stress-free.",

    "🌐 Connect with Us:Follow us on social media to stay updated on the latest arrivals, fashion tips, and exclusive promotions. Join our community of fashion enthusiasts and be part of the Rogers Store family."
  ]
  

  ngOnInit(): void {
    setInterval (() => {this.changeImage()}, 3000);
    setInterval (() => {this.changeText()}, 3000);
  }

  image : string = this.images[ this.index]
  text : string = this.texts[this.index]
  changeImage() {
    this.index = (this.index + 1) % this.images.length;
    this.image = this.images[this.index];
  }
  changeText() {
    this.index = (this.index + 1) % this.texts.length;
    this.text = this.texts[this.index];
  }


}
