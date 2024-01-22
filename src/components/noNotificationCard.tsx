/* eslint-disable prettier/prettier */
import React from "react";

// Components

import styles from "./common/styles";
import { btnTypes, txtHead } from "./common/constants";
import { Card } from "react-native-paper";
import { QpButton, QpText } from "./elements";
import QpIcons from "./elements/QpIcons";
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
        <QpText type={txtHead.heading3}>No Notifications yet</QpText>
        <QpText type={txtHead.heading6}>
          When you get notifications, They'll show up here
        </QpText>
      </Card.Content>

      <QpIcons
        style={styles.mrH20}
        type={"MaterialIcons"}
        name={"circle-notifications"}
        color={COLORS.GREEN}
        size={300}
      />
      <Card.Actions>
        <QpButton
          type={btnTypes.text}
          style={[styles.buttonDark, styles.mt15]}
          onPress={handleBack}
          btnIcon={undefined}
          disabled={false}
          isUpperCase={false}
        >
          <QpText
            style={{
              ...styles.textBlack,
              ...styles.buttonDarkText,
              ...styles.textLG,
              ...styles.semiBold,
              ...styles.textUP,
            }}
          >
            Go Back
          </QpText>
        </QpButton>
      </Card.Actions>
    </Card>
  );
};

export default NoNotificationsCard;
