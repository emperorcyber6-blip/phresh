-- Phresh Tech Media Services - Production MySQL 8.0 Database Schema
-- Location: Kampala, Uganda (Kasenge - Nakawuka Road)

CREATE DATABASE IF NOT EXISTS `phreshtech_production_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `phreshtech_production_db`;

-- 1. EduLedger Student Registry
CREATE TABLE IF NOT EXISTS `students` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `reg_no` VARCHAR(30) NOT NULL UNIQUE,
  `name` VARCHAR(100) NOT NULL,
  `class_name` VARCHAR(20) NOT NULL,
  `stream` VARCHAR(10) DEFAULT 'A',
  `total_fees_ugx` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `paid_fees_ugx` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `balance_ugx` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `status` ENUM('CLEARED', 'PARTIAL', 'UNPAID') DEFAULT 'UNPAID',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Rank Core UNEB Marksheet Registry
CREATE TABLE IF NOT EXISTS `marksheets` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `student_name` VARCHAR(100) NOT NULL,
  `class_name` VARCHAR(20) NOT NULL,
  `term` VARCHAR(20) NOT NULL DEFAULT 'Term ONE',
  `subject` VARCHAR(50) NOT NULL,
  `bot_marks` INT NOT NULL DEFAULT 0,
  `mot_marks` INT NOT NULL DEFAULT 0,
  `eot_marks` INT NOT NULL DEFAULT 0,
  `avg_marks` DECIMAL(5,2) NOT NULL DEFAULT 0.00,
  `grade` VARCHAR(5) NOT NULL,
  `remarks` VARCHAR(100) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. BizTrack POS & Printing Inventory
CREATE TABLE IF NOT EXISTS `biztrack_inventory` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `item_code` VARCHAR(30) NOT NULL UNIQUE,
  `item_name` VARCHAR(150) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `unit_price_ugx` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `stock_qty` INT NOT NULL DEFAULT 0,
  `reorder_level` INT NOT NULL DEFAULT 10,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. RentLedger Tenancy Registry
CREATE TABLE IF NOT EXISTS `rent_tenants` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `tenant_name` VARCHAR(100) NOT NULL,
  `property_name` VARCHAR(100) NOT NULL,
  `room_no` VARCHAR(20) NOT NULL,
  `monthly_rent_ugx` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `paid_this_month` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `status` ENUM('PAID', 'OVERDUE', 'PARTIAL') DEFAULT 'OVERDUE'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Initial Seed Data
INSERT INTO `students` (`reg_no`, `name`, `class_name`, `stream`, `total_fees_ugx`, `paid_fees_ugx`, `balance_ugx`, `status`) VALUES
('STU/2026/001', 'ACHEMA DENIS', 'S.1', 'A', 750000.00, 750000.00, 0.00, 'CLEARED'),
('STU/2026/002', 'ADUKULE GEOFREY', 'S.1', 'A', 750000.00, 450000.00, 300000.00, 'PARTIAL'),
('STU/2026/003', 'AHAISIBWE LILIAN', 'S.1', 'A', 750000.00, 750000.00, 0.00, 'CLEARED');
