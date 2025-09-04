select s.user_id,
       case
        when count(c.action) = 0 THEN 0.00
        else ROUND(SUM(c.action = 'confirmed') /count(c.action) ,2)
        end as confirmation_rate
from Signups s
LEFT JOIN Confirmations c ON s.user_id = c.user_id
group by s.user_id