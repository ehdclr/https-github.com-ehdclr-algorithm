# Write your MySQL query statement below


-- 길이가 15넘어가는 조건을 가짐
select tweet_id from Tweets where char_length(content) > 15;