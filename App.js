import { StyleSheet, SafeAreaView } from 'react-native';
import { globalColors } from './src/constants/global.styles';
import { PaperProvider } from 'react-native-paper';
import { TaskScreen } from './src/components/TaskScreen';

import IconIcon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <PaperProvider
      settings={{
        icon: props => <IconIcon {...props} />,
      }}>
      <SafeAreaView style={styles.container}>
        <TaskScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.blue,
  },
});
