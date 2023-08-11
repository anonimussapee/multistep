import { useState } from 'react'

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('submit')
}

const Form1 = () => {
  return (
    <form onSubmit={handleSubmit}  className='w-[90%] h-[100%] overflow-y-scroll text-gray-500  flex flex-col gap-2 py-10'>
      <h2 className='text-[2.4rem] font-extrabold text-[--marine_blue] '>Personal info</h2>
      <p className='line-normal'>Please provide your name, email, address, and phone number. </p>
      <label htmlFor="customer_name">
        <span className='text-[--marine_blue] text-[1.6rem]'>Name</span>
        <input type="text" name='customer_name' className='border-[1px] border-gray-400 w-[100%] p-3 rounded-lg ' placeholder='e.g. Stephen King'/>
      </label>
      <label htmlFor="customer_email">
        <span className='text-[--marine_blue] text-[1.6rem]'>Email Address</span>
        <input type="text" name='customer_email' className='border-[1px] border-gray-400 w-[100%] p-3 rounded-lg ' placeholder='e.g. stephenking@lorem.com'/>
      </label>
      <label htmlFor="customer_phone">
        <span className='text-[--marine_blue] text-[1.6rem]'>Name</span>
        <input type="text" name='customer_phone' className='border-[1px] border-gray-400 w-[100%] p-3 rounded-lg ' placeholder='e.g.+1 234 567 890'/>
      </label>
    </form>
  )
}

const Form2 = () => {

  const [active, setActive] = useState({
    op1:true,
    op2:false,
    op3:false
  })

  const [plans, setPlans] = useState({mm:true,yy:false})
  return (
    <form onSubmit={handleSubmit}  className='w-[90%] h-[100%] overflow-y-scroll text-gray-500  flex flex-col gap-4 py-10'>
      <h2 className='text-[2.4rem] font-extrabold text-[--marine_blue] '>Select your plan</h2>
      <p className='line-normal'>You have the option of monthly or yearly billing </p>
      {/* this are a options plan */}
      <div className='flex flex-col gap-3 my-2'>
        <label className={`flex gap-6 items-center border-[2px] ${active.op1 ? 'border-[--marine_blue]' : 'border-gray-300' }  rounded-xl p-4`} onClick={()=>setActive({
            op1:true,
            op2:false,
            op3:false
          })}>
          <span className='arcade img_2 w-[4.5rem] h-[4.5rem]' ></span>
          <div className='flex flex-col '>
            <span className='text-[--marine_blue] text-[1.6rem] font-bold'>Arcade</span>
            {
              plans.mm ? (<span className='text-[1.6rem] '>$9/mo</span>) : (<><span className='text-[1.6rem] '>$90/yr</span><span className='text-[--marine_blue] text-[1.6rem] font-bold'>2 months free</span></>)
            }
          </div>      
        </label>
        <label className={`flex gap-6 items-center border-[2px] ${active.op2 ? 'border-[--marine_blue]' : 'border-gray-300' }  rounded-xl p-4`} onClick={()=>setActive({
            op1:false,
            op2:true,
            op3:false
          })}>
          <span className='advanced img_2 w-[4.5rem] h-[4.5rem]'></span>
          <div className='flex flex-col '>
            <span className='text-[--marine_blue] text-[1.6rem] font-bold'>Advanced</span>
            {
              plans.mm ? (<span className='text-[1.6rem] '>$12/mo</span>) : (<><span className='text-[1.6rem] '>$120/yr</span><span className='text-[--marine_blue] text-[1.6rem] font-bold'>2 months free</span></>)
            }
          </div>      
        </label>
        <label className={`flex gap-6 items-center border-[2px] ${active.op3 ? 'border-[--marine_blue]' : 'border-gray-300' }  rounded-xl p-4`} onClick={()=>setActive({
            op1:false,
            op2:false,
            op3:true
          })}>
          <span className='pro img_2 w-[4.5rem] h-[4.5rem]'></span>
          <div className='flex flex-col '>
            <span className='text-[--marine_blue] text-[1.6rem] font-bold'>Pro</span>
            {
              plans.mm ? (<span className='text-[1.6rem] '>$15/mo</span>) : (<><span className='text-[1.6rem] '>$150/yr</span><span className='text-[--marine_blue] text-[1.6rem] font-bold'>2 months free</span></>)
            }
          </div>      
        </label>
      </div>
      {/* change plans toggle */}
      <div className='w-[250px] flex justify-evenly relative font-bold'>
       <span className={`${plans.mm ? 'text-[--marine_blue]': ''}`}>Monthly</span>
       <div className={`w-[37px] h-[2.2rem] rounded-2xl bg-[--marine_blue] flex items-center px-2 ${plans.mm ? 'justify-start': 'justify-end'} relative `}>
         <span className='bg-white w-[15px] h-[15px] block rounded-full' onClick={()=>{
          setPlans({mm:!plans.mm, yy:!plans.yy })
         }}></span> 
       </div> 
       <span className={`${plans.yy ? 'text-[--marine_blue]': ''}`}>Yearly</span>
      </div>
    </form>
  )
}

