CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  date_created DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE openingTrades (
  trade_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(uid),
  ticker VARCHAR NOT NULL,
  --  NUMERIC(precision, scale)
  -- precision = # of digits before decimal
  -- scale = # of digits after decimal
  price NUMERIC(20,2),
  quantity INT NOT NULL,
  initial_cost NUMERIC(20,2) NOT NULL,
  net_gain NUMERIC(20,2), 
  open_date DATE,  
  completed BOOLEAN,
  -- trade types [stock, option]
  trade_type: VARCHAR NOT NULL 
  
--   title VARCHAR(255),
--   body VARCHAR,
  
--   author VARCHAR REFERENCES users(username),
--   date_created TIMESTAMP
--   like_user_id INT[] DEFAULT ARRAY[]::INT[],
--   likes INT DEFAULT 0
);

CREATE TABLE closingTrades (
  close_id SERIAL PRIMARY KEY,
  open_id INT REFERENCES openTrades(trade_id),
  trades jsonb
)