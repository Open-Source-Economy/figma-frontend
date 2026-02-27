import { 
  User, 
  LogOut, 
  FolderPlus, 
  Folder, 
  Settings, 
  CreditCard, 
  HelpCircle, 
  FileText 
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface UserMenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
  variant?: 'default' | 'danger';
}

export interface UserMenuSection {
  title: string;
  items: UserMenuItem[];
}

export const userMenuSections: UserMenuSection[] = [
  {
    title: 'Workspace',
    items: [
      { icon: Folder, label: 'My Projects', href: 'maintainer-dashboard' },
      { icon: FolderPlus, label: 'Add Project', href: 'add-project' },
    ],
  },
  {
    title: 'Account',
    items: [
      { icon: User, label: 'My Profile', href: 'maintainer-dashboard' },
      { icon: Settings, label: 'Settings', href: 'settings' },
      { icon: CreditCard, label: 'Billing & Plan', href: 'pricing' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: HelpCircle, label: 'Help Center', href: 'faq' },
      { icon: FileText, label: 'Documentation', href: 'contact' },
    ],
  },
];

export const logoutMenuItem: UserMenuItem = {
  icon: LogOut,
  label: 'Log Out',
  href: 'logout',
  variant: 'danger',
};
