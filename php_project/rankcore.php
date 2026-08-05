<?php
/**
 * Phresh Rank Core - UNEB & NCDC Automatic Marksheet Grading System
 * Stack: PHP 8.2, PDO MySQL 8.0, Tailwind CSS
 */

$pageTitle = "Phresh Rank Core - UNEB & NCDC Automatic Marksheet System";
$currentNav = "rankcore";

require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/classes/RankCore.php';

$db = Database::getInstance()->getConnection();
$rankCore = new RankCore($db);
$marksheets = $rankCore->getMarksheets();

include 'header.php';
?>

<div class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-white/10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
            <div class="inline-flex items-center gap-2 bg-amber-950 border border-amber-500/40 text-amber-400 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>PHP 8.2 & NCDC Revised Curriculum Scale</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-white">Phresh Rank Core UNEB System</h1>
            <p class="text-gray-300 text-xs sm:text-sm mt-1">
                Automated BOT (20%), MOT (30%), and EOT (50%) mark entry, term report card generation, and grade computation (D1 to F9).
            </p>
        </div>
    </div>
</div>

<section class="py-8 bg-slate-50 min-h-[600px]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <!-- Summary Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                <span class="block text-[11px] font-bold text-slate-400 uppercase">Graded Subjects</span>
                <span class="text-2xl font-black text-slate-900 mt-1 block">14 Subjects</span>
            </div>
            <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                <span class="block text-[11px] font-bold text-slate-400 uppercase">Distinction Pass Rate</span>
                <span class="text-2xl font-black text-amber-600 mt-1 block">78.4% (D1 - D2)</span>
            </div>
            <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                <span class="block text-[11px] font-bold text-slate-400 uppercase">Class Average Score</span>
                <span class="text-2xl font-black text-[#0B1B3D] mt-1 block">78.6%</span>
            </div>
        </div>

        <!-- Marksheets Table -->
        <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div class="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <div>
                    <h3 class="text-base font-black text-slate-900">S.1 Term ONE Biology Marksheets</h3>
                    <p class="text-xs text-slate-500">BOT (20%) + MOT (30%) + EOT (50%) Weighted Formula via PHP 8.2</p>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs text-slate-700">
                    <thead class="bg-slate-100 text-slate-500 uppercase text-[10px] font-black tracking-wider">
                        <tr>
                            <th class="p-4">Learner Name</th>
                            <th class="p-4">Class</th>
                            <th class="p-4">Subject</th>
                            <th class="p-4">BOT (20%)</th>
                            <th class="p-4">MOT (30%)</th>
                            <th class="p-4">EOT (50%)</th>
                            <th class="p-4">Weighted Avg</th>
                            <th class="p-4">UNEB Grade</th>
                            <th class="p-4">Remarks</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 font-medium">
                        <?php foreach($marksheets as $m): ?>
                        <tr class="hover:bg-slate-50 transition">
                            <td class="p-4 font-bold text-slate-900"><?php echo htmlspecialchars($m['student_name']); ?></td>
                            <td class="p-4 text-slate-600"><?php echo htmlspecialchars($m['class']); ?></td>
                            <td class="p-4 text-slate-600"><?php echo htmlspecialchars($m['subject']); ?></td>
                            <td class="p-4 font-mono"><?php echo $m['bot']; ?>%</td>
                            <td class="p-4 font-mono"><?php echo $m['mot']; ?>%</td>
                            <td class="p-4 font-mono"><?php echo $m['eot']; ?>%</td>
                            <td class="p-4 font-mono font-bold text-slate-900"><?php echo $m['avg']; ?>%</td>
                            <td class="p-4">
                                <span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800">
                                    <?php echo $m['grade']; ?>
                                </span>
                            </td>
                            <td class="p-4 text-slate-600 font-medium"><?php echo htmlspecialchars($m['remark']); ?></td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</section>

<?php include 'footer.php'; ?>
