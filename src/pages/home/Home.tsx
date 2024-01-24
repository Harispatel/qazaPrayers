import { ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";

import moment from "moment";

// !other import
import styles from "../../components/common/styles";
import DOBManager from "../../components/dobManager";
import { DOBManagerT } from "../../utility/types/type";
import { QpText } from "../../components/elements";
import { txtHead } from "../../components/common/constants";
import QpStorage from "../../services/storageService";
import MainComponent from "../../components/MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/slice";

export default function Home({ navigation }: any) {
  const [dateValue, setDateValue] = useState<DOBManagerT>();
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState();
  let DOBModalstatus = useSelector((state: any) => state.data);
  useEffect(() => {
    if (DOBModalstatus != null) {
      setModalVisible(DOBModalstatus?.changeDobModalStatus);
    }
  }, [DOBModalstatus]);
  const formattedDate = moment(dateValue).format("DD-MM-YYYY");
  const close = () => {
    setModalVisible(false);
    dispatch(setData({ changeDobModalStatus: false }));
  };
  const handleAction = async () => {
    await QpStorage.save("dob", null);
    close();
  };
  const retriveData = async () => {
    let RetrivedDate = await QpStorage.get("dob");
    setDateValue(RetrivedDate);
    if (RetrivedDate !== null) {
      close();
    }
  };
  // const Datesss=AsyncStorage.setItem(key, JSON.stringify(value))
  useEffect(() => {
    retriveData();
  }, []);

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
            : "Selected Date Of Birth " + formattedDate}
        </QpText>
      </View>
    </ScrollView>
  );
}
