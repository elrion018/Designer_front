import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//

import {Login} from '../../pages/LoginAndRegister';
import {
  EditSearchPeoPage,
  EditTalkPage,
  EditTeamBuildPage,
  MyPage,
  SearchPeoplePage,
  TalkDetailPage,
  TalkPage,
  TeamBuildPage,
  WriteSearchPeoPage,
  WriteTalkPage,
  WriteTeamBuildPage,
} from '../../pages/Main';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//

//

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="MainTab" headerMode="none">
      <Stack.Screen name="Login" component={renderLogin} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
}

function MainTab() {
  return (
    <Tab.Navigator initialRouteName="TeamBuildPage" headerMode="none">
      <Tab.Screen
        name="EditSearchPeoPage"
        component={renderEditSearchPeoPage}
      />
      <Tab.Screen name="EditTalkPage" component={renderEditTalkPage} />
      <Tab.Screen
        name="EditTeamBuildPage"
        component={renderEditTeamBuildPage}
      />
      <Tab.Screen name="MyPage" component={renderMyPage} />
      <Tab.Screen name="SearchPeoplePage" component={renderSearchPeoplePage} />
      <Tab.Screen name="TalkDetailPage" component={renderTalkDetailPage} />
      <Tab.Screen name="TeamBuildPage" component={renderTeamBuildPage} />
      <Tab.Screen
        name="WriteSearchPeoPage"
        component={renderWriteSearchPeoPage}
      />
      <Tab.Screen name="WriteTalkPage" component={renderWriteTalkPage} />
      <Tab.Screen
        name="WriteTeamBuildPage"
        component={renderWriteTeamBuildPage}
      />
    </Tab.Navigator>
  );
}

//

function renderLogin() {
  return <Login />;
}

function renderEditSearchPeoPage() {
  return <EditSearchPeoPage />;
}

function renderEditTalkPage() {
  return <EditTalkPage />;
}

function renderEditTeamBuildPage() {
  return <EditTeamBuildPage />;
}

function renderMyPage() {
  return <MyPage />;
}

function renderSearchPeoplePage() {
  return <SearchPeoplePage />;
}

function renderTalkDetailPage() {
  return <TalkDetailPage />;
}

function renderTalkPage() {
  return <TalkPage />;
}

function renderTeamBuildPage() {
  return <TeamBuildPage />;
}

function renderWriteSearchPeoPage() {
  return <WriteSearchPeoPage />;
}

function renderWriteTalkPage() {
  return <WriteTalkPage />;
}

function renderWriteTeamBuildPage() {
  return <WriteTeamBuildPage />;
}

//

function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default AppNavigator;
