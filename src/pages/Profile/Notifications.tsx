import React from "react";
import { View } from "react-native";
import NoNotificationsCard from "../../components/noNotificationCard";

interface OnNotificationsScreenProps {
  navigation: any;
}

const Notifications: React.FC<OnNotificationsScreenProps> = ({
  navigation,
}) => {
  return (
    <View>
      <NoNotificationsCard navigation={navigation} />
    </View>
  );
};
export default Notifications;
