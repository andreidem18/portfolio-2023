import { ReactNode } from 'react';
import { PhoneAndroidOutlined, LocationOnOutlined, EmailOutlined } from '@mui/icons-material';

export interface ContactData {
  name: string;
  icon: ReactNode;
  value: string;
}

export const contactData: ContactData[] = [
  {
    name: 'Phone',
    icon: <PhoneAndroidOutlined />,
    value: '+57 315-785-0061',
  },
  {
    name: 'Location',
    icon: <LocationOnOutlined />,
    value: 'Bogota, Colombia',
  },
  {
    name: 'Email',
    icon: <EmailOutlined />,
    value: 'andres.david.mm@hotmail.com',
  }
]
