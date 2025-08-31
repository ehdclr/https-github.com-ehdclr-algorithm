import sys
sys.setrecursionlimit(200000)

def dfs(current, visited, finished, choice, team_members):
    """
    DFS를 통해 사이클을 찾는 함수
    
    Args:
        current: 현재 탐색 중인 학생 번호
        visited: 방문 여부를 체크하는 리스트
        finished: 탐색이 완료된 학생을 체크하는 리스트
        choice: 각 학생이 선택한 학생 번호
        team_members: 팀을 구성한 학생 수를 카운트
    
    Returns:
        팀을 구성한 학생 수
    """
    visited[current] = True
    next_student = choice[current]
    
    if not visited[next_student]:
        # 아직 방문하지 않은 학생이면 계속 탐색
        team_members = dfs(next_student, visited, finished, choice, team_members)
    elif not finished[next_student]:
        # 이미 방문했지만 탐색이 완료되지 않은 경우 -> 사이클 발견
        temp = next_student
        
        # 사이클에 속한 모든 학생을 카운트
        while True:
            team_members += 1
            temp = choice[temp]
            if temp == next_student:
                break
    
    # 현재 학생의 탐색 완료 표시
    finished[current] = True
    return team_members

def solve():
    """
    메인 풀이 함수
    """
    t = int(input())  # 테스트 케이스 수
    
    for _ in range(t):
        n = int(input())  # 학생 수
        choice = [0] + list(map(int, input().split()))  # 1-indexed로 변환
        
        visited = [False] * (n + 1)
        finished = [False] * (n + 1)
        team_count = 0
        
        # 모든 학생에 대해 탐색 수행
        for i in range(1, n + 1):
            if not visited[i]:
                team_count = dfs(i, visited, finished, choice, team_count)
        
        # 팀에 속하지 못한 학생 수 출력
        print(n - team_count)

if __name__ == "__main__":
    solve()