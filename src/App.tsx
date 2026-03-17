import { useMemo, useState } from "react";
import BottomTabBar from "./components/BottomTabBar";
import DiagnosisScreen from "./screens/DiagnosisScreen";
import ExploreScreen from "./screens/ExploreScreen";
import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";
import type { TabItem, TabKey } from "./types";

const tabs: TabItem[] = [
  { key: "home", label: "홈" },
  { key: "explore", label: "탐색" },
  { key: "diagnosis", label: "진단" },
  { key: "saved", label: "저장" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  const activeScreen = useMemo(() => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "explore":
        return <ExploreScreen />;
      case "diagnosis":
        return <DiagnosisScreen />;
      case "saved":
        return <SavedScreen />;
      default:
        return null;
    }
  }, [activeTab]);

  return (
    <div style={styles.app}>
      <header>
        <h1 style={styles.title}>청소해요</h1>
      </header>

      <main style={styles.main}>{activeScreen}</main>

      <BottomTabBar items={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: "100vh",
    padding: "24px 20px 96px",
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontFamily:
      "Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    boxSizing: "border-box",
  },
  title: {
    marginTop: 0,
    marginBottom: 12,
  },
  main: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 1px 2px rgba(15, 23, 42, 0.08)",
  },
};
