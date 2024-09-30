import { INews } from "@/components/home/NewsSection";
import { Bell, Eye, MapMarker2, Star, Tag, User } from "@/config/icons";
import { IOrders, IPromotion, IUser } from "@/models";

export const PROMOTIONS: IPromotion[] = [
  {
    id: 1,
    discount: "10k",
    forOrderTo: "500k",
    startDate: "01-08-2024",
    endDate: "31-08-2024",
  },
  {
    id: 2,
    discount: "20k",
    forOrderTo: "1 triệu",
    startDate: "01-09-2024",
    endDate: "30-09-2024",
  },
  {
    id: 3,
    discount: "30k",
    forOrderTo: "2 triệu",
    startDate: "01-10-2024",
    endDate: "31-10-2024",
  },
  {
    id: 4,
    discount: "50k",
    forOrderTo: "3 triệu",
    startDate: "01-11-2024",
    endDate: "30-11-2024",
  },
  {
    id: 5,
    discount: "100k",
    forOrderTo: "2 triệu",
    startDate: "01-12-2024",
    endDate: "31-12-2024",
  },
  {
    id: 6,
    discount: "300k",
    forOrderTo: "3 triệu",
    startDate: "01-12-2024",
    endDate: "31-12-2024",
  },
];

export const USER: IUser = {
  id: 1,
  fullName: "Nguyễn Văn A",
  nickname: "AnhA",
  birthday: "1990-01-15",
  gender: "Nam",
  country: "vietnam",
  phoneNumber: "0901234567",
  email: "nguyenvana@example.com",
  username: "nguyenvana",
  password: "password123",
  avatar: "/images/8951e533806bc54e0828a60a67c4c731.png",
};

export const GENDER = [{ type: "Nam" }, { type: "Nữ" }, { type: "Khác" }];

export const COUNTRY = [
  { key: "vietnam", name: "Vietnam", flag: "https://flagcdn.com/vn.svg" },
  { key: "argentina", name: "Argentina", flag: "https://flagcdn.com/ar.svg" },
  { key: "venezuela", name: "Venezuela", flag: "https://flagcdn.com/ve.svg" },
  { key: "brazil", name: "Brazil", flag: "https://flagcdn.com/br.svg" },
  {
    key: "switzerland",
    name: "Switzerland",
    flag: "https://flagcdn.com/ch.svg",
  },
  { key: "germany", name: "Germany", flag: "https://flagcdn.com/de.svg" },
  { key: "spain", name: "Spain", flag: "https://flagcdn.com/es.svg" },
  { key: "france", name: "France", flag: "https://flagcdn.com/fr.svg" },
  { key: "italy", name: "Italy", flag: "https://flagcdn.com/it.svg" },
  { key: "mexico", name: "Mexico", flag: "https://flagcdn.com/mx.svg" },
];

export const DUMP_PAYMENT_METHOD = [
  { id: 1, name: "COD (Thanh toán khi nhận hàng)" },
  { id: 2, name: "COD (Thanh toán khi nhận hàng)" },
  { id: 3, name: "COD (Thanh toán khi nhận hàng)" },
];

export const DUMP_SHIPPING_METHOD = [
  { id: 1, name: "Grab Food" },
  { id: 2, name: "Giao hàng nhanh" },
  { id: 3, name: "Shopee Express" },
  { id: 4, name: "J&T Express" },
];

export const DUMP_SERVICES = [
  {
    id: 1,
    srcImg: "/images/Services.png",
    altImg: "services-1",
    title1: "Fasted Delivery",
    title2: "Delivery in 24/H",
  },
  {
    id: 2,
    srcImg: "/images/Services (1).png",
    altImg: "services-2",
    title1: "24 Hours Return",
    title2: "100% money-back guarantee",
  },
  {
    id: 3,
    srcImg: "/images/Services (2).png",
    altImg: "services-3",
    title1: "Secure Payment",
    title2: "Your money is safe",
  },
  {
    id: 4,
    srcImg: "/images/Services (3).png",
    altImg: "services-4",
    title1: "Support 24/7",
    title2: "Live contact/message",
  },
];

