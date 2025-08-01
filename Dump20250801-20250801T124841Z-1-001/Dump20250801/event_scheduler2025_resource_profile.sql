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
-- Table structure for table `resource_profile`
--

DROP TABLE IF EXISTS `resource_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resource_profile` (
  `resource_id` bigint NOT NULL AUTO_INCREMENT,
  `affiliation_id` varchar(45) DEFAULT NULL,
  `person_id` bigint DEFAULT NULL,
  `resource_name` varchar(255) DEFAULT NULL,
  `entity_id` bigint DEFAULT NULL,
  `resource_category` varchar(255) DEFAULT NULL,
  `details` mediumtext,
  `phone_number` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `alert_url` varchar(255) DEFAULT NULL,
  `alert_preference` varchar(255) DEFAULT NULL,
  `status_poll_url` varchar(255) DEFAULT NULL,
  `entry_status` enum('active','inactive','pending') DEFAULT 'active',
  `role` varchar(255) DEFAULT NULL,
  `archive` tinyint(1) DEFAULT '0',
  `schedule` json DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `log` json DEFAULT NULL,
  `photo` varchar(50) DEFAULT NULL,
  `remark` longtext,
  `description` text,
  PRIMARY KEY (`resource_id`),
  UNIQUE KEY `phone_number` (`phone_number`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `external_id` (`person_id`,`entity_id`),
  KEY `entity_id` (`entity_id`),
  CONSTRAINT `resource_profile_ibfk_1` FOREIGN KEY (`entity_id`) REFERENCES `entity` (`entity_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource_profile`
--

LOCK TABLES `resource_profile` WRITE;
/*!40000 ALTER TABLE `resource_profile` DISABLE KEYS */;
INSERT INTO `resource_profile` VALUES (1,'8',48,'jasmine',3,'cat1','{\"description\": \"Nurse required\"}','+91 7857858888','rex@yahoo.com','https://rex/alert','sms','https://rex/status','active','Nurse',2,'{\"endDate\": \"\", \"workDays\": {}, \"startDate\": \"\"}',NULL,NULL,'path=/upload',NULL,NULL),(5,'5',456,'M sahique',3,'Healthcare Facility','{\"description\": \"test details\"}','+1-555-123-4567','msahique@gmail.com','https://alerts.johndoememorial.org/notify','SMS','https://status.johndoememorial.org/check','active','Primary Healthcare Provider',3,'{\"end\": \"2025-03-25T12:00:00.000Z\", \"days\": [1, 2], \"start\": \"2025-02-25T10:00:00.000Z\", \"title\": \"Doctor consultation\", \"textColor\": \"#ffffff\", \"description\": \"aaaaa\", \"backgroundColor\": \"#007bff\"}',NULL,NULL,NULL,NULL,NULL),(6,'6',125,'John Haek',15,'Healthcare Facility','{\"description\": \"test details\"}','+91 9878568458','John@yahoo.com','https://alerts.johnyalert.org/notify','email','https://status.johnyalert.org/check','active','Primary Healthcare Provider',3,'{\"end\": \"2025-03-25T17:30:00.000Z\", \"days\": [1, 2, 3, 4], \"start\": \"2025-02-25T15:30:00.000Z\", \"title\": \"Doctor checkup\", \"textColor\": \"#ffffff\", \"description\": \"aaaaa\", \"backgroundColor\": \"#007bff\"}',NULL,NULL,NULL,NULL,NULL),(7,'5',951,'Tejas',1,'cat1','doctor','5685234569','sen@yahoo.com','https://zen/alert','email','https://zen/status','active','Doctor',2,'{\"endDate\": \"2025-04-06\", \"workDays\": {\"tuesday\": [[\"10:00\", \"14:00\"]], \"wednesday\": [[\"15:00\", \"19:00\"]]}, \"startDate\": \"2025-03-12\"}',NULL,NULL,'sahiq.jpg',NULL,NULL),(8,'7',456,'M sahique',1,'Healthcare Facility','{\"description\": \"test details\"}','+1-555-123-4569','msahique2@gmail.com','https://alerts.johndoememorial.org/notify','SMS','https://status.johndoememorial.org/check','active','Primary Healthcare Provider',3,'{\"end\": \"2025-06-25T16:00:00.000Z\", \"days\": [1, 2], \"start\": \"2025-05-25T14:00:00.000Z\", \"title\": \"Doctor consultation\", \"textColor\": \"#ffffff\", \"description\": \"aaaaa\", \"backgroundColor\": \"#007bff\"}',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `resource_profile` ENABLE KEYS */;
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
