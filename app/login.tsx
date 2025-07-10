import { setUser } from "@/features/authSlice";
import { useLoginMutation } from "@/lib/accountEndpoints";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const result = await login({ email, password }).unwrap();
      dispatch(
        setUser({
          uid: result?.user.uid,
          email: result?.user.email,
          token: result?.token,
        })
      );
      router.replace("/home");
    } catch (err: any) {
      Alert.alert("Login Failed", err.data || "Unknown error");
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="h-screen w-screen flex-col justify-center items-center">
        <View className="w-[80%] border bg-neutral-100/50 border-neutral-200 rounded p-[3%]">
          <Text className="font-bold w-full text-center text-black text-2xl py-[5%]">
            NativeMDB
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            className="mb-4 border px-[3%] py-[4%] border-neutral-200 bg-white"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            className="mb-4 border px-[3%] py-[4%] border-neutral-200 bg-white"
          />
          <Button
            title={isLoading ? "Logging in..." : "Login"}
            onPress={handleLogin}
            disabled={isLoading}
            color={"#737373"}
          />
          {error && <Text className="text-red-500 mt-2">Please try again</Text>}
        </View>
      </View>
    </>
  );
};

export default Login;
