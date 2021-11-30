import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/ProductAction';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products)
  const category = useSelector((state) => state.selectcategory.selectedcategory)
  const datafetch = async () => {
    if (category) {
      const url = `https://fakestoreapi.com/products/category/${category}`;
      const result = await fetch(url);
      const res = await result.json();
      console.log(res);
      dispatch(setProducts(res));
    }
    else {
      const url = "https://fakestoreapi.com/products";
      const result = await fetch(url);
      const res = await result.json();
      console.log(res);
      dispatch(setProducts(res));
    }
  }
  useEffect(() => {
    datafetch()
  }, [category])
  return (
    <>
      <div className="grid grid-cols-4 gap-4 container mx-auto">
        {products.map((li) => {
          return (
            <div className="shadow-lg w-150px m-2">
              <img className="w-full p-10" src={li.image} alt={li.title} style={{ height: "350px" }} />
              <div className="overflow-ellipsis overflow-hidden ... mb-1" style={{ height: "48px" }}>
                <h2 className="text-left pl-6 text-black font-black">{li.title}</h2>
              </div>
              <p className="text-left pl-6 mb-2">Rs.{li.price}</p>
              <p className="text-black text-opacity-50 pl-6 rounded-full py-2 px-6 bg-gray-100 w-max m-2 ml-4">{li.category}</p>
            </div>
          )
        })}
      </div>
    </>
  )
};
export default Product;