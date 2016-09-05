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

import {
  AndroidIcon,
  AngularIcon,
  ReactIcon,
  ReduxIcon,
} from '../../Icons';
import settings from '../settings';
import styles from '../styles.css';


const FrameworksGrid = () => (
  <div>
    <div className="center"><h2 className="headline">Frameworks</h2></div>
  <div className="container">
    <Slider {...settings}>
      <div className="box"><ReactIcon /></div>
      <div className="box"><ReduxIcon /></div>
      <div className="box"><AndroidIcon /></div>
      <div className="box"><AngularIcon /></div>
    </Slider>
  </div>
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        <TableHeaderColumn>Framework</TableHeaderColumn>
        <TableHeaderColumn>Level</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn>React</TableRowColumn>
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
      <TableRow>
        <TableRowColumn>Redux</TableRowColumn>
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
      <TableRow>
        <TableRowColumn>Android</TableRowColumn>
        <TableRowColumn>
          <span className="stars">
          Basic
            <Star style={{ marginLeft: '2em' }} />
            <Star />
          </span>
        </TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Angular</TableRowColumn>
        <TableRowColumn>
          <span className="stars">
          Basic
            <Star style={{ marginLeft: '2em' }} />
          </span>
        </TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Other Flux Application Architecture frameworks</TableRowColumn>
        <TableRowColumn>
          <span className="stars">
          Working
            <Star style={{ marginLeft: '1em' }} />
            <Star />
            <StarHalf />
          </span>
        </TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
  </div>
);

export default FrameworksGrid;
