n = int(input())
arr = list(map(int, input().split()))
x = int(input())

# 두 수의 합햇을 때 , 두수의 합이 x인 쌍을 구하면됨 
# 먼저 정렬 O(nlogn)

arr.sort() # 오름차순으로 정렬
startIdx = 0
endIdx = len(arr) - 1 # 마지막 인덱스 만약에 목표에 도달하면 start를 늘리고 목표보다 합친 숫자가 크면 end를 줄이면됨

result = 0

#startIdx를 늘리는 방향으로 가자 

while startIdx < endIdx : 
  sum = arr[startIdx] + arr[endIdx]
  #만약에 두개의 더한값이 같다면 +1
  if sum == x:
    result +=1
    startIdx +=1
  elif sum > x:
    endIdx -=1
  else:
    startIdx+=1


print(result)
