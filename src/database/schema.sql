DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id text PRIMARY KEY,
  address text,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);

DROP TABLE IF EXISTS streams;

CREATE TABLE streams (
  id text PRIMARY KEY,
  users_id text,
  code text,
  name text,
  stream_key text,
  status text,
  contract_id text,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);

DROP TABLE IF EXISTS quizzes_collections;

CREATE TABLE quizzes_collections (
  id text PRIMARY KEY,
  users_id text,
  quizzes_ids text,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);

DROP TABLE IF EXISTS quizzes;

CREATE TABLE quizzes (
  id text PRIMARY KEY,
  users_id text,
  question text,
  answers text,
  correct_answer number,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);