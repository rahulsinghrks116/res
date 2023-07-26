import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center '>Quick Delivery App</h3>
        <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp '/>


        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Get The App</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on demand</h1>
          <p>
          Being a foodie, I don’t play favorites. But when I think of Puliyogare, I must concede, my mouth waters, my eyes get dazed and I sport a grin.
 
 Describing Puliyogare as tamarind flavoured rice doesn’t do justice to this dish intrinsically woven into Karnataka’s foodscape. It makes me flinch every time I hear somebody use that term.
  
 Tamarind is the major player here, but there’s a lot more at play here. This dish owes its complex flavours to the combination of a whole bunch of spices and the liberal amount of sesame oil.
  
 It’s best served with curds and papad.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
        </div>

        
    </div>
  )
}

export default Delivery