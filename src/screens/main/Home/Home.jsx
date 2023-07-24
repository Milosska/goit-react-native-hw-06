import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import PostNestedScreens from "../PostsNestedScreens/PostNestedScreens";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

import { Feather } from "@expo/vector-icons";
import styles from "./Home.styles";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Home = () => {
  const BottomTab = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Посты"
        component={PostNestedScreens}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            if (routeName === "Комментарии") {
              return { display: "none" };
            }
            return;
          })(route),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Feather name="grid" focused={focused} size={24} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
        })}
      />
      <BottomTab.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerTitleContainerStyle: styles.headerTitle,
          tabBarShowLabel: false,
          tabBarButton: () => (
            <TouchableOpacity
              style={styles.plusBarIcon}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Создать публикацию")}
            >
              <Feather name="plus" focused="false" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Feather name="user" focused={focused} size={24} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Home;
