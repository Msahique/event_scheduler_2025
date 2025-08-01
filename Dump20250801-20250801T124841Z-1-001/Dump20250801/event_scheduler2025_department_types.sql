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
-- Table structure for table `department_types`
--

DROP TABLE IF EXISTS `department_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `department_type` varchar(256) DEFAULT NULL,
  `affiliation_id` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `log` json DEFAULT NULL,
  `remarks` json DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `version` int DEFAULT '1',
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department_types`
--

LOCK TABLES `department_types` WRITE;
/*!40000 ALTER TABLE `department_types` DISABLE KEYS */;
INSERT INTO `department_types` VALUES (1,'Administration',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(2,'Census',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(3,'Marketing',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(4,'Finance and Accounts',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(5,'Price Support',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(6,'Credit',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(7,'Crops',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(8,'Drought Management',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(9,'Economic Administration',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(10,'General Coordination',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(11,'Official Language',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(12,'Horticulture',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(13,'Digital Agriculture Division',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(14,'Integrated Nutrient Management',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(15,'International Cooperation',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(16,'Mechanization and Technology',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(17,'Natural Resources Management',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(18,'Oilseeds',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(19,'Plan Coordination',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(20,'Plant Protection',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(21,'Policy',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(22,'Rainfed Farming System',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(23,'Agriculture Trade Policy',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(24,'Vigilance',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL),(25,'Farmers Welfare Division',NULL,NULL,NULL,NULL,'2025-06-12 11:41:42',1,NULL);
/*!40000 ALTER TABLE `department_types` ENABLE KEYS */;
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
