def solution(N, stages):
  challenger = [0] * (N+2) # 스테이지 별 도전자수 구함
  for stage in stages:
    challenger[stage] += 1

  #스테이지 별 실패한 사용자 수 계싼
  fails = {}
  total = len(stages)

  #각 스테이지를 순회하며, 실패율 계산
  for i in range(1, N+1):
    if challenger[i] == 0: #도전한 사람이 없는 경우, 실패율은 0
      fails[i] = 0
    else:
      fails[i] = challenger[i] / total # 실패율 구함
      total -= challenger[i] # 다음 스테이지 실패율을 구하기 위해 현재 스테이지의 인원을 뺌

  result = sorted(fails, key = lambda x: fails[x], reverse=True)

  return result



# 책 풀이