function Input({ title, type = 'text', className, onChange, value = "" }) {
  return (
    <div className="form-control mx-auto w-full md:w-[400px]">
      <label className="label">
        <span className="label-text text-sm md:text-md font-semibold">{title}</span>
      </label>
      { type === 'number' && <input
        type={type}
        min={0}
        placeholder="Input here .."
        required
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        className={`input input-disabled bg-slate-100 placeholder:text-gray-600 w-full ${className}`}
      />}
      { type !== 'number' && <input
        type={type}
        placeholder="Input here .."
        onChange={(e) => onChange(e.target.value)}
        required
        defaultValue={value}
        className={`input input-disabled bg-slate-100 placeholder:text-gray-600 w-full ${className}`}
      />}
    </div>
  );
}

export default Input;
