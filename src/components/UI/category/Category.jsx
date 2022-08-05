import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "All",
    imgUrl: categoryImg03,
    category: "ALL",
  },
  {
    display: "Dish",
    imgUrl: categoryImg01,
    category: "DISH",
  },
  {
    display: "Souce",
    imgUrl: categoryImg02,
    category: "SAUCE",
  },

  {
    display: "Meat",
    imgUrl: categoryImg04,
    category: "MEAT",
  },
];

const Category = ({ setCategory, category }) => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={index}>
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
