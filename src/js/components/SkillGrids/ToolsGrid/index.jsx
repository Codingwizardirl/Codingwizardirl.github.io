import React from 'react';
import Slider from 'react-slick';
import Star from 'material-ui/svg-icons/toggle/star';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { AtomIcon, GithubIcon, LinuxIcon, MongodbIcon, PostgresqlIcon } from '../../Icons';
import settings from '../settings';
import styles from '../styles.css';


const ToolsGrid = () => (
  <div>
    <div className="center"><h2 className="headline">Tools</h2></div>
    <div className="container">
      <Slider {...settings}>
        <div className="box"><GithubIcon /></div>
        <div className="box"><AtomIcon /></div>
        <div className="box"><MongodbIcon /></div>
        <div className="box"><PostgresqlIcon /></div>
        <div className="box"><LinuxIcon /></div>
      </Slider>
    </div>
    <Table>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>Tool</TableHeaderColumn>
          <TableHeaderColumn>Level</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>GitHub/Git</TableRowColumn>
          <TableRowColumn>
            <span className="stars">
            Working
              <Star style={{ marginLeft: '1em' }} />
              <Star />
              <Star />
              <Star />
            </span>
          </TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>MongoDB</TableRowColumn>
          <TableRowColumn>
            <span className="stars">
            Working
              <Star style={{ marginLeft: '1em' }} />
              <Star />
              <Star />
            </span>
          </TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>PostgreSQL</TableRowColumn>
          <TableRowColumn>
            <span className="stars">
            Working
              <Star style={{ marginLeft: '1em' }} />
              <Star />
              <Star />
            </span>
          </TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Linux</TableRowColumn>
          <TableRowColumn>
            <span className="stars">
            Basic
              <Star style={{ marginLeft: '2em' }} />
              <Star />
            </span>
          </TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Atom</TableRowColumn>
          <TableRowColumn>
            <span className="stars">
            Working
              <Star style={{ marginLeft: '1em' }} />
              <Star />
              <Star />
              <StarHalf />
            </span>
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default ToolsGrid;