const Form3 = () => {
  return ( 
    <form onSubmit={handleSubmit}  className='w-[90%] h-[100%] overflow-y-scroll text-gray-500  flex flex-col gap-2 py-10'>
      <h2 className='text-[2.4rem] font-extrabold text-[--marine_blue] '>Personal info</h2>
      <p className='line-normal'>Please provide your name, email, address, and phone number. </p>
      <label htmlFor="customer_name">
        <span className='text-[--marine_blue] text-[1.6rem]'>Name</span>
        <input type="text" name='customer_name' className='border-[1px] border-gray-400 w-[100%] p-3 rounded-lg ' placeholder='e.g. Stephen King'/>
      </label>
      <label htmlFor="customer_email">
        <span className='text-[--marine_blue] text-[1.6rem]'>Email Address</span>
        <input type="text" name='customer_email' className='border-[1px] border-gray-400 w-[100%] p-3 rounded-lg ' placeholder='e.g. stephenking@lorem.com'/>
      </label>
      <label htmlFor="customer_phone">
        <span className='text-[--marine_blue] text-[1.6rem]'>Name</span>
        <input type="text" name='customer_phone' className='border-[1px] border-gray-400 w-[100%] p-3 rounded-lg ' placeholder='e.g.+1 234 567 890'/>
      </label>
    </form>
  )
}

const Form4 = () => {
  return (
    <form onSubmit={handleSubmit}  className='w-[90%] h-[100%] overflow-y-scroll text-gray-500  flex flex-col gap-2 py-10'>
      <h2 className='text-[2.4rem] font-extrabold text-[--marine_blue] '>Personal info</h2>
      <p className='line-normal'>Please provide your name, email, address, and phone number. </p>
      <label htmlFor="customer_name">
        <span className='text-[--marine_blue] text-[1.6rem]'>Name</span>
        <input type="text" name='customer_name' className='border-[1px] border-gray-400 w-[100%] p-3 rounded-lg ' placeholder='e.g. Stephen King'/>
      </label>
      <label htmlFor="customer_email">
        <span className='text-[--marine_blue] text-[1.6rem]'>Email Address</span>
        <input type="text" name='customer_email' className='border-[1px] border-gray-400 w-[100%] p-3 rounded-lg ' placeholder='e.g. stephenking@lorem.com'/>
      </label>
      <label htmlFor="customer_phone">
        <span className='text-[--marine_blue] text-[1.6rem]'>Name</span>
        <input type="text" name='customer_phone' className='border-[1px] border-gray-400 w-[100%] p-3 rounded-lg ' placeholder='e.g.+1 234 567 890'/>
      </label>
    </form>
  )
}
export {Form1, Form2, Form3,Form4}