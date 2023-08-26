import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import EditIcon from "../assets/edit-icon.svg"

function Details() {
  const { state } = useLocation();
  const data = state.data;
  return (
  <section className="text-gray-600 body-font overflow-hidden">
  <Navbar />
  <div className="container px-5 py-[5%] mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{data.name}</h1>
        <div className="flex mb-4">
          <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</span>
        </div>
        <p className="leading-relaxed mb-4">{data.description}</p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Category</span>
          <span className="ml-auto text-gray-900">{data.categoryName}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">SKU</span>
          <span className="ml-auto text-gray-900">{data.sku}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Weight</span>
          <span className="ml-auto text-gray-900">{data.weight}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Width</span>
          <span className="ml-auto text-gray-900">{data.width}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Length</span>
          <span className="ml-auto text-gray-900">{data.length}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Height</span>
          <span className="ml-auto text-gray-900">{data.height}</span>
        </div>
        <div className="flex mt-2">
          <span className="title-font font-medium text-2xl text-gray-900">${data.price}</span>
          <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Check Stock</button>
          <button className="rounded-full w-10 h-10 bg-slate-200 hover:bg-slate-300 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <img alt="edit" className="w-4 h-4" src={EditIcon} />
          </button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg mb-10" src={data.image} />
    </div>
  </div>
</section>
  );
}

export default Details;
