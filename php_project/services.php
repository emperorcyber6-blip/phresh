<?php
/**
 * Phresh Tech Media Services - Services & Pricing Catalogue
 * Stack: PHP 8.2, MySQL 8.0, Tailwind CSS
 */

$pageTitle = "Products & Services Catalogue - Phresh Tech Media Services";
$currentNav = "services";

include 'header.php';
?>

<div class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
    <div class="max-w-7xl mx-auto space-y-3">
        <span class="text-xs font-black uppercase tracking-widest text-emerald-400">Uganda Commercial Catalogue (UGX)</span>
        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">Software Products & Print Press Pricing</h1>
        <p class="text-gray-300 text-sm max-w-2xl">
            Transparent pricing for custom PHP school ERP software, UNEB report generators, point of sale software, receipt books, and 3D signage.
        </p>
    </div>
</div>

<section class="py-12 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Item 1 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                    <span class="text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">Educational Software</span>
                    <h3 class="text-lg font-black text-slate-900 mt-3">Phresh Rank Core (New License)</h3>
                    <p class="text-xs text-slate-600 mt-2">
                        UNEB & NCDC revised curriculum marksheet system with termly subscription of 100k.
                    </p>
                </div>
                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                        <span class="block text-[10px] text-slate-400 uppercase font-bold">Standard Price</span>
                        <span class="text-lg font-black text-[#1E7E34]">UGX 450,000</span>
                    </div>
                    <a href="contact.php?product=rankcore" class="bg-[#1E7E34] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition">
                        Order Now
                    </a>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                    <span class="text-[10px] font-black uppercase bg-amber-100 text-amber-800 px-3 py-1 rounded-full">Offline Standalone</span>
                    <h3 class="text-lg font-black text-slate-900 mt-3">Phresh Rank Core (Offline Edition)</h3>
                    <p class="text-xs text-slate-600 mt-2">
                        One-time payment for local desktop school server installation without internet dependencies.
                    </p>
                </div>
                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                        <span class="block text-[10px] text-slate-400 uppercase font-bold">One-Time Fee</span>
                        <span class="text-lg font-black text-[#1E7E34]">UGX 350,000</span>
                    </div>
                    <a href="contact.php?product=rankcore_offline" class="bg-[#1E7E34] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition">
                        Order Now
                    </a>
                </div>
            </div>

            <!-- Item 3 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                    <span class="text-[10px] font-black uppercase bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Church & NGO ERP</span>
                    <h3 class="text-lg font-black text-slate-900 mt-3">Church Management System</h3>
                    <p class="text-xs text-slate-600 mt-2">
                        Tithe tracking, membership database, Sunday attendance, and financial statement generator.
                    </p>
                </div>
                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                        <span class="block text-[10px] text-slate-400 uppercase font-bold">One-Time Fee</span>
                        <span class="text-lg font-black text-[#1E7E34]">UGX 400,000</span>
                    </div>
                    <a href="contact.php?product=church_manager" class="bg-[#1E7E34] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition">
                        Order Now
                    </a>
                </div>
            </div>

            <!-- Item 4 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                    <span class="text-[10px] font-black uppercase bg-red-100 text-red-800 px-3 py-1 rounded-full">Commercial Press</span>
                    <h3 class="text-lg font-black text-slate-900 mt-3">Custom Receipt Books (Book of 100)</h3>
                    <p class="text-xs text-slate-600 mt-2">
                        Duplicate / Triplicate carbonless self-copying receipt books with school or business logo.
                    </p>
                </div>
                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                        <span class="block text-[10px] text-slate-400 uppercase font-bold">Per Book</span>
                        <span class="text-lg font-black text-[#8B0000]">UGX 25,000</span>
                    </div>
                    <a href="contact.php?product=receipt_book" class="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition">
                        Order Print
                    </a>
                </div>
            </div>

            <!-- Item 5 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                    <span class="text-[10px] font-black uppercase bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Signage & Branding</span>
                    <h3 class="text-lg font-black text-slate-900 mt-3">3D Luminous Signboards & Branding</h3>
                    <p class="text-xs text-slate-600 mt-2">
                        Laser cut 3D acrylic LED lighted signage for commercial buildings, shops, and institutions.
                    </p>
                </div>
                <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                        <span class="block text-[10px] text-slate-400 uppercase font-bold">Custom Quote</span>
                        <span class="text-sm font-black text-slate-700">Contact Us</span>
                    </div>
                    <a href="contact.php?product=3d_branding" class="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs px-4 py-2 rounded-xl transition">
                        Get Quote
                    </a>
                </div>
            </div>

        </div>

    </div>
</section>

<?php include 'footer.php'; ?>
