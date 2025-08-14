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
-- Table structure for table `doc_view_template`
--

DROP TABLE IF EXISTS `doc_view_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doc_view_template` (
  `doc_view_template_id` bigint NOT NULL,
  `doc_view_template_name` varchar(45) DEFAULT NULL,
  `html_template` longtext,
  `doc_type` varchar(45) DEFAULT NULL,
  `doc_data_template_id` varchar(45) DEFAULT NULL,
  `datamap` longtext,
  `affiliation_id` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `remarks` longtext,
  `log` longtext,
  `created_at` varchar(45) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`doc_view_template_id`),
  UNIQUE KEY `id_UNIQUE` (`doc_view_template_id`),
  UNIQUE KEY `doc_view_template_name_UNIQUE` (`doc_view_template_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doc_view_template`
--

LOCK TABLES `doc_view_template` WRITE;
/*!40000 ALTER TABLE `doc_view_template` DISABLE KEYS */;
INSERT INTO `doc_view_template` VALUES (1,'invoice','<!-- Template Name: invoice_template -->','invoice','5',NULL,'5',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `doc_view_template` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-01 17:55:37
