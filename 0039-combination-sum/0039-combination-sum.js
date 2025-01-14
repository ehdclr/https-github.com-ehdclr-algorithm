/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result =[]
    function bt(index, array, sum){
        if(sum >= target){
            if(sum === target){
                result.push([...array]);
            }
            return
        }

        for(let i = index ; i < candidates.length ;i++){
            array.push(candidates[i])
            sum += candidates[i]
            bt( i , array ,sum);
            array.pop()
            sum -= candidates[i]
        }
    }

    bt(0,[],0)
    return result
};

//target과 같은걸 넣는거임 이미 골랐던것도 중복이 가능함