import React from 'react';

function DarkLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='460'
      height='123'
      fill='none'
      viewBox='0 0 460 123'
    >
      <path fill='url(#pattern0)' d='M0 0H460V123H0z'></path>
      <defs>
        <pattern
          id='pattern0'
          width='1'
          height='1'
          patternContentUnits='objectBoundingBox'
        >
          <use
            transform='matrix(.00318 0 0 .0119 -.001 0)'
            xlinkHref='#image0_105_6793'
          ></use>
        </pattern>
        <image
          id='image0_105_6793'
          width='315'
          height='84'
          xlinkHref='data:image/png;base64,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'
        ></image>
      </defs>
    </svg>
  );
}

export default DarkLogo;
