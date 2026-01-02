import BookLoader from "@/lib/BookLoader";
import { persistor, store } from "@/store/store";
import { Book } from "lucide-react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={<BookLoader />} persistor={persistor}>
        <Toaster />
        {children}
      </PersistGate>
    </Provider>
  );
}
