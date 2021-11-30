import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setcategory } from '../../redux/actions/ProductAction';
import Categories from './Categories';
const Category = () => {
  const dispatch = useDispatch();
  const fetchCategories = async () => {
    const url = `https://fakestoreapi.com/products/categories`;
    const response = await fetch(url);
    const result = await response.json()
    console.log(result);
    dispatch(setcategory(result));
  }
  useEffect(() => {
    fetchCategories()
  })
  return (
    <div className="container mx-auto m-5">
      <Categories />
    </div>
  )
};

export default Category;