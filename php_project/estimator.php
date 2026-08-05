<?php
/**
 * Phresh Tech Media Services - Interactive Multi-Service Estimator
 * Stack: PHP 8.2, PDO MySQL 8.0, Tailwind CSS
 */

$pageTitle = "Multi-Service Cost Estimator & Quote Wizard - Phresh Tech Media";
$currentNav = "estimator";

require_once __DIR__ . '/config/database.php';

$submittedQuote = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $clientName = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL) ?? '';
    $org = filter_input(INPUT_POST, 'organization', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
    $estimatedTotal = filter_input(INPUT_POST, 'total_ugx', FILTER_VALIDATE_INT) ?? 0;
    $notes = filter_input(INPUT_POST, 'notes', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';

    if (!empty($clientName) && !empty($phone)) {
        $db = Database::getInstance()->getConnection();
        if ($db) {
            try {
                $stmt = $db->prepare("INSERT INTO quotes (client_name, phone, email, organization, estimated_total, details, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())");
                $stmt->execute([$clientName, $phone, $email, $org, $estimatedTotal, $notes]);
            } catch (Exception $e) {
                // DB logging fallback
            }
        }
        $submittedQuote = [
            'name' => $clientName,
            'phone' => $phone,
            'total' => $estimatedTotal
        ];
    }
}

include 'header.php';
?>

<div class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
    <div class="max-w-7xl mx-auto space-y-3">
        <span class="text-xs font-black uppercase tracking-widest text-emerald-400">3-Step Dynamic Quote Calculator</span>
        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">Interactive Multi-Service Estimator</h1>
        <p class="text-gray-300 text-sm max-w-2xl">
            Bundle services across Graphic Design, Commercial Printing, Custom Databases, Web Hosting, and Social Media Marketing with instant transparent UGX estimates.
        </p>
    </div>
</div>

<section class="py-12 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <?php if ($submittedQuote): ?>
        <div class="bg-emerald-900 text-white rounded-3xl p-8 mb-8 border border-emerald-500/40 shadow-xl space-y-4 text-center">
            <div class="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-2xl">
                ✓
            </div>
            <h2 class="text-2xl font-black">Quote Request Received!</h2>
            <p class="text-emerald-100 text-sm max-w-lg mx-auto">
                Thank you <strong><?php echo htmlspecialchars($submittedQuote['name']); ?></strong>. Your estimated project quote of <strong>UGX <?php echo number_format($submittedQuote['total']); ?></strong> has been sent to our sales team. We will call you at <strong><?php echo htmlspecialchars($submittedQuote['phone']); ?></strong> or email phreshtechmedia@gmail.com shortly.
            </p>
            <a href="estimator.php" class="inline-block bg-white text-emerald-950 font-black text-xs px-6 py-3 rounded-xl uppercase tracking-wider hover:bg-emerald-100 transition">
                Create Another Quote
            </a>
        </div>
        <?php endif; ?>

        <div class="grid lg:grid-cols-12 gap-8">
            
            <!-- Left Wizard Form -->
            <div class="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
                
                <!-- Step 1: Select Pillars -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
                        <span class="w-8 h-8 rounded-xl bg-[#0B1B3D] text-white font-black text-xs flex items-center justify-center">1</span>
                        <h3 class="text-lg font-black text-slate-900">Step 1: Select Operational Pillars & Quantities</h3>
                    </div>

                    <div class="space-y-4 text-xs">
                        <!-- Pillar 1 -->
                        <div class="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <span class="font-black text-slate-900 block text-sm">Graphic Design & Brand Identity</span>
                                <span class="text-slate-500">3D Vector Logo, School Crest, Letterheads & Brand Kit</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="font-mono font-bold text-emerald-700">UGX 150,000 / pkg</span>
                                <input type="number" id="qty-branding" value="0" min="0" onchange="calculateQuoteTotal()" class="w-20 p-2 bg-white border border-slate-300 rounded-xl font-mono text-center font-bold" />
                            </div>
                        </div>

                        <!-- Pillar 2 -->
                        <div class="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <span class="font-black text-slate-900 block text-sm">Commercial Printing & Copying</span>
                                <span class="text-slate-500">Serialized Carbonized Receipt Books (Per 100 pages)</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="font-mono font-bold text-emerald-700">UGX 25,000 / book</span>
                                <input type="number" id="qty-printing" value="0" min="0" onchange="calculateQuoteTotal()" class="w-20 p-2 bg-white border border-slate-300 rounded-xl font-mono text-center font-bold" />
                            </div>
                        </div>

                        <!-- Pillar 3 -->
                        <div class="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <span class="font-black text-slate-900 block text-sm">Custom Database Systems</span>
                                <span class="text-slate-500">Phresh Rank Core / EduLedger License Installation</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="font-mono font-bold text-emerald-700">UGX 450,000 / license</span>
                                <input type="number" id="qty-database" value="0" min="0" onchange="calculateQuoteTotal()" class="w-20 p-2 bg-white border border-slate-300 rounded-xl font-mono text-center font-bold" />
                            </div>
                        </div>

                        <!-- Pillar 4 -->
                        <div class="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <span class="font-black text-slate-900 block text-sm">Web Design & Managed Hosting</span>
                                <span class="text-slate-500">PHP Institutional Portal + cPanel SSL Hosting (1 Year)</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="font-mono font-bold text-emerald-700">UGX 500,000 / year</span>
                                <input type="number" id="qty-web" value="0" min="0" onchange="calculateQuoteTotal()" class="w-20 p-2 bg-white border border-slate-300 rounded-xl font-mono text-center font-bold" />
                            </div>
                        </div>

                        <!-- Pillar 5 -->
                        <div class="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <span class="font-black text-slate-900 block text-sm">Social Media Management</span>
                                <span class="text-slate-500">Monthly Campaign Roadmaps, Content Graphics & Ads</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="font-mono font-bold text-emerald-700">UGX 300,000 / month</span>
                                <input type="number" id="qty-social" value="0" min="0" onchange="calculateQuoteTotal()" class="w-20 p-2 bg-white border border-slate-300 rounded-xl font-mono text-center font-bold" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Submit -->
                <form method="POST" action="estimator.php" class="space-y-4 pt-4 border-t border-slate-100">
                    <div class="flex items-center gap-3 pb-2">
                        <span class="w-8 h-8 rounded-xl bg-[#0B1B3D] text-white font-black text-xs flex items-center justify-center">2</span>
                        <h3 class="text-lg font-black text-slate-900">Step 2: Enter Contact & Organization Details</h3>
                    </div>

                    <input type="hidden" name="total_ugx" id="form-total-ugx" value="0" />
                    <input type="hidden" name="notes" id="form-quote-notes" value="" />

                    <div class="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                            <input type="text" name="name" required class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-600" placeholder="e.g. Ibrahim Director" />
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">Phone Number (MTN / Airtel) *</label>
                            <input type="text" name="phone" required class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-600" placeholder="e.g. +256 701 432832" />
                        </div>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                            <input type="email" name="email" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-600" placeholder="e.g. info@school.ug" />
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">Organization / School Name</label>
                            <input type="text" name="organization" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-600" placeholder="e.g. Kasenge High School" />
                        </div>
                    </div>

                    <button type="submit" class="w-full bg-[#8B0000] hover:bg-red-800 text-white font-black py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:shadow-red-900/30 transition">
                        Submit Official Quote Request
                    </button>
                </form>

            </div>

            <!-- Right Calculation Summary -->
            <div class="lg:col-span-4 space-y-6">
                <div class="bg-[#0B1B3D] text-white rounded-3xl p-6 shadow-xl border border-white/10 sticky top-24 space-y-6">
                    <div>
                        <span class="text-emerald-400 text-[10px] font-black uppercase tracking-widest block">Step 3: Instant Calculation</span>
                        <h3 class="text-xl font-black text-white mt-1">Estimated Cost Breakdown</h3>
                    </div>

                    <div class="space-y-3 border-t border-b border-white/10 py-4 text-xs font-mono">
                        <div class="flex justify-between">
                            <span class="text-gray-300">Branding & Graphic Design:</span>
                            <span id="subtotal-branding" class="font-bold text-emerald-400">UGX 0</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-300">Commercial Printing:</span>
                            <span id="subtotal-printing" class="font-bold text-emerald-400">UGX 0</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-300">Database & Software:</span>
                            <span id="subtotal-database" class="font-bold text-emerald-400">UGX 0</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-300">Web Design & Hosting:</span>
                            <span id="subtotal-web" class="font-bold text-emerald-400">UGX 0</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-300">Social Media Marketing:</span>
                            <span id="subtotal-social" class="font-bold text-emerald-400">UGX 0</span>
                        </div>
                    </div>

                    <div class="pt-2">
                        <span class="text-xs text-gray-300 block font-medium">Estimated Grand Total (UGX):</span>
                        <span id="grand-total-ugx" class="text-3xl font-black font-mono text-emerald-400 block mt-1">
                            UGX 0
                        </span>
                        <p class="text-[11px] text-gray-400 mt-2">
                            * Includes full installation support & Kasenge - Nakawuka Road office setup.
                        </p>
                    </div>

                    <a href="https://wa.me/256757848094?text=Hello%20Phresh%20Tech%20Media,%20I%20generated%20a%20quote%20on%20your%20website%20estimator." target="_blank" class="block w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl text-center shadow transition">
                        💬 Discuss Quote on WhatsApp
                    </a>
                </div>
            </div>

        </div>

    </div>
</section>

<script>
function calculateQuoteTotal() {
    const brandingQty = parseInt(document.getElementById('qty-branding').value) || 0;
    const printingQty = parseInt(document.getElementById('qty-printing').value) || 0;
    const dbQty = parseInt(document.getElementById('qty-database').value) || 0;
    const webQty = parseInt(document.getElementById('qty-web').value) || 0;
    const socialQty = parseInt(document.getElementById('qty-social').value) || 0;

    const subBranding = brandingQty * 150000;
    const subPrinting = printingQty * 25000;
    const subDb = dbQty * 450000;
    const subWeb = webQty * 500000;
    const subSocial = socialQty * 300000;

    const total = subBranding + subPrinting + subDb + subWeb + subSocial;

    document.getElementById('subtotal-branding').innerText = 'UGX ' + subBranding.toLocaleString();
    document.getElementById('subtotal-printing').innerText = 'UGX ' + subPrinting.toLocaleString();
    document.getElementById('subtotal-database').innerText = 'UGX ' + subDb.toLocaleString();
    document.getElementById('subtotal-web').innerText = 'UGX ' + subWeb.toLocaleString();
    document.getElementById('subtotal-social').innerText = 'UGX ' + subSocial.toLocaleString();

    document.getElementById('grand-total-ugx').innerText = 'UGX ' + total.toLocaleString();
    document.getElementById('form-total-ugx').value = total;

    const notes = `Branding: ${brandingQty}, Printing: ${printingQty}, Databases: ${dbQty}, Web: ${webQty}, Social: ${socialQty}`;
    document.getElementById('form-quote-notes').value = notes;
}
</script>

<?php include 'footer.php'; ?>
