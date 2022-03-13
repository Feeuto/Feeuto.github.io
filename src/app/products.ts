export interface Product {
  image1: string,
  image2: string,
  image3: string,
  name: string,
  // price: string,
  description: string,
  rating: number,
  link: string
  // array: string
}

// import { link } from 'fs';

export const products = [
    {
        image1: 'https://m.media-amazon.com/images/I/61fIEs7CAuL._AC_SX679_.jpg',
        // image1: 'assets/image/image1.webp',
        image2: 'https://m.media-amazon.com/images/I/71hhnJSyNhL._AC_SX355_.jpg',
        // image2: 'assets/image/image2.webp',
        image3: 'https://m.media-amazon.com/images/I/61jZoMEjwgL._AC_SX466_.jpg',
        // image3: 'assets/image/image3.webp',
        name: 'Sony (DSCW800) 20.1 MP Digital Camera (Silver)',
        // price: '$188.95',
        description: 'Sony DSCW800/S 20Digital Camera with 2.7-Inch LCD (silver)',
        rating: 4.1,
        link: 'https://www.amazon.com/Sony-DSCW800-Digital-Camera-Silver/dp/B00I8BIC9E/ref=sr_1_1?keywords=camera&qid=1647165425&refinements=p_89%3ASony&rnid=2528832011&s=electronics&sr=1-1&th=1'
        // array: '1'
      },
      {
        image1:'https://m.media-amazon.com/images/I/718DfOPtpqL._AC_SX466_.jpg',
        image2: 'https://m.media-amazon.com/images/I/81ekc7N3mVL._AC_SX466_.jpg',
        image3: 'https://m.media-amazon.com/images/I/71by8LCKqbL._AC_SX466_.jpg',
        name: 'Sony RX100 VII Premium Compact Camera with 1.0-type stacked CMOS sensor (DSCRX100M7)',
        // price: '$1,298.00',
        description: 'Норм камера)',
        rating: 4.4,
        // array: 'data-lightbox="2"',
        link: 'https://www.amazon.com/Sony-Premium-Compact-1-0-type-DSCRX100M7/dp/B07VPQV7BY/ref=sr_1_3?keywords=camera&qid=1647165425&refinements=p_89%3ASony&rnid=2528832011&s=electronics&sr=1-3&th=1'
      },
      {
        image1: 'https://m.media-amazon.com/images/I/91rQ3XfEYzL._AC_SX466_.jpg',
        // image2: '',
        // image3: '',
        name: 'Sony a7 III (ILCEM3K/B) Full-frame Mirrorless Interchangeable-Lens Camera with 28-70mm Lens with 3-Inch LCD, Black',
        // price: '$2,198.00',
        description: 'Sony a7 III (ILCEM3K/B) Full-frame Mirrorless Interchangeable-Lens Camera with 28-70mm Lens with 3-Inch LCD, Black',
        rating: 4.7,
        // array: '3',
        link: 'https://www.amazon.com/Sony-Full-frame-Mirrorless-Interchangeable-Lens-ILCE7M3K/dp/B07B45D8WV/ref=sr_1_4?keywords=camera&qid=1647165425&refinements=p_89%3ASony&rnid=2528832011&s=electronics&sr=1-4'
      },
      {
        image1: 'https://m.media-amazon.com/images/I/81ofLrSVxEL._AC_SX466_.jpg',
        image2: 'https://m.media-amazon.com/images/I/815eziCLyjL._AC_SX466_.jpg',
        image3: 'https://m.media-amazon.com/images/I/81OYF+wFh8L._AC_SX466_.jpg',
        name: 'Sony Alpha 1 Full-frame Interchangeable Lens Mirrorless Camera',
        // price: '$6,498.00',
        description: 'Sony Alpha 1 Full-frame Interchangeable Lens Mirrorless Camera',
        rating: 4.7,
        // array: '4',
        link: 'https://www.amazon.com/Sony-Full-frame-Interchangeable-Mirrorless-Camera/dp/B08V226T8Q/ref=sr_1_5?keywords=camera&qid=1647165425&refinements=p_89%3ASony&rnid=2528832011&s=electronics&sr=1-5'
      },
      {
        image1: 'https://m.media-amazon.com/images/I/71lRWSHdDRL._AC_SX466_.jpg',
        image2: 'https://m.media-amazon.com/images/I/71rJ2uJOg5L._AC_SX466_.jpg',
        image3: 'https://m.media-amazon.com/images/I/71B5rw0jZrL._AC_SX466_.jpg',
        name: 'Sony RX100 III 20.1 MP Premium Compact Digital Camera w/1-inch Sensor and 24-70mm F1.8-2.8 ZEISS Zoom Lens (DSCRX100M3/B), 6in l x 4.65in w x 2.93in h, Black',
        // price: '$489.99',
        description: 'Sony RX100 III 20.1 MP Premium Compact Digital Camera w/1-inch Sensor and 24-70mm F1.8-2.8 ZEISS Zoom Lens (DSCRX100M3/B), 6in l x 4.65in w x 2.93in h, Black',
        rating: 4.5,
        // array: '5',
        link: 'https://aliexpress.ru/item/32845651281.html?spm=a2g0o.productlist.0.0.1db93c3b2iXEZZ&algo_pvid=5e7d339b-d830-4d87-8c9d-eea6b340198f&algo_expid=5e7d339b-d830-4d87-8c9d-eea6b340198f-14&btsid=0ab6f81e15815383798353514e7fe1&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
      },
      {
        image1: 'https://m.media-amazon.com/images/I/41TJ26qVUSL._AC_SX466_.jpg',
        image2: 'https://m.media-amazon.com/images/I/61JScyB4SeL._AC_SX466_.jpg',
        image3: 'https://m.media-amazon.com/images/I/31hZjSMZLRL._AC_SX466_.jpg',
        name: 'Sony Alpha a6000 Mirrorless Digitial Camera 24.3MP SLR Camera with 3.0-Inch LCD (Black) w/ 16-50mm Power Zoom Lens (Renewed)',
        // price: '$874.95',
        description: 'Sony Alpha a6000 Mirrorless Digitial Camera 24.3MP SLR Camera with 3.0-Inch LCD (Black) w/ 16-50mm Power Zoom Lens (Renewed)',
        rating: 4.4,
        // array: '6',
        link: 'https://www.amazon.com/Sony-Mirrorless-Digitial-Certified-Refurbished/dp/B07BYZ5YB7/ref=sr_1_8?keywords=camera&qid=1647165425&refinements=p_89%3ASony&rnid=2528832011&s=electronics&sr=1-8'
      },
      {
        image1: 'https://images-na.ssl-images-amazon.com/images/I/810Ri-gB5xL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        image2: 'https://m.media-amazon.com/images/I/819hRsGsiSL._AC_SX466_.jpg',
        image3: 'https://m.media-amazon.com/images/I/81twUpO0z5L._AC_SX466_.jpg',
        name: 'Sony SEL85F18 85mm F/1.8-22 Medium-Telephoto Fixed Prime Camera Lens, Black',
        // price: '$519.89',
        description: 'Sony SEL85F18 85mm F/1.8-22 Medium-Telephoto Fixed Prime Camera Lens, Black',
        rating: 4.8,
        // array: '7',
        link: 'https://www.amazon.com/Sony-SEL85F18-1-8-22-Medium-Telephoto-Camera/dp/B06WLGFWGX/ref=sr_1_11?keywords=camera&qid=1647165425&refinements=p_89%3ASony&rnid=2528832011&s=electronics&sr=1-11'
      },
      {
        image1: 'https://m.media-amazon.com/images/I/51utPfDooqS._AC_SX466_.jpg',
        image2: 'https://m.media-amazon.com/images/I/71I2yo3go4S._AC_SX466_.jpg',
        image3: 'https://m.media-amazon.com/images/I/71YSAIMJ1ZS._AC_SX466_.jpg',
        name: 'Sony ZV-1 Digital Camera for Content Creators, Vlogging and YouTube with Flip Screen, Built-in Microphone, 4K HDR Video, Touchscreen Display, Live Video Streaming, Webcam',
        // price: '-',
        description: 'Sony ZV-1 Digital Camera for Content Creators, Vlogging and YouTube with Flip Screen, Built-in Microphone, 4K HDR Video, Touchscreen Display, Live Video Streaming, Webcam',
        rating: 4.6,
        // array: '8',
        link: 'https://www.amazon.com/Sony-Content-Creators-Vlogging-Microphone/dp/B08965JV8D/ref=sr_1_14?keywords=camera&qid=1647165425&refinements=p_89%3ASony&rnid=2528832011&s=electronics&sr=1-14'
      },
      {
        image1: 'https://m.media-amazon.com/images/I/61hOOTIr26L._AC_SX466_.jpg',
        image2: 'https://m.media-amazon.com/images/I/615v81W8p9L._AC_SX466_.jpg',
        image3: 'https://m.media-amazon.com/images/I/61QwnmqTRKL._AC_SX466_.jpg',
        name: 'Sony - HDRCX405 HD Video Recording Handycam Camcorder (black)',
        // price: '$228.00',
        description: 'Sony - HDRCX405 HD Video Recording Handycam Camcorder (black)',
        rating: 4.5,
        // array: '9',
        link: 'https://www.amazon.com/Sony-HDRCX405-Recording-Handycam-Camcorder/dp/B00R5LH9HO/ref=sr_1_18?keywords=camera&qid=1647165425&refinements=p_89%3ASony&rnid=2528832011&s=electronics&sr=1-18'
      },
      {
        image1: 'https://m.media-amazon.com/images/I/71soc3RVKsL._AC_SX466_.jpg',
        image2: 'https://m.media-amazon.com/images/I/71ef94XBldL._AC_SX466_.jpg',
        image3: 'https://m.media-amazon.com/images/I/61a-K+brKaL._AC_SX466_.jpg',
        name: 'Sony LCSU21 Soft Carrying Case for Cyber-Shot and Alpha NEX Cameras (Black)',
        // price: '$24.50',
        description: 'Sony LCSU21 Soft Carrying Case for Cyber-Shot and Alpha NEX Cameras (Black)',
        rating: 4.7,
        // array: '10',
        link: 'https://www.amazon.com/Sony-LCSU21-Carrying-Cyber-Shot-Cameras/dp/B00B06EON2/ref=sr_1_21?keywords=camera&qid=1647165425&refinements=p_89%3ASony&rnid=2528832011&s=electronics&sr=1-21'
      }
];