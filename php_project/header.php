<?php
/**
 * Phresh Tech Media Services - PHP Header Template Partial
 * Stack: PHP 8.2, MySQL 8.0, Tailwind CSS
 * Location: Kasenge - Nakawuka Road, Kampala, Uganda
 */

if (!isset($pageTitle)) {
    $pageTitle = 'Phresh Tech Media Services - Software & Print Press Kampala';
}
if (!isset($currentNav)) {
    $currentNav = 'home';
}
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?></title>
    <!-- Tailwind CSS Engine -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        phreshGreen: '#1E7E34',
                        phreshRed: '#8B0000',
                        phreshNavy: '#0B1B3D',
                    }
                }
            }
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 flex flex-col min-h-screen">

<!-- Top Utility Notification Bar -->
<div class="bg-gradient-to-r from-[#0B1B3D] via-[#091530] to-[#122A5C] text-white text-xs py-2 px-4 border-b border-white/10">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-4">
            <span class="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                PHP 8.2 & MySQL 8.0 Enterprise System
            </span>
            <span class="hidden md:inline text-gray-400">|</span>
            <span class="hidden md:inline text-gray-300">📍 Kasenge - Nakawuka Rd, Kampala, Uganda</span>
        </div>
        <div class="flex items-center gap-4 font-semibold text-gray-200">
            <a href="tel:+256701432832" class="hover:text-emerald-400 transition">📞 +256 701 432832</a>
            <a href="tel:+256787912832" class="hover:text-emerald-400 transition">📞 +256 787 912832</a>
            <a href="mailto:phreshtechmedia@gmail.com" class="hover:text-emerald-400 transition hidden sm:inline">✉️ phreshtechmedia@gmail.com</a>
        </div>
    </div>
</div>

<!-- Main Navigation Header -->
<header class="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Brand Logo & Title -->
        <a href="index.php" class="flex items-center gap-3 group">
            <div class="w-12 h-12 bg-gradient-to-br from-[#1E7E34] to-[#8B0000] rounded-2xl flex items-center justify-center shadow-lg text-white font-black text-xl tracking-tighter group-hover:scale-105 transition-transform">
                PT
            </div>
            <div>
                <span class="block text-lg font-black tracking-tight text-[#0B1B3D] leading-none">
                    PHRESH TECH
                </span>
                <span class="block text-xs font-extrabold tracking-widest text-[#1E7E34] uppercase mt-0.5">
                    MEDIA SERVICES (PHP/MySQL)
                </span>
            </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-1 text-sm font-bold text-slate-700">
            <a href="index.php" class="px-3 py-2 rounded-xl transition <?php echo $currentNav === 'home' ? 'text-[#1E7E34] bg-emerald-50 border border-emerald-200 shadow-sm' : 'hover:text-[#1E7E34] hover:bg-slate-50'; ?>">
                Home
            </a>
            <a href="services.php" class="px-3 py-2 rounded-xl transition <?php echo $currentNav === 'services' ? 'text-[#1E7E34] bg-emerald-50 border border-emerald-200 shadow-sm' : 'hover:text-[#1E7E34] hover:bg-slate-50'; ?>">
                Services
            </a>
            <a href="portfolio.php" class="px-3 py-2 rounded-xl transition <?php echo $currentNav === 'portfolio' ? 'text-[#1E7E34] bg-emerald-50 border border-emerald-200 shadow-sm' : 'hover:text-[#1E7E34] hover:bg-slate-50'; ?>">
                Portfolio
            </a>
            <a href="estimator.php" class="px-3 py-2 rounded-xl transition <?php echo $currentNav === 'estimator' ? 'text-[#1E7E34] bg-emerald-50 border border-emerald-200 shadow-sm' : 'hover:text-[#1E7E34] hover:bg-slate-50'; ?>">
                Quote Estimator
            </a>
            <a href="about.php" class="px-3 py-2 rounded-xl transition <?php echo $currentNav === 'about' ? 'text-[#1E7E34] bg-emerald-50 border border-emerald-200 shadow-sm' : 'hover:text-[#1E7E34] hover:bg-slate-50'; ?>">
                About Us
            </a>
            <a href="contact.php" class="px-3 py-2 rounded-xl transition <?php echo $currentNav === 'contact' ? 'text-[#1E7E34] bg-emerald-50 border border-emerald-200 shadow-sm' : 'hover:text-[#1E7E34] hover:bg-slate-50'; ?>">
                Contact
            </a>
        </nav>

        <!-- Right Quick Actions & WhatsApp Trigger -->
        <div class="flex items-center gap-3">
            <a href="https://wa.me/256757848094?text=Hello%20Phresh%20Tech%20Media,%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition flex items-center gap-1.5">
                <span>💬 WhatsApp</span>
                <span class="hidden lg:inline">+256 757 848 094</span>
            </a>
            <a href="estimator.php" class="bg-[#8B0000] hover:bg-red-800 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-md transition uppercase tracking-wider hidden sm:inline-block">
                Get Quote
            </a>
        </div>
    </div>
</header>
