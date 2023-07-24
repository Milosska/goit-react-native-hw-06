import { createStackNavigator } from "@react-navigation/stack";

import PostsScreen from "./PostsScreen/PostsScreen";
import CommentsScreen from "./CommentsScreen/CommentsScreen";
import MapScreen from "./MapScreen/MapScreen";

import { LogOutIcon } from "../../../components/LogOutIcon/LogOutIcon";
import styles from "./PostNestedScreens.styles";

const PostNestedScreens = ({ route }) => {
  const PostStack = createStackNavigator();

  return (
    <PostStack.Navigator
      initialRouteName="Публикации"
      screenOptions={{ tabBarStyle: { display: "none" } }}
    >
      <PostStack.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <LogOutIcon customStyle={{ paddingHorizontal: 10, bottom: 11 }} />
          ),
          headerStyle: styles.header,
          headerTitleContainerStyle: styles.headerTitle,
          headerBackTitleVisible: false,
          headerLeft: () => <LogOutIcon customStyle={{ display: "none" }} />,
        }}
      />
      <PostStack.Screen
        name="Комментарии"
        component={CommentsScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerTitleContainerStyle: styles.headerTitle,
          headerLeftContainerStyle: { left: 16, bottom: 6 },
        }}
      />
      <PostStack.Screen
        name="Локация"
        component={MapScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerTitleContainerStyle: styles.headerTitle,
          headerLeftContainerStyle: { left: 16, bottom: 6 },
        }}
      />
    </PostStack.Navigator>
  );
};

export default PostNestedScreens;
