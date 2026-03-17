import type { TabItem, TabKey } from "../types";

interface BottomTabBarProps {
  items: TabItem[];
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export default function BottomTabBar({
  items,
  activeTab,
  onTabChange,
}: BottomTabBarProps) {
  return (
    <nav style={styles.nav} aria-label="하단 탭 메뉴">
      {items.map((item) => {
        const isActive = item.key === activeTab;

        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onTabChange(item.key)}
            style={{
              ...styles.tabButton,
              ...(isActive ? styles.activeTabButton : styles.inactiveTabButton),
            }}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    padding: "8px 12px calc(8px + env(safe-area-inset-bottom))",
    gap: 8,
  },
  tabButton: {
    border: "none",
    borderRadius: 10,
    padding: "10px 8px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  activeTabButton: {
    backgroundColor: "#e0f2fe",
    color: "#0369a1",
  },
  inactiveTabButton: {
    backgroundColor: "#f8fafc",
    color: "#334155",
  },
};
