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
-- Table structure for table `resource_allocation`
--

DROP TABLE IF EXISTS `resource_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resource_allocation` (
  `allocation_id` bigint NOT NULL AUTO_INCREMENT,
  `resource_id` bigint DEFAULT NULL,
  `event_id` bigint DEFAULT NULL,
  `entity_id` bigint DEFAULT NULL,
  `affiliation_id` bigint DEFAULT NULL,
  `beginning_datetime` datetime DEFAULT NULL,
  `ending_datetime` datetime DEFAULT NULL,
  `exclusivity` tinyint(1) DEFAULT NULL,
  `entry_status` enum('active','inactive','pending') DEFAULT 'active',
  `log` longtext,
  `archive` tinyint(1) DEFAULT '0',
  `remark` longtext,
  `description` text,
  PRIMARY KEY (`allocation_id`),
  UNIQUE KEY `resource_id` (`resource_id`,`event_id`,`beginning_datetime`),
  KEY `event_id` (`event_id`),
  KEY `entity_id` (`entity_id`),
  CONSTRAINT `resource_allocation_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`),
  CONSTRAINT `resource_allocation_ibfk_3` FOREIGN KEY (`entity_id`) REFERENCES `entity` (`entity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource_allocation`
--

LOCK TABLES `resource_allocation` WRITE;
/*!40000 ALTER TABLE `resource_allocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `resource_allocation` ENABLE KEYS */;
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
