import React, { useEffect, useState } from "react";
import { View } from "react-native";
import NoNotificationsCard from "../../components/noNotificationCard";
import LoaderView from "../../components/loaderView";

interface OnNotificationsScreenProps {
  navigation: any;
}
const Notifications: React.FC<OnNotificationsScreenProps> = ({
  navigation,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <View>
      {isLoading ? (
        <LoaderView />
      ) : (
        <NoNotificationsCard navigation={navigation} />
      )}
    </View>
  );
};
export default Notifications;
