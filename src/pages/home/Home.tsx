import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import dayjs from "dayjs";
import moment from "moment";

// !other import
import styles from "../../components/common/styles";
import DOBManager from "../../components/dobManager";
import { DOBManagerT } from "../../utility/types/type";
import { QpText } from "../../components/elements";
import { txtHead } from "../../components/common/constants";

export default function Home({ navigation }: any) {
  // const [user, setUser] = useState<dateType>({name: 'Jon'});
  const [dateValue, setDateValue] = useState<DOBManagerT>();
  const [isModalVisible, setModalVisible] = useState(true);
  const formattedDate = moment(dateValue).format("DD-MM-YYYY");
  const close = () => {
    setModalVisible(false);
  };
  const handleAction = () => {
    close();
  };
  return (
    <ScrollView>
      <DOBManager
        handleAction={handleAction}
        isModalVisible={isModalVisible}
        dateValue={dateValue}
        setDateValue={setDateValue}
      />
      <View style={[styles.contentContainer]}>
        <QpText type={txtHead.heading6}>
          {dateValue == undefined
            ? null
            : "Selected Date Of Birth " + formattedDate}
        </QpText>
      </View>
    </ScrollView>
  );
}
