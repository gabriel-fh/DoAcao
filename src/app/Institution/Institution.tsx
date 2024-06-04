import CampaignCard from "@/components/CampaignCard";
import CloseModalButton from "@/components/CloseModalButton";
import IconText from "@/components/IconText";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";

const Institution = () => {
  return (
    <View style={{ position: "relative", flex: 1 }}>
      <StatusBar hidden />

      <CloseModalButton />
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: "https://picsum.photos/500/211" }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={{ ...styles.container, ...styles.wrapper }}>
          <Text
            style={styles.title}
            children={"Ação Comunitária - Unilasalle RJ"}
          />

          <View style={{gap: 12}}>
            <IconText text="Niterói, Rio de Janeiro">
              <Entypo name={"location"} size={20} color={'#0D62AD'} />
            </IconText>

            <IconText text="(21) 99999-9999">
              <Foundation name={"telephone"} size={22} color={'#0D62AD'} />
            </IconText>
          </View>
          <View>
            <Text style={styles.subtitle}>Descrição</Text>
            <Text style={{ ...styles.description }}>
              Lorem Ipsum simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make.
            </Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Campanhas Ativas</Text>
            <View style={{ marginTop: 10 }}>
              {Array.from({ length: 3 }).map((_, idx) => (
                <CampaignCard key={idx} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: "100%",
  },
  wrapper: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    gap: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
  },
  description: {
    fontSize: 14,
    color: "#595959",
    fontFamily: "Montserrat_500Medium",
    marginVertical: 5,
  },
});

export default Institution;