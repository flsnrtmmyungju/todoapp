import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "비와!!!",
    subtitle: "우산 챙겨!!",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "맑아!!!",
    subtitle: "햇볕좀 쐬!!",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "떤더 떠떠떤더!!!!",
    subtitle: "번개 조심해!!",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "구름꼇다!!",
    subtitle: "돌아댕겨!!",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "눈와!!",
    subtitle: "두유 워너 빌더 스노우맨~!!",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "이슬비!!",
    subtitle: "찝찝스키!!",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "연한 안개!!",
    subtitle: "뿌여타!!",
    icon: "weather-fog"
  },
  Mist: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "진한 안개!!",
    subtitle: "앞이~보이질~않아!!",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.tmep}>{temp}℃</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.prototype = {
  tmep: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  tmep: {
    fontSize: 48,
    color: "white",
    backgroundColor: "transparent"
  },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 38,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "transparent",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 24,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "transparent"
  }
});
