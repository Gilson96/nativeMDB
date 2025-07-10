import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { store } from "@/store";
import { ToastProvider } from "@gluestack-ui/toast";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import "../global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GluestackUIProvider>
        <ToastProvider>
          <Stack initialRouteName="index" />
        </ToastProvider>
      </GluestackUIProvider>
    </Provider>
  );
}
