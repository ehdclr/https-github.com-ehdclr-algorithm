# Write your MySQL query statement below

#두개의 길이 합이 하나보다 작아야함 

select 
    x,
    y,
    z,
    if(x+y>z and y+z>x and x+z>y, "Yes","No") as triangle
from Triangle
# 