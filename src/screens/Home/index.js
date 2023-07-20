import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Modal,
  Text,
  Alert,
} from 'react-native';
import {Button} from '_components';
import styles from './styles';
import {categoryList} from '_mock';
import {useNavigation} from '@react-navigation/native';

import { useSelector } from 'react-redux';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const {score} = useSelector(state=> state.commonReducer);
  const renderCategories = ({item}) => {
    return (
      <Button
        title={item.name}
        buttonStyle={{
          backgroundColor: selectedCategory == item.id ? 'teal' : 'transparent',
        }}
        onPress={() => onCategoryClick(item)}
      />
    );
  };

  const onCategoryClick = item => {
    setSelectedCategory(item.id);
  };

  const onStartPuzzle = () => {
    if (selectedCategory) {
      navigation.navigate('Puzzle', {category: selectedCategory});
    } else {
      Alert.alert('Please select a Category');
    }
    setSelectedCategory(null);
  };

  const onLeaderBoardClick = async () => {
    setModalVisible(true);
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.championTextStyle}>{'CHAMPIONS !!!'}</Text>
              <View style={{height:150}}>
              <FlatList
                data={score.slice(0,5)}
                initialNumToRender={5}
                renderItem={({item}) => {
                  return (
                    <Text style={styles.championContentStyle}>
                      {`${item.name}   ${item.scores} points`}
                    </Text>
                  );
                }}
                ListEmptyComponent={() => {
                  return <Text> Be the first one to be on the ScoreCard</Text>;
                }}
              />
              </View>
              <Button
                buttonStyle={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                title="Close"></Button>
            </View>
          </View>
        </Modal>
      </View>
      <Text style={styles.titleStyle}> WORD PUZZLE </Text>

      <Text style={styles.hintStyle}> Select Category and Press Start</Text>
      <FlatList
        data={categoryList}
        renderItem={renderCategories}
        keyExtractor={item => item.id}
      />
      <Button
        title={'Start Puzzle'}
        buttonStyle={styles.startButtonStyle}
        onPress={onStartPuzzle}
      />
      <Button
        title={'Leaders Board'}
        buttonStyle={styles.leaderBoardButtonStyle}
        onPress={onLeaderBoardClick}
      />
    </SafeAreaView>
  );
};

export default Home;