CREATE TABLE contact (
   id serial PRIMARY KEY,
   firstname VARCHAR ( 50 ) NOT NULL,
   lastname VARCHAR ( 50 ) NOT NULL,
   email VARCHAR ( 50 ) NOT NULL,
   phone VARCHAR ( 50 ) NOT NULL,
   birthdate DATE NOT NULL
);