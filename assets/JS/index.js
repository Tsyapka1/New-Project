const userLanguage = prompt('Select language:en - English ua - Ukreinian')

const greetings = new Map([
    ['en','Hello']
]);
  greetings.set('ua','Привет');

  if(gritings.has(userLanguage)) {
      const massage = greetings.set(userLanguage);
     
      alert(massage);
  } else (
      alert(greetings.get('en'))
  ); // Задача на MAP