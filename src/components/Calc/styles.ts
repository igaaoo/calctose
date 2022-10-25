import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 55,
  },
  circle: {
    alignSelf: 'center',
    width: 390,
    height: 140,
  },
  value: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 30,
    textAlign: 'center',
  },
  lacTotal: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 2,
    position: 'absolute',
    right: 80,
    bottom: 35,
  },
  lacActive: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    backgroundColor: '#D46863',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    position: 'absolute',
    left: 65,
    bottom: 35,
  },
  itemValue: {
    fontFamily: 'Inter_800ExtraBold',
    color: '#fff',
    overflow: 'visible',
    fontSize: 20,
  },
  help: {
    color: "#5CA19C"
  }
})
