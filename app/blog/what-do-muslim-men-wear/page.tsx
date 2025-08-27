import { Metadata } from 'next';
import MuslimMenWearArticle from '@/pages/MuslimMenWearArticle';

export const metadata: Metadata = {
  title: 'What Do Muslim Men Wear? Traditional Islamic Clothing Guide',
  description: 'Complete guide to traditional Islamic clothing for men including thobe, kufi, jalabiya, and other modest attire worn by Muslim men worldwide.',
  keywords: ['Muslim men clothing', 'Islamic attire men', 'thobe', 'kufi', 'jalabiya', 'Islamic fashion men', 'Muslim dress code men'],
  alternates: {
    canonical: 'https://hidayyah.com/blog/what-do-muslim-men-wear',
  },
  openGraph: {
    title: 'What Do Muslim Men Wear? Traditional Islamic Clothing Guide',
    description: 'Complete guide to traditional Islamic clothing for men including thobe, kufi, jalabiya, and other modest attire.',
    type: 'article',
    url: 'https://hidayyah.com/blog/what-do-muslim-men-wear',
  },
};

export default function MuslimMenWearPage() {
  return <MuslimMenWearArticle />;
}