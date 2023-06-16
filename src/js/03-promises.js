import Notiflix from 'notiflix';

const elements = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('[name = "delay"]'),
  inputStep: document.querySelector('[name = "step"]'),
  inputAmount: document.querySelector('[name = "amount"]'),  
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
      setTimeout(()=>{
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve(({position, delay}))
      } else {
        // Reject    
        reject(({position, delay}))
      }
    }, delay);
  });  
}

elements.form.addEventListener('submit', handlerFormSubmit);
function handlerFormSubmit(evt) {
  evt.preventDefault();
  const delayStart = Number(elements.inputDelay.value);
  const delayStep = Number(elements.inputStep.value);
  const repeat = Number(elements.inputAmount.value);
  let promiseDelay = delayStart;
  for (let i = 0; i < repeat; i += 1) {
    createPromise(i+1, promiseDelay)
    .then(({position, delay})=>{Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`,{timeout: 10000,},);})
    .catch(({position, delay})=>{Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,{timeout: 10000,},);});    
    promiseDelay += delayStep;
  }  
}


