import { StyleSheet, Text, View } from 'react-native';
export default function Screen() {
  return (
    <View>
      <Text className="text-3xl text-red-500">Home</Text>
      <Text style={styles.h1}>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  h1: {
    fontSize: 24,
    color: '#00AA00',
  },
});
