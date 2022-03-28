import React from 'react';
import { View, Text, ImageBackground  } from 'react-native';
import styles from './styles';
import StyledButton from '../styledbutton';

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

    return (
        
        <View style={styles.carContainer}>
        <ImageBackground source={image} 
        style= {styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}> {name} </Text>
          <Text style={styles.subtitle}> {tagline}&nbsp; {' '}
          <Text style={styles.subtitleCTA}> {taglineCTA} </Text>
          </Text>
        </View>

          <View style={styles.buttonsContainer}>
            <StyledButton type="primary" 
            content={"custom order"} 
            onPress={() => {}}
            />

            <StyledButton type="secondary" 
            content={"existing inventory"} 
            onPress={() => {}}
            />
          </View>
      </View>
    );
};

export default CarItem;
