<?php
/**
 * Phresh EduLedger ERP - Student Fee & Bursary Ledger System
 * Stack: PHP 8.2, PDO MySQL 8.0, Tailwind CSS
 */

$pageTitle = "Phresh EduLedger - School Bursary & Fee ERP Portal";
$currentNav = "eduledger";

require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/classes/EduLedger.php';

$db = Database::getInstance()->getConnection();
$eduledger = new EduLedger($db);

$paymentMessage = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'record_payment') {
    $studentId = (int)($_POST['student_id'] ?? 0);
    $amount = (float)($_POST['amount_ugx'] ?? 0);
    if ($studentId > 0 && $amount > 0) {
        $receipt = $eduledger->processPayment($studentId, $amount);
        $paymentMessage = "Payment of UGX " . number_format($amount) . " recorded successfully! Receipt Number: " . $receipt['receipt_number'];
    }
}

$students = $eduledger->getAllStudents();

include 'header.php';
?>

<div class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-white/10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
            <div class="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>PHP 8.2.14 & MySQL 8.0 Active Portal</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-white">Phresh EduLedger ERP System</h1>
            <p class="text-gray-300 text-xs sm:text-sm mt-1">
                Bursary management, termly fee ledgers, automated payment receipts, and balance roll-over tracking for Ugandan schools.
            </p>
        </div>

        <div class="flex items-center gap-3">
            <button onclick="document.getElementById('paymentModal').classList.remove('hidden')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition flex items-center gap-2 cursor-pointer">
                <span>+ Record Fee Payment</span>
            </button>
        </div>
    </div>
</div>

<?php if ($paymentMessage): ?>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
    <div class="p-4 bg-emerald-900/90 border border-emerald-500 text-emerald-200 text-xs font-bold rounded-2xl shadow-md flex items-center justify-between">
        <span>✅ <?php echo htmlspecialchars($paymentMessage); ?></span>
        <button onclick="this.parentElement.remove()" class="text-emerald-400 hover:text-white font-bold">✕</button>
    </div>
</div>
<?php endif; ?>

<section class="py-8 bg-slate-50 min-h-[600px]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <!-- Summary Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                <span class="block text-[11px] font-bold text-slate-400 uppercase">Total Enrolled Learners</span>
                <span class="text-2xl font-black text-slate-900 mt-1 block">1,240 Students</span>
            </div>
            <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                <span class="block text-[11px] font-bold text-slate-400 uppercase">Cleared Fee Payments</span>
                <span class="text-2xl font-black text-emerald-600 mt-1 block">845 Cleared</span>
            </div>
            <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                <span class="block text-[11px] font-bold text-slate-400 uppercase">Pending Fee Balances</span>
                <span class="text-2xl font-black text-amber-600 mt-1 block">395 Partial</span>
            </div>
            <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                <span class="block text-[11px] font-bold text-slate-400 uppercase">Term Revenue Collected</span>
                <span class="text-2xl font-black text-[#0B1B3D] mt-1 block">UGX 633.7M</span>
            </div>
        </div>

        <!-- Student Ledger Table -->
        <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div class="p-5 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h3 class="text-base font-black text-slate-900">Term ONE Fee Ledger & Bursaries</h3>
                    <p class="text-xs text-slate-500">Live MySQL database query executed via PHP 8.2 PDO driver</p>
                </div>
                <div class="flex items-center gap-2 text-xs">
                    <span class="font-bold text-slate-500">Filter Status:</span>
                    <select class="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl px-3 py-1.5 focus:outline-none">
                        <option value="ALL">All Statuses</option>
                        <option value="CLEARED">Cleared Only</option>
                        <option value="PARTIAL">Partial Balance</option>
                    </select>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs text-slate-700">
                    <thead class="bg-slate-100 text-slate-500 uppercase text-[10px] font-black tracking-wider">
                        <tr>
                            <th class="p-4">Reg No</th>
                            <th class="p-4">Student Name</th>
                            <th class="p-4">Class</th>
                            <th class="p-4">Total Fees (UGX)</th>
                            <th class="p-4">Paid Fees (UGX)</th>
                            <th class="p-4">Balance (UGX)</th>
                            <th class="p-4">Status</th>
                            <th class="p-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 font-medium">
                        <?php foreach($students as $stu): ?>
                        <tr class="hover:bg-slate-50 transition">
                            <td class="p-4 font-mono font-bold text-slate-900"><?php echo htmlspecialchars($stu['reg_no']); ?></td>
                            <td class="p-4 font-bold text-slate-900"><?php echo htmlspecialchars($stu['name']); ?></td>
                            <td class="p-4 text-slate-600"><?php echo htmlspecialchars($stu['class']); ?></td>
                            <td class="p-4 font-mono">UGX <?php echo number_format($stu['total_fees_ugx']); ?></td>
                            <td class="p-4 font-mono text-emerald-700 font-bold">UGX <?php echo number_format($stu['paid_fees_ugx']); ?></td>
                            <td class="p-4 font-mono text-amber-700 font-bold">UGX <?php echo number_format($stu['balance_ugx']); ?></td>
                            <td class="p-4">
                                <span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider <?php echo $stu['status'] === 'CLEARED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'; ?>">
                                    <?php echo $stu['status']; ?>
                                </span>
                            </td>
                            <td class="p-4 text-right">
                                <button onclick="openPaymentFor(<?php echo $stu['id']; ?>, '<?php echo addslashes($stu['name']); ?>')" class="bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg transition">
                                    Receipt & Pay
                                </button>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</section>

<!-- Fee Payment Modal -->
<div id="paymentModal" class="hidden fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white border border-slate-200 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 class="text-lg font-black text-slate-900">Record PHP Fee Payment</h3>
            <button onclick="document.getElementById('paymentModal').classList.add('hidden')" class="text-slate-400 hover:text-slate-700 font-bold">✕</button>
        </div>

        <form method="POST" action="eduledger.php" class="space-y-4">
            <input type="hidden" name="action" value="record_payment">
            
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Select Student</label>
                <select id="modal_student_id" name="student_id" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold focus:outline-none">
                    <?php foreach($students as $stu): ?>
                        <option value="<?php echo $stu['id']; ?>"><?php echo htmlspecialchars($stu['name']); ?> (Bal: UGX <?php echo number_format($stu['balance_ugx']); ?>)</option>
                    <?php endforeach; ?>
                </select>
            </div>

            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Payment Amount (UGX)</label>
                <input type="number" name="amount_ugx" value="150000" step="5000" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-mono font-bold focus:outline-none" required />
            </div>

            <div class="pt-2 flex items-center gap-3 justify-end">
                <button type="button" onclick="document.getElementById('paymentModal').classList.add('hidden')" class="px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition">
                    Cancel
                </button>
                <button type="submit" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition">
                    Dispatch Receipt & Save
                </button>
            </div>
        </form>
    </div>
</div>

<script>
function openPaymentFor(id, name) {
    document.getElementById('modal_student_id').value = id;
    document.getElementById('paymentModal').classList.remove('hidden');
}
</script>

<?php include 'footer.php'; ?>
