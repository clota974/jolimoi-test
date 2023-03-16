import getConversion from './get-conversion.js';

document.getElementById('form')!.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  
  const input =  document.getElementById('value') as HTMLInputElement;
  const responseEl =  document.getElementById('response') as HTMLInputElement;

  const value = parseInt(input.value);
  const response = await getConversion(value);
  
  if(response.status === 'OK'){  
    responseEl.innerText = response.payload;
  } else {
    responseEl.innerText = `ERROR : ${response.payload}`;
  }
});

