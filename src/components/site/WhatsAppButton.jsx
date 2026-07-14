import { MessageCircle } from "lucide-react";
export function WhatsAppButton() {
    return (<a href="https://wa.me/919000288261?text=Hi%20Nexa%20Skills%20Hub!%20I%20want%20to%20know%20more%20about%20your%20courses." target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-all hover:pr-6 hover:-translate-y-1">
      <MessageCircle className="h-6 w-6"/>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100">
        Chat with us
      </span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20"/>
    </a>);
}
