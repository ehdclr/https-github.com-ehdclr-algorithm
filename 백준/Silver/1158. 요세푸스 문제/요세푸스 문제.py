import sys

# N명의 사람이 원을 이루며 앉고, K번째 사람을 계속 제거하는 요세푸스 문제
n, k = map(int, sys.stdin.readline().strip().split())

# 1번부터 N번까지 사람들을 리스트로 만듦
people = [i for i in range(1, n + 1)]
result = []  # 제거된 순서를 저장할 리스트

# 현재 위치를 0부터 시작
current_idx = 0

# 모든 사람이 제거될 때까지 반복
while people:
    # 현재 위치에서 K번째 사람을 찾음 (K-1만큼 이동, 현재 사람도 1번째로 셈)
    current_idx = (current_idx + k - 1) % len(people)
    
    # 해당 위치의 사람을 제거하고 결과에 추가
    eliminated = people.pop(current_idx)
    result.append(eliminated)
    
    # 사람을 제거한 후, 인덱스가 리스트 끝을 넘어가면 0으로 조정
    if current_idx == len(people) and people:
        current_idx = 0

# 결과를 요구된 형식으로 출력
print(f"<{', '.join(map(str, result))}>")