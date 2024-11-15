/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
    // 배열을 오름차순으로 정렬
    nums.sort((a, b) => a - b);
  
    let result = [];
  
    // 첫 번째 포인터 i
    for (let i = 0; i < nums.length - 2; i++) {
      // 중복된 값은 건너뛰기
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      let left = i + 1; // 두 번째 포인터
      let right = nums.length - 1; // 세 번째 포인터
  
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
  
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
  
          // 중복된 값 건너뛰기
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
  
          left++;
          right--;
        } else if (sum < 0) {
          left++; // 합이 0보다 작으면 왼쪽 포인터 이동
        } else {
          right--; // 합이 0보다 크면 오른쪽 포인터 이동
        }
      }
    }
  
    return result;
  };
  