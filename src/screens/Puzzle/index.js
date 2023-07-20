import React, {useEffect, useState} from 'react';
import {Alert, FlatList, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setScore} from '_action';
import {Button} from '_components';
import {countries, cars, fruits} from '_mock';
import styles from './styles';
import Share from 'react-native-share';

const Puzzle = props => {
  const {category} = props?.route?.params;
  const [puzzleWord, setPuzzleWord] = useState([]);
  const [jumbledWord, setJumbledWord] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [complexity, setComplexity] = useState(1);
  const [hint, setHint] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const {score} = useSelector(state => state.commonReducer);
  const dispatch = useDispatch();
  const [newGame, setNewGame] = useState(true);
  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = () => {
    switch (category) {
      case 1:
        splitLettersInWord(countries);
        break;
      case 2:
        splitLettersInWord(cars);
        break;
      case 3:
        splitLettersInWord(fruits);
        break;
    }
  };
  const splitLettersInWord = wordsList => {
    let word = wordsList[Math.floor(Math.random() * wordsList.length)];
    if (word?.name) {
      setPuzzleWord(word?.name.toUpperCase());
      randomizeLetters([...word?.name.toUpperCase()]);
      setComplexity(word?.complexity);
      setHint(word?.hint);
    }
  };
  const randomizeLetters = letters => {
    let emptyAnswer = [];
    for (let i = letters.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j], emptyAnswer[i]] = [letters[j], letters[i], ''];
    }
    setJumbledWord(letters);
    setAnswer(emptyAnswer);
  };

  const onSpecificLetterClick = (item, index) => {
    let lAnswer = [...answer];
    let remainingWord = [...jumbledWord];

    for (let i = 0; i < jumbledWord.length; i++) {
      if (remainingWord[i] === '') {
        remainingWord[i] = item;
        lAnswer[index] = '';
        break;
      }
    }
    setJumbledWord(remainingWord);
    setAnswer(lAnswer);
  };

  const onLetterClick = (item, index) => {
    let lAnswer = [...answer];
    let remainingWord = [...jumbledWord];
    for (let i = 0; i < answer.length; i++) {
      if (lAnswer[i] === '') {
        lAnswer[i] = item;
        remainingWord[index] = '';
        break;
      }
    }
    setJumbledWord(remainingWord);
    setAnswer(lAnswer);
  };

  const skipOrNextQuestion = () => {
    setNewGame(false);
    if (answer.some(letter => letter == '')) {
      loadCategory();
    } else if (!showSuccess) {
      if (answer.join('') == puzzleWord) {
        //let username = `TestUser ${newGame ? score.length+1 :  }`
        if (newGame) {
          dispatch(
            setScore([
              ...score,
              {
                name: `TestUser${score.length + 1}`,
                scores: complexity * answer.length,
              },
            ]),
          );
        } else {
          console.log('OLDUSER ', score[score.length - 1].scores);
          score[score.length - 1].scores =
            score[score.length - 1].scores + complexity * answer.length;
          dispatch(setScore(score));
        }
        console.log(score);
        setShowSuccess(true);
      } else {
        Alert.alert('Oops!! Incorrect word please try again...');
      }
    } else {
      setShowSuccess(false);
      loadCategory();
    }
  };

  const shareScore = async () => {
    const shareOptions = {
      title: 'Word Puzzle',
      message:
        "Hey Guys, \n I'm excited to share my new Score achievement in Word Puzzle!!! /n High Score : ",
    };
    await Share.open(shareOptions)
      .then()
      .catch(err => console.log(err));
  };

  const renderLetterOptions = ({item, index}) => {
    return (
      <Button
        buttonStyle={styles.wordOptionButton}
        title={item}
        onPress={() => onLetterClick(item, index)}></Button>
    );
  };

  const renderLetterSelection = ({item, index}) => {
    return (
      <Button
        buttonStyle={styles.wordOptionButton}
        title={item}
        onPress={() => onSpecificLetterClick(item, index)}></Button>
    );
  };

  return (
    <View style={styles.container}>
      {!showSuccess ? (
        <>
          <FlatList
            style={styles.wordsDisplayList}
            data={answer}
            numColumns={4}
            renderItem={renderLetterSelection}
          />
          <Text style={styles.hintText}>{hint}</Text>
          <FlatList
            style={styles.wordOptionsList}
            data={jumbledWord}
            numColumns={4}
            renderItem={renderLetterOptions}
          />
        </>
      ) : (
        <>
          <View style={styles.successView}>
            <Text
              style={
                styles.successText
              }>{`Correct! \n Congratulations\n \nYou earned ${
              score[score.length - 1].scores
            } points`}</Text>
          </View>
        </>
      )}

      {showSuccess && (
        <Button
          title={'SHARE'}
          buttonStyle={styles.shareButton}
          onPress={shareScore}
        />
      )}
      <Button
        title={answer.some(letter => letter == '') ? 'SKIP' : 'NEXT'}
        buttonStyle={styles.nextButton}
        onPress={skipOrNextQuestion}
      />
    </View>
  );
};

export default Puzzle;