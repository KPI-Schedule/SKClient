import {
  StyleSheet,
} from 'react-native';

const lessonStyles = StyleSheet.create({
  lesson: {
    padding: 5,
    borderBottomWidth: 0.5,
    borderColor: '#CCC'
  },
  lesson__info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  lesson__wrapper: {
    flexDirection: 'row'
  },
  lesson__wrapperCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  lesson__number: {
    flex: 0.1,
    alignItems: 'center'
  },
  lesson__current: {
    opacity: 0.7,
    fontSize: 24,
    color: '#A4A4A4',
    fontWeight: 'bold'
  },
  lesson__info: {
    flex: 0.9
  },
  lesson__title: {
    fontWeight: 'bold',
    flex: 0.9
  },
  lesson__type: {
    fontStyle: 'italic',
    textAlign: 'right',
    flex: 0.1
  },
  lesson__location: {
    color: '#6F6F6F'
  },
  lesson__time: {
    color: '#A4A4A4',
    fontSize: 11,
    marginLeft: 5
  },
  lesson__lector: {
    color: '#007AFF'
  }
});

export default lessonStyles;
