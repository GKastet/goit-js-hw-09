
const elements = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('[name = "delay"]'),
  inputStep: document.querySelector('[name = "step"]'),
  inputAmount: document.querySelector('[name = "amount"]'),
  //btnSubmit: document.querySelector('button'),
};

const delayStart = Number(elements.inputDelay.value);
const delayStep = Number(elements.inputStep.value);
const repeat = Number(elements.inputAmount.value);
//console.log(elements.inputAmount.value);



elements.form.addEventListener('submit', handlerFormSubmit);
function handlerFormSubmit() {
  let promiseDelay = delayStart;
  for (let i = 1; i <= repeat; i += 1) {
    promiseDelay += delayStep;
    createPromise(i, promiseDelay)
    .then(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
    .catch(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
  }
  //console.log(promiseDelay);
  // console.log(elements.inputAmount);
}
//=========================i+1
function createPromise(position, delay) {
  // const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve()       
      } else {
        // Reject    
        reject()
      }
    }, delay)
  });
  return promise  
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

//=====================================================


// const form = document.querySelector('form'); // знаходимо форму на сторінці
// const amountInput = form.querySelector('input[name="amount"]'); // знаходимо поле для вводу кількості промісів
// const resultContainer = document.querySelector('#result'); // знаходимо контейнер для результатів

// form.addEventListener('submit', async function(event) {
//   event.preventDefault(); // відміна дії за замовчуванням
  
//   resultContainer.innerHTML = ''; // очистити результати від попереднього запиту
  
//   const amount = Number(amountInput.value); // зчитуємо кількість промісів з поля вводу
//   const delay = 1000; // стандартна затримка
  
//   for (let i = 1; i <= amount; i++) {
//     const promise = createPromise(i, delay + (i - 1) * delay); // створюємо проміс з номером та затримкою
//     await handlePromise(promise); // очікуємо виконання промісу
//   }
// });

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({position, delay});
//       } else {
//         reject({position, delay});
//       }
//     }, delay);
//   });
// }

// function handlePromise(promise) {
//   return promise
//     .then(({position, delay}) => {
//       resultContainer.innerHTML += `<p>Promise ${position} was resolved with delay ${delay} ms.</p>`;
//     })
//     .catch(({position, delay}) => {
//       resultContainer.innerHTML += `<p>Promise ${position} was rejected with delay ${delay} ms.</p>`;
//     });
// }






// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
