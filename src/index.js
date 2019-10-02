module.exports = function zeros(expression) {
  let counterOfFive = 0;
  let counterOfTwo = 0;
   
  let array = expression.split("*");

  let filtred = array.filter(elem => {
    let num = Number(elem.slice(0, elem.length - 2));
    let num2 = Number(elem.slice(0, elem.length - 1));
 
    if ((num % 2 != 0) & (elem.slice(elem.length - 2) == '!!')) {
      for (let i = 5; i <= num; i = i + 10) {
        let val = i;
        while(val % 5 == 0) {
          val /= 5;
          counterOfFive += 1;
        }
      }
    }

    else if ((num % 2 == 0) & (elem.slice(elem.length - 2) == '!!')) {     
      for (let i = 2; i <= num; i = i + 2) {
        let val = i;
        while(val % 2 == 0) {
          val /= 2;
          counterOfTwo += 1;
        }
        while(val % 5 == 0) {
          val /= 5;
          counterOfFive += 1;
        }
      }
    } 
    else if (elem.slice(elem.length - 1) == '!') {
      for (let i = 1; i <= num2; i++) {
        let val = i;
        while (val % 2 == 0) {
          val /= 2;
          counterOfTwo += 1;
        };
        while (val % 5 == 0) {
          val/= 5;
          counterOfFive += 1;
        };
      }
    }
  });
  return counterOfTwo <= counterOfFive ? counterOfTwo : counterOfFive;  
}