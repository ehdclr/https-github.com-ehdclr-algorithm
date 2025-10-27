def solution(n):
    count = 0  
    
    def dfs(row, visited):
        nonlocal count  # global 대신 nonlocal 사용
        if row == n:
            count += 1
            return
        
        # 각 열을 순회
        for col in range(n):  # range(4)가 아니라 range(n)
            if not canPlaceQueen(row, col, visited):  # 로직 수정
                continue
            visited.append([row, col])
            dfs(row + 1, visited)
            visited.pop()
    
    def canPlaceQueen(curX, curY, archive):
        for [x, y] in archive:
            if curY == y or abs(curX - x) == abs(curY - y):  # 콜론 추가
                return False
        return True
    
    dfs(0, [])
    return count