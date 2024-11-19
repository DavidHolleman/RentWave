-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: rentwave
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `rentals`
--

DROP TABLE IF EXISTS `rentals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rentals` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `ItemId` int NOT NULL,
  `Renter` varchar(100) NOT NULL,
  `Owner` varchar(100) NOT NULL,
  `State` int NOT NULL DEFAULT '0',
  `StartTime` datetime DEFAULT NULL,
  `EndTime` datetime DEFAULT NULL,
  `Cost` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Owner` (`Owner`),
  KEY `Renter` (`Renter`),
  KEY `ItemId` (`ItemId`),
  CONSTRAINT `rentals_ibfk_1` FOREIGN KEY (`Owner`) REFERENCES `users` (`Email`),
  CONSTRAINT `rentals_ibfk_2` FOREIGN KEY (`Renter`) REFERENCES `users` (`Email`),
  CONSTRAINT `rentals_ibfk_3` FOREIGN KEY (`ItemId`) REFERENCES `items` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentals`
--

LOCK TABLES `rentals` WRITE;
/*!40000 ALTER TABLE `rentals` DISABLE KEYS */;
INSERT INTO `rentals` VALUES (1,1,'kafled@pnw.edu','dhollema@pnw.edu',2,NULL,NULL,5),(2,1,'sayantiroy@pnw.edu','dhollema@pnw.edu',1,NULL,NULL,6),(3,1,'mmikhail@pnw.edu','dhollema@pnw.edu',0,NULL,NULL,4),(4,2,'kafled@pnw.edu','dhollema@pnw.edu',0,NULL,NULL,2),(5,2,'rlkraft@pnw.edu','dhollema@pnw.edu',0,NULL,NULL,3),(6,2,'sharm727@pnw.edu','dhollema@pnw.edu',0,NULL,NULL,2),(7,10,'dhollema@pnw.edu','kafled@pnw.edu',0,NULL,NULL,4),(8,11,'dhollema@pnw.edu','kafled@pnw.edu',0,NULL,NULL,10),(9,11,'rlkraft@pnw.edu','kafled@pnw.edu',0,NULL,NULL,12),(10,9,'kafled@pnw.edu','dhollema@pnw.edu',0,NULL,NULL,3),(11,9,'rlkraft@pnw.edu','dhollema@pnw.edu',0,NULL,NULL,3);
/*!40000 ALTER TABLE `rentals` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-19 12:13:40
