CREATE TABLE person (
   id serial PRIMARY KEY,
   name VARCHAR ( 50 ) NOT NULL,
   age INTEGER NOT NULL
);

INSERT INTO person (name, age) VALUES ('Mickey Mouse', 92);
