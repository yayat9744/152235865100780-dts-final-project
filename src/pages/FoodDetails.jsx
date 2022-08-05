import React, { useState, useEffect } from "react";

// import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

// import { useDispatch } from "react-redux";
// import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";

// import ProductCard from "../components/UI/product-card/ProductCard";
import Axios from "axios";
const FoodDetails = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();

  // const product = products.find((product) => product.id === id);
  const [Products, setProducts] = useState({});
  const [previewImg, setPreviewImg] = useState(Products.img);
  // const { title, price, category, desc, image01 } = product;
  const header = {
    "X-RapidAPI-Key": "7fb33e563bmsh1c60e44e446f3abp1f4543jsn0a02c1509c42",
    "X-RapidAPI-Host": "tao-foods.p.rapidapi.com",
  };
  const url = "https://tao-foods.p.rapidapi.com/";

  // const relatedProduct = products.filter((item) => category === item.category);
  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const init = async () => {
    try {
      let dataDishes = await Axios({
        method: "get",
        url: url + "dishes/",
        params: { id: "6tyfjkgut7jgf9kdh3n" },
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

      let _data = [...dataDishes.data, ...dataMeat.data, ...dataSauce.data];
      let data = _data.find((ex) => ex._id === id);
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  const addItem = () => {
    // dispatch(
    //   cartActions.addItem({
    //     id,
    //     title,
    //     price,
    //     img,
    //   })
    // );
  };

  useEffect(() => {
    setPreviewImg(Products.img);
  }, [Products]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [product]);

  return (
    <Helmet title='Product-details'>
      {/* <CommonSection title={title} /> */}
      {/* <h1>{Products.title}</h1> */}
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className='product__images '>
                <div
                  className='img__item mb-3'
                  onClick={() => setPreviewImg(Products.img)}
                >
                  <img src={Products.img} alt='' className='w-50' />
                </div>
                <div
                  className='img__item mb-3'
                  onClick={() => setPreviewImg(Products.img)}
                >
                  <img src={Products.img} alt='' className='w-50' />
                </div>

                <div
                  className='img__item'
                  onClick={() => setPreviewImg(Products.img)}
                >
                  <img src={Products.img} alt='' className='w-50' />
                </div>
              </div>
            </Col>

            <Col lg='4' md='4'>
              <div className='product__main-img'>
                <img src={previewImg} alt='' className='w-100' />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='single__product-content'>
                <h2 className='product__title mb-3'>{Products.title}</h2>
                <p className='product__price'>
                  {" "}
                  Harga: <span>Rp. {Products.price}</span>
                </p>
                {/* <p className='category mb-5'>
                  Kategori: <span>{category}</span>
                </p> */}

                <button onClick={addItem} className='addTOCart__btn'>
                  Tambah ke keranjang
                </button>
              </div>
            </Col>

            <Col lg='12'>
              <div className='tabs d-flex align-items-center gap-5 py-3'>
                <h6 className='tab__active'>Description</h6>
              </div>
              <div className='tab__content'>
                <p>{Products.desc}</p>
              </div>
            </Col>

            <Col lg='12' className='mb-5 mt-4'>
              <h2 className='related__Product-title'>You might also like</h2>
            </Col>

            {/* {relatedProduct.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))} */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
