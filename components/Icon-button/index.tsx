import React from 'react'
import {TouchableOpacity} from 'react-native'
import rncStyles from 'rncstyles';
import PrimaryIcon from '../icon';

export default function IconButton(props: any) {
    const {onPress, name} = props
  return (
        <TouchableOpacity style={[rncStyles.rounded, rncStyles.p2]} onPress={onPress}>
              <PrimaryIcon name={name} onPress={onPress}/>
            </TouchableOpacity>
  )
}