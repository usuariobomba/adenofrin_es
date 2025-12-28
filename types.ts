export interface LeadData {
  name: string;
  phone: string;
}

export interface FormProps {
  onSubmit: (data: LeadData) => void;
  isSubmitting: boolean;
  compact?: boolean; // For popup vs main form
}