export const DUMP_PRODUCTS = [
  {
    id: 1,
    name: "Smart Phone Samsung Galaxy S21",
    price: 799000,
    image: "/images/product-1.png",
    discount: 23,
    category: "Smart Phone",
  },
  {
    id: 2,
    name: "Smart Phone iPhone 13",
    price: 1200000,
    image: "/images/product-2.png",
    discount: 13,
    category: "Smart Phone",
  },
  {
    id: 3,
    name: "Smart Phone OnePlus 9 Pro",
    price: 4600000,
    image: "/images/product-3.png",
    discount: 10,
    category: "Smart Phone",
  },
  {
    id: 4,
    name: "Smart Phone Sony Xperia 5 III",
    price: 90000,
    image: "/images/product-4.png",
    discount: 10,
    category: "Smart Phone",
  },
  {
    id: 5,
    name: "Laptop Dell XPS 13 pro max I3033",
    price: 245000,
    image: "/images/product-5.png",
    discount: 0,
    category: "Laptop",
  },
  {
    id: 6,
    name: "Laptop MacBook Air M1",
    price: 20000,
    image: "/images/product-6.png",
    discount: 0,
    category: "Laptop",
  },
  {
    id: 7,
    name: "Laptop HP Spectre x360",
    price: 20000,
    image: "/images/product-7.png",
    discount: 0,
    category: "Laptop",
  },
  {
    id: 8,
    name: "Laptop Lenovo ThinkPad X1",
    price: 20000,
    image: "/images/product-8.png",
    discount: 0,
    category: "Laptop",
  },
  {
    id: 9,
    name: "Laptop Acer Aspire 7",
    price: 20000,
    image: "/images/product-9.png",
    discount: 0,
    category: "Laptop",
  },
  {
    id: 10,
    name: "Headphone Bose QuietComfort 35 II",
    price: 30000,
    image: "/images/product-10.png",
    discount: 30,
    category: "Headphone",
  },
  {
    id: 11,
    name: "Headphone Sony WH-1000XM4",
    price: 30000,
    image: "/images/product-3.png",
    discount: 30,
    category: "Headphone",
  },
  {
    id: 12,
    name: "Headphone Beats Studio3 Wireless",
    price: 30,
    image: "/images/product-3.png",
    discount: 30,
    category: "Headphone",
  },
  {
    id: 13,
    name: "Headphone Jabra Elite 75t",
    price: 30,
    image: "/images/product-3.png",
    discount: 30,
    category: "Headphone",
  },
  {
    id: 14,
    name: "Headphone Sennheiser Momentum 3",
    price: 30,
    image: "/images/product-3.png",
    discount: 30,
    category: "Headphone",
  },
  {
    id: 15,
    name: "TV LG OLED55CXPUA",
    price: 40,
    image: "/images/product-4.png",
    discount: 0,
    category: "TV",
  },
  {
    id: 16,
    name: "TV Samsung QN90A",
    price: 40,
    image: "/images/product-4.png",
    discount: 0,
    category: "TV",
  },
  {
    id: 17,
    name: "TV Sony X90J",
    price: 40,
    image: "/images/product-4.png",
    discount: 0,
    category: "TV",
  },
  {
    id: 18,
    name: "TV VIZIO OLED65-H1",
    price: 40,
    image: "/images/product-4.png",
    discount: 0,
    category: "TV",
  },
  {
    id: 19,
    name: "TV Philips 55POS9002",
    price: 40,
    image: "/images/product-4.png",
    discount: 0,
    category: "TV",
  },
  {
    id: 20,
    name: "TV Panasonic TX-55HZ2000",
    price: 40,
    image: "/images/product-4.png",
    discount: 0,
    category: "TV",
  },
  {
    id: 21,
    name: "Smart Phone Samsung Galaxy Note 20 Ultra",
    price: 50,
    image: "/images/product-5.png",
    discount: 50,
    category: "Smart Phone",
  },
  {
    id: 22,
    name: "Headphone Sony WH-1000XM4",
    price: 50,
    image: "/images/product-6.png",
    discount: 50,
    category: "Headphone",
  },
  {
    id: 23,
    name: "TV LG CX OLED",
    price: 50,
    image: "/images/product-7.png",
    discount: 50,
    category: "TV",
  },
  {
    id: 24,
    name: "Laptop Acer Predator Helios 300",
    price: 50,
    image: "/images/product-8.png",
    discount: 50,
    category: "Laptop",
  },
  {
    id: 25,
    name: "Headphone Bose QuietComfort Earbuds",
    price: 50,
    image: "/images/product-9.png",
    discount: 50,
    category: "Headphone",
  },
  {
    id: 26,
    name: "Smart Phone Google Pixel 5",
    price: 50,
    image: "/images/product-10.png",
    discount: 50,
    category: "Smart Phone",
  },
];

