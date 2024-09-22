const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let k = Number(input[0]);
let line = input[1].split(" ");

let visited = new Array(10).fill(false);  // 0~ 9까지 숫자니까 
let result =[]
let current = ""
let first = ""

function dfs(depth){
    if(depth == k+1){
        //선택한 것과 
        let check = true;
        for(let i = 0 ; i < k ;i++){
            if(line[i] == "<"){
                if(result[i] > result[i+1]) check = false
            }
            else if(line[i] == ">"){
                if(result[i] < result[i+1]) check = false
            }
        }
        if(check){
            current = "";
            for (let x of result) current += x + "";
            if (first=="") first = current; // 맨처음 맨앞이 최소부터 구하는 것이니 최소가 빈값일 때 넣어두기 
        }
        return
    }

    for(let i = 0 ; i <10 ;i++){
        if(visited[i]) continue;
        visited[i] = true;
        result.push(i);
        dfs(depth+1);
        visited[i] = false
        result.pop()
    }
}
dfs(0)
console.log(current + "\n" + first)