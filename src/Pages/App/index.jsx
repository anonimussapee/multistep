import './App.css'
import { Steps } from '../../Components/Steps'
import { useSteps } from '../../Components/useSteps'
import { ButtonChangeStep } from '../../Components/ButtonChangeStep'

const App = () => {

  const {onNextButton,onBeforeButton ,inStepNumber ,inStep, step, onStep1, onStep2, onStep3, onStep4} = useSteps()


  
  return (
    <section className='w-full h-[100vh] text-[1.8rem] flex justify-center'>
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
        {/* this container have a logic to show form */}
        <div className='form-Container'>
          {inStep}
        </div>

      </div>
      <div className={`w-[90%] h-[60px] flex ${inStepNumber > 0 ? 'justify-between': 'justify-end' }   absolute bottom-0`}>
       {inStepNumber > 0  ? (<ButtonChangeStep name='Go back' colorNone={true} action={onBeforeButton}/>) : null } 
       {inStepNumber === (Object.entries(step)).length -1 ? ( <ButtonChangeStep name='Confirm' colorNone={false} action={onNextButton}/>) :( <ButtonChangeStep name='Next Step' colorNone={false} action={onNextButton}/>)}
      </div>

    </section>
  )
}

export {App}
