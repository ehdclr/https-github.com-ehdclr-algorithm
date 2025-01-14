/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = [];

    function dt(index, ips) {
        // 종료 조건
        if (ips.length > 4) {
            return;
        } else if (index === s.length && ips.length === 4) {
            const ip = ips.join('.');
            result.push(ip);
            return;
        }

        // index부터 최대 index + 3까지 확인
        const idxP3 = index + 3;
        for (let endIdx = index; endIdx < Math.min(s.length, idxP3); endIdx++) {
            const numStr = s.substring(index, endIdx + 1);
            if (valid(numStr)) {
                ips.push(numStr); // 유효하면 추가
                dt(index + numStr.length, ips); // 재귀 호출
                ips.pop(); // 백트래킹
            }
        }
    }

    function valid(str) {
        if (str.length === 1) return true; // 한 자리 숫자는 항상 유효
        if (str[0] === '0') return false; // 앞자리가 0이면 무효
        if (parseInt(str) > 255) return false; // 255 초과 시 무효
        return true;
    }

    dt(0, []);
    return result;
};

