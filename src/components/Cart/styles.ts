import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    elevation: 4,
    width: 340,
    height: 200,
    borderRadius: 20,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#D46863',
    borderRadius: 10,
    width: "80%",
    paddingVertical: 10,
    marginBottom: 25,
    elevation: 8,
  },
  buttonText: {
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  contentList: {
    padding: 10,
    marginTop: 15,
  }

})
