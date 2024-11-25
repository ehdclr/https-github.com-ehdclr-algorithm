

function groupAnagrams(strs: string[]): string[][] {
    //각 string을 돌아서 
    let newMap = new Map<string,string[]>();

    for(let str of strs){
        //각 string을 정렬을 하기 value로는 원본
        let sortStr = str.split("").sort().join();
        let mapValue = newMap.get(sortStr);
        
        //있다면
        if(mapValue){
            mapValue.push(str)
            newMap.set(sortStr,mapValue)// 기존 value의 배열에 추가 하기 계속
            continue;
        }
        newMap.set(sortStr,[str]);
    }
    return Array.from(newMap.values()); //유사 배열 Array.from으로 작성
};

//아나 그램끼리 묶기 