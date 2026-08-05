<?php
/**
 * Phresh Tech Media Services - Database Configuration
 * PHP 8.2 PDO MySQL 8.0 Connection Handler
 */

declare(strict_types=1);

class Database {
    private static ?Database $instance = null;
    private ?PDO $conn = null;

    private string $host = '127.0.0.1';
    private string $db_name = 'phreshtech_db';
    private string $username = 'phresh_user';
    private string $password = 'PhreshTech#2026';
    private int $port = 3306;

    private function __construct() {
        try {
            $dsn = "mysql:host={$this->host};port={$this->port};dbname={$this->db_name};charset=utf8mb4";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"
            ];
            $this->conn = new PDO($dsn, $username, $password, $options);
        } catch (PDOException $e) {
            // Fallback gracefully for demo environment
            $this->conn = null;
        }
    }

    public static function getInstance(): Database {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function getConnection(): ?PDO {
        return $this->conn;
    }
}
