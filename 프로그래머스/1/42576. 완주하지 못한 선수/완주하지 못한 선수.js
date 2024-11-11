function solution(participant, completion) {
    let map = new Map();

     completion.forEach((el) => {
        map.set(el, (map.get(el) || 0) + 1);
    });

    
    participant.forEach((el) => {
        if (!map.get(el)) {
            result = el; 
        } else {
            map.set(el, map.get(el) - 1); 
        }
    });

    return result;
}