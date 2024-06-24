import React from 'react';
import { View } from 'react-native';

interface Props {
  y?: number;
  x?: number;
}
const Space: React.FC<Props> = ({y = 0, x = 0}) => {
  return <View style={{height: y, width: x}} />;
}

export default Space;