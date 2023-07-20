import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  startButtonStyle: {
    backgroundColor: 'pink',
  },
  leaderBoardButtonStyle: {
    borderWidth: 0,
  },

  titleStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
    marginTop: 70,
    height: '15%',
  },
  hintStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    margin: 20,
    width: '75%',
    height: 50,
    borderColor: '#000',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    margin: 10,
    backgroundColor: 'pink',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  championTextStyle: {
    fontWeight: 'bold',
    color: 'teal',
    fontSize: 20,
    marginBottom:10,
  },
  championContentStyle: {
    margin:5,
    color: 'green',
    fontSize:15,
    letterSpacing: 1.5,
    fontWeight: 'bold',
  },
});