<?php
/**
 * Phresh EduLedger - School Bursary & Fee Financial ERP
 * PHP 8.2 OOP Implementation
 */

declare(strict_types=1);

class EduLedger {
    private ?PDO $db;

    public function __construct(?PDO $db) {
        $this->db = $db;
    }

    /**
     * Compute fee payment status
     */
    public function computeStatus(float $totalFees, float $paidFees): string {
        $balance = $totalFees - $paidFees;
        if ($balance <= 0) {
            return 'CLEARED';
        }
        if ($paidFees > 0) {
            return 'PARTIAL';
        }
        return 'UNPAID';
    }

    /**
     * Process student payment receipt
     */
    public function processPayment(int $studentId, float $amountUGX): array {
        $receiptNumber = 'RCP-2026-' . sprintf('%05d', rand(1000, 99999));
        return [
            'success' => true,
            'receipt_number' => $receiptNumber,
            'student_id' => $studentId,
            'amount_paid_ugx' => $amountUGX,
            'timestamp' => date('Y-m-d H:i:s'),
            'dispatched_by' => 'Phresh EduLedger Finance Engine'
        ];
    }

    /**
     * Retrieve student list
     */
    public function getAllStudents(): array {
        return [
            ['id' => 1, 'reg_no' => 'STU/2026/001', 'name' => 'ACHEMA DENIS', 'class' => 'S.1 A', 'total_fees_ugx' => 750000, 'paid_fees_ugx' => 750000, 'balance_ugx' => 0, 'status' => 'CLEARED'],
            ['id' => 2, 'reg_no' => 'STU/2026/002', 'name' => 'ADUKULE GEOFREY', 'class' => 'S.1 A', 'total_fees_ugx' => 750000, 'paid_fees_ugx' => 450000, 'balance_ugx' => 300000, 'status' => 'PARTIAL'],
            ['id' => 3, 'reg_no' => 'STU/2026/003', 'name' => 'AHAISIBWE LILIAN', 'class' => 'S.1 A', 'total_fees_ugx' => 750000, 'paid_fees_ugx' => 750000, 'balance_ugx' => 0, 'status' => 'CLEARED'],
            ['id' => 4, 'reg_no' => 'STU/2026/004', 'name' => 'ALINAITWE AGNESS', 'class' => 'S.1 B', 'total_fees_ugx' => 750000, 'paid_fees_ugx' => 200000, 'balance_ugx' => 550000, 'status' => 'PARTIAL']
        ];
    }
}
