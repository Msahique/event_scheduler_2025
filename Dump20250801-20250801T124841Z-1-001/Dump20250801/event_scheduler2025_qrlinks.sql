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
-- Table structure for table `qrlinks`
--

DROP TABLE IF EXISTS `qrlinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qrlinks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `entityId` varchar(45) DEFAULT NULL,
  `docTypeName` varchar(45) DEFAULT NULL,
  `sourceApp` varchar(45) DEFAULT NULL,
  `serverPath` varchar(45) DEFAULT NULL,
  `folderPath` varchar(45) DEFAULT NULL,
  `fileName` varchar(45) DEFAULT NULL,
  `token` varchar(45) DEFAULT NULL,
  `qrFilename` varchar(45) DEFAULT NULL,
  `createdBy` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `qrlinkscol` varchar(45) DEFAULT NULL,
  `affiliation_id` varchar(45) DEFAULT NULL,
  `log` longtext,
  `remark` longtext,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qrlinks`
--

LOCK TABLES `qrlinks` WRITE;
/*!40000 ALTER TABLE `qrlinks` DISABLE KEYS */;
INSERT INTO `qrlinks` VALUES (1,'1','roleRegistry','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'1','resourceRegistry','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'1','entityRegistry','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'1','resourceCategories','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'1','eventCategories','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'1','messageTemplates','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'1','entityLogs','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'1','entityCategories','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'1','networkLogs','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'1','eventSchedules','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,'1','alertSchedules','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'1','appointmentSchedules','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,'1','eventLogs','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,'1','subscriberRegistry','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'1','subscriberLogs','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,'1','DocStatusType','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'1','systemLogs','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'1','comSettings','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,'1','apiQueue','schedular',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,'1',NULL,NULL,'/var/www/html/qr/','static/tmp/','myimage.png','n1j2rzpbva','qr_myimage.png','user123','active','qr_link',NULL,NULL,NULL,NULL),(21,'1',NULL,NULL,'/var/www/html/qr/','static/tmp/','myimage.png','l4zgfxs2ph','qr_myimage.png','user123','active','qr_link',NULL,NULL,NULL,NULL),(34,'1',NULL,NULL,'/var/www/html/qr/','static/tmp/','myimage.png','mot8pyxp8w','qr_myimage.png','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(35,'1',NULL,NULL,'/var/www/html/qr/','static/tmp/','myimage.png','nz703pm35d','qr_myimage.png','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(36,'1',NULL,NULL,'/var/www/html/qr/','static/tmp/','myimage.png','ilrqsw7htb','qr_myimage.png','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(37,'1',NULL,NULL,'/var/www/html/qr/','static/tmp/','myimage.png','q5033fljm1','qr_myimage.png','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(38,'1',NULL,NULL,'1,foo,pass','/upload/','sahiq.jpg','34picvyymm','qr_sahiq.jpg','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(39,'1',NULL,NULL,'139.14.11.65,2222,foo,pass','/upload/','sahiq.jpg','l3v6fljprt','qr_sahiq.jpg','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(40,'1',NULL,NULL,'139.14.11.65,2222,foo,pass','/upload/','sahiq.jpg','ytleghd4j5','qr_sahiq.jpg','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(41,'1',NULL,NULL,'139.14.11.65,2222,foo,pass','/upload/','sahiq.jpg','kle2cayfm2','qr_sahiq.jpg','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(42,'1',NULL,NULL,'139.14.11.65,2222,foo,pass','/upload/','sahiq.jpg','bfmxg4h8vw','qr_sahiq.jpg','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(43,'1',NULL,NULL,'139.14.11.65,2222,foo,pass','/upload/','sahiq.jpg','148b95setl','qr_sahiq.jpg','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(44,'1',NULL,NULL,'139.14.11.65,2222,foo,pass','/upload/','sahiq.jpg','z75489lq8g','qr_sahiq.jpg','admin_user','active','qr_link',NULL,NULL,NULL,NULL),(45,'1',NULL,NULL,'139.14.11.65,2222,foo,pass','/upload/','sahiq.jpg','i6knc1lwhx','qr_sahiq.jpg','admin_user','active','qr_link',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `qrlinks` ENABLE KEYS */;
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
