/**
 * Phresh Tech Media Services - Email Templates Index & Engine
 * Brand Palette:
 *  - Navy Blue: #0B1B3D
 *  - Crimson/Burgundy: #8B0000
 *  - WhatsApp Green: #1E7E34
 *  - Off-White Canvas: #F1F5F9
 */

export interface EmailOrderItem {
  id?: string;
  name: string;
  price: number;
  qty: number;
  category?: string;
}

export interface OrderReceiptTemplateData {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  organization?: string;
  items: EmailOrderItem[];
  specificDetails?: string;
  totalUGX: number;
  date?: string;
}

export interface InquiryTemplateData {
  inquiryId?: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  subject?: string;
  message?: string;
  date?: string;
}

export interface QuoteTemplateData {
  quoteId: string;
  clientName: string;
  email: string;
  phone?: string;
  organization?: string;
  servicesSummary: string;
  selectedPillars?: string[];
  totalPriceUGX: number;
  specificRequirements?: string;
  date?: string;
}

export interface WelcomeTemplateData {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  date?: string;
}

export * from './orderReceipt';
export * from './inquiryReceipt';
export * from './quoteReceipt';
export * from './welcomeEmail';
export * from './adminOrderAlert';
export * from './adminInquiryAlert';
