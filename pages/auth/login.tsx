export default function AuthLogin() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-14">
      <div className="bg-white rounded-lg shadow p-9 w-full md:w-2/4 lg:w-2/4 xl:w-1/4">
        <h3 className="text-2xl">Sign in</h3>
        <div className="flex flex-col mt-10">
          <label htmlFor="email" className="text-sm font-semibold">Email</label>
          <input type="text" id="email" className="text-sm border rounded-lg outline-none px-3 py-2 mt-2" />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password" className="text-sm font-semibold">Password</label>
          <input type="text" id="password" className="text-sm border rounded-lg outline-none px-3 py-2 mt-2" />
        </div>
      </div>
    </div>
  )
}