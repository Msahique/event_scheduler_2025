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
-- Table structure for table `doc_templates`
--

DROP TABLE IF EXISTS `doc_templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doc_templates` (
  `doc_templates_id` bigint NOT NULL AUTO_INCREMENT,
  `doc_type` varchar(45) DEFAULT NULL,
  `affiliation_id` bigint DEFAULT NULL,
  `doc_description` longtext,
  `doc_template` json DEFAULT NULL,
  `ui_template` json DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `log` json DEFAULT NULL,
  `remark` json DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `version` int DEFAULT '1',
  `description` text,
  PRIMARY KEY (`doc_templates_id`),
  UNIQUE KEY `doc_templates_id_UNIQUE` (`doc_templates_id`),
  UNIQUE KEY `doc_type_UNIQUE` (`doc_type`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doc_templates`
--

LOCK TABLES `doc_templates` WRITE;
/*!40000 ALTER TABLE `doc_templates` DISABLE KEYS */;
INSERT INTO `doc_templates` VALUES (1,'farmer registration',3,'this is a farmer registration document','{\"fields\": [{\"name\": \"\", \"unique\": \"\", \"datatype\": \"\", \"not_null\": \"\"}]}',NULL,NULL,NULL,NULL,'2025-06-12 11:41:44',1,'this is a farmer registration document'),(2,'land registration',5,'this is a farmer registration form.',NULL,NULL,NULL,NULL,NULL,'2025-06-12 11:41:44',1,NULL),(3,'Child support Registration',4,'this is the document for child support registration',NULL,'{}',NULL,NULL,NULL,'2025-06-17 16:30:13',1,NULL),(4,'Name Registration',4,'description','{\"fields\": [{\"name\": \"id\", \"unique\": \"true\", \"datatype\": \"number\", \"not_null\": \"true\"}, {\"name\": \"name\", \"unique\": \"true\", \"datatype\": \"string\", \"not_null\": \"true\"}, {\"name\": \"log\", \"unique\": \"false\", \"datatype\": \"string\", \"not_null\": \"false\"}, {\"name\": \"status\", \"unique\": \"false\", \"datatype\": \"string\", \"not_null\": \"false\"}, {\"name\": \"affiliation\", \"unique\": \"false\", \"datatype\": \"string\", \"not_null\": \"false\"}, {\"name\": \"remarks\", \"unique\": \"false\", \"datatype\": \"string\", \"not_null\": \"false\"}, {\"name\": \"description\", \"unique\": \"false\", \"datatype\": \"string\", \"not_null\": \"false\"}]}','{}',NULL,NULL,NULL,'2025-06-17 16:30:13',1,'Name description'),(5,'invoice',4,'test invoice','{\"fields\": [{\"name\": \"invoice\", \"unique\": \"false\", \"datatype\": \"string\", \"not_null\": \"false\"}]}','{}',NULL,NULL,NULL,'2025-06-17 16:30:13',1,'test invoice');
/*!40000 ALTER TABLE `doc_templates` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-01 17:55:32
