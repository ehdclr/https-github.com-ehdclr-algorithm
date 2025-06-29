N, K = map(int, input().split())  # N: 학생수, K: 한 방 최대 인원

# 각 학년별 남녀 학생 수를 저장할 딕셔너리
boy_count_dict = {}
girl_count_dict = {}

# 학생 정보 입력받기
for i in range(N):  # N번 반복해야 함 (K가 아님)
    S, Y = input().split()  # S: 성별, Y: 학년
    
    if S == "0":  # 여학생
        if Y in girl_count_dict:
            girl_count_dict[Y] += 1
        else:
            girl_count_dict[Y] = 1
    else:  # 남학생 (S == "1")
        if Y in boy_count_dict:
            boy_count_dict[Y] += 1
        else:
            boy_count_dict[Y] = 1

# 필요한 방 개수 계산
rooms = 0

# 남학생 방 계산
for grade, count in boy_count_dict.items():
    # 올림 계산: (count + K - 1) // K 또는 math.ceil(count / K)
    rooms += (count + K - 1) // K

# 여학생 방 계산  
for grade, count in girl_count_dict.items():
    rooms += (count + K - 1) // K

print(rooms)