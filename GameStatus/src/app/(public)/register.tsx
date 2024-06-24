import { View, Image, Keyboard, Animated, Text } from "react-native";
import { router } from "expo-router";
import { styles } from "./styles/register.style";
import { StatusBar } from "expo-status-bar";
import logo from "../../../assets/images/logo.png";
import SignInButton from "@/components/Button";
import Space from "@/components/Space";
import Input from "@/components/Input";
import SecurityInput from "@/components/SecurityInput";
import { useEffect, useState, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register() {
  const logoOpacity = useRef(new Animated.Value(1)).current;
  const logoSize = useRef(new Animated.Value(0.8)).current;
  const logoMarginTop = useRef(new Animated.Value(120)).current;
  const passwordInputRef: any = useRef(null);

  const handleScroll = (event: any) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;

    const opacity = currentScrollY > 50 ? 0 : 1;
    const size = currentScrollY > 50 ? 0 : 0.8;
    const marginTop = currentScrollY > 200 ? 50 : 100;

    Animated.timing(logoOpacity, {
      toValue: opacity,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(logoSize, {
      toValue: size,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(logoMarginTop, {
      toValue: marginTop,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <View style={styles.absolute}>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.scrollview}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <Animated.View
            style={[
              styles.logoWrapper,
              {
                opacity: logoOpacity,
                transform: [{ scale: logoSize }],
                marginTop: logoMarginTop,
              },
            ]}
          >
            <Image source={logo} style={styles.logo} />
          </Animated.View>
          <View style={{ flexGrow: 1 }} />
          <View style={styles.form}>
            <Text style={styles.title}>Crie sua conta de professor</Text>
            <Space y={16} />
            <Input
              placeholder="Nome"
              keyboardType="default"
              onSubmitEditing={() => passwordInputRef.current.focus()}
            />
            <Space y={8} />
            <Input
              placeholder="Telefone"
              keyboardType="phone-pad"
              onSubmitEditing={() => passwordInputRef.current.focus()}
            />
            <Space y={8} />
            <Input
              placeholder="Email"
              keyboardType="email-address"
              onSubmitEditing={() => passwordInputRef.current.focus()}
            />
            <Space y={8} />
            <SecurityInput
              placeholder="Senha"
              keyboardType="default"
              ref={passwordInputRef}
            />
            <Space y={8} />
            <SecurityInput
              placeholder="Confirme a senha"
              keyboardType="default"
              ref={passwordInputRef}
            />
            <Space y={8} />
            <SignInButton
              onPress={() => router.replace("(auth)")}
              text="Acessar"
            />
            <Space y={8} />
            <SignInButton
              onPress={() => router.back()}
              text="Já tenho uma conta"
              bgColor="#c4c4cc"
              txtColor="#323238"
            />
            <Space y={50} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
