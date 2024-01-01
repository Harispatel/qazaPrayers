/* eslint-disable prettier/prettier */
import React from "react";

// Components

import styles from "./common/styles";
import { btnTypes, txtHead } from "./common/constants";
import { Card } from "react-native-paper";
import { GpButton, GpText } from "./elements";
import GpIcons from "./elements/GpIcons";
import { COLORS } from "./common/colors";

interface NoNotificationsCardScreenProps {
  navigation: any;
}

const NoNotificationsCard: React.FC<NoNotificationsCardScreenProps> = ({
  navigation,
}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Card style={[styles.flex, styles.justifyContentCenter]}>
      <Card.Content>
        <GpText type={txtHead.heading3}>No Notifications yet</GpText>
        <GpText type={txtHead.heading6}>
          When you get notifications, They'll show up here
        </GpText>
      </Card.Content>

      <GpIcons
        style={styles.mrH20}
        type={"MaterialIcons"}
        name={"circle-notifications"}
        color={COLORS.GREEN}
        size={300}
      />
      <Card.Actions>
        <GpButton
          type={btnTypes.text}
          style={[styles.buttonDark, styles.mt15]}
          onPress={handleBack}
          btnIcon={undefined}
          disabled={false}
          isUpperCase={false}
        >
          <GpText
            style={{
              ...styles.textBlack,
              ...styles.buttonDarkText,
              ...styles.textLG,
              ...styles.semiBold,
              ...styles.textUP,
            }}
          >
            Go Back
          </GpText>
        </GpButton>
      </Card.Actions>
    </Card>
  );
};

export default NoNotificationsCard;
