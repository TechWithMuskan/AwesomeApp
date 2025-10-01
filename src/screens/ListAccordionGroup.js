import {View, Text} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';

const ListAccordionGroup = () => {
  return (
    <List.AccordionGroup>
      <List.Accordion id="1" title="Accordion 1">
        <List.Item title="First Item" />
      </List.Accordion>
      <List.Accordion id="2" title="Accordion 2">
        <List.Item title="First Item" />
        <List.Item title="Second Item" />
      </List.Accordion>
      <View>
        <Text style={{padding: 16}}>
          List.Accordion can be wrapped because implementation uses
          React.Context.
        </Text>
        <List.Accordion title="Accordion 3" id="3">
          <List.Item title="Item 3" />
        </List.Accordion>
      </View>
    </List.AccordionGroup>
  );
};

export default ListAccordionGroup;
