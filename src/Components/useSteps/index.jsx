import { useState } from 'react'

const useSteps = () => {
  const [step, setStep] = useState({
    step1:true,
    step2:false,
    step3:false,
    step4:false,
  })
   

  const onStep1 = () => {
    setStep({
      step1:true,
      step2:false,
      step3:false,
      step4:false,
    })

  }
  const onStep2 = () => {
    setStep({
      step1:false,
      step2:true,
      step3:false,
      step4:false,
    })

  }
  const onStep3 = () => {
    setStep({
      step1:false,
      step2:false,
      step3:true,
      step4:false,
    })
   
  }
  const onStep4 = () => {
    setStep({
      step1:false,
      step2:false,
      step3:false,
      step4:true,
    })
  
  }
  return {step, onStep1, onStep2, onStep3, onStep4}
}
export {useSteps}