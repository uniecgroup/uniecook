import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const SidebarTabs = ({ navigation, descriptors }) => {
  const { routes, index } = navigation.state;

  return (
    <View style={styles.tabContainer}>
        {routes.map((route, tabIndex) => {
            const { routeName, params } = route;
            const { icon, tabName } = params || {};
            const color = tabIndex === index ? 'white' : 'grey';

            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate(routeName)}
                    style={styles.tab}
                    key={route.routeName}
                >
                    <FontAwesome5 name={icon} size={24} color={color} style={styles.tabIcon} />
                    <View style={{ flex: 1, }}>
                        <Text style={{ color }}>
                            {tabName}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  header: { position: 'absolute', top: 0 },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    flex: 1,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 80,
    backgroundColor: '#222',
  },
  tabIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 28,
  }
});

export default SidebarTabs;