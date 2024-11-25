// function addStrings(num1: string, num2: string): string {
//     return (BigInt(num1)+BigInt(num2)).toString()
// };

//형변환을 하지 말고 문제 풀이
function addStrings(num1: string, num2: string): string {
    //carry변수 -> 임시로 끝자리 담을 변수 

    //두 숫자중 자리수가 더 큰거 구하기 ,, 만약에 한자리가 더 넘어가면, carry 에서 /10을 나누면 그다음으로 넘어감
    let len = Math.max(num1.length,num2.length); //초기 자릿수 구하기
    let carry = 0 ;// 임시로 담을 숫자 

    //양 끝 1의 자리부터 포인터를 
    let num1Ptr = num1.length - 1;
    let num2Ptr = num2.length - 1;

    let result = "";

    while(num1Ptr >= 0 || num2Ptr >= 0 || carry > 0){
        const digit1 = num1Ptr >= 0 ? parseInt(num1[num1Ptr]) : 0;
        const digit2 = num2Ptr >= 0 ? parseInt(num2[num2Ptr]) : 0;

        const sum = digit1 + digit2 + carry;

        carry = Math.floor(sum/10)


        result  = (sum % 10) + result;

        num1Ptr--;
        num2Ptr--;
    }

    return result
};