<?php
/**
 * Phresh Rank Core - NCDC & UNEB Automated Marksheet System
 * PHP 8.2 OOP Implementation
 */

declare(strict_types=1);

class RankCore {
    private ?PDO $db;

    public function __construct(?PDO $db) {
        $this->db = $db;
    }

    /**
     * Compute NCDC/UNEB Grade based on average marks
     */
    public function calculateGrade(float $avgMark): array {
        if ($avgMark >= 80) return ['grade' => 'D1', 'remark' => 'Distinction One'];
        if ($avgMark >= 75) return ['grade' => 'D2', 'remark' => 'Distinction Two'];
        if ($avgMark >= 65) return ['grade' => 'C3', 'remark' => 'Credit Three'];
        if ($avgMark >= 60) return ['grade' => 'C4', 'remark' => 'Credit Four'];
        if ($avgMark >= 55) return ['grade' => 'C5', 'remark' => 'Credit Five'];
        if ($avgMark >= 50) return ['grade' => 'C6', 'remark' => 'Credit Six'];
        if ($avgMark >= 45) return ['grade' => 'P7', 'remark' => 'Pass Seven'];
        if ($avgMark >= 40) return ['grade' => 'P8', 'remark' => 'Pass Eight'];
        return ['grade' => 'F9', 'remark' => 'Fail Nine'];
    }

    /**
     * Calculate term average mark
     */
    public function computeAverage(float $bot, float $mot, float $eot): float {
        return round(($bot * 0.2) + ($mot * 0.3) + ($eot * 0.5), 1);
    }

    public function getMarksheets(): array {
        return [
            ['id' => 1, 'student_name' => 'ACHEMA DENIS', 'class' => 'S.1 A', 'subject' => 'Biology', 'bot' => 75, 'mot' => 80, 'eot' => 82, 'avg' => 79, 'grade' => 'D1', 'remark' => 'Distinction One'],
            ['id' => 2, 'student_name' => 'ADUKULE GEOFREY', 'class' => 'S.1 A', 'subject' => 'Biology', 'bot' => 62, 'mot' => 68, 'eot' => 70, 'avg' => 67, 'grade' => 'C3', 'remark' => 'Credit Three'],
            ['id' => 3, 'student_name' => 'AHAISIBWE LILIAN', 'class' => 'S.1 A', 'subject' => 'Biology', 'bot' => 88, 'mot' => 92, 'eot' => 90, 'avg' => 90, 'grade' => 'D1', 'remark' => 'Exceptional Performance']
        ];
    }
}
