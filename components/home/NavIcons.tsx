import * as React from 'react';

import {
  ArrowBackIos,
  Home,
  Inventory,
  Newspaper,
  School,
} from '@mui/icons-material';
import { FaRobot } from 'react-icons/fa';
import { GiSadCrab } from 'react-icons/gi';

import { buildProjectSlug } from 'lib/utils';

interface NavigationIcon {
  label: string;
  value: string;
  icon: React.ReactElement;
}

type IconKey =
  | 'Back'
  | 'Home'
  | 'Inventory'
  | 'NYT'
  | 'Story'
  | 'Registration'
  | 'Academic';

type NavigationIcons = {
  // eslint-disable-next-line no-unused-vars
  [n in IconKey]: NavigationIcon;
};

export const NAV_ICONS: NavigationIcons = {
  Back: {
    icon: <ArrowBackIos />,
    label: 'Back',
    value: 'back',
  },
  Home: {
    icon: <Home />,
    label: 'Home',
    value: '/',
  },
  Academic: {
    icon: <School />,
    label: 'Academic Advisor',
    value: buildProjectSlug('academic-advisor'),
  },
  NYT: {
    icon: <Newspaper />,
    label: 'NYT Clone',
    value: buildProjectSlug('nyt-clone'),
  },
  Inventory: {
    icon: <Inventory />,
    label: 'Inventory App',
    value: buildProjectSlug('inventory-management'),
  },
  Registration: {
    icon: <FaRobot fontSize="1.5rem" height="1rem" width="1rem" />,
    label: 'Registration Bot',
    value: buildProjectSlug('course-bot'),
  },
  Story: {
    icon: <GiSadCrab fontSize="1.5rem" height="1rem" width="1rem" />,
    label: 'Story Generator',
    value: buildProjectSlug('story-generator'),
  },
};
