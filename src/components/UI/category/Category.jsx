import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import categoryImg05 from "../../../assets/images/category-05.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "All",
    imgUrl: categoryImg03,
    category: "ALL",
  },
  {
    display: "Minuman",
    imgUrl: categoryImg01,
    category: "MINUMAN",
  },
  {
    display: "Kopi",
    imgUrl: categoryImg02,
    category: "KOPI",
  },

  {
    display: "Makanan",
    imgUrl: categoryImg04,
    category: "MAKANAN",
  },
  {
    display: "Kue",
    imgUrl: categoryImg05,
    category: "KUE",
  },
];

const Category = ({ setCategory, category }) => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col className='mb-4' key={index}>
            <div
              className={`category__item d-flex align-items-center gap-3  ${
                category === item.category ? "category__item__active" : ""
              } `}
              onClick={() => setCategory(item.category)}
            >
              <div className='category__img'>
                <img src={item.imgUrl} alt='category__item' />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
