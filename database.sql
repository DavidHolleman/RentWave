SET foreign_key_checks = 0;

DROP TABLE IF EXISTS Users CASCADE;
CREATE TABLE Users (
  Email varchar(100) PRIMARY KEY NOT NULL,
  FirstName varchar(50) NOT NULL,
  LastName varchar(50) NOT NULL, 
  Password char(64) NOT NULL,
  Location varchar(50),
  Balance int(6) NOT NULL DEFAULT 0,
  Permission int(1) NOT NULL DEFAULT 0
);

DROP TABLE IF EXISTS ItemCategories CASCADE;
CREATE TABLE ItemCategories (
  CategoryName varchar(100) PRIMARY KEY NOT NULL
);

DROP TABLE IF EXISTS Items CASCADE;
CREATE TABLE Items (
  Id int(4) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  Owner varchar(100) NOT NULL,
  Category varchar(100),
  Name varchar(100) NOT NULL,
  Description varchar(1000),
  FOREIGN KEY (Owner) REFERENCES Users(Email),
  FOREIGN KEY (Category) REFERENCES ItemCategories(CategoryName)
);

DROP TABLE IF EXISTS Rentals CASCADE;
CREATE TABLE Rentals (
  Id int(4) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  ItemId int(5) NOT NULL,
  Renter varchar(100) NOT NULL,
  Owner varchar(100) NOT NULL,
  State int(1) DEFAULT 0 NOT NULL,
  StartTime DateTime,
  EndTime DateTime,
  Cost int(6),
  FOREIGN KEY (Owner) REFERENCES Users(Email),
  FOREIGN KEY (Renter) REFERENCES Users(Email),
  FOREIGN KEY (ItemId) REFERENCES Items(Id)
);

DROP TABLE IF EXISTS Reviews CASCADE;
CREATE TABLE Reviews (
  RentalId int(4) NOT NULL,
  Author varchar(100) NOT NULL,
  Rating int(1) NOT NULL,
  Content varchar(1000) default "",
  Time DateTime default CURRENT_TIMESTAMP,
  PRIMARY KEY (RentalId, Author),
  FOREIGN KEY (Author) REFERENCES Users(Email),
  FOREIGN KEY (RentalId) REFERENCES Rentals(Id)
);

DROP TABLE IF EXISTS Messages CASCADE;
CREATE TABLE Messages (
  RentalId int(4) NOT NULL,
  Sender varchar(100) NOT NULL,
  Content varchar(1000) NOT NULL,
  Time DateTime default CURRENT_TIMESTAMP,
  PRIMARY KEY (RentalId, Time),
  FOREIGN KEY (RentalId) REFERENCES Rentals(Id),
  FOREIGN KEY (Sender) REFERENCES Users(Email)
);

SET foreign_key_checks = 1;