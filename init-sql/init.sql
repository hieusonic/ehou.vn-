-- create databases

CREATE DATABASE IF NOT EXISTS ehou;

-- grant access rights to user

GRANT ALL PRIVILEGES ON ehou.* TO 'it_aum'@'%';

FLUSH PRIVILEGES;
