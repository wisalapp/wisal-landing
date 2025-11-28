import { Button } from "../ui/button";
import { X, Phone, MessageCircle } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border">
        <div className="p-6 border-b border-border sticky top-0 bg-card z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">WhatsApp Demo</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-green-500 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Live Demo in 2 Minutes</h3>
              <p className="text-muted-foreground">See Wisal handle real Arabic patient messages</p>
            </div>
          </div>

          <div className="grid gap-4">
            <Button 
              className="w-full bg-green-500 hover:bg-green-600"
              size="lg"
              onClick={() => window.open("https://wa.me/96812345678?text=Hi%20Wisal!%20Ready%20for%20WhatsApp%20demo", "_blank")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Start WhatsApp Demo
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              Schedule Call
            </Button>
          </div>

          <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
            No commitment. See it work first.
          </div>
        </div>
      </div>
    </div>
  );
}
