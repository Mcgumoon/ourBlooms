import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className='w-full flex flex-col'>
      <h2 className='font-dancing font-extrabold text-8xl space-y-7 m-3 p-2 text-black text-center'>Contact</h2>

      <div className='flex flex-col space-y-5 lg:flex-row p-5 lg:space-x-5 bg-center'>
        <section className='w-[90%] h-full text-center p-5 bg-red-50 border-2 border-red-100 rounded-3xl self-center'>
          <div>
            <h5 className='text-5xl md:text-6xl text-orange-900 font-extrabold font-dancing py-8'>Get In Touch!</h5>
            <h6 className='text-orange-900 font-semibold pb-5 md:py-6 md:text-lg'>We'd like to hear from you!</h6>
            <p className='pt-5 md:text-lg'>If you have any inquires, please use the contact form!</p>
          </div>
          <div className='mt-8'>
            <h6 className='font-dancing font-bold text-xl '>Email: hi@ourblooms.com</h6>
            <h6 className='font-dancing font-bold text-xl '>Call us: +1 123 - 456 - 891</h6>
          </div>
        </section>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
