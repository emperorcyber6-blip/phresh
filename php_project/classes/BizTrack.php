<?php
/**
 * Phresh BizTrack Enterprise - POS & Inventory ERP
 * PHP 8.2 OOP Implementation
 */

declare(strict_types=1);

class BizTrack {
    private ?PDO $db;

    public function __construct(?PDO $db) {
        $this->db = $db;
    }

    public function getInventory(): array {
        return [
            ['id' => 1, 'code' => 'PRN-001', 'item' => 'A4 Printing Paper Ream (80gsm)', 'category' => 'Stationery', 'unit_price' => 22000, 'stock' => 145],
            ['id' => 2, 'code' => 'PRN-002', 'item' => 'PVC Identity Cards (Custom Printed)', 'category' => 'Printing', 'unit_price' => 8000, 'stock' => 500],
            ['id' => 3, 'code' => 'SYS-001', 'item' => 'Phresh EduLedger License (School ERP)', 'category' => 'Software', 'unit_price' => 400000, 'stock' => 99],
            ['id' => 4, 'code' => 'SYS-002', 'item' => 'Phresh Rank Core License (Marks generator)', 'category' => 'Software', 'unit_price' => 350000, 'stock' => 99]
        ];
    }

    public function calculateCartTotal(array $cart): float {
        $total = 0.0;
        foreach ($cart as $item) {
            $total += ($item['price'] ?? 0) * ($item['qty'] ?? 1);
        }
        return $total;
    }
}
