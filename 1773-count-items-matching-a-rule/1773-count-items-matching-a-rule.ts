function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  // rtype, color, name   
  // ruleKey에 맞춰 ruleValue에 있다면, 몇개인지 나오는거 

  let count = 0;

  for(let [type, color, name] of items){
    if(ruleKey === "type"){
        if(type === ruleValue) count += 1
    } else if(ruleKey === "color"){
        if(color === ruleValue) count += 1
    } else {
        if(name === ruleValue) count += 1
    }
  }

  return count;
};