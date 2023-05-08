import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get('window');
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}
export default StyleSheet.create({
    container:{
        backgroundColor:'black',
        // paddingTop : 40
    },
  header: {
    color: 'white',
    margin: 10,
  },
  userBtn: {
    color: 'white',
    textAlign: 'right',
    fontSize: 15,
  },
  logo: {
    color: 'white',
    margin: 30,
    textAlign: 'center',
    fontSize: 30,
  },
  account: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: '100%',
    padding: 10,
  },
  accountHeading: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    paddingBottom: 40,
  },
  tnc: {
    fontSize: 8,
    width: wp(50),
    textAlign: 'center',
    margin: 'auto',
    marginTop: 30,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 50,
    backgroundColor: '#FF5733',
    width: wp(50),
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
