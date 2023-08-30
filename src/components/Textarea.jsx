function Textarea({ title, value, type = 'text', className, onChange }) {
  return (
    <div className="form-control mx-auto w-full md:w-[400px]">
      <label className="label">
        <span className="label-text text-sm md:text-md font-semibold">{title}</span>
      </label>
      <textarea
        type={type}
        defaultValue={value}
        placeholder="Input here .."
        onChange={(e) => onChange(e.target.value)}
        required
        rows="10"
        className={`input pt-2 h-28 relative leading-6 resize-none hover:rezise bg-slate-100 placeholder:text-gray-600 w-full ${className}`}
      />
    </div>
  );
}

export default Textarea;
