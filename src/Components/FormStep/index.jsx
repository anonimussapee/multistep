import { useState } from 'react'
import confirmImg from '../../assets/icon-thank-you.svg'

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('submit')
}

const Form1 = ({opChoose, setOpChoose, error,setError}) => {

  return (
    <form onSubmit={handleSubmit}  className='w-[90%] h-[100%] overflow-y-scroll text-gray-500  flex flex-col gap-2 py-10 sm:w-[70%] sm:min-w-[380px]'>
      <h2 className='text-[2.4rem] sm:text-[3rem] font-extrabold text-[--marine_blue] '>Personal info</h2>
      <p className='line-normal'>Please provide your name, email, address, and phone number. </p>
      <label htmlFor="customer_name">
        <div className={`w-[99%] ${error.step1 ? 'flex justify-between': ' '}`}>
          <span className='text-[--marine_blue] text-[1.6rem]'>Name</span>
          <span className={`text-[#e90f0f] text-[1.6rem] ${error.step1 ? 'visible': ' hidden '}`}>This field is required </span>
        </div>
        <input type="text" name='customer_name' className={` border-[1px] ${error.step1 ? 'border-red-600': 'border-gray-400 '} w-[100%] p-3 rounded-lg `} placeholder='e.g. Stephen King' value={opChoose.step1.name} onChange={(e)=>{
          setError({
            ...error,
            step1:false
          })
          setOpChoose({...opChoose, step1:{...opChoose.step1,name:e.target.value}})
          }}/>
      </label>
      <label htmlFor="customer_email">
        <div className={`w-[99%] ${error.step2 ? 'flex justify-between': ' '}`}>
          <span className='text-[--marine_blue] text-[1.6rem]'>Email Address</span>
          <span className={`text-[#e90f0f] text-[1.6rem] ${error.step2 ? 'visible': ' hidden '}`}>This field is required </span>  
        </div>
        <input type="text" name='customer_email' className={`border-[1px] ${error.step2 ? 'border-red-600': 'border-gray-400 '} w-[100%] p-3 rounded-lg `} placeholder='e.g. stephenking@lorem.com' value={opChoose.step1.email} onChange={(e)=>{
           setError({
            ...error,
            step2:false
          })
          setOpChoose({...opChoose, step1:{...opChoose.step1, email:e.target.value}})
          }}/>
      </label>
      <label htmlFor="customer_phone">
        <div className={`w-[99%] ${error.step3 ? 'flex justify-between': ' '}`}>
          <span className='text-[--marine_blue] text-[1.6rem]'>Phone Number</span>
          <span className={`text-[#e90f0f] text-[1.6rem] ${error.step3 ? 'visible': ' hidden '}`}>This field is required </span>    
        </div>
        <input type="number" name='customer_phone' className={`border-[1px] ${error.step3 ? 'border-red-600': 'border-gray-400 '} w-[100%] p-3 rounded-lg `} placeholder='e.g.+1 234 567 890' value={opChoose.step1.number} onChange={(e)=>{
           setError({
            ...error,
            step3:false
          })
          setOpChoose({...opChoose, step1:{...opChoose.step1,number:e.target.value}})
          }}/>
      </label>
    </form>
  )
}

