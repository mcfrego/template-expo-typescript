import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useAppDispatch } from '../../../shared/redux/hooks'
import { homeLaunched } from '../../../shared/redux/slices/app'

console.log('env file value: ', process.env.KEY_EXAMPLE)

const Home = function () {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(homeLaunched())
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hi Momo!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
