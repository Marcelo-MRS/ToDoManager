import React, {useState} from 'react';
import {View, SectionList} from 'react-native';

import {
  Container,
  HeaderContainer,
  HeaderTagContainer,
  HeaderTagText,
  HeaderText,
  ItemContainer,
  ItemTextTitle,
  ItemText,
  Touchable,
} from './styles';

const TaskListView = ({tasks, navigation}) => {
  function onClickTask(task) {
    const {navigate} = navigation;
    navigate('Task', {task});
  }

  function renderSectionHeader(sectionData) {
    return (
      <HeaderContainer>
        <HeaderTagContainer>
          <HeaderTagText>
            {sectionData.section.title.substr(0, 1)}
          </HeaderTagText>
        </HeaderTagContainer>
        <HeaderText>{sectionData.section.title}</HeaderText>
      </HeaderContainer>
    );
  }

  function renderItem(itemData) {
    return (
      <Touchable onPress={() => onClickTask(itemData.item)}>
        <ItemContainer>
          <ItemTextTitle>{itemData.item.title}</ItemTextTitle>
          <ItemText>{itemData.item.resume}</ItemText>
        </ItemContainer>
      </Touchable>
    );
  }

  return (
    <Container>
      <SectionList
        renderSectionHeader={section => renderSectionHeader(section)}
        sections={[
          {
            data: tasks.filter(data => {
              return data.priority;
            }),
            key: 'hightPriority',
            title: 'Hight Priority',
          },
          {
            data: tasks.filter(data => {
              return !data.priority;
            }),
            key: 'lowPriority',
            title: 'Low Priority',
          },
        ]}
        renderItem={data => renderItem(data)}
      />
    </Container>
  );
};

export default TaskListView;
