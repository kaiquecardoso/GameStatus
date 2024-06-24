import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Animated,
  Platform,
  Text,
} from "react-native";
import { router } from "expo-router";
import { styles } from "./styles/signin.style";
import { StatusBar } from "expo-status-bar";
import logo from "../../../assets/images/logo.png";
import SignInButton from "@/components/Button";
import Space from "@/components/Space";
import Input from "@/components/Input";
import SecurityInput from "@/components/SecurityInput";
import { useEffect, useState, useRef } from "react";
import Link from "@/components/Link";

export default function SignIn() {
  const logoSize = useState(new Animated.Value(1))[0];
  const logoMarginTop = useState(new Animated.Value(150))[0];
  const passwordInputRef: any = useRef(null);

  useEffect(() => {
    const showEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const keyboardWillShowListener = Keyboard.addListener(showEvent, () => {
      Animated.parallel([
        Animated.timing(logoSize, {
          toValue: 0.4, // Reduz para 50% do tamanho original
          duration: 300, // Duração da animação
          useNativeDriver: false, // useNativeDriver não pode ser usado com transformações de margem
        }),
        Animated.timing(logoMarginTop, {
          toValue: 20, // Ajuste para a margem desejada quando o teclado aparecer
          duration: 300, // Duração da animação
          useNativeDriver: false, // useNativeDriver não suporta margin
        }),
      ]).start();
    });

    const keyboardWillHideListener = Keyboard.addListener(hideEvent, () => {
      Animated.parallel([
        Animated.timing(logoSize, {
          toValue: 1, // Retorna ao tamanho original
          duration: 300, // Duração da animação
          useNativeDriver: false,
        }),
        Animated.timing(logoMarginTop, {
          toValue: 150, // Retorna à margem original
          duration: 300, // Duração da animação
          useNativeDriver: false,
        }),
      ]).start();
    });

    return () => {
      keyboardWillHideListener.remove();
      keyboardWillShowListener.remove();
    };
  }, [logoSize, logoMarginTop]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <KeyboardAvoidingView
        style={styles.content}
        contentContainerStyle={styles.containerScroll}
        behavior="padding"
      >
        <Animated.View
          style={[
            styles.logoWrapper,
            {
              transform: [{ scale: logoSize }],
              marginTop: logoMarginTop,
            },
          ]}
        >
          <Image style={styles.logo} source={logo} />
        </Animated.View>
        <View style={styles.form}>
          <Text style={styles.title}>Acesse sua conta</Text>
          <Space y={16} />
          <Input
            placeholder="email"
            keyboardType="email-address"
            onSubmitEditing={() => passwordInputRef.current.focus()}
          />
          <Space y={8} />
          <SecurityInput
            placeholder="senha"
            keyboardType="default"
            ref={passwordInputRef}
          />
          <Space y={8} />
          <Link text="Esqueci minha senha" />
          <Space y={8} />
          <SignInButton
            onPress={() => router.replace("(auth)/(home)/home")}
            text="Acessar"
          />
          <Space y={8} />
          <SignInButton
            onPress={() => router.navigate("register")}
            text="Criar uma conta"
            bgColor="#c4c4cc"
            txtColor="#323238"
          />
          <Space y={50} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