const Form2 = ({opChoose, setOpChoose}) => {

  // this are the options to set state in plan choose
  const setoptions = [
    {...opChoose.step2, op1:true,op2:false, op3:false, opDesc:{...opChoose.step2.opDesc, op1:{...opChoose.step2.opDesc.op1, state:true},op2:{...opChoose.step2.opDesc.op2, state:false},op3:{...opChoose.step2.opDesc.op3, state:false} } },
    {...opChoose.step2, op1:false,op2:true, op3:false , opDesc:{...opChoose.step2.opDesc, op1:{...opChoose.step2.opDesc.op1, state:false},op2:{...opChoose.step2.opDesc.op2, state:true},op3:{...opChoose.step2.opDesc.op3, state:false} } },
    {...opChoose.step2, op1:false,op2:false, op3:true, opDesc:{...opChoose.step2.opDesc, op1:{...opChoose.step2.opDesc.op1, state:false},op2:{...opChoose.step2.opDesc.op2, state:false},op3:{...opChoose.step2.opDesc.op3, state:true} } }]

  return (
    <form onSubmit={handleSubmit}  className=' w-[90%] h-[72vh] overflow-y-scroll text-gray-500  flex flex-col sm:w-[70%] sm:min-w-[380px] gap-4 py-10 relative'>
      <h2 className='text-[2.4rem] sm:text-[3rem]  font-extrabold text-[--marine_blue]'>Select your plan</h2>
      <p className='line-normal '>You have the option of monthly or yearly billing </p>
      {/* this are a options plan */}
      <div className='flex flex-col sm:flex-row sm:items-center gap-3 my-2 smMax:h-[50vh] sm:h-[30vh]  overflow-y-scroll'>
        {/* this logic show cards of plans in step1 */}
        {(Object.values(opChoose.step2.opDesc)).map((item,index)=>{
          return (<label key={item.name} className={`flex sm:flex-col gap-6 smMax:items-center border-[2px] ${opChoose.step2[`op${index+1}`] ? 'border-[--marine_blue]' : 'border-gray-300' }  rounded-xl p-4 sm:p-6 sm:w-[17vw] sm:max-w-[150px]`} onClick={()=> setOpChoose({...opChoose, step2:setoptions[index]})}>
          <span className={`${item.imgClass} img_2 w-[4.5rem] h-[4.5rem]`} ></span>
          <div className='flex flex-col '>
            <span className='text-[--marine_blue] text-[1.6rem] font-bold'>{item.name}</span>
            {
              opChoose.step2.planBill.mm ? (<span className='text-[1.6rem] '>${item.price.mm}/mo</span>) : (<><span className='text-[1.6rem] '>${item.price.yy}/yr</span><span className='text-[--marine_blue] text-[1.6rem] font-bold'>2 months free</span></>)
            }
          </div>      
        </label>)
        })}

      </div>
      {/* change plans toggle */}
      <div className='planToggle w-[250px] h-[2.3rem] flex justify-evenly font-bold  self-center'>
       <span className={`${opChoose.step2.planBill.mm ? 'text-[--marine_blue]': ''}`}  onClick={()=>{
          setOpChoose({...opChoose, step2:{...opChoose.step2 , planBill: {mm:true, yy:false} }})
         }}>Monthly</span>
       <div className={`w-[37px] h-[2.2rem] rounded-2xl bg-[--marine_blue] flex items-center px-2 ${opChoose.step2.planBill.mm ? 'justify-start': 'justify-end'} relative `} onClick={()=>{
          setOpChoose({...opChoose, step2:{...opChoose.step2 , planBill: {mm:!opChoose.step2.planBill.mm, yy:!opChoose.step2.planBill.yy } }})
         }}>
         <span className='bg-white w-[15px] h-[15px] block rounded-full' ></span> 
       </div> 
       <span className={`${opChoose.step2.planBill.yy ? 'text-[--marine_blue]': ''}`}  onClick={()=>{
          setOpChoose({...opChoose, step2:{...opChoose.step2 , planBill: {mm:false,  yy:true } }})
         }}>Yearly</span>
      </div>
    </form>
  )
}

const Form3 = ({ opChoose, setOpChoose}) => {

  return ( 
    <form onSubmit={handleSubmit}  className='w-[90%] h-[100%] overflow-y-scroll text-gray-500  flex flex-col gap-2 py-10 sm:w-[70%] sm:min-w-[380px]'>
      <h2 className='text-[2.4rem] sm:text-[3rem]  font-extrabold text-[--marine_blue] '>Pick add-ons</h2>
      <p className='line-normal'>Add-on help enhance your gaming experience. </p>
      <div className='flex flex-col  gap-3 my-2 '>
         {/* this logic show cards of plans in step1 */}
        {(Object.values(opChoose.step3.opDesc))?.map((item,index)=>{
          return (<label key={item.name} className={`flex gap-4 items-center justify-evenly border-[2px] ${opChoose.step3[`op${index+1}`] ? 'border-[--marine_blue]' : 'border-gray-300' }  rounded-xl p-4`} >
          {item.state ? (<input className=' w-[2rem] h-[2rem] rounded-2xl ' type='checkbox' defaultChecked onClick={()=> setOpChoose({...opChoose, step3:{...opChoose.step3, [`op${index+1}`]:!opChoose.step3[`op${index+1}`],opDesc:{...opChoose.step3.opDesc,[`op${index+1}`]: {...opChoose.step3.opDesc[`op${index+1}`], state:!opChoose.step3[`op${index+1}`] }}}})}/> ) : (<input className=' w-[2rem] h-[2rem] rounded-2xl' type='checkbox'  onClick={()=> setOpChoose({...opChoose, step3:{...opChoose.step3, [`op${index+1}`]:!opChoose.step3[`op${index+1}`],opDesc:{...opChoose.step3.opDesc,[`op${index+1}`]: {...opChoose.step3.opDesc[`op${index+1}`], state:!opChoose.step3[`op${index+1}`] }}}})}/> ) }
          
          <div className='flex flex-col  w-[80%] min-w-[135px] max-w-[300px]'>
            <span className='text-[--marine_blue] text-[1.6rem] font-bold'>{item.name}</span>
           <span className='text-[1.5rem] line-normal '>{item.more}</span>
          </div>      
          <div className='flex flex-col '>
            {
              opChoose.step2.planBill.mm  ? (<span className='text-[1.5rem] text-[--marine_blue] '>+${item.price.mm}/mo</span>) : (<span className='text-[1.5rem] text-[--marine_blue]'>+${item.price.yy}/yr</span>)
            }
          </div>   
        </label>)
        })}

      </div>
    </form>
  )
}

