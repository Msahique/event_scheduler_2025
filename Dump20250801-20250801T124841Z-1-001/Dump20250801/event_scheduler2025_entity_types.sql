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
-- Table structure for table `entity_types`
--

DROP TABLE IF EXISTS `entity_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entity_types` (
  `entity_type_id` bigint NOT NULL,
  `entity_type` varchar(45) DEFAULT NULL,
  `description` mediumtext,
  `status` varchar(45) DEFAULT NULL,
  `log` json DEFAULT NULL,
  `affiliation_id` varchar(45) DEFAULT NULL,
  `remark` longtext,
  PRIMARY KEY (`entity_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entity_types`
--

LOCK TABLES `entity_types` WRITE;
/*!40000 ALTER TABLE `entity_types` DISABLE KEYS */;
INSERT INTO `entity_types` VALUES (1,'Hospital','this is a medical organisation',NULL,NULL,'16',NULL),(2,'trainingInstitute','this is educational insitution',NULL,NULL,'16',NULL),(3,'eventOrganiser',NULL,NULL,NULL,'16',NULL),(4,'marketing',NULL,NULL,NULL,'16',NULL),(5,'agriculture_ministry',NULL,NULL,NULL,'16',NULL),(6,'health_ministry',NULL,NULL,NULL,'1',NULL),(7,'education_ministry',NULL,NULL,NULL,'5',NULL),(8,'finance_ministry',NULL,NULL,NULL,'5',NULL),(9,'interior_ministry',NULL,NULL,NULL,'5',NULL),(10,'law_ministry',NULL,NULL,NULL,NULL,NULL),(11,'social_welfare_ministry',NULL,NULL,NULL,NULL,NULL),(12,'communication_ministry',NULL,NULL,NULL,NULL,NULL),(13,'urban_development_ministry',NULL,NULL,NULL,NULL,NULL),(14,'industry_ministry',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `entity_types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-01 17:55:30
