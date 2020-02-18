/* Library Imports */
import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { Input, Item } from "native-base";
import { Formik } from "formik";
import { Container } from "../../styles";

const styles = StyleSheet.create({
  // @ts-ignore
  container: {
    //form is going to show in column view
    ...Container.baseColumn
  },
  //inputContainer orders elements in a row
  // @ts-ignore
  inputContainer: {
    ...Container.baseRowBaseLine,
    ...Container.alignItemFlexEnd,
    ...Container.justifyContentSpaceBetween,
  },
  input: {
    width: '80%'
  }
});

export default function TransactionForm(props) {
  return (
    <Formik
      initialValues={{
        title: ``,
        comment: ``,
        date: ``,
        amount: ``,
        category: ``,
        account: ``
      }}
      onSubmit={values => alert(JSON.stringify(values))}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.container}>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Title </Text>
            <Item underline style={styles.input}>
              <Input onChangeText={handleChange(`title`)} value={values.title} />
            </Item>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Comment </Text>
            <Item underline style={styles.input}>
              <Input onChangeText={handleChange(`comment`)} value={values.comment} />
            </Item>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Date </Text>
            <Item underline style={styles.input}>
              <Input
                onChangeText={handleChange(`date`)}
                value={values.date}
              />
            </Item>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Amount </Text>
            <Item underline style={styles.input}>
              <Input
                onChangeText={handleChange(`amount`)}
                value={values.amount}
              />
            </Item>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Category </Text>
            <Item underline style={styles.input}>
              <Input
                onChangeText={handleChange(`category`)}
                value={values.category}
              />
            </Item>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Account </Text>
            <Item underline style={styles.input}>
              <Input
                onChangeText={handleChange(`account`)}
                value={values.account}
              />
            </Item>
          </View>
          <Text>{`\n`}</Text>
          <Button onPress={handleSubmit} title={`Submit`} />
        </View>
      )}
    </Formik>
  );
}
