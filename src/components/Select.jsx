function Select({ title, options = ["Category1","Category2","Category3",] }) {
  return (
    <div className="form-control mx-auto w-full md:w-[400px]">
      <label className="label">
        <span className="label-text text-sm md:text-md font-semibold">{title}</span>
      </label>
      <select className="select select-bordered border-none bg-slate-100 text-gray-600">
        <option disabled selected>
          <p className="font-normal">Select One</p>
        </option>
        {options.map((data, index) => {
          return (
            <option className="py-2" key={index}>{data}</option>
          )
        })}
      </select>
    </div>
  );
}

export default Select;
