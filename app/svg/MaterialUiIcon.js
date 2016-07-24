/**
 * SVG coordinates taken from http://www.material-ui.com/images/material-ui-logo.svg
 */

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default class MaterialUiIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var polyStyle = {fill: "#757575"}
    return (
      <SvgIcon {...this.props} viewBox='0 0 360 288.75'>
        <g>
          <polygon style={polyStyle} points="28.75,52.5 28.75,168.75 48.75,157.5 48.75,63.75  "/>
          <polygon style={polyStyle} points="8.75,157.5 8.75,17.5 127.5,85 127.5,108.75 28.75,52.5 28.75,168.75  "/>
          <polygon style={polyStyle} points="248.75,17.5 248.75,157.5 168.75,202.5 148.75,190 228.75,145 228.75,51.25 127.5,108.75    127.5,85  "/>
          <polygon style={polyStyle} points="228.75,6.25 128.75,62.5 28.75,6.25 8.75,17.5 127.5,85 248.75,17.5  "/>
          <polygon style={polyStyle} points="208.75,62.5 208.75,133.75 228.75,145 228.75,51.25  "/>
          <polygon style={polyStyle} points="108.75,190 208.75,133.75 228.75,145 148.75,190 227.5,235 307.5,190 327.5,201.25    227.5,257.5  "/>
          <polygon style={polyStyle} points="108.75,190 108.75,213.75 227.5,281.25 227.5,257.5  "/>
          <polygon style={polyStyle} points="327.5,201.25 327.5,131.25 307.5,120 307.5,190  "/>
          <polygon style={polyStyle} points="227.5,257.5 327.5,201.25 327.5,131.25 347.5,120 347.5,213.75 227.5,281.25  "/>
          <polygon style={polyStyle} points="347.5,120 327.5,131.25 307.5,120 327.5,108.75  "/>
          <polygon style={polyStyle} points="327.5,108.75 327.5,85 347.5,73.75 347.5,97.5  "/>
          <polygon style={polyStyle} points="327.5,85 327.5,108.75 307.5,97.5 307.5,73.75  "/>
          <polygon style={polyStyle} points="347.5,73.75 327.5,85 307.5,73.75 327.5,62.5  "/>
        </g> 
      </SvgIcon>
    );
  }
};
