import {View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Dialog, Portal, PaperProvider, Text} from 'react-native-paper';

const DialogScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <PaperProvider>
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog
            style={{height: '70%'}}
            visible={visible}
            onDismiss={hideDialog}>
            <Dialog.Icon icon="alert" />
            <Dialog.Title style={{textAlign: 'center'}}>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.ScrollArea>
              <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
                <Text>
                  This is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area This is a scrollable
                  area This is a scrollable area This is a scrollable area This
                  is a scrollable area This is a scrollable area This is a
                  scrollable area This is a scrollable area
                </Text>
              </ScrollView>
            </Dialog.ScrollArea>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default DialogScreen;
