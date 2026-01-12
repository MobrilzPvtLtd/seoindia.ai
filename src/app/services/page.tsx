import { getAllServices } from '@/lib/services';
import ServicesClient from './ServicesClient';

export default function ServicesPage() {
  const services = getAllServices();
  
  return <ServicesClient services={services} />;
}
