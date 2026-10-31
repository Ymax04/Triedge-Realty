import { MessageCircle } from 'lucide-react'
import { generalEnquiryUrl } from '../utils/whatsapp'

export default function WhatsAppButton() {
  return (
    <a
      href={generalEnquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe57] md:right-6 md:bottom-6"
      aria-label="Chat with Triedge Realty on WhatsApp"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  )
}
