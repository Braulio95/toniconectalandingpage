interface Tabs {
  id: number;
  label: string;
  routePath: string;
}

export interface NavBarProps {
  pageName: string;
  isMobile?: boolean;
  tabItems?: Tabs[];
}
