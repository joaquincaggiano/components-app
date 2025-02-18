import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import ThemeCard from "@/components/ui/ThemeCard";
import ThemeInput from "@/components/ui/ThemeInput";
import ThemeText from "@/components/ui/ThemeText";
import ThemeView from "@/components/ui/ThemeView";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? "padding" : "height"}>
      <ScrollView>
        <ThemeView margin>
          <ThemeCard className="mb-5">
            <ThemeInput
              value={form.name}
              placeholder="Nombre completo"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemeInput
              value={form.email}
              placeholder="Correo electrónico"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <ThemeInput
              value={form.password}
              placeholder="Contraseña"
              autoCorrect={false}
              secureTextEntry
              onChangeText={(text) => setForm({ ...form, password: text })}
            />
          </ThemeCard>

          <ThemeCard>
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>
        </ThemeView>

        {isIOS && <View style={{ height: 100 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
