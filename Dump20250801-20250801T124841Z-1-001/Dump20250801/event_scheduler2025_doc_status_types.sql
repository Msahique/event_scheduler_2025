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
-- Table structure for table `doc_status_types`
--

DROP TABLE IF EXISTS `doc_status_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doc_status_types` (
  `doc_status_type_id` bigint NOT NULL,
  `doc_status_type` varchar(45) DEFAULT NULL,
  `log` longtext,
  `affiliation_id` varchar(45) DEFAULT NULL,
  `remarks` json DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `version` int DEFAULT '1',
  `description` text,
  PRIMARY KEY (`doc_status_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doc_status_types`
--

LOCK TABLES `doc_status_types` WRITE;
/*!40000 ALTER TABLE `doc_status_types` DISABLE KEYS */;
INSERT INTO `doc_status_types` VALUES (1,'draft','draft','16',NULL,'2025-06-12 11:41:43',1,NULL),(2,'submitted',NULL,'16',NULL,'2025-06-12 11:41:43',1,NULL),(3,'canceled',NULL,'16',NULL,'2025-06-12 11:41:43',1,NULL),(4,'archived',NULL,'16',NULL,'2025-06-12 11:41:43',1,NULL),(5,'supspended',NULL,'16',NULL,'2025-06-12 11:41:43',1,NULL),(6,'Approved',NULL,'16',NULL,'2025-06-12 11:41:43',1,NULL),(7,'to be archived',NULL,'16',NULL,'2025-06-12 11:41:43',1,NULL),(8,'failed',NULL,'16',NULL,'2025-06-12 11:41:43',1,NULL),(9,'Active',NULL,'16',NULL,'2025-06-12 11:41:43',1,NULL),(10,'processing','draft','16',NULL,'2025-06-12 11:41:43',1,NULL);
/*!40000 ALTER TABLE `doc_status_types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-01 17:55:36
