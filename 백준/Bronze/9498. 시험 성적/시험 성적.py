n = int(input())

match n // 10 :
  case 10 | 9 :
    print('A')
  case 8 :
    print('B')
  case 7 :
    print('C')
  case 6 : 
    print('D')
  case _:
    print('F')