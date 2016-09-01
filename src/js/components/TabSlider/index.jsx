import React from 'react';
import { Tabs, Tab, Slider } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';

import { FrameworksGrid, LanguagesGrid, ToolsGrid } from '../SkillGrids';

const styles = {
  headline: {
    fontSize: '2em',
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab
      label="About"
      icon={<FontIcon className="material-icons">person</FontIcon>}
    >
      <div>
        <h2 style={styles.headline}>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Tab>
    <Tab
      label="Skills"
      icon={<FontIcon className="material-icons">computer</FontIcon>}
    >
      <div>
        <h2 style={styles.headline}>Languages</h2>
        <LanguagesGrid />
        <h2 style={styles.headline}>Frameworks</h2>
        <FrameworksGrid />
        <ToolsGrid />
      </div>
    </Tab>
    <Tab
      label="Contact"
      icon={<FontIcon className="material-icons">email</FontIcon>}
    >
      <div>
        <h2 style={styles.headline}>Contact info here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;