const Form4 = ({ opChoose, changePlan}) => {

   const principalPlan = (Object.values(opChoose.step2.opDesc))[((Object.values(opChoose.step2.opDesc)).findIndex(item=>item.state===true))]
   const optionalPlan = (Object.values(opChoose.step3.opDesc)).filter(item=>item.state === true )

   const initialValue = 0
   const totalBill = (opChoose.step2.planBill.mm  && principalPlan.price.mm + optionalPlan.reduce((acc,item,)=>acc+item.price.mm, initialValue)) || principalPlan.price.yy + optionalPlan.reduce((acc,item,)=>acc+item.price.yy, initialValue)
  return (
    <>
      
      { 
      (opChoose.step4.confirm && (
      <div key={'success'} className='w-[90%]  h-[70vh]  bg-white absolute flex flex-col items-center justify-center  text-gray-500 text-center gap-5 sm:w-[70%] sm:min-w-[380px]'>
        <img src={confirmImg} alt="succes Img" />
        <div className='flex flex-col gap3'>
          <h2 className='text-[2.4rem] sm:text-[3rem]  font-extrabold text-[--marine_blue] '>Thank you!</h2>
          <p>Thanks for confirming your subscription! we hope you have fun using our platform. if you ever need support please feel free to email us at support@loremgamming.com</p>
        </div>
      </div>

      )) || (<form key={'form4'} onSubmit={handleSubmit}  className='w-[90%] h-[100%] overflow-y-scroll text-gray-500  flex flex-col gap-2 py-10 sm:w-[70%] sm:min-w-[380px]'>
      

      <h2 className='text-[2.4rem] font-extrabold text-[--marine_blue] '>Finishing up</h2>
      <p className='line-normal'>Double-check everything looks OK before confirming. </p>
      <div className='flex flex-col  gap-3 my-2 w-[100%] bg-[--cyan_light] p-4 rounded-xl h-[50vh] sm:h-[30vh] overflow-y-scroll'>
        {/* this part is for principal plan */}

        {(<span className='flex items-center gap-3  justify-between' >
          <div className='flex flex-col '>
            <span className='text-[--marine_blue] text-[1.8rem] font-bold'>{principalPlan.name} (Monthly)</span>
            <span className='text-[1.7rem] line-normal underline-offset-4 underline' onClick={()=>{changePlan()}}>Change</span>     
          </div>
          <div className='flex flex-col '>
            {
              opChoose.step2.planBill.mm ? (<span className='text-[1.7rem] text-[--marine_blue] '>${principalPlan.price.mm}/mo</span>) : (<span className='text-[1.7rem] text-[--marine_blue]'>${principalPlan.price.yy}/yr</span>)
            }
          </div> 
        </span>)
        }
        {/* this is a line to separate plan of plans alternative */}
        <div className='w-[100%] h-1 bg-gray-300'></div>
        {/* in here going to show plans alternative */}

        { optionalPlan?.map((item,index)=>{
          return (<div className='w-[100%] h-auto py-3 flex justify-between' key={index}>
          <span className='text-[1.7rem] ' >{item?.name}</span>
          <span className='text-[1.7rem] text-[--marine_blue]'>+{opChoose.step2.planBill.mm ? `$${item?.price.mm}/mo`: `$${item?.price.yy}/yr`}</span>
        </div>)
        })
          
        }
      </div>
      <div className='w-[100%] h-auto py-3 flex justify-between '>
      <span className='text-[1.8rem] '>Total {opChoose.step2.planBill.mm ? '(per month)' : '(per year)' }</span>
      <span className='text-[1.7rem] text-blue-800 font-bold '>{opChoose.step2.planBill.mm && '+'}${totalBill}{opChoose.step2.planBill.mm ? '/mo' : '/yr' }</span>

      </div>
    </form>)
      }
    </>

  )
}
export {Form1, Form2, Form3,Form4}