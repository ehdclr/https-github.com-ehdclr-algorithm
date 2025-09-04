select name from employee e inner join
(select managerId,count(managerId) from employee group by managerId having count(*)>=5) cte
where e.id=cte.managerId