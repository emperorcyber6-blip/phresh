<?php
/**
 * Phresh Tech Media Services - Interactive Portfolio & Case Studies
 * Stack: PHP 8.2, PDO MySQL 8.0, Tailwind CSS
 */

$pageTitle = "Portfolio & Engineering Case Studies - Phresh Tech Media Services";
$currentNav = "portfolio";

require_once __DIR__ . '/config/database.php';

// Media Portfolio Items
$portfolioItems = [
    [
        'title' => 'EduLedger Fee Collection & Audit Dashboard',
        'category' => 'Database Systems',
        'image' => '/hero/software.jpg',
        'client' => 'Mengo Senior School',
        'metric' => '100% Fee Accounting Accuracy',
        'desc' => 'Custom PHP/MySQL desktop & web ERP tracking bursary receipts, partial payments, and audit logs.'
    ],
    [
        'title' => 'Phresh Rank Core Report Card Generator',
        'category' => 'Database Systems',
        'image' => '/hero/software.jpg',
        'client' => 'Lubiri Secondary School',
        'metric' => '5,000+ Reports in < 2 Mins',
        'desc' => 'NCDC competence-based grading engine with instant parent PDF report card generation.'
    ],
    [
        'title' => 'High-Definition Water-Resistant PVC Student ID Cards',
        'category' => 'Commercial Printing',
        'image' => '/hero/printing.jpg',
        'client' => 'St. Lawrence Schools',
        'metric' => '12,000+ Cards Printed',
        'desc' => '300gsm laminated PVC identity badges with security barcode encoding and custom lanyards.'
    ],
    [
        'title' => 'Corporate 3D Vector Brand Identity & School Crests',
        'category' => 'Graphic Design',
        'image' => '/hero/printing.jpg',
        'client' => 'Kasenge Modern SS',
        'metric' => 'Complete Rebrand Package',
        'desc' => '3D vector emblem design, official letterheads, promotional banners, and brand style guides.'
    ],
    [
        'title' => 'Institutional School Web Portal & Admission System',
        'category' => 'Web Development',
        'image' => '/hero/software.jpg',
        'client' => 'Kibuli SS',
        'metric' => '25,000 Monthly Visitors',
        'desc' => 'Responsive PHP web portal with online admission forms, term schedules, and parent announcements.'
    ],
    [
        'title' => 'Serialized Carbonized Duplicate Receipt Books',
        'category' => 'Commercial Printing',
        'image' => '/hero/printing.jpg',
        'client' => 'Old Kampala SS',
        'metric' => '500+ Books Delivered',
        'desc' => 'Official audit-ready duplicate receipt books with anti-fraud sequential numbering.'
    ]
];

// Engineering Case Studies
$caseStudies = [
    [
        'title' => 'Automating Competency-Based NCDC Marks & Report Cards',
        'system' => 'Phresh Rank Core Engine',
        'problem' => 'Schools spent 3+ weeks manually tabulating UNEB grades, average scores, and class ranks for thousands of students, causing reporting delays and calculation errors.',
        'solution' => 'Engineered an offline-first PHP 8.2 report generator running SQLite/MySQL locally. Automated descriptor evaluation, grade points, and batch PDF generation.',
        'metrics' => [
            'Time Saved' => '95% faster report generation',
            'Error Rate' => '0% arithmetic calculation errors',
            'Scale' => 'Over 50+ secondary schools in Uganda'
        ]
    ],
    [
        'title' => 'Streamlining Multi-Campus School Bursary & Fee Collections',
        'system' => 'Phresh EduLedger ERP',
        'problem' => 'Paper receipt books resulted in unverified partial payments, uncollected fee balances, and auditing discrepancies across bursary desks.',
        'solution' => 'Deploys a central PHP/MySQL ledger ledger logging instant receipts, student balance lookup, SMS parent payment notifications, and daily cashier shift closing.',
        'metrics' => [
            'Revenue Recovery' => 'UGX 120M+ uncollected fees recovered',
            'Audit Speed' => 'Instant end-of-term financial audit',
            'Uptime' => '99.9% offline fallback capability'
        ]
    ]
];

