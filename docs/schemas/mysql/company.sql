use mivoz;

DROP TABLE IF EXISTS company;

CREATE TABLE company(
    id int NOT NULL primary key AUTO_INCREMENT,
    name varchar(255),
    description TEXT,
    email varchar(255),
    telephone varchar(255),
    create_time DATETIME ,
    update_time DATETIME
) default charset utf8;