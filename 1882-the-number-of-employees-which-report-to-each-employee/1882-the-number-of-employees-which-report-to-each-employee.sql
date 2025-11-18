# Write your MySQL query statement below
# 보고 받은 사람 평균 나이와 보여주기 
select 
    e1.employee_id,
    e1.name,
    count(distinct(e2.employee_id)) as reports_count,
    ROUND(AVG(e2.age)) AS average_age
from Employees e1
join Employees e2 on e1.employee_id = e2.reports_to
where e2.reports_to IN (
    select employee_id
    from Employees
)
group by e1.employee_id


