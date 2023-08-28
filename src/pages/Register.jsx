import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Register() {
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()
    // Contoh validasi sederhana
    if (username && password && email) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      existingUsers.push({ username, password, email });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      navigate('/login')
      alert('Registered successfully');
    } else {
      alert('Invalid input');
    }
  };
  
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="lg:w-1/3 md:w-1/2 shadow-lg px-8 py-10 bg-white flex flex-col w-full border h-screen justify-center md:h-fit md:justify-normal">
        <h2 className="text-gray-900 text-lg md:text-2xl mb-1 font-medium title-font">Register</h2>
        <p className="leading-relaxed mb-5 text-gray-600 text-sm md:text-lg">Register to be able to access the main page.</p>
        <form>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Username</label>
          <input required onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input required onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
          <input required onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button onClick={handleRegister} className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
        </form>
        <p className="text-gray-500 mt-3 text-center text-xs md:text-lg">Already have an account? <a onClick={() => navigate('/login')} className="text-blue font-semibold cursor-pointer">Sign In</a>.</p>
      </div>
    </div>
  )
}

export default Register