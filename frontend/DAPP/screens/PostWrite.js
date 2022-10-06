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

function PostWrite({navigation, route}){
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Notice_board')}>
                <Text style={styles.textstyle}>POST</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Notice_board')}>
                <Text style={styles.textstyle}>CANCEL</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column-reverse",
      backgroundColor:'#FFFFFF',
      alignItems: 'center',
      backgroundColor:"yellow",
      paddingBottom:"10%",
    },
    container2: {
        flexDirection:'row',
        justifyContent:"space-between",
        paddingRight:"10%",
        width: "100%",
        paddingLeft:"10%",
        height: 50,
        backgroundColor:"black",
      },
      btn: {
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
    textstyle: {
    color:"#000000",
    fontSize:20,
    alignItems:"center",
    justifyContent:"center",
    fontWeight:"bold",
    },
});

export default PostWrite;