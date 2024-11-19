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
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `RentalId` int NOT NULL,
  `Author` varchar(100) NOT NULL,
  `Rating` int NOT NULL,
  `Content` varchar(1000) DEFAULT '',
  `Time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`RentalId`,`Author`),
  KEY `Author` (`Author`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`Author`) REFERENCES `users` (`Email`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`RentalId`) REFERENCES `rentals` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'dhollema@pnw.edu',5,'Renter was easy to work with and returned the item at the agreed upon time in good condition.','2024-11-14 13:20:18'),(1,'kafled@pnw.edu',5,'Owner was prompt, professional, and item was as described!','2024-11-14 13:19:59'),(4,'dhollema@pnw.edu',5,'Rental went very smoothly and product was returned without damage.','2024-11-14 23:12:37'),(4,'kafled@pnw.edu',5,'The product worked as expected!','2024-11-14 23:11:24'),(6,'dhollema@pnw.edu',3,'Hammer was returned undamaged but renter was very difficult to work with.','2024-11-14 22:59:58'),(6,'sharm727@pnw.edu',4,'The hammer did the job I needed it for but upon whieghing it, I found it to only be 2.5 pounds.','2024-11-14 22:58:26'),(7,'dhollema@pnw.edu',2,'Volleyball was in far worse condition that described.','2024-11-14 23:05:59'),(7,'kafled@pnw.edu',4,'Renter was prompt but rather rude.','2024-11-14 23:06:36'),(9,'kafled@pnw.edu',5,'Kraft was a pleasure to rent to and seemed very happy!','2024-11-14 23:09:20'),(9,'rlkraft@pnw.edu',5,'These soccer nets were so fun for the kids, 100% reccommend!!!','2024-11-14 23:08:01');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-19 12:13:39
