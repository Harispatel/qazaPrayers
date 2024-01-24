import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/slice";

const MainComponent: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state?.data);

  //   useEffect(() => {
  //     // Dispatch an action to set data
  //     dispatch(setData({ example: "Redux Toolkit data" }));
  //   }, [dispatch]);

  return (
    <View>
      <Text>{data?.example}</Text>
    </View>
  );
};

export default MainComponent;
