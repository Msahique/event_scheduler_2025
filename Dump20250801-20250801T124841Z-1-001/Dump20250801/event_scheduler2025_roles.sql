-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: event_scheduler2025
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` bigint NOT NULL,
  `entity_id` varchar(255) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  `log` json DEFAULT NULL,
  `affiliation_id` varchar(45) DEFAULT NULL,
  `remark` longtext,
  `description` text,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `unique_role_api` (`entity_id`,`role_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (3,'20','Accountant',NULL,NULL,'16',NULL,NULL),(4,'4','Analyst',NULL,NULL,'16',NULL,NULL),(5,'6','staff',NULL,NULL,'16',NULL,NULL),(6,'4','engineer',NULL,NULL,NULL,NULL,NULL),(7,'1','Nurse',NULL,NULL,NULL,NULL,NULL),(8,'3','engineer',NULL,NULL,NULL,NULL,NULL),(10,'5','SDE II',NULL,NULL,NULL,NULL,NULL),(11,'6','Senior SDE',NULL,NULL,NULL,NULL,NULL),(12,'5','Promt Engineer',NULL,NULL,NULL,NULL,NULL),(13,'5','Analyst II','draft',NULL,NULL,NULL,NULL),(14,'6','Receptionist','draft',NULL,NULL,NULL,NULL),(15,'4','Cloud engineer',NULL,NULL,NULL,NULL,NULL),(16,'3','Head Nurse','draft',NULL,NULL,NULL,NULL),(17,'3','Cardiologist',NULL,NULL,NULL,NULL,NULL),(18,'','admin','draft',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-01 17:55:35
