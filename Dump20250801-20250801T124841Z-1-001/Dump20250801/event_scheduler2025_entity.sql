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
-- Table structure for table `entity`
--

DROP TABLE IF EXISTS `entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entity` (
  `entity_id` bigint NOT NULL AUTO_INCREMENT,
  `entity_name` varchar(255) NOT NULL,
  `entity_type` varchar(255) NOT NULL,
  `entry_status` varchar(45) DEFAULT NULL,
  `ftp_path` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `remark` longtext,
  `change_log` json DEFAULT NULL,
  `departments` json DEFAULT NULL,
  `member_applications` json DEFAULT NULL,
  `services` json DEFAULT NULL,
  `affiliation_id` varchar(45) DEFAULT NULL,
  `created_at` varchar(45) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`entity_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entity`
--

LOCK TABLES `entity` WRITE;
/*!40000 ALTER TABLE `entity` DISABLE KEYS */;
INSERT INTO `entity` VALUES (1,'Stark Solution pvt ltd','IT','suspended','139.14.11.65,2222','foo','pass','this is a test remark, i have seen this remark, , am entering remark as a admin, change status back to submitted, all okay., | This is a new remark for testing (2/12/2025, 11:59:20 AM)','{\"logs\": [{\"actor\": \"\", \"action\": \"CREATE\", \"fields\": {\"field1\": \"\", \"field2\": \"\"}, \"datetime\": \"2025-02-06T12:00:00Z\", \"ipaddress\": \"192.168.1.1\"}]}',NULL,NULL,NULL,NULL,NULL,NULL),(3,'Applied cognition systems Pvt Ltd','type 3','active',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'Star Industries','Type2','approved',NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'Stark Systems PVT LTD','Type3','active',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,'SnS Co','Type B','active',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'Star Events','eventOrganiser','active',NULL,NULL,NULL,NULL,'{\"logs\": [{\"actor\": \"\", \"action\": \"CREATE\", \"fields\": {\"field1\": \"\", \"field2\": \"\"}, \"datetime\": \"2025-02-06T12:00:00Z\", \"ipaddress\": \"192.168.1.1\"}]}',NULL,NULL,NULL,NULL,NULL,NULL),(13,'AJ Hospital','Hospital','draft',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,'edurekha','trainingInstitute','submitted',NULL,NULL,NULL,'Have viewed. , viewing this for second time. (2/8/2025, 6:39:05 PM), third time (2/8/2025, 6:40:08 PM), 4th time (2/8/2025, 6:42:18 PM)','{\"logs\": [{\"actor\": \"\", \"action\": \"CREATE\", \"fields\": {\"field1\": \"\", \"field2\": \"\"}, \"datetime\": \"2025-02-06T12:00:00Z\", \"ipaddress\": \"192.168.1.1\"}]}',NULL,NULL,NULL,NULL,NULL,NULL),(15,'MANIPAL','Hospital','draft',NULL,NULL,NULL,'first remark (2/8/2025, 6:43:16 PM)','{\"logs\": [{\"actor\": \"\", \"action\": \"CREATE\", \"fields\": {\"field1\": \"\", \"field2\": \"\"}, \"datetime\": \"2025-02-06T12:00:00Z\", \"ipaddress\": \"192.168.1.1\"}]}',NULL,NULL,NULL,NULL,NULL,NULL),(16,'mashesh ','trainingInstitute','draft',NULL,NULL,NULL,'1st view. (2/8/2025, 6:49:35 PM)| 2nd View (2/8/2025, 6:50:23 PM)| 3rd view (2/8/2025, 6:50:50 PM)','{}',NULL,NULL,NULL,NULL,NULL,NULL),(17,'Igloo enterprises','eventOrganiser','draft',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'Falcon institute','trainingInstitute','draft',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,'btm cafe','[object Object]','draft','testpath','btmcafe','123456',NULL,NULL,NULL,NULL,NULL,'5','2025-07-04 11:13:36',NULL);
/*!40000 ALTER TABLE `entity` ENABLE KEYS */;
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
