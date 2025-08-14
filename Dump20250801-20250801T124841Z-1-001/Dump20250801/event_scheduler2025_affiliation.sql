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
-- Table structure for table `affiliation`
--

DROP TABLE IF EXISTS `affiliation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `affiliation` (
  `affiliation_id` bigint NOT NULL,
  `resource_name` varchar(256) DEFAULT NULL,
  `program` varchar(256) DEFAULT NULL,
  `entity` varchar(256) DEFAULT NULL,
  `department` varchar(256) DEFAULT NULL,
  `service` varchar(256) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `log` json DEFAULT NULL,
  `remarks` json DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `version` int DEFAULT '1',
  `description` text,
  PRIMARY KEY (`affiliation_id`),
  UNIQUE KEY `affiliation_id_UNIQUE` (`affiliation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `affiliation`
--

LOCK TABLES `affiliation` WRITE;
/*!40000 ALTER TABLE `affiliation` DISABLE KEYS */;
INSERT INTO `affiliation` VALUES (1,'M sahique','AMAZON','Amazon','Administration','test_service','admin',NULL,NULL,NULL,'2025-06-12 11:06:02',1,NULL),(2,'M sahique','ITKnowledge','Apcog','education','python bootcamp','*',NULL,NULL,NULL,'2025-06-12 11:06:02',1,NULL),(3,'','farmer support program','agriclture ministry','administration','entity_administration','entity_admin',NULL,NULL,NULL,'2025-06-12 11:06:02',1,NULL),(4,'','farmer support program','agriclture ministry','event','event_administration','event_admin',NULL,NULL,NULL,'2025-06-12 11:06:02',1,NULL),(5,'','farmer support program','*','planning','planning_administration','planning_admin',NULL,NULL,NULL,'2025-06-12 11:06:02',1,NULL),(6,'','farmer support program','agriclture ministry','delivery','delivery_administration','delivery_admin',NULL,NULL,NULL,'2025-06-12 11:06:02',1,NULL),(7,'','farmer support program','agriclture ministry','execution','execution_administration','execution_admin',NULL,NULL,NULL,'2025-06-12 11:06:02',1,NULL),(8,'','farmer support program','agriclture ministry','service','service_administration','service_admin',NULL,NULL,NULL,'2025-06-12 11:06:02',1,NULL),(9,'','farmer support program','agriclture ministry','service_delivery','service_delivery_administration','service_delivery_admin',NULL,NULL,NULL,'2025-06-12 11:06:02',1,NULL),(10,NULL,'farmer training program','agriclture ministry','*','planning_administration','*',NULL,NULL,NULL,'2025-06-27 13:56:11',1,NULL),(11,NULL,'farmer training program','agriclture ministry','service_delivery','*','*',NULL,NULL,NULL,'2025-06-27 13:56:11',1,NULL),(12,NULL,'farmer training program','*','planning','planning_administration','*',NULL,NULL,NULL,'2025-06-27 13:56:11',1,NULL),(13,NULL,'farmer training program','agriclture ministry','*','*','*',NULL,NULL,NULL,'2025-06-27 13:56:11',1,NULL),(15,NULL,'test program ','*','*','*','*',NULL,NULL,NULL,'2025-06-30 09:30:35',1,NULL),(16,NULL,'*','*','*','*','*',NULL,NULL,NULL,'2025-07-03 21:03:00',1,NULL);
/*!40000 ALTER TABLE `affiliation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-01 17:55:33
