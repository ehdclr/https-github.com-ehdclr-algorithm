def matrix_multiply(A, B):
  result = [[0] * N for _ in range(N)]
  for i in range(N):
    for j in range(N):
      for k in range(N):
        result[i][j] += A[i][k] * B[k][j]
      result[i][j] %= 1000
  return result

def matrix_power(matrix, exp):
  if exp == 1:
    return [[matrix[i][j] % 1000 for j in range(N)] for i in range(N)]
  
  if exp % 2 == 0:
    half = matrix_power(matrix, exp // 2)
    return matrix_multiply(half, half)
  else:
    return matrix_multiply(matrix, matrix_power(matrix, exp - 1))

N, B = map(int, input().split())
arr = []
for _ in range(N): 
  arr.append(list(map(int, input().split())))

result = matrix_power(arr, B)

for row in result:
  print(' '.join(map(str, row)))