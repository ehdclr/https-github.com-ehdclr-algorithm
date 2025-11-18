# Write your MySQL query statement below

# 모든 product물건을 산 사람을 말하는듯
select 
    customer_id
from Customer
group by customer_id
having count(distinct(product_key)) = (select count(product_key) from Product)