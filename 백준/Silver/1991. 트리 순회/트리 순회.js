const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const tree = {};

// 트리 구성
for (let i = 1; i <= N; i++) {
  const [root, left, right] = input[i].split(" ");
  tree[root] = { left, right };
}

let preResult = [];
let inResult = [];
let postResult = [];

// 전위 순회: Root → Left → Right
function preorder(node) {
  if (node === "." || !tree[node]) return;
  preResult.push(node);
  preorder(tree[node].left);
  preorder(tree[node].right);
}

// 중위 순회: Left → Root → Right
function inorder(node) {
  if (node === "." || !tree[node]) return;
  inorder(tree[node].left);
  inResult.push(node);
  inorder(tree[node].right);
}

// 후위 순회: Left → Right → Root
function postorder(node) {
  if (node === "." || !tree[node]) return;
  postorder(tree[node].left);
  postorder(tree[node].right);
  postResult.push(node);
}

// 실행
preorder("A");
inorder("A");
postorder("A");

// 출력
console.log(preResult.join(""));
console.log(inResult.join(""));
console.log(postResult.join(""));