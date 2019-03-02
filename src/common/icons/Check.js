import React from 'react';

const CheckIcon = () => (
  <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
      <path fillRule="evenodd" clipRule="evenodd" d="M18 9V0H0v18h18V9z" fill="#fff" />
    </mask>
    <g mask="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M18 9c0-1.258-.58-2.368-1.472-3.118.1-1.162-.275-2.357-1.164-3.246-.889-.89-2.084-1.265-3.246-1.164A4.062 4.062 0 0 0 9 0C7.742 0 6.632.58 5.882 1.472c-1.162-.1-2.357.275-3.246 1.164-.89.889-1.265 2.084-1.164 3.246A4.062 4.062 0 0 0 0 9c0 1.258.58 2.368 1.472 3.118-.1 1.162.275 2.357 1.164 3.246.889.89 2.084 1.265 3.246 1.164A4.062 4.062 0 0 0 9 18c1.258 0 2.368-.58 3.118-1.472 1.162.1 2.357-.275 3.246-1.164.89-.889 1.265-2.084 1.164-3.246A4.062 4.062 0 0 0 18 9z"
        fill="#86C8FC"
      />
      <path d="M8.15 12.952l-1.757-1.638 5.903-6.334 1.758 1.638-5.903 6.334z" fill="#fff" />
      <path d="M9.678 11.287L8.16 12.934 4.066 9.162l1.517-1.646 4.095 3.771z" fill="#fff" />
    </g>
  </svg>
);

export default CheckIcon;
