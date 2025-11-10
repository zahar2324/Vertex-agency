'use client';

import { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  message: string;
}

export default function Toast({ isOpen, onClose, type, message }: ToastProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div
        className={`rounded-lg shadow-2xl p-4 md:p-6 min-w-[300px] max-w-md ${
          type === 'success'
            ? 'bg-gradient-to-r from-green-500 to-green-600'
            : 'bg-gradient-to-r from-red-500 to-red-600'
        } text-white flex items-start gap-4`}
      >
        <div className="flex-shrink-0 mt-1">
          {type === 'success' ? (
            <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />
          ) : (
            <XCircle className="w-6 h-6 md:w-8 md:h-8" />
          )}
        </div>
        <div className="flex-grow">
          <p className="font-semibold text-base md:text-lg mb-1">
            {type === 'success' ? 'Успішно!' : 'Помилка'}
          </p>
          <p className="text-sm md:text-base opacity-95">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

