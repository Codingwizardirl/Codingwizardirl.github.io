import React from 'react';
import { Tabs, Tab } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';

import { FrameworksGrid, LanguagesGrid, ToolsGrid } from '../SkillGrids';

const TabsExampleSimple = () => (
  <Tabs>
    <Tab
      label="Languages"
    >
      <LanguagesGrid />
    </Tab>
    <Tab
      label="Frameworks"
    >
      <FrameworksGrid />
    </Tab>
    <Tab
      label="Tools"
    >
      <ToolsGrid />
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;
