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
-- Table structure for table `event_new`
--

DROP TABLE IF EXISTS `event_new`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_new` (
  `event_id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `host_entity_id` varchar(255) NOT NULL,
  `subscriber_limit` int NOT NULL,
  `terms` text NOT NULL,
  `event_ids` json NOT NULL,
  `from_datime` datetime NOT NULL,
  `to_datime` datetime NOT NULL,
  `venue` json DEFAULT NULL,
  `affilition_id` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `log` longtext,
  `remark` longtext,
  `created_at` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_new`
--

LOCK TABLES `event_new` WRITE;
/*!40000 ALTER TABLE `event_new` DISABLE KEYS */;
INSERT INTO `event_new` VALUES (1,'medical camp 01','description1','doctor_consultation','3',200,'non refundable','{}','2025-02-22 09:30:00','2025-02-28 11:30:00','{\"lat\": \"0.001\", \"url\": \"https://www.google.com/meet\", \"area\": \"wilson garden\", \"city\": \"bangalore\", \"long\": \"0.002\", \"state\": \"karnataka\", \"street\": \"7th main\", \"country\": \"india\", \"building\": \"Skyscraper\"}','5',NULL,NULL,NULL,NULL),(2,'python bootcamp','overview and introduction to python','workshop','15',150,'non refundable','{}','2025-03-01 09:30:00','2025-03-02 11:30:00','{\"lat\": \"0.001\", \"url\": \"https://www.google.com/meet\", \"area\": \"wilson garden\", \"city\": \"bangalore\", \"long\": \"0.002\", \"state\": \"karnataka\", \"street\": \"7th main\", \"country\": \"india\", \"building\": \"Skyscraper\"}','16',NULL,NULL,NULL,NULL),(3,'python bootcamp','overview and introduction to python','workspace','15',200,'normal','{}','2025-03-17 10:00:00','2025-03-22 12:00:00','{\"area\": \"Eshwar Nagar\", \"city\": \"Manipal\", \"state\": \"karnataka\", \"street\": \"manipal main road\", \"country\": \"india\", \"building\": \"Manipal campus, AB 5\", \"latitude\": \"12.52632\", \"longitude\": \"152.596\", \"url_address\": \"https://www.google.com/meet\"}','5',NULL,NULL,NULL,NULL),(4,'python bootcamp','overview and introduction to python','workshop','15',150,'non refundable','{}','2025-03-17 10:00:00','2025-03-22 12:00:00','{\"area\": \"Eshwar Nagar\", \"city\": \"Mangalore\", \"state\": \"karnataka\", \"street\": \"manipal main road\", \"country\": \"india\", \"building\": \"Manipal campus, AB 5\", \"latitude\": \"12.52632\", \"longitude\": \"152.596\", \"url_address\": \"https://www.google.com/meet\"}','16',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `event_new` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-01 17:55:31