export const DUMP_NEWS: INews[] = [
  {
    poster: "Robert",
    timePost: "28 Nov, 2015",
    id: 1,
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    imgSrc: "/images/b2a0c4b41e79e059808e84ae39035884.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi blanditiis placeat necessitatibus voluptates velit amet repellat, ipsam eveniet molestias pariatur magnam veritatis consectetur molestiae beatae saepe quaerat, laboriosam in officia.",
    comments: 738,
  },
  {
    poster: "Robert",
    timePost: "28 Nov, 2015",
    id: 2,
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    imgSrc: "/images/0a37ca30b46811cb1272a616ad550367.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi blanditiis placeat necessitatibus voluptates velit amet repellat, ipsam eveniet molestias pariatur magnam veritatis consectetur molestiae beatae saepe quaerat, laboriosam in officia.",
    comments: 738,
  },
  {
    poster: "Robert",
    timePost: "28 Nov, 2015",
    id: 3,
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    imgSrc: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi blanditiis placeat necessitatibus voluptates velit amet repellat, ipsam eveniet molestias pariatur magnam veritatis consectetur molestiae beatae saepe quaerat, laboriosam in officia.",
    comments: 738,
  },
];

export const BLOG = [
  {
    id: 1,
    name: "News News News News News News News News News News News News News",
    img: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
    date_created: "15/08/2023 21:47:47",
    date_edit: "15/08/2023 21:47:47",
    description:
      "Thịt tươi Trust Farm đã có mặt tại các cửa hàng thuộc hệ thống siêu thị GS25, mã GS25 chỉ hỗ trợ phục vụ hệ thống mua lẻ. Các sản phẩm thịt heo, thịt bò, thịt gà đóng khay với trọng lượng 300g, 500g, 1kg tất cả tiện lợi cho từng bữa ăn hàng ngày.",
    content: [
      {
        title: "1. What is ooooooooooooooo",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [
          {
            img_c: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
          },
          {
            img_c: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
          },
        ],
      },
      {
        title: "2. What is Loppppppppppppppp",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [
          {
            img_c: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
          },
        ],
      },
      {
        title: "3. What illlllllll",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [],
      },
    ],
    view: 1000,
  },
  {
    id: 2,
    name: "Sản phẩm hot kkk",
    img: "/images/st-3.jpg",
    date_created: "15/08/2023 21:47:47",
    date_edit: "15/08/2023 21:47:47",
    description:
      "Thịt tươi Trust Farm đã có mặt tại các cửa hàng thuộc hệ thống siêu thị GS25, mã GS25 chỉ hỗ trợ phục vụ hệ thống mua lẻ. Các sản phẩm thịt heo, thịt bò, thịt gà đóng khay với trọng lượng 300g, 500g, 1kg tất cả tiện lợi cho từng bữa ăn hàng ngày.",
    content: [
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [],
      },
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [],
      },
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [],
      },
    ],
    view: 1000,
  },
  {
    id: 3,
    name: "News News News News News News News News News News News News News",
    img: "/images/0a37ca30b46811cb1272a616ad550367.jpg",
    date_created: "15/08/2023 21:47:47",
    date_edit: "15/08/2023 21:47:47",
    description:
      "Thịt tươi Trust Farm đã có mặt tại các cửa hàng thuộc hệ thống siêu thị GS25, mã GS25 chỉ hỗ trợ phục vụ hệ thống mua lẻ. Các sản phẩm thịt heo, thịt bò, thịt gà đóng khay với trọng lượng 300g, 500g, 1kg tất cả tiện lợi cho từng bữa ăn hàng ngày.",
    content: [
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [
          {
            img_c: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
          },
          {
            img_c: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
          },
        ],
      },
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [],
      },
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [],
      },
    ],
    view: 1000,
  },
  {
    id: 4,
    name: "News News News News News News News News News News News News News",
    img: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
    date_created: "15/08/2023 21:47:47",
    date_edit: "15/08/2023 21:47:47",
    description:
      "Thịt tươi Trust Farm đã có mặt tại các cửa hàng thuộc hệ thống siêu thị GS25, mã GS25 chỉ hỗ trợ phục vụ hệ thống mua lẻ. Các sản phẩm thịt heo, thịt bò, thịt gà đóng khay với trọng lượng 300g, 500g, 1kg tất cả tiện lợi cho từng bữa ăn hàng ngày.",
    content: [
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [
          {
            img_c: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
          },
          {
            img_c: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
          },
        ],
      },
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [],
      },
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [],
      },
    ],
    view: 1000,
  },
  {
    id: 5,
    name: "News News News News News News News News News News News News News",
    img: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
    date_created: "15/08/2023 21:47:47",
    date_edit: "15/08/2023 21:47:47",
    description:
      "Thịt tươi Trust Farm đã có mặt tại các cửa hàng thuộc hệ thống siêu thị GS25, mã GS25 chỉ hỗ trợ phục vụ hệ thống mua lẻ. Các sản phẩm thịt heo, thịt bò, thịt gà đóng khay với trọng lượng 300g, 500g, 1kg tất cả tiện lợi cho từng bữa ăn hàng ngày.",
    content: [
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [
          {
            img_c: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
          },
          {
            img_c: "/images/fb920c42a1ba4e000babe2f166d453af.jpg",
          },
        ],
      },
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [],
      },
      {
        title: "1. What is Lorem Ipsum?",
        content_c:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...",
        img: [],
      },
    ],
    view: 1000,
  },
];

