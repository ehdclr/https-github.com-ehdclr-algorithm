import sys
sys.setrecursionlimit(10**6)

arr = []
for line in sys.stdin:
  arr.append(int(line.strip()))

def postorder(start, end):
  if start > end:
    return
  
  # 첫 번째 원소가 루트
  root = arr[start]
  
  # 루트보다 큰 값이 나오는 지점 = 오른쪽 서브트리 시작
  right_start = start + 1
  while right_start <= end and arr[right_start] < root:
    right_start += 1
  
  # 왼쪽 서브트리 처리 (start+1 ~ right_start-1)
  postorder(start + 1, right_start - 1)
  
  # 오른쪽 서브트리 처리 (right_start ~ end)
  postorder(right_start, end)
  
  # 루트 출력 (후위 순회는 마지막에 루트)
  print(root)

postorder(0, len(arr) - 1)