import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = '918086210987',
  message = 'Hi Ajmal, I visited your portfolio and would like to connect!',
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Chat on WhatsApp"
            data-testid="floating-whatsapp-button"
          >
            {/* Pulsing radar ring */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
            
            {/* WhatsApp Icon */}
            <FaWhatsapp className="w-7 h-7 relative z-10 drop-shadow-sm" />
          </motion.a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-card text-foreground border border-border shadow-md font-medium text-xs px-3 py-1.5 rounded-lg">
          Chat on WhatsApp
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

