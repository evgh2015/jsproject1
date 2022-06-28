function fibo(a) {
 
}
/* 0, 1, 1, 2,  */
let a;
a = '';
let f;
f = 7;
let j = 0;
let b = 1;
for (let i = 0; i < f; i++) {
        a += `${j}, `;
        let c = j+b;
        j = b;
        b = c;
             
}
console.log(a);


function fibo(f) {
        if(typeof(f)!== 'number' || f <= 0 || !Number.isInteger(f)) {
                return '';
        }
        let a = '';
        let j = 0;
        let b = 1;

        for (let i = 0; i < f; i++) {

                        if (i+1 === f) {
                                a += `${j}`;
                        } else {
                                a += `${j} `;
                        }
                        
                        let c = j+b;
                        j = b;
                        b = c;
                             
                }
                return(a);

}
console.log(fibo(7));


function fib(num) {
        if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
            return "";
        }
    
        let result = '';
        let first = 0;
        let second = 1;
    
        for (let i = 0; i < num; i++) {
            if (i + 1 === num) {
                result += `${first}`;
                // Без пробела в конце
            } else {
                result += `${first} `;
            }
    
            let third = first + second;
            first = second;
            second = third;
        }
    
        return result;
    }
    console.log(fib(7));

    