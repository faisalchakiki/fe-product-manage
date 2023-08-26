import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Select from "./Select";
import { useState } from 'react';

function Navbar() {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(URL.createObjectURL(file));
  }
  return (
    <div className="bg-orange-600">
      <nav className="container mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <a
              href="/"
              className="text-2xl font-semibold tracking-wide text-white"
            >
              Products Mine
            </a>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-white">
                  {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] shadow-md border menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p
                    onClick={() => window.my_modal_3.showModal()}
                    className="py-3 font-semibold text-md"
                  >
                    Add Product
                  </p>
                </li>
                <li>
                  <p  onClick={() => navigate('/register')} className="py-3">Logout</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <dialog id="my_modal_3" className="modal modal-bottom md:flex md:justify-center md:items-center">
        <div className="modal-box md:rounded-b-[1rem] w-full md:w-10/12 lg:w-6/12 h-[50vh] relative md:h-auto scrollbar">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
              ✕
            </button>
          </form>
          <form method="dialog" className="flex justify-start items-start flex-wrap md:flex-wrap-reverse">
            <Input title="Name :" />
            <Select title="Choose Category" />
            <Input title="SKU :" />
            <Input title="Weight :" type="number" />
            <Input title="Widht :" type="number" />
            <Input title="Length :" type="number" />
            <Input title="Height :" type="number" />
            <Input title="Price :" type="number" />
            <div className="mx-auto w-full md:w-[80%] flex gap-5 items-center justify-center">
              <div className="rounded-full overflow-hidden bg-slate-500 w-[150px] h-[150px]">
                <img className="w-full h-[100%] object-cover object-center" alt="img-selected" src={selectedFile !== null ? selectedFile : "https://dummyimage.com/400x400"}/>
              </div>
              <input
                onChange={handleFileChange}
                className="bg-slate-200 border-none"
                type='file'
                accept="image/*"
              />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Navbar;
