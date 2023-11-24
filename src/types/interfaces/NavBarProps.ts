interface Tabs {
  id: number;
  label: string;
  routePath: string;
}

export interface NavBarProps {
  isMobile?: boolean;
  tabItems?: Tabs[];
}
