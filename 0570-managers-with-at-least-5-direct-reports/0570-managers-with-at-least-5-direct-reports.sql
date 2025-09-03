# Write your MySQL query statement below
# 최소 5명 이상한테 받는 매니저를 찾으라는거

SELECT e1.name
FROM Employee e1
JOIN Employee e2 ON e1.id = e2.managerId
GROUP BY e1.id
HAVING COUNT(DISTINCT(e2.id)) >= 5
