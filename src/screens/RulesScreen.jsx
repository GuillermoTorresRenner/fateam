import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import page0 from "../../assets/manual/0.png";
import page1 from "../../assets/manual/1.png";
import page2 from "../../assets/manual/2.png";
import page3 from "../../assets/manual/3.png";
import page4 from "../../assets/manual/4.png";
import page5 from "../../assets/manual/5.png";
import page6 from "../../assets/manual/6.png";
import page7 from "../../assets/manual/7.png";
import page8 from "../../assets/manual/8.png";
import page9 from "../../assets/manual/9.png";
import page10 from "../../assets/manual/10.png";
import page11 from "../../assets/manual/11.png";
import page12 from "../../assets/manual/12.png";
import page13 from "../../assets/manual/13.png";
import page14 from "../../assets/manual/14.png";
import page15 from "../../assets/manual/15.png";
import page16 from "../../assets/manual/16.png";
import page17 from "../../assets/manual/17.png";
import page18 from "../../assets/manual/18.png";
import page19 from "../../assets/manual/19.png";
import page20 from "../../assets/manual/20.png";
import page21 from "../../assets/manual/21.png";
import page22 from "../../assets/manual/22.png";
import page23 from "../../assets/manual/23.png";
import page24 from "../../assets/manual/24.png";
import page25 from "../../assets/manual/25.png";
import page26 from "../../assets/manual/26.png";
import page27 from "../../assets/manual/27.png";
import page28 from "../../assets/manual/28.png";
import page29 from "../../assets/manual/29.png";
import page30 from "../../assets/manual/30.png";
import page31 from "../../assets/manual/31.png";
import page32 from "../../assets/manual/32.png";
import page33 from "../../assets/manual/33.png";
import page34 from "../../assets/manual/34.png";
import page35 from "../../assets/manual/35.png";
import page36 from "../../assets/manual/36.png";
import page37 from "../../assets/manual/37.png";
import page38 from "../../assets/manual/38.png";
import page39 from "../../assets/manual/39.png";
import page40 from "../../assets/manual/40.png";
import page41 from "../../assets/manual/41.png";
import page42 from "../../assets/manual/42.png";
import page43 from "../../assets/manual/43.png";
import page44 from "../../assets/manual/44.png";
import page45 from "../../assets/manual/45.png";
import page46 from "../../assets/manual/46.png";
import page47 from "../../assets/manual/47.png";
import page48 from "../../assets/manual/48.png";
import page49 from "../../assets/manual/49.png";
import page50 from "../../assets/manual/50.png";
import Theme from "../theme/Theme";
import { AntDesign } from "@expo/vector-icons";
export default function RulesScreen({ route }) {
  const currentPage = route.params?.currentPage || 0;
  const book = [
    page0,
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
    page11,
    page12,
    page13,
    page14,
    page15,
    page16,
    page17,
    page18,
    page19,
    page20,
    page21,
    page22,
    page23,
    page24,
    page25,
    page26,
    page27,
    page28,
    page29,
    page30,
    page31,
    page32,
    page33,
    page34,
    page35,
    page36,
    page37,
    page38,
    page39,
    page40,
    page41,
    page42,
    page43,
    page44,
    page45,
    page46,
    page47,
    page48,
    page49,
    page50,
  ];
  const [page, setPage] = useState(currentPage);
  const back = () => {
    if (page > 0) setPage(page - 1);
  };
  const foward = () => {
    if (page < 48) setPage(page + 1);
  };
  const goToPage = (pageNumber) => {
    const num = parseInt(pageNumber, 10);
    if (!isNaN(num) && num >= 0 && num < book.length) {
      setPage(num);
    }
  };
  return (
    <View style={styles.general}>
      <View style={styles.input}>
        <Text style={{ fontWeight: "bold" }}>Número de pagina: </Text>
        <TextInput
          style={styles.pageInput}
          keyboardType="numeric"
          onChangeText={goToPage}
          defaultValue={page.toString()}
        />
      </View>
      <View style={styles.container}>
        <Pressable style={styles.btn} onPress={back}>
          <AntDesign name="caretleft" size={24} color={Theme.colors.tertiary} />
        </Pressable>
        <Image
          source={book[page]}
          style={{ width: "90%", height: "100%" }}
          resizeMode="contain"
        />
        <Pressable style={styles.btn} onPress={foward}>
          <AntDesign
            name="caretright"
            size={24}
            color={Theme.colors.tertiary}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 19,
  },
  btn: {
    width: "5%",
    justifyContent: "center",
    alignItems: "center",
  },

  pageInput: {
    height: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Theme.colors.tertiary,
    textAlign: "center",
    width: "20%",
  },
  input: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 10,
  },
  general: {
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
