function Input({ title, type = 'text', className }) {
  return (
    <div className="form-control mx-auto w-full md:w-[400px]">
      <label className="label">
        <span className="label-text text-sm md:text-md font-semibold">{title}</span>
      </label>
      <input
        type={type}
        placeholder="Insert here"
        className={`input input-disabled bg-slate-100 placeholder:text-gray-600 w-full ${className}`}
      />
    </div>
  );
}

export default Input;
