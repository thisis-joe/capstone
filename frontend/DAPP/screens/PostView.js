import React, { useEffect } from "react";
import { createDrawerNavigator,DrawerActions } from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/Ionicons";
import Three_Contracts from "./Three_Contracts";
import MyPage from "./MyPage";
import { 
  View, 
  Text, 
  StyleSheet , 
  FlatList, 
  TouchableOpacity,
  Dimensions,
} from "react-native";

//postview.js는 post버튼 누를떄마다 생성되어야 함

//북마크시 이동(push)은 noticeboard가 아니라 북마크 DB
//edit시 return 값 새로 받아오기?
//delete시 해당 페이지 삭제
function PostView({navigation, route}) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text>{route.params.id}</Text>
        <TouchableOpacity style={styles.bookmarkBtn} onPress={() => navigation.push('Notice_board')}>
          <Text style={styles.textstyle}>BOOK MARK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editBtn} onPress={() => navigation.push('Notice_board')}>
          <Text style={styles.textstyle}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn} onPress={() => navigation.push('Notice_board')}>
          <Text style={styles.textstyle}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column-reverse",
    alignItems: 'center',
    backgroundColor:"yellow",
    paddingBottom:"10%",
  },
  container2: {
    flexDirection:'row',
    justifyContent:"space-between",
    paddingRight:"10%",
    width: "100%",
    height: 50,
    backgroundColor:"black",
  },
  textstyle: {
    color:"#000000",
    fontSize:20,
    alignItems:"center",
    justifyContent:"center",
    fontWeight:"bold",
  },
  bookmarkBtn: {
    justifyContent:"center",
    alignItems:"center",
    //position:"absolute",
    width:"35%",
    height:"100%",
    borderRadius:10,
    borderColor:"black",
    borderWidth:5,
    backgroundColor:"#0DF9FF",
  },
  editBtn:{
    justifyContent:"center",
    alignItems:"center",
    //position:"absolute",
    width:"19%",
    height:"100%",
    borderRadius:10,
    borderColor:"black",
    borderWidth:5,
    backgroundColor:"#0DF9FF",
  },
  deleteBtn:{
    justifyContent:"center",
    alignItems:"center",
    //position:"absolute",
    width:"25%",
    height:"100%",
    borderRadius:10,
    borderColor:"black",
    borderWidth:5,
    backgroundColor:"#0DF9FF",
  },
  
});

export default PostView;