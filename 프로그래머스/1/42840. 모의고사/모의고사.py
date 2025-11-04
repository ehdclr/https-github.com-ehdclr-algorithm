def solution(answers): 
    num = len(answers) 
    a = [1, 2, 3, 4, 5]
    b = [2, 1, 2, 3, 2, 4, 2, 5]
    c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    solutions = [0, 0, 0]  # 1번, 2번, 3번 수포자
    
    for i in range(num):
        index1 = i % len(a)
        index2 = i % len(b)
        index3 = i % len(c)
        
        if answers[i] == a[index1]:
            solutions[0] += 1  # 1번 수포자
        if answers[i] == b[index2]:  # index2 사용!
            solutions[1] += 1  # 2번 수포자
        if answers[i] == c[index3]:  # index3 사용!
            solutions[2] += 1  # 3번 수포자
    
    # for문 밖에서 최댓값 찾기
    max_scores = max(solutions)
    
    highest_scores = []
    for i, score in enumerate(solutions):  # scores → score
        if score == max_scores:  # 콜론 추가
            highest_scores.append(i + 1)  # 1번부터 시작하므로 +1
    
    return highest_scores