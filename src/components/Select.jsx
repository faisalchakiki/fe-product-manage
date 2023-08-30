function Select({ title, selectedValue, value, options = ["Category1","Category2","Category3",] }) {
  return (
    <div className="form-control mx-auto w-full md:w-[400px]">
      <label className="label">
        <span className="label-text text-sm md:text-md font-semibold">{title}</span>
      </label>
      <select defaultValue={value} onChange={(e) => selectedValue(e.target.value)} className="select select-bordered border-none bg-slate-100 capitalize text-gray-600">
        <option disabled selected>
          Select One
        </option>
        {options.map((data, index) => {
          return (
            <option className="py-2" key={index} value={data.categoryName}>{data.categoryName}</option>
          )
        })}
      </select>
    </div>
  );
}

export default Select;
