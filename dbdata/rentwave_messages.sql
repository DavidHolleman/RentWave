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
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `RentalId` int NOT NULL,
  `Sender` varchar(100) NOT NULL,
  `Content` varchar(1000) NOT NULL,
  `Time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`RentalId`,`Time`),
  KEY `Sender` (`Sender`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`RentalId`) REFERENCES `rentals` (`Id`),
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`Sender`) REFERENCES `users` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'kafled@pnw.edu','Is this available? ','2024-11-14 13:06:45'),(1,'dhollema@pnw.edu','Yes, when would you like it?','2024-11-14 13:07:28'),(1,'kafled@pnw.edu','I would like it on Saturday for the afternoon.','2024-11-14 13:08:31'),(1,'dhollema@pnw.edu','Sounds good, can you pick it up before noon though?','2024-11-14 13:09:51'),(1,'kafled@pnw.edu','Sure, Dyer at 11am good?','2024-11-14 13:10:50'),(1,'dhollema@pnw.edu','Works for me!','2024-11-14 13:11:48'),(1,'dhollema@pnw.edu','It will be $10 for the day','2024-11-14 13:12:34'),(1,'kafled@pnw.edu','I only need it until 4pm though, could you do $4?','2024-11-14 13:13:29'),(1,'dhollema@pnw.edu','If you drop it back off at 4 I could let you have it for $5.','2024-11-14 13:14:21'),(1,'kafled@pnw.edu','Okay, I can do that, see you on Saturday!','2024-11-14 13:15:03');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
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
