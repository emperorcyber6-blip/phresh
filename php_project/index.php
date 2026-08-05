<?php
/**
 * Phresh Tech Media Services - PHP Index Landing Page
 * Stack: PHP 8.2, PDO MySQL 8.0, Tailwind CSS
 */

$pageTitle = "Phresh Tech Media Services - Empowering Kampala with Custom Software & Design";
$currentNav = "home";

require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/classes/EduLedger.php';
require_once __DIR__ . '/classes/RankCore.php';

$db = Database::getInstance()->getConnection();
$eduledger = new EduLedger($db);
$students = $eduledger->getAllStudents();

include 'header.php';
?>

<!-- High-Impact Hero Section -->
<section class="relative bg-gradient-to-br from-[#0B1B3D] via-[#08132B] to-[#122A5C] text-white py-16 lg:py-24 border-b border-white/10 overflow-hidden">
    <!-- Ambient Background Image -->
    <div class="absolute inset-0 z-0 opacity-25 bg-cover bg-center filter blur-[1px] scale-105 pointer-events-none" style="background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80');"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/95 to-[#0B1B3D]/80 pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Headline Content -->
            <div class="lg:col-span-7 space-y-8">
                
                <div class="inline-flex items-center gap-2.5 bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>PHP 8.2 & MySQL 8.0 Enterprise Suite</span>
                </div>

                <div class="space-y-4">
                    <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
                        <span class="block text-gray-100 text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-2">
                            Phresh Tech Media Services:
                        </span>
                        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-red-400">
                            Empowering Kampala with Custom Software & Design
                        </span>
                    </h1>
                    <p class="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                        NCDC & UNEB automated marks entry, fee collection ledgers, 3D branding, commercial graphic printing press, and enterprise point-of-sale systems in Kasenge - Nakawuka Road, Kampala, Uganda.
                    </p>
                </div>

                <!-- Call To Action Buttons -->
                <div class="flex flex-wrap items-center gap-4 pt-2">
                    <a href="services.php" class="bg-[#8B0000] hover:bg-red-800 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-red-900/40 transition-all duration-300 hover:scale-[1.03] text-xs sm:text-sm uppercase tracking-wider flex items-center gap-3">
                        <span>Get Started</span>
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>

                    <a href="eduledger.php" class="bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-bold px-7 py-4 rounded-2xl transition-all duration-300 text-xs sm:text-sm flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>Launch EduLedger PHP ERP</span>
                    </a>

                    <a href="contact.php" class="text-gray-300 hover:text-white font-bold text-xs sm:text-sm underline underline-offset-4 px-2 py-2">
                        Get Custom Quote &rarr;
                    </a>
                </div>

                <!-- Feature Badges -->
                <div class="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-300">
                    <div class="flex items-center gap-2">
                        <span class="text-emerald-400 font-bold">✓</span>
                        <span>EduLedger Fee ERP</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-emerald-400 font-bold">✓</span>
                        <span>Rank Core UNEB System</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-emerald-400 font-bold">✓</span>
                        <span>High-Res Print Press</span>
                    </div>
                </div>

            </div>

            <!-- Right Visual Interactive Card -->
            <div class="lg:col-span-5">
                <div class="bg-slate-900/90 border-2 border-white/15 rounded-3xl p-6 shadow-2xl space-y-6 backdrop-blur-lg">
                    <div class="flex items-center justify-between border-b border-white/10 pb-4">
                        <span class="text-xs font-mono text-emerald-400 font-bold uppercase">⚡ PHP 8.2 Database Query</span>
                        <span class="text-[10px] bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30">MySQL Live</span>
                    </div>

                    <div class="space-y-3">
                        <h3 class="text-sm font-black text-white uppercase tracking-wider">EduLedger Active Student Feed</h3>
                        <div class="space-y-2">
                            <?php foreach(array_slice($students, 0, 3) as $stu): ?>
                            <div class="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center text-xs">
                                <div>
                                    <div class="font-bold text-white"><?php echo htmlspecialchars($stu['name']); ?></div>
                                    <div class="text-[11px] text-gray-400"><?php echo htmlspecialchars($stu['reg_no']); ?> (<?php echo htmlspecialchars($stu['class']); ?>)</div>
                                </div>
                                <div class="text-right">
                                    <span class="inline-block text-[10px] font-black px-2 py-0.5 rounded <?php echo $stu['status'] === 'CLEARED' ? 'bg-emerald-900 text-emerald-300' : 'bg-amber-900 text-amber-300'; ?>">
                                        <?php echo $stu['status']; ?>
                                    </span>
                                    <div class="text-[11px] font-mono text-gray-300 mt-0.5">UGX <?php echo number_format($stu['paid_fees_ugx']); ?></div>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="p-4 bg-emerald-950/60 border border-emerald-500/30 rounded-2xl text-xs space-y-1">
                        <div class="font-bold text-emerald-400">PDO MySQL Query Result:</div>
                        <p class="text-gray-300 text-[11px] leading-relaxed">
                            PHP 8.2 PDO connection established cleanly. Registered 1,200+ active students across Kampala secondary schools.
                        </p>
                    </div>

                    <a href="eduledger.php" class="block text-center w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow transition">
                        Manage EduLedger PHP Portal &rarr;
                    </a>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- Core Product Modules Grid -->
<section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span class="text-xs font-black uppercase tracking-widest text-[#1E7E34]">Engineered for Uganda's Institutions</span>
            <h2 class="text-3xl font-black text-[#0B1B3D] tracking-tight">Our PHP 8.2 Software & Print Press Solutions</h2>
            <p class="text-slate-600 text-sm">
                Built specifically for Ugandan primary & secondary schools, businesses, and organizations requiring reliable local data persistence.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            
            <!-- Module 1: Phresh EduLedger -->
            <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 hover:shadow-xl transition-all border-t-4 border-t-emerald-600">
                <div class="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-black text-xl">
                    01
                </div>
                <h3 class="text-xl font-black text-slate-900">Phresh EduLedger ERP</h3>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Automated bursary tracking, termly fee ledgers, SMS receipt dispatch, and balance roll-overs for Ugandan schools.
                </p>
                <ul class="text-xs space-y-2 text-slate-700 font-medium">
                    <li class="flex items-center gap-2">✔ Instant Receipt Generation</li>
                    <li class="flex items-center gap-2">✔ Bursary & Scholar Discounts</li>
                    <li class="flex items-center gap-2">✔ Termly Balance Roll-overs</li>
                </ul>
                <a href="eduledger.php" class="inline-block text-xs font-black text-emerald-700 hover:text-emerald-800 uppercase tracking-wider pt-2">
                    Open EduLedger Portal &rarr;
                </a>
            </div>

            <!-- Module 2: Phresh Rank Core -->
            <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 hover:shadow-xl transition-all border-t-4 border-t-amber-500">
                <div class="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center font-black text-xl">
                    02
                </div>
                <h3 class="text-xl font-black text-slate-900">Phresh Rank Core (UNEB)</h3>
                <p class="text-xs text-slate-600 leading-relaxed">
                    NCDC revised curriculum & UNEB marksheet generator. Computes BOT, MOT, EOT tests with automatic grade allocation (D1 to F9).
                </p>
                <ul class="text-xs space-y-2 text-slate-700 font-medium">
                    <li class="flex items-center gap-2">✔ New Lower Secondary NCDC Scale</li>
                    <li class="flex items-center gap-2">✔ Instant Term Report Cards</li>
                    <li class="flex items-center gap-2">✔ Class Position Ranking Engine</li>
                </ul>
                <a href="rankcore.php" class="inline-block text-xs font-black text-amber-700 hover:text-amber-800 uppercase tracking-wider pt-2">
                    Open Rank Core Portal &rarr;
                </a>
            </div>

            <!-- Module 3: Phresh BizTrack & Printing -->
            <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 hover:shadow-xl transition-all border-t-4 border-t-red-700">
                <div class="w-12 h-12 bg-red-100 text-red-700 rounded-2xl flex items-center justify-center font-black text-xl">
                    03
                </div>
                <h3 class="text-xl font-black text-slate-900">BizTrack POS & Print Press</h3>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Retail point of sale, stock reordering alerts, receipt books printing, PVC student IDs, and 3D luminous signage branding.
                </p>
                <ul class="text-xs space-y-2 text-slate-700 font-medium">
                    <li class="flex items-center gap-2">✔ POS Cash Register & Barcodes</li>
                    <li class="flex items-center gap-2">✔ High-Definition Graphic Printing</li>
                    <li class="flex items-center gap-2">✔ 3D Signage & Branding</li>
                </ul>
                <a href="biztrack.php" class="inline-block text-xs font-black text-red-700 hover:text-red-800 uppercase tracking-wider pt-2">
                    Open BizTrack System &rarr;
                </a>
            </div>

        </div>

    </div>
</section>

<?php include 'footer.php'; ?>
