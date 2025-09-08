SELECT p.product_id, 
    CASE
        WHEN SUM(u.units) > 0 THEN ROUND(SUM(p.price * u.units) / SUM(u.units), 2)
        ELSE 0
    END as average_price
FROM Prices p 
LEFT JOIN UnitsSold u ON p.product_id = u.product_id 
    AND u.purchase_date >= p.start_date 
    AND u.purchase_date <= p.end_date
GROUP BY p.product_id;