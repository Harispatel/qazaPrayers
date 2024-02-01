import { ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";

// Components
import styles from "../../components/common/styles";
import DOBManager from "../../components/dobManager";
import { QpButton, QpText } from "../../components/elements";
import { btnTypes, txtHead } from "../../components/common/constants";
import MainComponent from "../../components/MainComponent";

import { DOBManagerT } from "../../utility/types/type";
import QpStorage from "../../services/storageService";

export default function Home({ navigation }: any) {
  const [dateValue, setDateValue] = useState<DOBManagerT>();
  const [isModalVisible, setModalVisible] = useState(false);

  const modalStatusChange = async () => {
    setModalVisible(!isModalVisible);
  };
  const handleAction = async () => {
    if (dateValue != undefined) {
      await QpStorage.save("dob", dateValue);
    }
    modalStatusChange();
  };
  useEffect(() => {
    retriveData();
  }, []);
  const retriveData = async () => {
    let RetrivedDate = await QpStorage.get("dob");

    // Date Of Birth Not Selected so Show Calender Modal
    if (RetrivedDate == null) {
      modalStatusChange();
    }
    setDateValue(RetrivedDate);
  };
  // const Datesss=AsyncStorage.setItem(key, JSON.stringify(value))

  return (
    <ScrollView>
      <MainComponent />
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
            : "Selected Date Of Birth " + dateValue}
        </QpText>
        <QpButton
          type={btnTypes.text}
          style={[styles.buttonDark, styles.mt15]}
          onPress={() => setModalVisible(!isModalVisible)}
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
            Switch
          </QpText>
        </QpButton>
      </View>
    </ScrollView>
  );
}