export const DUMP_ORDERS: IOrders[] = [
  {
    code: "ORD001",
    products: [
      {
        product: DUMP_PRODUCTS[0],
        quantity: 2,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[1],
        quantity: 1,
      },
    ],
    totalPayment: DUMP_PRODUCTS[0].price * 2 + DUMP_PRODUCTS[1].price,
    status: "Chưa xác nhận",
  },
  {
    code: "ORD002",
    products: [
      {
        product: DUMP_PRODUCTS[2],
        quantity: 1,
        selected: false,
      },
      {
        product: DUMP_PRODUCTS[3],
        quantity: 3,
        selected: true,
      },
    ],
    totalPayment: DUMP_PRODUCTS[2].price + DUMP_PRODUCTS[3].price * 3,
    status: "Đã xác nhận",
  },
  {
    code: "ORD003",
    products: [
      {
        product: DUMP_PRODUCTS[4],
        quantity: 5,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[5],
        quantity: 2,
      },
      {
        product: DUMP_PRODUCTS[6],
        quantity: 1,
      },
    ],
    totalPayment:
      DUMP_PRODUCTS[4].price * 5 +
      DUMP_PRODUCTS[5].price * 2 +
      DUMP_PRODUCTS[6].price,
    status: "Chưa xác nhận",
  },
  {
    code: "ORD004",
    products: [
      {
        product: DUMP_PRODUCTS[7],
        quantity: 1,
        selected: true,
      },
    ],
    totalPayment: DUMP_PRODUCTS[7].price,
    status: "Đã xác nhận",
  },
  {
    code: "ORD005",
    products: [
      {
        product: DUMP_PRODUCTS[8],
        quantity: 2,
      },
      {
        product: DUMP_PRODUCTS[9],
        quantity: 4,
        selected: true,
      },
    ],
    totalPayment: DUMP_PRODUCTS[8].price * 2 + DUMP_PRODUCTS[9].price * 4,
    status: "Chưa xác nhận",
  },
  // New orders
  {
    code: "ORD006",
    products: [
      {
        product: DUMP_PRODUCTS[10],
        quantity: 3,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[11],
        quantity: 2,
      },
    ],
    totalPayment: DUMP_PRODUCTS[10].price * 3 + DUMP_PRODUCTS[11].price * 2,
    status: "Chưa xác nhận",
  },
  {
    code: "ORD007",
    products: [
      {
        product: DUMP_PRODUCTS[12],
        quantity: 1,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[13],
        quantity: 4,
      },
    ],
    totalPayment: DUMP_PRODUCTS[12].price + DUMP_PRODUCTS[13].price * 4,
    status: "Đã xác nhận",
  },
  {
    code: "ORD008",
    products: [
      {
        product: DUMP_PRODUCTS[14],
        quantity: 5,
        selected: false,
      },
      {
        product: DUMP_PRODUCTS[15],
        quantity: 2,
      },
    ],
    totalPayment: DUMP_PRODUCTS[14].price * 5 + DUMP_PRODUCTS[15].price * 2,
    status: "Chưa xác nhận",
  },
  {
    code: "ORD009",
    products: [
      {
        product: DUMP_PRODUCTS[16],
        quantity: 1,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[17],
        quantity: 3,
      },
    ],
    totalPayment: DUMP_PRODUCTS[16].price + DUMP_PRODUCTS[17].price * 3,
    status: "Đã xác nhận",
  },
  {
    code: "ORD010",
    products: [
      {
        product: DUMP_PRODUCTS[18],
        quantity: 4,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[19],
        quantity: 1,
      },
    ],
    totalPayment: DUMP_PRODUCTS[18].price * 4 + DUMP_PRODUCTS[19].price,
    status: "Chưa xác nhận",
  },
  {
    code: "ORD011",
    products: [
      {
        product: DUMP_PRODUCTS[20],
        quantity: 2,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[21],
        quantity: 3,
      },
    ],
    totalPayment: DUMP_PRODUCTS[20].price * 2 + DUMP_PRODUCTS[21].price * 3,
    status: "Đã xác nhận",
  },
  {
    code: "ORD012",
    products: [
      {
        product: DUMP_PRODUCTS[22],
        quantity: 5,
        selected: false,
      },
      {
        product: DUMP_PRODUCTS[23],
        quantity: 1,
      },
    ],
    totalPayment: DUMP_PRODUCTS[22].price * 5 + DUMP_PRODUCTS[23].price,
    status: "Chưa xác nhận",
  },
  {
    code: "ORD013",
    products: [
      {
        product: DUMP_PRODUCTS[24],
        quantity: 2,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[25],
        quantity: 2,
      },
    ],
    totalPayment: DUMP_PRODUCTS[24].price * 2 + DUMP_PRODUCTS[25].price * 2,
    status: "Đã xác nhận",
  },
  {
    code: "ORD014",
    products: [
      {
        product: DUMP_PRODUCTS[0],
        quantity: 1,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[1],
        quantity: 1,
      },
      {
        product: DUMP_PRODUCTS[2],
        quantity: 1,
      },
    ],
    totalPayment:
      DUMP_PRODUCTS[0].price + DUMP_PRODUCTS[1].price + DUMP_PRODUCTS[2].price,
    status: "Chưa xác nhận",
  },
  {
    code: "ORD015",
    products: [
      {
        product: DUMP_PRODUCTS[3],
        quantity: 2,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[4],
        quantity: 3,
      },
    ],
    totalPayment: DUMP_PRODUCTS[3].price * 2 + DUMP_PRODUCTS[4].price * 3,
    status: "Đã xác nhận",
  },
  {
    code: "ORD016",
    products: [
      {
        product: DUMP_PRODUCTS[5],
        quantity: 4,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[6],
        quantity: 2,
      },
    ],
    totalPayment: DUMP_PRODUCTS[5].price * 4 + DUMP_PRODUCTS[6].price * 2,
    status: "Chưa xác nhận",
  },
  {
    code: "ORD017",
    products: [
      {
        product: DUMP_PRODUCTS[7],
        quantity: 2,
        selected: false,
      },
      {
        product: DUMP_PRODUCTS[8],
        quantity: 1,
      },
    ],
    totalPayment: DUMP_PRODUCTS[7].price * 2 + DUMP_PRODUCTS[8].price,
    status: "Đã xác nhận",
  },
  {
    code: "ORD018",
    products: [
      {
        product: DUMP_PRODUCTS[9],
        quantity: 3,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[10],
        quantity: 1,
      },
    ],
    totalPayment: DUMP_PRODUCTS[9].price * 3 + DUMP_PRODUCTS[10].price,
    status: "Chưa xác nhận",
  },
  {
    code: "ORD019",
    products: [
      {
        product: DUMP_PRODUCTS[11],
        quantity: 2,
        selected: true,
      },
      {
        product: DUMP_PRODUCTS[12],
        quantity: 2,
      },
    ],
    totalPayment: DUMP_PRODUCTS[11].price * 2 + DUMP_PRODUCTS[12].price * 2,
    status: "Đã xác nhận",
  },
  {
    code: "ORD020",
    products: [
      {
        product: DUMP_PRODUCTS[13],
        quantity: 1,
        selected: false,
      },
      {
        product: DUMP_PRODUCTS[14],
        quantity: 5,
      },
    ],
    totalPayment: DUMP_PRODUCTS[13].price + DUMP_PRODUCTS[14].price * 5,
    status: "Chưa xác nhận",
  },
  {
    code: "ORD021",
    products: [
      {
        product: DUMP_PRODUCTS[13],
        quantity: 1,
        selected: false,
      },
      {
        product: DUMP_PRODUCTS[14],
        quantity: 5,
      },
    ],
    totalPayment: DUMP_PRODUCTS[13].price + DUMP_PRODUCTS[14].price * 5,
    status: "Chưa xác nhận",
  },
];

export const DIEMBAN = [
  { name: "Thanh Xuân" },
  { name: "Tân Cảng" },
  { name: "Thanh Xuân" },
];
