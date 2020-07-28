import React from 'react';
import {
  StyleSheet,
  //view = div
  View,
  Text,
  ScrollView
} from 'react-native';

/*import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/
const App: () => React$Node = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React-Native</Text>
        <Text style={styles.postDescription}>Nsabf fifh fash</Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React-Native</Text>
        <Text style={styles.postDescription}>Nsabf fifh fash</Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React-Native</Text>
        <Text style={styles.postDescription}>Nsabf fifh fash</Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React-Native</Text>
        <Text style={styles.postDescription}>Nsabf fifh fash</Text>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#333'
  },
  postContainer:{
    marginHorizontal:20,
    marginVertical:10,
    padding:20,
    backgroundColor:'#FFF',
    borderRadius:3,
  },
  postTitle:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:3
  },
  postDescription:{
    color:'#666'
  }
});

export default App;
