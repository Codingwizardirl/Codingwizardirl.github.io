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
  CssIcon,
  HtmlIcon,
  JavaIcon,
  JsIcon,
  KotlinIcon,
  TypescriptIcon,
} from '../../Icons';
import settings from '../settings';
import styles from '../styles.css';

const LanguagesGrid = () => (
  <div>
    <div className="center"><h2 className="headline">Languages</h2></div>
    <div className="container">
      <Slider {...settings}>
        <div className="box"><JsIcon /></div>
        <div className="box"><JavaIcon /></div>
        <div className="box"><TypescriptIcon /></div>
        <div className="box"><HtmlIcon /></div>
        <div className="box"><CssIcon /></div>
        <div className="box"><KotlinIcon /></div>
      </Slider>
    </div>
    <Table>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>Language</TableHeaderColumn>
          <TableHeaderColumn>Level</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>Javascipt(ES6, ES7)</TableRowColumn>
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
          <TableRowColumn>Java</TableRowColumn>
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
          <TableRowColumn>HTML5</TableRowColumn>
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
          <TableRowColumn>CSS3</TableRowColumn>
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
          <TableRowColumn>HTML5</TableRowColumn>
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
          <TableRowColumn>TypeScript</TableRowColumn>
          <TableRowColumn>
            <span className="stars">
             Basic
              <Star style={{ marginLeft: '2em' }} />
              <Star />
              <StarHalf />
            </span>
          </TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Kotlin</TableRowColumn>
          <TableRowColumn>
            <span className="stars">
             Basic
              <Star style={{ marginLeft: '2em' }} />
            </span>
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default LanguagesGrid;
