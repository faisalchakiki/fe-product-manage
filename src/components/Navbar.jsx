import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import { useState } from 'react';
import profileImage from '../assets/profile-icon.svg'
import { useDispatch } from "react-redux";
import { postData } from "../redux/reducers/products";
import options from "../data/categories.json"
import Swal from "sweetalert2";

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [urlImage, setUrlImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [sku, setSku] = useState(null);
  const [nameProduct, setNameProduct] = useState(null);
  const [weight, setWeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);
  const [height, setHeight] = useState(null);
  const [price, setPrice] = useState(null);

  const addProductAction = () => {
    const data = {
      "description": description,
      "categoryName": categoryName,
      "sku": sku,
      "name": nameProduct,
      "weight": parseInt(weight),
      "width": parseInt(width),
      "length": parseInt(length),
      "height": parseInt(height),
      "image": urlImage,
      "price": parseInt(price)
    }
    try {
      dispatch(postData(data));
      setTimeout(() => {
        Swal.fire("Add Product Success!", "", "success");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }, 500);
    } catch (error) {
      Swal.fire("Add Product Failed!", "", "error");
    }
  };

  const logoutAction = () => {
    localStorage.setItem("isLoggedIn", false);
    navigate('/login')
  }

  //TRY UPLOAD IMAGE

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0]
  //   console.log(file)
  //   setSelectedFile(URL.createObjectURL(file));
  // }
  

  return (
    <div className="bg-orange-600">
      <nav className="container mx-auto">
        <div className="navbar px-5">
          <div className="flex-1">
            <a
              href="/"
              className="text-xl lg:text-2xl font-semibold tracking-wide text-white"
            >
              Products Mine
            </a>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-white">
                  <img src={profileImage} alt="avatar-icon" className="w-full h-[100%]" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] shadow-md border menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p
                    onClick={() => window.modalInsert.showModal()}
                    className="py-3 font-semibold text-md"
                  >
                    Add Product
                  </p>
                </li>
                <li>
                  <p onClick={() => logoutAction()} className="py-3">Logout</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <dialog id="modalInsert" className="modal modal-bottom md:flex md:justify-center md:items-center">
        <div className="modal-box md:rounded-b-[1rem] w-full md:w-10/12 lg:w-6/12 h-[50vh] relative md:h-auto scrollbar">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
              ✕
            </button>
          </form>
          {/* <form method="dialog" className="flex justify-start items-start flex-wrap md:flex-wrap-reverse"> */}
          <form method="dialog" className="flex justify-start items-start flex-wrap">
            <Input onChange={setNameProduct} title="Name :" />
            <Select selectedValue={setCategoryName} options={options} title="Choose Category" />
            <Input onChange={setSku} title="SKU :" />
            <Input onChange={setWeight} title="Weight :" type="number" />
            <Input onChange={setWidth} title="Widht :" type="number" />
            <Input onChange={setLength} title="Length :" type="number" />
            <Input onChange={setHeight} title="Height :" type="number" />
            <Input onChange={setPrice} title="Price :" type="number" />
            <Textarea onChange={setDescription} title="Description :" type="text" />
            <Input onChange={setUrlImage} title="URL Image :" type="url" />
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
              <button onClick={addProductAction} className="flex w-fit text-white bg-orange-500 border-0 py-3 px-6 mt-8 ml-auto hover:bg-orange-600 rounded">Create Data</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Navbar;
