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
-- Table structure for table `system_settings`
--

DROP TABLE IF EXISTS `system_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `system_settings` (
  `com_settings_id` bigint NOT NULL,
  `parameter` varchar(45) DEFAULT NULL,
  `value` varchar(45) DEFAULT NULL,
  `unit` varchar(45) DEFAULT NULL,
  `affiliation_id` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `log` longtext,
  `remark` longtext,
  `description` text,
  PRIMARY KEY (`com_settings_id`),
  UNIQUE KEY `com_settings_id_UNIQUE` (`com_settings_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_settings`
--

LOCK TABLES `system_settings` WRITE;
/*!40000 ALTER TABLE `system_settings` DISABLE KEYS */;
INSERT INTO `system_settings` VALUES (1,'retries','3','count',NULL,NULL,NULL,NULL,NULL),(2,'back_off_time','500','millisec',NULL,NULL,NULL,NULL,NULL),(3,'back_off_type','linear','null',NULL,NULL,NULL,NULL,NULL),(4,'Q_alert_limit','90','%',NULL,NULL,NULL,NULL,NULL),(5,'Q_type','FIFO','null',NULL,NULL,NULL,NULL,NULL),(6,'multiple_Qs','True','boolean',NULL,NULL,NULL,NULL,NULL),(7,'Q_orbitration','round_robin','null',NULL,NULL,NULL,NULL,NULL),(8,'ram_poll_interval','10','minutes',NULL,NULL,NULL,NULL,NULL),(9,'stroage_poll','10','minutes',NULL,NULL,NULL,NULL,NULL),(10,'bandwidth_poll','10','minutes',NULL,NULL,NULL,NULL,NULL),(11,'api_call_poll','10','minutes',NULL,NULL,NULL,NULL,NULL),(12,'db_ops_poll','10','minutes',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `system_settings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-01 17:55:40
