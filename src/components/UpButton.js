import React from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

const UpButton = () => {
  return (
    <div>
      <ScrollUpButton
        EasingType="linear"
        ShowAtPosition={600}
        AnimationDuration={535}
      />
    </div>
  );
};

export default UpButton;
