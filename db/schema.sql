CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  date_created DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE openTrade (
  trade_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(uid),
  completed BOOLEAN NOT NULL,
  net_gain INT 
  




--   title VARCHAR(255),
--   body VARCHAR,
  
--   author VARCHAR REFERENCES users(username),
--   date_created TIMESTAMP
--   like_user_id INT[] DEFAULT ARRAY[]::INT[],
--   likes INT DEFAULT 0
);