import { useState } from 'react'
import { Form1, Form2, Form3, Form4 } from '../../Components/FormStep'


const useSteps = () => {

  const [plans, setPlans] = useState({mm:true,yy:false})

  const [opChoose, setOpChoose] = useState({
    step1:{
      name:'',
      email:'',
      number:''
    },
    step2:{
      plan:'op1',
      planBill:'mm'
    },
    step3:{
      onlineService:false,
      largeStorage:false,
      customizableProfile:false
    },
    step4:{
      confirm:false
    }
  })

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
  
  const formSteps = {
    step1 :<Form1 opChoose={opChoose} setOpChoose={setOpChoose}/>,
    step2 :<Form2 plans={plans} setPlans={setPlans} opChoose={opChoose} setOpChoose={setOpChoose}/>,
    step3 :<Form3 plans={plans}  opChoose={opChoose} setOpChoose={setOpChoose}/>,
    step4 :<Form4 plans={plans} opChoose={opChoose} setOpChoose={setOpChoose}/>,
    
  }

  const inStep = formSteps[(Object.keys(step))[((Object.values(step)).findIndex(item => item===true))]]
  const inStepNumber = (Object.values(step)).findIndex(item => item===true)

  const onNextButton = () => {
    const stepsInArray = Object.entries(step)

    // in here i verify if actual step is equal to totals step
    if(inStepNumber+1 < stepsInArray.length){
      stepsInArray[inStepNumber][1] = false
      stepsInArray[inStepNumber+1][1] = true 
      setStep(Object.fromEntries (stepsInArray))
    }
  }
  const onBeforeButton = () => {
    const stepsInArray = Object.entries(step)

    // in here i verify if actual steps is greather than 0
    if(inStepNumber > 0){
      stepsInArray[inStepNumber][1] = false
      stepsInArray[inStepNumber-1][1] = true 
      setStep(Object.fromEntries (stepsInArray))
    }
  }



  return {
    opChoose,
    setOpChoose,
    plans,
    setPlans,
    inStep,
    inStepNumber,
    onNextButton,
    onBeforeButton,
    step,
    onStep1,
    onStep2,
    onStep3,
    onStep4,
    }
}
export {useSteps}