function isPalindrome(s: string): boolean {
    let n: number = 0;
    let m: number = s.length - 1; // 양끝을 가리키는 포인터

    while (n < m) {
        // 특수문자를 건너뛰기
        while (n < m && !isAlphaNumeric(s.charCodeAt(n))) n++;
        while (n < m && !isAlphaNumeric(s.charCodeAt(m))) m--;

        // 대소문자를 무시하고 비교
        if (s.at(n).toLowerCase() !== s.at(m).toLowerCase()) return false;

        n++;
        m--;
    }

    return true;
}

function isAlphaNumeric(charCode: number): boolean {
    return (
        (charCode >= 48 && charCode <= 57) || // 숫자 0-9
        (charCode >= 65 && charCode <= 90) || // 대문자 A-Z
        (charCode >= 97 && charCode <= 122)   // 소문자 a-z
    );
}