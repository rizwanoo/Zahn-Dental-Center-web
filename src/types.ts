export type Language = 'en' | 'ar';

export type PageId = 'home' | 'treatments' | 'about' | 'contact';

export interface TreatmentItem {
  id: string;
  category: 'cosmetic' | 'whitening' | 'orthodontics' | 'implants' | 'restorative' | 'preventive' | 'pediatric' | 'surgery';
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  benefitsEn: string[];
  benefitsAr: string[];
  durationEn: string;
  durationAr: string;
  idealForEn: string;
  idealForAr: string;
  image: string;
}

export interface AppointmentFormValues {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  date: string;
  timeSlot: 'morning' | 'evening';
  notes: string;
}

export interface AppointmentSubmission extends AppointmentFormValues {
  id: string;
  createdAt: string;
  status: 'received' | 'confirmed';
}
