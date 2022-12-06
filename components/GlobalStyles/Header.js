import React, { useState } from 'react';
import {
  
  Text,
  
  View,

} from 'react-native';
import GlobalStyles from './GlobalStyles';



function Header({headertext}){
  return(
        <View style={GlobalStyles.Header}>
         <Text style={GlobalStyles.HeaderText}>
          {headertext}
         </Text>
        </View>

  )
}
export default Header;

