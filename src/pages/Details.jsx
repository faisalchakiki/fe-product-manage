import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import EditIcon from "../assets/edit-icon.svg";
import Input from "../components/Input";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import { useState, useEffect } from "react";
import options from "../data/categories.json";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { editData, fetchDetail } from "../redux/reducers/products";

function Details() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { state } = useLocation();
  const id = state.data.id;

  useEffect(() => {
    getDataDetail();
  }, [id]);

  const stateProducts = useSelector((state) => state.products);
  const product = useSelector((state) => state.products.detail?.results);
  console.log(stateProducts.isLoading);

  const [urlImage, setUrlImage] = useState(product?.image);
  const [description, setDescription] = useState(product?.description);
  const [categoryName, setCategoryName] = useState(product?.categoryName);
  const [sku, setSku] = useState(product?.sku);
  const [nameProduct, setNameProduct] = useState(product?.name);
  const [weight, setWeight] = useState(product?.weight);
  const [width, setWidth] = useState(product?.width);
  const [length, setLength] = useState(product?.length);
  const [height, setHeight] = useState(product?.height);
  const [price, setPrice] = useState(product?.price);

  const getDataDetail = () => {
    try {
      dispatch(fetchDetail(id));
    } catch (error) {
      console.log(error, 500);
    }
  };

  const editProductAction = async () => {
    const dataUpdate = {
      description: description,
      categoryName: categoryName,
      sku: sku,
      name: nameProduct,
      weight: parseInt(weight),
      width: parseInt(width),
      length: parseInt(length),
      height: parseInt(height),
      image: urlImage,
      price: parseInt(price),
    };
    try {
      await dispatch(editData({ id, payload: dataUpdate }))
      Swal.fire("Edit Product Success!", "", "success");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      Swal.fire("Edit Product Failed!", "", "error");
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Navbar />
      {stateProducts.isLoading === false && (
        <div className="container px-5 py-[5%] mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {product?.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </span>
              </div>
              <p className="leading-relaxed mb-4">{product?.description}</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Category</span>
                <span className="ml-auto text-gray-900">{product?.categoryName}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">SKU</span>
                <span className="ml-auto text-gray-900">{product?.sku}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Weight</span>
                <span className="ml-auto text-gray-900">{product?.weight}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Width</span>
                <span className="ml-auto text-gray-900">{product?.width}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Length</span>
                <span className="ml-auto text-gray-900">{product?.length}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Height</span>
                <span className="ml-auto text-gray-900">{product?.height}</span>
              </div>
              <div className="flex mt-2">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.price}
                </span>
                <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
                  Check Stock
                </button>
                <button
                  onClick={() => window.editModal.showModal()}
                  className="rounded-full w-10 h-10 bg-slate-200 hover:bg-slate-300 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <img alt="edit" className="w-4 h-4" src={EditIcon} />
                </button>
              </div>
            </div>
            <img
              alt="product-image"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg mb-10"
              src={product?.image}
            />
          </div>
        </div>
      )}
      <dialog
        id="editModal"
        className="modal modal-bottom md:flex md:justify-center md:items-center"
      >
        <div className="modal-box md:rounded-b-[1rem] w-full md:w-10/12 lg:w-6/12 h-[50vh] relative md:h-auto scrollbar">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
              ✕
            </button>
          </form>
          {/* <form method="dialog" className="flex justify-start items-start flex-wrap md:flex-wrap-reverse"> */}
          <form
            method="dialog"
            className="flex justify-start items-start flex-wrap"
          >
            <Input
              value={nameProduct}
              onChange={setNameProduct}
              title="Name :"
            />
            <Select
              selectedValue={setCategoryName}
              options={options}
              value={categoryName}
              title="Choose Category"
            />
            <Input value={sku} onChange={setSku} title="SKU :" />
            <Input
              value={weight}
              onChange={setWeight}
              title="Weight :"
              type="number"
            />
            <Input
              value={width}
              onChange={setWidth}
              title="Widht :"
              type="number"
            />
            <Input
              value={length}
              onChange={setLength}
              title="Length :"
              type="number"
            />
            <Input
              value={height}
              onChange={setHeight}
              title="Height :"
              type="number"
            />
            <Input
              value={price}
              onChange={setPrice}
              title="Price :"
              type="number"
            />
            <Textarea
              value={description}
              onChange={setDescription}
              title="Description :"
              type="text"
            />
            <Input
              value={urlImage}
              onChange={setUrlImage}
              title="URL Image :"
              type="url"
            />
            {/* <div className="mx-auto py-3 w-full flex flex-col sm:flex-row gap-5 items-center justify-center">
              <div className="rounded-full overflow-hidden bg-slate-500 w-[150px] h-[150px]">
                <img className="w-full h-[100%] object-cover object-center" alt="img-selected" src={selectedFile !== null ? selectedFile : "https://dummyimage.com/400x400"}/>
              </div>
              <input
                onChange={handleFileChange}
                className="bg-slate-200 border-none"
                type='file'
                accept="image/*"
              />
            </div> */}
            <div className="mx-auto w-full">
              <button
                onClick={editProductAction}
                className="flex w-fit text-white bg-orange-500 border-0 py-3 px-6 mt-8 ml-auto hover:bg-orange-600 rounded"
              >
                Update Data
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
}

export default Details;
