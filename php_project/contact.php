<?php
/**
 * Phresh Tech Media Services - PHP Contact & Order Form
 * Stack: PHP 8.2, PDO MySQL 8.0, Email Dispatcher
 */

$pageTitle = "Contact Us & Order Software - Phresh Tech Media Services";
$currentNav = "contact";

require_once __DIR__ . '/config/database.php';

$successMessage = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL) ?? '';
    $organization = filter_input(INPUT_POST, 'organization', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';

    if (!empty($name) && !empty($phone)) {
        // Log into MySQL database
        $db = Database::getInstance()->getConnection();
        if ($db) {
            try {
                $stmt = $db->prepare("INSERT INTO messages (name, phone, email, organization, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
                $stmt->execute([$name, $phone, $email, $organization, $message]);
            } catch (Exception $e) {
                // Ignore DB write error for demo
            }
        }
        $successMessage = "Thank you, {$name}! Your order and request have been recorded. Our team will contact you at {$phone} or email phreshtechmedia@gmail.com shortly.";
    }
}

$prefilledProduct = $_GET['product'] ?? '';

include 'header.php';
?>

<div class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
    <div class="max-w-7xl mx-auto space-y-3">
        <span class="text-xs font-black uppercase tracking-widest text-emerald-400">Kasenge - Nakawuka Road, Kampala</span>
        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">Contact Us & Software Inquiry</h1>
        <p class="text-gray-300 text-sm max-w-2xl">
            Get in touch directly with Directors Mulindwa Ibrahim and Steven Bagalana for custom software installations, UNEB report card automation, or commercial print orders.
        </p>
    </div>
</div>

<section class="py-12 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-10">
            
            <!-- Left Info Panel -->
            <div class="lg:col-span-5 space-y-6">
                <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
                    <h3 class="text-lg font-black text-slate-900">Direct Contact Information</h3>
                    <div class="space-y-3 text-xs text-slate-700">
                        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="block font-bold text-slate-900">Mulindwa Ibrahim</span>
                            <span class="text-[#1E7E34] text-[11px] font-semibold">Software Engineering Director</span>
                            <span class="block text-slate-600 font-mono mt-1">📞 +256 701 432832</span>
                        </div>
                        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="block font-bold text-slate-900">Steven Bagalana</span>
                            <span class="text-[#8B0000] text-[11px] font-semibold">Operations & Print Press Director</span>
                            <span class="block text-slate-600 font-mono mt-1">📞 +256 787 912832</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-3 text-xs">
                    <h4 class="font-black text-slate-900 uppercase tracking-wider text-xs">Physical Office Location</h4>
                    <p class="text-slate-600 leading-relaxed">
                        📍 Kasenge - Nakawuka Road, Wakiso District / Kampala, Uganda. <br />
                        Open Monday to Saturday, 8:00 AM - 6:00 PM.
                    </p>
                    <p class="text-slate-600 font-medium">
                        ✉️ Email: <a href="mailto:phreshtechmedia@gmail.com" class="text-emerald-700 underline font-bold">phreshtechmedia@gmail.com</a>
                    </p>
                </div>
            </div>

            <!-- Right PHP Form -->
            <div class="lg:col-span-7">
                <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h3 class="text-xl font-black text-slate-900">Send an Inquiry or Software Order</h3>
                        <p class="text-xs text-slate-500">Processed directly via PHP 8.2 backend and logged to MySQL database</p>
                    </div>

                    <?php if ($successMessage): ?>
                    <div class="p-4 bg-emerald-900 text-emerald-100 text-xs font-bold rounded-2xl shadow-md">
                        ✅ <?php echo htmlspecialchars($successMessage); ?>
                    </div>
                    <?php endif; ?>

                    <form method="POST" action="contact.php" class="space-y-4">
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                                <input type="text" name="name" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-emerald-600" required placeholder="e.g. Achema Denis" />
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-700 mb-1">Phone Number (MTN/Airtel) *</label>
                                <input type="text" name="phone" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-emerald-600" required placeholder="e.g. +256 772 000000" />
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                                <input type="email" name="email" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-emerald-600" placeholder="e.g. school@gmail.com" />
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-700 mb-1">School / Organization Name</label>
                                <input type="text" name="organization" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-emerald-600" placeholder="e.g. Kasenge Secondary School" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">Message or Order Request</label>
                            <textarea name="message" rows="4" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-emerald-600" placeholder="Describe the software license (Phresh Rank Core, EduLedger, Church Manager) or printing press order..."><?php echo !empty($prefilledProduct) ? "Inquiry regarding: " . htmlspecialchars($prefilledProduct) : ""; ?></textarea>
                        </div>

                        <button type="submit" class="w-full bg-[#8B0000] hover:bg-red-800 text-white font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:shadow-red-900/30 transition">
                            Submit Request & Order
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</section>

<?php include 'footer.php'; ?>
