-- Excersize 8.1
-- a.
SELECT * FROM Game 
    ORDER BY time DESC

-- b.
SELECT * FROM Game 
    WHERE time >= CURRENT_TIMESTAMP - interval '7 days';

-- c.
SELECT *
    FROM Player
    WHERE name IS NULL;

-- d.
SELECT DISTINCT PlayerID 
    from PlayerGame 
    WHERE score > 2000

-- e.
SELECT * FROM Player 
    WHERE emailAddress LIKE '%gmail%'

-- Exersice 8.2
-- a.
SELECT score 
    FROM Player, PlayerGame 
    WHERE Player.ID = PlayerGame.PlayerID
    AND Player.name = 'King'
    ORDER BY score DESC

-- b.
SELECT name
    FROM Player, Game, PlayerGame
    WHERE Player.ID = PlayerGame.PlayerID
    AND Game.ID = PlayerGame.GameID
    AND Game.time = timestamp '2006-06-28 13:20:00'
    ORDER BY score DESC
    LIMIT 1

-- c. the P1.ID < p2.ID makes sure that you only get the result once,
--    if you didn't have that, the result would show up multiple times

-- d. When you're comparing data in a table to other data in the same table
