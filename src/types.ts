export type TabKey = "home" | "explore" | "diagnosis" | "saved";

export interface TabItem {
  key: TabKey;
  label: string;
}
