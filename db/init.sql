CREATE DATABASE IF NOT EXISTS chatapp;

USE chatapp;

CREATE TABLE users(
  id INT AUTO_INCREMENT NOT NULL, 
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages(
  id INT AUTO_INCREMENT NOT NULL, 
  body TEXT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY (id)
);
