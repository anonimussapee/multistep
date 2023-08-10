import './App.css'
import { Steps } from '../../Components/Steps'
import { useSteps } from '../../Components/useSteps'
import { Form1, Form2, Form3, Form4 } from '../../Components/FormStep'

const App = () => {

  const {step, onStep1, onStep2, onStep3, onStep4} = useSteps()

  const formSteps = {
    step1 :<Form1/>,
    step2 :<Form2/>,
    step3 :<Form3/>,
    step4 :<Form4/>,

  }
  
  return (
    <section className='w-full h-[100vh] text-[1.8rem]'>
      {/* this container have all elements and have the responsability of will change of mediaqueries */}
      <div className='main--all-container relative'>
        {/* this container have a buttons and header image */}
        <div className='main--slidebar-container relative'>
          <div className=' principal_image img_2 min-w-[320px] w-[100vw] max-w-[700px] h-[200px]'></div>
          {/* this container have a few buttons to complete a necessary form */}
          <div className='buttons-container flex justify-center gap-10  smMax:w-[300px] smMax:h-[65px]'>
            
            <Steps step={step} btnAction={onStep1} number={1} stepNumber={'Step 1'} stepName={'YOUR INFO'}/>
            <Steps step={step} btnAction={onStep2} number={2} stepNumber={'Step 2'} stepName={'SELECT PLAN'}/>
            <Steps step={step} btnAction={onStep3} number={3} stepNumber={'Step 3'} stepName={'ADD ONS'}/>
            <Steps step={step} btnAction={onStep4} number={4} stepNumber={'Step 4'} stepName={'SUMMARY'}/>

          </div>

        </div>
        <div className='form-Container'>
          {formSteps[(Object.keys(step))[((Object.values(step)).findIndex(item => item===true))]]}
        </div>
      </div>
    
    </section>
  )
}

export {App}
