import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
// import products from "../assets/fake-data/products.js";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import whyImg from "../assets/images/location.png";
import Axios from "axios";
const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const header = {
    "X-RapidAPI-Key": "7fb33e563bmsh1c60e44e446f3abp1f4543jsn0a02c1509c42",
    "X-RapidAPI-Host": "tao-foods.p.rapidapi.com",
  };
  const url = "https://tao-foods.p.rapidapi.com/";
  // const options = {
  //   method: "GET",
  //   url: "https://pizza-and-desserts.p.rapidapi.com/desserts",
  //   headers: {
  //     "X-RapidAPI-Key": "7fb33e563bmsh1c60e44e446f3abp1f4543jsn0a02c1509c42",
  //     "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
  //   },
  // };
  useEffect(() => {
    if (category === "ALL") {
      init();
    }

    if (category === "DISH") {
      getDishes();
    }

    if (category === "SAUCE") {
      getSouce();
    }

    if (category === "MEAT") {
      getMeat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  // console.log("aaaaaaaa", allProducts);
  // useEffect(() => {
    // console.log("aaaa");
    // init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const init = async () => {
    try {
      let dataDishes = await Axios({
        method: "get",
        url: url + "dishes/",
        params: { id: '6tyfjkgut7jgf9kdh3n' },
        headers: header,
      });
      let dataMeat = await Axios({
        method: "get",
        url: url + "meat",
        headers: header,
      });
      let dataSauce = await Axios({
        method: "get",
        url: url + "sauce",
        headers: header,
      });

      setAllProducts([...dataDishes.data, ...dataMeat.data, ...dataSauce.data]);
    } catch (error) {
      // OpsError(error);
      console.log(error);
    } finally {
      
    }
  }
  const getDishes = async () => {
    try {
      let dataDishes = await Axios({
        method: "get",
        url: url + "dishes/",
        params:{id: '6tyfjkgut7jgf9kdh3n'},
        headers:header,
      });

      setAllProducts(dataDishes.data);
    } catch (error) {
      // OpsError(error);
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };
  const getMeat = async () => {
    try {
      let dataMeat = await Axios({
        method: "get",
        url: url + "meat",
        headers:header,
      });

      setAllProducts(dataMeat.data);
    } catch (error) {
      // OpsError(error);
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };
  const getSouce = async () => {
    try {
      let dataSouce = await Axios({
        method: "get",
        url: url + "sauce",
        headers:header,
      });

      setAllProducts(dataSouce.data);
    } catch (error) {
      // OpsError(error);
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content  '>
                <h5 className='mb-3'>Kemudahan dalam memesan makanan</h5>
                <h1 className='mb-4 hero__title'>
                  <span>Lapar ?</span> Segera <br /> Pesan Makanan
                  <span> Disini</span>
                </h1>

                <p>
                  Ketika lapar segera pesan makanan di majalengka food delivery
                  maka makanan akan kami antar sampai rumah
                </p>

                <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                  <button className='order__btn d-flex align-items-center justify-content-between'>
                    Pesan Sekarang <i className='ri-arrow-right-s-line'></i>
                  </button>

                  <button className='all__foods-btn'>
                    <Link to='/foods'>Lihat list makanan</Link>
                  </button>
                </div>

                <div className=' hero__service  d-flex align-items-center gap-5 mt-5 '>
                  <p className=' d-flex align-items-center gap-2 '>
                    <span className='shipping__icon'>
                      <i className='ri-car-line'></i>
                    </span>
                    Tidak ada biaya Pengiriman
                  </p>

                  <p className=' d-flex align-items-center gap-2 '>
                    <span className='shipping__icon'>
                      <i className='ri-shield-check-line'></i>
                    </span>
                    100% aman
                  </p>
                </div>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='hero-img' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='feature__title'>Pilih Makanan</h2>
              <h2 className='feature__title'>
                Kami <span>siap antarkan</span>
              </h2>
              <p className='mb-1 mt-4 feature__text'>
                Pilih makanan yang anda suka maka kami siap antarkan sampai
                depan rumah!
              </p>
            </Col>
            <Category setCategory={setCategory} category={category} />
            <Col lg='6' md='6' sm='6' xs='12'>
              <div className='search__widget d-flex align-items-center justify-content-between '>
                <input
                  type='text'
                  placeholder='cari....'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
              <div className='sorting__widget text-end'>
                <select className='w-50'>
                  <option>Default</option>
                  <option value='ascending'>Alphabetically, A-Z</option>
                  <option value='descending'>Alphabetically, Z-A</option>
                  <option value='high-price'>High Price</option>
                  <option value='low-price'>Low Price</option>
                </select>
              </div>
            </Col>
            {allProducts===undefined?null:
            allProducts.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-4'>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-tasty-treat' className='w-100' />
            </Col>

            <Col lg='6' md='6'>
              <div className='why__tasty-treat'>
                <h2 className='tasty__treat-title mb-4'>
                  Mengapa <span>Pesan makanan disini?</span>
                </h2>
                <p className='tasty__treat-desc'>
                  Banyak pilihan makanan dan minuman yang tersedia disini mulai
                  dari makanan ringan, makanan berat kopi, snak, kue. Anda
                  tinggal memilih makanan dan minuman yang disukai maka kami
                  akan siap antarkan sampai ke rumah.
                </p>

                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className=' choose__us-title d-flex align-items-center gap-2 '>
                      <i className='ri-checkbox-circle-line'></i> Makanan enak
                      dan segar
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2 '>
                      <i className='ri-checkbox-circle-line'></i> Admin siap
                      melayani
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2 '>
                      <i className='ri-checkbox-circle-line'></i>Pesan dari
                      lokasi manapun
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
