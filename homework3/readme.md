# Homework 3

Based on previous labs and homeworks from CS262 and K. Vander Linden

## Answering the questions

a. The active urls for the data serice are
/
/players
/players/:id', readPlayer);
/winners

b.
the /players create functionality is neither
the /players read functioanlity is nullipotent
the / is nullipotent
the /players/:id read is nullipotent
the /players/:id update is idempotnet
the /winners is nullipotent

c.
The service is RESTful because it uses http requests to retrieve data from a database using get, put, post, and delete requests.

d.
This seems pretty consitant with object oriented design and there doens't seem to be any conflicts there that I needed to get around.
