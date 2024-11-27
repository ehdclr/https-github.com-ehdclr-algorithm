/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    //왼쪽 포인터 두기.
    //오른쪽 포인터 두기

    let l = 0;
    let r = s.length - 1;

    while(l <= r){
        if(s.at(l) != s.at(r)){
            //TODO 다르면 이 시점부터 slice r 전까지
            //왼쪽에서 한칸 제외한 시점 
            //
            return isPalindrome(s.slice(0,l) + s.slice(l+1,s.length)) || isPalindrome(s.slice(0,r) + s.slice(r+1, s.length))
        }
        l++
        r--
    }

    return true;
};

function isPalindrome(s){
    let l = 0;
    let r = s.length -1;
    while(l <= r){
        if(s.at(l) != s.at(r)) return false;
        l++;
        r--;
    }
    return true;
}