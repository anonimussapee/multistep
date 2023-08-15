import { useState } from 'react'
import { Form1, Form2, Form3, Form4 } from '../../Components/FormStep'


const useSteps = () => {

 
  const [error, setError] = useState(false)

  const [opChoose, setOpChoose] = useState({
    step1:{
      name:'',
      email:'',
      number:''
    },
    step2:{
      op1:true,
      op2:false,
      op3:false,
      opDesc:{
        op1:{state:true,imgClass:'arcade',name:'Arcade', price:{mm:9,yy:90}},
        op2:{state:false,imgClass:'advanced',name:'Advanced', price:{mm:12,yy:120}},
        op3:{state:false,imgClass:'pro',name:'Pro', price:{mm:15,yy:150}},
      },  
      planBill: {mm:true,yy:false}
    },
    step3:{
      op1:false,
      op2:false,
      op3:false,
      opDesc:{
        op1:{state:false,name:'Online service',more:'Access to multiplayer games', price:{mm:1,yy:10}},
        op2:{state:false,name:'Larger Storaged',more:'Extra 1TB of cloud save', price:{mm:2,yy:20}},
        op3:{state:false,name:'Customizable profile',more:'Custom theme on your profile', price:{mm:2,yy:20}},
      }, 
    },
    step4:{
      confirm:false
    }
  })

  const emailChecking = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email)
  }

  const stepNeed = () => {

    let stepChecking = {name:false, email:false,number:false}
    if((opChoose.step1.name).length > 0){
      stepChecking.name = true
    } 
    const emailCheck = emailChecking(opChoose.step1.email)
    if(emailCheck === true){
      stepChecking.email = true
    }
    if((opChoose.step1.number).length > 7){
      stepChecking.number = true 
    }

    return stepChecking
  }

  // in here is use the stepNeed function to  save data of form required 
  const stepNeedData =  stepNeed()


  const [step, setStep] = useState({
    step1:true,
    step2:false,
    step3:false,
    step4:false,
  })
   
  // function to change a plan in 4step
  const changePlan = () => {
    setStep({step1:false, step2:true,step3:false,step4:false})
    }

  const formSteps = {
    step1 :<Form1 opChoose={opChoose} setOpChoose={setOpChoose}/>,
    step2 :<Form2  opChoose={opChoose} setOpChoose={setOpChoose}/>,
    step3 :<Form3 plans={opChoose.step2.planBill}  opChoose={opChoose} setOpChoose={setOpChoose}/>,
    step4 :<Form4 opChoose={opChoose}  changePlan={changePlan}/>,
    
  }

  // this code save index of step position
  const inStep = formSteps[(Object.keys(step))[((Object.values(step)).findIndex(item => item===true))]]
  const inStepNumber = (Object.values(step)).findIndex(item => item===true)
 
  // functions to changestep 
  const onNextButton = () => {
    const stepsInArray = Object.entries(step)
    
    // in here i verify if actual step is equal to totals step
    if((inStepNumber+1 < stepsInArray.length) && stepNeedData.email && stepNeedData.name && stepNeedData.number){
      setError(false)
      stepsInArray[inStepNumber][1] = false
      stepsInArray[inStepNumber+1][1] = true 
      setStep(Object.fromEntries (stepsInArray))
    }else if(!stepNeedData.email && !stepNeedData.name && !stepNeedData.number){
      setError(true)
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

  const onConfirm = () => setOpChoose({...opChoose, step4: {confirm:true}})

  return {
    stepNeedData,
    error,
    opChoose,
    setOpChoose,
    inStep,
    inStepNumber,
    onNextButton,
    onBeforeButton,
    onConfirm,
    step,
    changePlan
    }
}
export {useSteps}