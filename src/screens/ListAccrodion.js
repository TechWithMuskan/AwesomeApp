import React, {useState} from 'react';
import {List} from 'react-native-paper';

const ListAccrodion = () => {
  const [expanded, setExpanded] = useState(true);
  console.log('expanded :', expanded);
  return (
    <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        description="This is an uncontrolled accordion"
        left={props => <List.Icon {...props} icon="star" />}>
        <List.Item title="Item 1" />
        <List.Item title="Item 2" />
        <List.Item title="Item 3" />
      </List.Accordion>
      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}>
        <List.Item title="Item 1" />
        <List.Item title="Item 2" />
        <List.Item title="Item 3" />
        <List.Item title="Item 4" />
      </List.Accordion>
    </List.Section>
  );
};

export default ListAccrodion;
