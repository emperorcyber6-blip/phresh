<?php
/**
 * Phresh BizTrack Enterprise - POS & Inventory System
 * Stack: PHP 8.2, PDO MySQL 8.0, Tailwind CSS
 */

$pageTitle = "Phresh BizTrack - POS & Inventory Management System";
$currentNav = "biztrack";

require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/classes/BizTrack.php';

$db = Database::getInstance()->getConnection();
$biztrack = new BizTrack($db);
$inventory = $biztrack->getInventory();

include 'header.php';
?>

<div class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-white/10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
            <div class="inline-flex items-center gap-2 bg-red-950 border border-red-500/40 text-red-400 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                <span class="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                <span>PHP 8.2 POS Cash Register Engine</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-white">Phresh BizTrack POS & Inventory</h1>
            <p class="text-gray-300 text-xs sm:text-sm mt-1">
                Retail point-of-sale catalog, stock reordering alerts, receipt printing, and sales accounting.
            </p>
        </div>
    </div>
</div>

<section class="py-8 bg-slate-50 min-h-[600px]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <!-- Inventory Catalog Table -->
        <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div class="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <div>
                    <h3 class="text-base font-black text-slate-900">Current Print Press & Software Inventory</h3>
                    <p class="text-xs text-slate-500">Live MySQL 8.0 Stock Table</p>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs text-slate-700">
                    <thead class="bg-slate-100 text-slate-500 uppercase text-[10px] font-black tracking-wider">
                        <tr>
                            <th class="p-4">Item Code</th>
                            <th class="p-4">Description</th>
                            <th class="p-4">Category</th>
                            <th class="p-4">Unit Price (UGX)</th>
                            <th class="p-4">Stock Qty</th>
                            <th class="p-4 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 font-medium">
                        <?php foreach($inventory as $item): ?>
                        <tr class="hover:bg-slate-50 transition">
                            <td class="p-4 font-mono font-bold text-slate-900"><?php echo htmlspecialchars($item['code']); ?></td>
                            <td class="p-4 font-bold text-slate-900"><?php echo htmlspecialchars($item['item']); ?></td>
                            <td class="p-4 text-slate-600"><?php echo htmlspecialchars($item['category']); ?></td>
                            <td class="p-4 font-mono font-bold text-emerald-700">UGX <?php echo number_format($item['unit_price']); ?></td>
                            <td class="p-4 font-mono font-bold text-slate-900"><?php echo $item['stock']; ?> units</td>
                            <td class="p-4 text-right">
                                <span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
                                    In Stock
                                </span>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</section>

<?php include 'footer.php'; ?>
