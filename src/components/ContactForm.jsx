
const ContactForm = () => {
  return (
    <form className='w-[90%] p-10 flex flex-col  self-center items-center bg-red-200 border-2 border-red-300 rounded-3xl'>
      <ul className="bg-red-100 z-100 flex flex-row flex-wrap justify-evenly rounded-md">
        <li className="p-3 px-5 text-center">
          <h6 className="text-2xl font-semibold font-dancing">First Name</h6>
          <input type="text" placeholder='First Name' className="text-center rounded-md" />
        </li>
        <li className="py-3 px-5  text-center">
          <h6 className="text-2xl font-semibold font-dancing">Last Name</h6>
          <input type="text" placeholder='Last Name' className="text-center rounded-md" />
        </li>
        <li className="px-5 py-3 text-center w-full">
          <h6 className="text-2xl font-semibold font-dancing">Email</h6>
          <input type="email" placeholder='Email' className="text-center rounded-md w-full" />
        </li>
        <li className="px-5 py-3 text-center w-full">
          <h6 className="text-2xl font-semibold font-dancing">Message</h6>
          <textarea placeholder="Enter your Message" className=" text-center rounded-md w-full"></textarea>
        </li>

        <button className="bg-red-400 rounded-lg w-32 h-8 text-white font-bold font-dancing text-xl hover:bg-red-300 transition-colors duration-500 m-3">
          Submit
        </button>
      </ul>
    </form>
  )
}

export default ContactForm
