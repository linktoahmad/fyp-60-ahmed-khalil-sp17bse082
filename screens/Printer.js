import React, { Component } from "react";
import { Block, Text, Button } from "../components";
import { theme } from "../constants";
import { StyleSheet, Image } from "react-native";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { meterId } from "./SlectMeter.js";

const html = `<!DOCTYPE html>
<html>
<body>

<h2>HTML Images</h2>
<p>HTML images are defined with the img tag:</p>

<img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alt="W3Schools.com" width="720" height="420">

</body>
</html>
`;

async function Share_report() {
  const { uri } = await Print.printToFileAsync({ html });

  Sharing.shareAsync(uri);
}

async function Print_report() {
  Print.printAsync({
    html: html,
  });
}

class Settings extends Component {
  render() {
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Print Report
          </Text>
          <Text h2 bold center style={{ color: theme.colors.secondary }}>
            {meterId}
          </Text>
        </Block>
        <Block middle flex={0.5} margin={[100, theme.sizes.padding * 2]}>
          <Image source={require("../assets/images/bill.png")} />

          <Text center>
            Save and Print will save your report in your mobile storage and send
            it to connected printer.
          </Text>

          <Button gradient onPress={() => Print_report()}>
            <Text center bold white>
              Save and Print
            </Text>
          </Button>

          <Text center>
            You can share your Electricity usage report by email or whatsApp
          </Text>

          <Button gradient onPress={() => Share_report()}>
            <Text center bold white>
              Share
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
});
