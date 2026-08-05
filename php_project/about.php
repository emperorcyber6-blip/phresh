<?php
/**
 * Phresh Tech Media Services - About Directors Page
 * Stack: PHP 8.2, MySQL 8.0, Tailwind CSS
 */

$pageTitle = "About Directors & Leadership - Phresh Tech Media Services";
$currentNav = "about";

include 'header.php';
?>

<div class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
    <div class="max-w-7xl mx-auto space-y-4">
        <span class="text-xs font-black uppercase tracking-widest text-emerald-400">Kasenge - Nakawuka Road, Kampala</span>
        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">About Phresh Tech Media Services</h1>
        <p class="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Registered ICT & Print Press company specializing in custom PHP & MySQL educational software, UNEB report card automation, POS inventory databases, commercial graphic printing, and 3D luminous branding.
        </p>
    </div>
</div>

<!-- Board of Directors Section -->
<section class="py-16 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="text-center max-w-2xl mx-auto space-y-2">
            <span class="text-xs font-black uppercase tracking-widest text-[#1E7E34]">Executive Leadership</span>
            <h2 class="text-3xl font-black text-slate-900 tracking-tight">Board of Directors</h2>
            <p class="text-xs text-slate-600">
                Directing tech innovation and commercial printing excellence in Kampala, Uganda.
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
            
            <!-- Director 1 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition space-y-4">
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-md">
                        MI
                    </div>
                    <div>
                        <h3 class="text-xl font-black text-slate-900">Mulindwa Ibrahim</h3>
                        <p class="text-xs font-extrabold text-[#1E7E34] uppercase tracking-wider">Software Engineering Director</p>
                        <p class="text-xs text-slate-500 font-mono mt-0.5">📞 +256 701 432832</p>
                    </div>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Lead architect behind Phresh EduLedger ERP, Rank Core UNEB marksheet system, and database design. Oversees software engineering operations, PHP 8.2 backend architecture, and school data migrations.
                </p>
            </div>

            <!-- Director 2 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition space-y-4">
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-red-700 to-red-950 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-md">
                        SB
                    </div>
                    <div>
                        <h3 class="text-xl font-black text-slate-900">Steven Bagalana</h3>
                        <p class="text-xs font-extrabold text-[#8B0000] uppercase tracking-wider">Operations & Print Press Director</p>
                        <p class="text-xs text-slate-500 font-mono mt-0.5">📞 +256 787 912832</p>
                    </div>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Directs commercial graphic printing press, 3D luminous signage fabrication, high-volume PVC student ID cards, receipt books manufacturing, and corporate media press operations.
                </p>
            </div>

        </div>

    </div>
</section>

<?php include 'footer.php'; ?>
