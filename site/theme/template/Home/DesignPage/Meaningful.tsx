import * as React from 'react';
import Hitu from '@ant-design/hitu';
import { Shape } from '@ant-design/hitu/lib/interface';
import InteractiveIcon from './InteractiveIcon';

function Heart() {
  return (
    <path
      fill="#F74455"
      d="M24.7788462,5.41153846 C24.3923077,4.51442308 23.8384615,3.7125 23.1375,3.02307692 C22.4365385,2.33653846 21.6230769,1.8 20.7144231,1.42211538 C19.7769231,1.03269231 18.7846154,0.836538462 17.7605769,0.836538462 C16.3384615,0.836538462 14.9509615,1.22596154 13.7451923,1.96153846 C13.4567308,2.1375 13.1826923,2.33076923 12.9230769,2.54134615 C12.6634615,2.33076923 12.3894231,2.1375 12.1009615,1.96153846 C10.8951923,1.22596154 9.50769231,0.836538462 8.08557692,0.836538462 C7.06153846,0.836538462 6.06923077,1.03269231 5.13173077,1.42211538 C4.22596154,1.79711538 3.40961538,2.33653846 2.70865385,3.02307692 C2.00480769,3.7125 1.45384615,4.51442308 1.06730769,5.41153846 C0.666346154,6.34326923 0.461538462,7.33269231 0.461538462,8.35096154 C0.461538462,9.31153846 0.657692308,10.3125 1.04711538,11.3307692 C1.37307692,12.1817308 1.84038462,13.0644231 2.4375,13.9557692 C3.38365385,15.3663462 4.68461538,16.8375 6.3,18.3288462 C8.97692308,20.8009615 11.6278846,22.5086538 11.7403846,22.5778846 L12.4240385,23.0163462 C12.7269231,23.2096154 13.1163462,23.2096154 13.4192308,23.0163462 L14.1028846,22.5778846 C14.2153846,22.5057692 16.8634615,20.8009615 19.5432692,18.3288462 C21.1586538,16.8375 22.4596154,15.3663462 23.4057692,13.9557692 C24.0028846,13.0644231 24.4730769,12.1817308 24.7961538,11.3307692 C25.1855769,10.3125 25.3817608,9.31153846 25.3817608,8.35096154 C25.3846154,7.33269231 25.1798077,6.34326923 24.7788462,5.41153846 Z"
    />
  );
}

Heart.width = 26;
Heart.height = 24;

function Circle() {
  return <circle cx={36} cy={36} r="30" stroke="#F74455" strokeWidth={12} fill="rgba(0,0,0,0)" />;
}

Circle.width = 72;
Circle.height = 72;

const center = { x: 60, y: 60 };

const shapes: Shape[] = [
  {
    type: 'shape',
    source: Circle,
    frames: [
      {
        frame: 0,
        scaleX: 1.3,
        scaleY: 1.3,
        opacity: 0.4,
        ...center,
      },
      {
        frame: 10,
        scaleX: 1.5,
        scaleY: 1.5,
        opacity: 0,
      },
      {
        frame: 15,
        scaleX: 0,
        scaleY: 0,
        opacity: 0,
        cubic: Hitu.CUBIC_EASE,
      },
      {
        frame: 40,
        scaleX: 1.3,
        scaleY: 1.3,
        opacity: 0.4,
      },
    ],
  },
  {
    type: 'shape',
    source: Circle,
    frames: [
      {
        frame: 0,
        scaleX: 1,
        scaleY: 1,
        ...center,
      },
      {
        frame: 10,
        scaleX: 0.9,
        scaleY: 0.9,
        opacity: 0,
      },
      {
        frame: 15,
        scaleX: 0,
        scaleY: 0,
        opacity: 0,
        cubic: Hitu.CUBIC_EASE,
      },
      {
        frame: 30,
        scaleX: 1.1,
        scaleY: 1.1,
        opacity: 1,
      },
      {
        frame: 40,
        scaleX: 1,
        scaleY: 1,
      },
      {
        frame: 50,
        scaleX: 1.05,
        scaleY: 1.05,
      },
      {
        frame: 60,
        scaleX: 1,
        scaleY: 1,
      },
    ],
  },
  {
    type: 'shape',
    source: Heart,
    frames: [
      {
        frame: 0,
        ...center,
        cubic: Hitu.CUBIC_EASE,
        opacity: 1,
      },
      {
        frame: 10,
        scaleX: 0.6,
        scaleY: 0.6,
        opacity: 0,
      },
      {
        frame: 15,
        scaleX: 0,
        scaleY: 0,
        opacity: 0,
        cubic: Hitu.CUBIC_EASE,
      },
      {
        frame: 30,
        scaleX: 1.2,
        scaleY: 1.2,
        opacity: 1,
      },
      {
        frame: 40,
        scaleX: 1,
        scaleY: 1,
      },
      {
        frame: 50,
        scaleX: 1.05,
        scaleY: 1.05,
      },
      {
        frame: 60,
        scaleX: 1,
        scaleY: 1,
      },
    ],
  },
];

export default function Meaningful() {
  return <InteractiveIcon shapes={shapes} frames={80} />;
}