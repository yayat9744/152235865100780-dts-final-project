// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import drink_01 from "../images/drink-1.png";
import drink_02 from "../images/drink-2.png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 50000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Makanan",

    desc: "Di Amerika Utara, roti lapis daging ayam adalah roti lapis yang biasanya terdiri dari daging dada ayam tanpa tulang, tanpa kulit, yang disajikan di antara irisan roti, roti, atau roti gulung. ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 150000,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Makanan",

    desc: "Piza adalah hidangan gurih asal Italia sejenis adonan bundar dan pipih, yang dipanggang di oven dan biasanya dilumuri saus tomat serta keju dengan bahan makanan tambahan lainnya yang bisa dipilih sesuai selera. Keju yang dipakai biasanya mozzarella atau keju piza, bisa juga parmesan dan beberapa jenis keju lainnya.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 165000,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Makanan",

    desc: "Double Cheese Margherita.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 90000,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Makanan",

    desc: "Maxican Green Wave",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 55000,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Makanan",

    desc: "Cheese Burger.",
  },
  {
    id: "06",
    title: "Alpukat Kocok",
    price: 150000,
    image01: drink_01,
    image02: drink_01,
    image03: drink_01,
    category: "Minuman",

    desc: "Alpukat Kocok.",
  },
  {
    id: "07",
    title: "Juice Strawbery",
    price: 200000,
    image01: drink_02,
    image02: drink_02,
    image03: drink_02,
    category: "Minuman",

    desc: "Juice Strawbery.",
  },
];

export default products;
