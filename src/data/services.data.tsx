import { Keys } from '@/translations/Keys'
import { 
  Web as WebIcon, 
  Storage as StorageIcon, 
  PhoneAndroid as PhoneAndroidIcon,
  CloudUpload as CloudUploadIcon,
} from '@mui/icons-material';

interface Service {
  title: string;
  description: keyof Keys;
  icon: React.ReactNode;
}

export const services: Service[] = [
  {
    title: "Frontend",
    description: "servicesFrontendDescription",
    icon: <WebIcon fontSize='inherit' />
  },
  {
    title: "Backend",
    description: "servicesBackendDescription",
    icon: <StorageIcon fontSize='inherit' />
  },
  {
    title: "Mobile",
    description: "servicesMobileDescription",
    icon: <PhoneAndroidIcon fontSize='inherit' />
  },
  {
    title: "Deployments",
    description: "servicesDeploysDescription",
    icon: <CloudUploadIcon fontSize='inherit' />
  },
]
