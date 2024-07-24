declare module 'react-circular-slider-bar' {
    import * as React from 'react';
  
    interface CircularSliderProps {
      size?: number;
      min?: number;
      max?: number;
      value?: number;
      onChange?: (value: number) => void;
      knobColor?: string;
      progressColorFrom?: string;
      progressColorTo?: string;
      trackColor?: string;
      trackSize?: number;
      knobSize?: number;
    }
  
    const CircularSlider: React.FC<CircularSliderProps>;
  
    export default CircularSlider;
  }
  