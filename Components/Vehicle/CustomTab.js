import { Animated, View, TouchableOpacity } from 'react-native';


export default function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        
          const bgColor= isFocused ? "white" : "rgba(63,189,241,1)"
          const fontColor= isFocused ? "black" : "white"
          
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1,
            backgroundColor: bgColor,
            height: 50,
            borderWidth: 1,
            borderColor: "black",
            display: "flex",  
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            width: 60,
            margin: 6,
            borderRadius: 10,
            }}
          >
          
            <Animated.Text style={{ color:fontColor,textAlign:"center"}}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// ...

// <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
//   {...}
// </Tab.Navigator>