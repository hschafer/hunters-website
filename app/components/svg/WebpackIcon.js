import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default class WebpackIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <SvgIcon {...this.props} viewBox='0 0 256 296'>
        <g>
          <path stroke="#757575" fill='none' d='M128.032342,0.455516014 L0.297907473,74.2031032 L0.297907473,221.698278 L128.032342,295.44632 L255.767231,221.698278 L255.767231,74.2031032 L128.032342,0.455516014 Z'></path>
          <path stroke="#757575" d='M128.033708,75.2626335 L64.6901068,111.834192 L64.6901068,184.977765 L128.033708,221.549779 L191.378221,184.977765 L191.378221,111.834192 L128.033708,75.2626335 Z'></path>
          <g fill='#FFFFFF' fillOpacity='0.1'>
            <path stroke='#757575' d='M128,0 L0,74.2491103 L128,143.94306 L256,74.7046263 L128,0 Z'></path>
          </g>
          <g transform='translate(0.000000, 153.508897)' fill='#FFFFFF' fillOpacity='0.1'>
            <path stroke='#757575' d='M128,0 L0,67.8718861 L128,141.66548 L255.544484,67.4163701 L128,0 Z'></path>
          </g>
        </g>
      </SvgIcon>
    );
  }
};
