CREATE TABLE contact (
   id serial PRIMARY KEY,
   first_name VARCHAR ( 50 ) NOT NULL,
   last_name VARCHAR ( 50 ) NOT NULL,
   email VARCHAR ( 50 ) NOT NULL,
   phone VARCHAR ( 50 ) NOT NULL,
   birthdate DATE NOT NULL
);