include 'header.php';
?>

<div class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
            <span class="text-xs font-black uppercase tracking-widest text-emerald-400">Proven Results Across Uganda</span>
            <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">Portfolio & Engineering Case Studies</h1>
            <p class="text-gray-300 text-sm max-w-2xl mt-2">
                Explore our media productions, commercial print press showcases, and custom database engineering projects across schools and enterprises.
            </p>
        </div>
        <div>
            <a href="contact.php?product=Case%20Study%20PDF%20Request" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black px-6 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2">
                <span>📄 Download Case Study PDF Report</span>
            </a>
        </div>
    </div>
</div>

<section class="py-12 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Media & Visual Portfolio Grid -->
        <div class="space-y-6">
            <div class="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 class="text-2xl font-black text-slate-900 tracking-tight">Media & Visual Showcase</h2>
                    <p class="text-xs text-slate-500">Selected graphic design, printing press, and software projects</p>
                </div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <?php foreach ($portfolioItems as $item): ?>
                <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
                    <div class="h-48 bg-slate-900 relative overflow-hidden">
                        <img src="<?php echo $item['image']; ?>" alt="<?php echo htmlspecialchars($item['title']); ?>" class="w-full h-full object-cover opacity-80" />
                        <span class="absolute top-3 left-3 bg-[#0B1B3D]/90 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full border border-white/20">
                            <?php echo $item['category']; ?>
                        </span>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                            <span class="text-[11px] font-bold text-emerald-700 block"><?php echo $item['client']; ?></span>
                            <h3 class="font-black text-slate-900 text-base leading-snug mt-0.5"><?php echo $item['title']; ?></h3>
                            <p class="text-xs text-slate-600 mt-2 leading-relaxed"><?php echo $item['desc']; ?></p>
                        </div>
                        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                            <span class="font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg text-[10px]"><?php echo $item['metric']; ?></span>
                            <a href="estimator.php" class="text-[#8B0000] font-black hover:underline">Get Similar Quote →</a>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Engineering Case Studies -->
        <div class="space-y-6 pt-6">
            <div class="border-b border-slate-200 pb-4">
                <span class="text-xs font-black uppercase tracking-widest text-[#1E7E34]">Problem - Solution - Metrics</span>
                <h2 class="text-2xl font-black text-slate-900 tracking-tight mt-1">Engineering Case Studies</h2>
            </div>

            <div class="space-y-6">
                <?php foreach ($caseStudies as $cs): ?>
                <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                        <div>
                            <span class="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-1">
                                <?php echo $cs['system']; ?>
                            </span>
                            <h3 class="text-xl font-black text-slate-900"><?php echo $cs['title']; ?></h3>
                        </div>
                        <a href="contact.php?product=<?php echo urlencode($cs['system']); ?>" class="bg-[#0B1B3D] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-800 transition">
                            Request Architecture Brief
                        </a>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">
                        <div class="p-4 bg-red-50/50 border border-red-100 rounded-2xl">
                            <h4 class="font-black text-[#8B0000] uppercase tracking-wider mb-2">The Operational Challenge</h4>
                            <p class="text-slate-700"><?php echo $cs['problem']; ?></p>
                        </div>
                        <div class="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl">
                            <h4 class="font-black text-[#1E7E34] uppercase tracking-wider mb-2">Our Engineering Solution</h4>
                            <p class="text-slate-700"><?php echo $cs['solution']; ?></p>
                        </div>
                    </div>

                    <div class="grid sm:grid-cols-3 gap-4 pt-2">
                        <?php foreach ($cs['metrics'] as $key => $val): ?>
                        <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                            <span class="block text-slate-500 text-[10px] uppercase font-bold"><?php echo $key; ?></span>
                            <span class="block text-base font-black text-slate-900 mt-0.5"><?php echo $val; ?></span>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>

    </div>
</section>

<?php include 'footer.php'; ?>
