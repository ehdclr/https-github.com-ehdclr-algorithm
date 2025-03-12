# Write your MySQL query statement below

-- 순서는 상관 없다. name population 최소 25000000 area가 최소 3000000 인곳
select name, population, area from World where area >= 3000000 or population >= 25000000