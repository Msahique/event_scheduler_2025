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
-- Table structure for table `trigger_event_list`
--

DROP TABLE IF EXISTS `trigger_event_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trigger_event_list` (
  `trigger_event_id` bigint NOT NULL,
  `control_type` varchar(45) DEFAULT NULL,
  `trigger_events` json DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`trigger_event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trigger_event_list`
--

LOCK TABLES `trigger_event_list` WRITE;
/*!40000 ALTER TABLE `trigger_event_list` DISABLE KEYS */;
INSERT INTO `trigger_event_list` VALUES (1,'input:text','[\"onchange\", \"oninput\", \"onfocus\", \"onblur\", \"onkeydown\", \"onkeyup\", \"onkeypress\", \"onclick\", \"ondblclick\"]',NULL),(2,'input:checkbox','[\"onchange\", \"onclick\"]',NULL),(3,'input:radio','[\"onchange\", \"onclick\"]',NULL),(4,'input:password','[\"onchange\", \"oninput\", \"onfocus\", \"onblur\", \"onkeydown\", \"onkeyup\", \"onkeypress\"]',NULL),(5,'input:number','[\"onchange\", \"oninput\", \"onkeydown\", \"onkeyup\"]',NULL),(6,'input:range','[\"onchange\", \"oninput\"]',NULL),(7,'input:date','[\"onchange\", \"oninput\"]',NULL),(8,'input:datetime-local','[\"onchange\", \"oninput\"]',NULL),(9,'input:file','[\"onchange\", \"onclick\"]',NULL),(10,'input:color','[\"onchange\", \"oninput\"]',NULL),(11,'textarea','[\"onchange\", \"oninput\", \"onfocus\", \"onblur\", \"onkeydown\", \"onkeyup\"]',NULL),(12,'select','[\"onchange\", \"onfocus\", \"onblur\", \"onclick\"]',NULL),(13,'button','[\"onclick\", \"ondblclick\", \"onmousedown\", \"onmouseup\"]',NULL),(14,'form','[\"onsubmit\", \"onreset\"]',NULL),(15,'label','[\"onclick\"]',NULL),(16,'fieldset','[\"onchange\", \"oninput\"]',NULL),(17,'bootstrap_dropdown','[\"show.bs.dropdown\", \"shown.bs.dropdown\", \"hide.bs.dropdown\", \"hidden.bs.dropdown\", \"click\"]',NULL),(18,'bootstrap_modal','[\"show.bs.modal\", \"shown.bs.modal\", \"hide.bs.modal\", \"hidden.bs.modal\"]',NULL),(19,'bootstrap_tab','[\"show.bs.tab\", \"shown.bs.tab\", \"hide.bs.tab\", \"hidden.bs.tab\"]',NULL),(20,'bootstrap_collapse','[\"show.bs.collapse\", \"shown.bs.collapse\", \"hide.bs.collapse\", \"hidden.bs.collapse\"]',NULL),(21,'bootstrap_carousel','[\"slide.bs.carousel\", \"slid.bs.carousel\"]',NULL);
/*!40000 ALTER TABLE `trigger_event_list` ENABLE KEYS */;
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
