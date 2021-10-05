use mivoz;

DROP TABLE IF EXISTS contact;

CREATE TABLE contact(
    id int NOT NULL primary key AUTO_INCREMENT,
    description TEXT,
    name varchar(255),
    surname varchar(255),
    email varchar(255),
    telephone varchar(255),
    create_time DATETIME ,
    update_time DATETIME
) default charset utf8;