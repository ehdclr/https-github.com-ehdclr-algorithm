function validPalindrome(s: string): boolean {
    let n : number = 0;
    let m : number = s.length -1;// 양끝
    let cnt : number = 0;

    while(n<=m){
        if (s.at(n) != s.at(m)){
            return isPalindrome(s.slice(n+1,m+1)) || isPalindrome(s.slice(n,m))
        } //오른쪽 둘중하나가 잘못됐음
        //근데 그다음이 또 잘못됐을 수도 있어서 오른쪽 아니면 왼쪽(가운데기준) 서로 잘라보고 판단해야함
        n++
        m--
    }

    return true;
};

function isPalindrome(s : string){
    let l: number = 0;
    let r: number = s.length -1;
    while(l < r){
        if(s.at(l) != s.at(r)) return false;
        l++
        r--
    }
    return true;
}


//palindrome인데 유사 palinedrome인지 확인
//양끝에 먼저 같은지 