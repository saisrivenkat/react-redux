import { useSelector, useDispatch } from 'react-redux';
import { selectedCategory } from '../../redux/actions/ProductAction'
const Categories = () => {
  const categories = useSelector((state) => state.allCategories.categories);
  const dispatch = useDispatch();
  const categoryselect = (category) => {
    console.log(category);
    dispatch(selectedCategory(category));
  }
  return (
    <div className="flex justify-content-center">
      {categories.map((category) => {
        return (
          <div className="mr-5 cursor-pointer" onClick={() => categoryselect(category)}>
            <h1 className="rounded-full py-2 px-6 bg-gray-100 w-max">{category}</h1>
          </div>
        )
      })}
    </div>
  )
};
export default Categories;