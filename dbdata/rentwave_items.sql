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
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Owner` varchar(100) NOT NULL,
  `Category` varchar(100) DEFAULT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Owner` (`Owner`),
  KEY `Category` (`Category`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`Owner`) REFERENCES `users` (`Email`),
  CONSTRAINT `items_ibfk_2` FOREIGN KEY (`Category`) REFERENCES `itemcategories` (`CategoryName`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'dhollema@pnw.edu','Tools','Drill','12v cordless'),(2,'dhollema@pnw.edu','Tools','Hammer','3 pounds of steel and rubber'),(3,'dhollema@pnw.edu','Tools','Circular saw','Multiple blades available'),(4,'dhollema@pnw.edu','Tools','Socket set','20 pieces, missing 10mm'),(5,'dhollema@pnw.edu','Tools','Mallet','Large rubber mallet'),(6,'dhollema@pnw.edu','Tools','Flathead screwdriver','1 foot long'),(7,'dhollema@pnw.edu','Tools','Phillips screwdriver','#1 6inch driver'),(8,'dhollema@pnw.edu','Tools','Impact','24v cordless impact'),(9,'dhollema@pnw.edu','Sports','Soccer Ball','Regulation size pro ball'),(10,'kafled@pnw.edu','Sports','Volleyball','Beach Volleyball, lightly used'),(11,'kafled@pnw.edu','Sports','Soccer net','Portable nets, best for kids');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
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
