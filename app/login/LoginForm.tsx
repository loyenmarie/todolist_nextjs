import Link from 'next/link'

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-3xl text-center font-bold mb-6">Login</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-400">Email:</label>
                        <input type="text"
                        className="border border-white rounded-md p-2 w-full input"
                        />
                        {/* {emailError && <p className="text-red-500 mt-2">{emailError}</p>} */}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-400">Password:</label>
                        <input type="password" 
                        // onChange={handlePasswordChange}
                        className="border border-white rounded-md p-2 w-full input"
                        />
                    </div>
                    <button
                    className="btn btn-primary w-full px-3">
                        <Link href="/task">Submit</Link>
                    </button>
                </form>
            </div>
        </div>
  )
}

export default LoginForm

