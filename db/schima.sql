create database burgers_db;

use burgers_db;

create table burgers(
    id int auto_increment,
    primary key(id),
    burger_name VARCHAR(50) NOT NULL,
    devoured boolean NOT NULL
)