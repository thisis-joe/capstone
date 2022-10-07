import React, { useEffect } from "react";
import { createDrawerNavigator, DrawerActions } from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/Ionicons";
import Three_Contracts from "./Three_Contracts";
import MyPage from "./MyPage";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

function PostWrite({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholer="게시글내용을입력하세요"
          onPress={fetch()}
        ></TextInput>{" "}
        {/*작성후 뭐 누르면 제출되게 해야함. 작성자 id에 등록시켜서 db에 올라가야됨 post_content */}
      </View>
      <View>{/* 작성자 계약서 하이퍼링크 */}</View>
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.push("Notice_board")}
        >
          <Text style={styles.textstyle}>POST</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.push("Notice_board")}
        >
          <Text style={styles.textstyle}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//보내기함수
const btnOnpress = async (postcontent) => {
  const result = await (
    await fetch(HOSTNAME + "/post_add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "yohan123",
      }),
    })
  ).json();

  console.log(result);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    backgroundColor: "yellow",
    paddingBottom: "10%",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "10%",
    width: "100%",
    paddingLeft: "10%",
    height: 50,
    backgroundColor: "black",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    //position:"absolute",
    width: "35%",
    height: "100%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 5,
    backgroundColor: "#0DF9FF",
  },
  textstyle: {
    color: "#000000",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
});

export default PostWrite;
