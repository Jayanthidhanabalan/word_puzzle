import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shareButton: {
    marginBottom: 20,
    backgroundColor: 'pink',
  },
  nextButton: {
    marginBottom: 50,
    backgroundColor: 'pink',
  },
  successText: {
    fontSize: 24,
    fontWeight: 600,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'green',
  },
  successView: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  wordOptionsList: {
    marginVertical: 30,
    alignSelf: 'center',
  },
  wordOptionButton:{
    width: 50, margin: 8
  },
 
  wordsDisplayList: {
    marginTop: 40,
    alignSelf: 'center',
  },
  hintText: {
    fontSize: 25,
    alignSelf: 'auto',
    textAlign: 'center',
  },
});