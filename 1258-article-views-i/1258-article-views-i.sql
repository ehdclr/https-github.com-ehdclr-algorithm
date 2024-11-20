# Write your MySQL query statement below


--  author_id 와 viewer_id가 같은 걸 찾아라 

select distinct(author_id) as id from Views where author_id = viewer_id order by id asc