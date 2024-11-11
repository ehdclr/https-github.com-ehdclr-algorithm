function solution(nums) {
    let set = new Set(nums);
    
    return set.size >= parseInt(nums.length/2) ? parseInt(nums.length/2) : set.size
}