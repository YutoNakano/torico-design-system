# Pattern: Navigation

## When to use

For screen headers, tab bars, and bottom sheets that provide navigation structure.

---

## Screen Header (with back button)

Standard navigation header for detail/child screens.

```tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  background, text, icon as iconColors, spacing, componentSpacing,
  heading,
} from '@torico/design-system/tokens';

function ScreenHeader({ title, onBack, rightAction }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBack}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <ChevronLeftIcon size={24} color={iconColors.primary} />
      </TouchableOpacity>

      <Text style={styles.headerTitle} numberOfLines={1}>{title}</Text>

      {rightAction ? (
        rightAction
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: componentSpacing.headerHeight,             // 56px
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[2],                     // 8px (buttons have own padding)
    backgroundColor: background.primary,
  },
  backButton: {
    width: componentSpacing.iconButtonSize,            // 44px
    height: componentSpacing.iconButtonSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    ...heading.medium,                                 // 18px semibold
    color: text.primary,
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: componentSpacing.iconButtonSize,            // balance layout
  },
});
```

---

## Large Title Header

For top-level screens with a prominent title (like iOS large title).

```tsx
function LargeTitleHeader({ title, subtitle, rightAction }) {
  return (
    <View style={largeTitleStyles.container}>
      <View style={largeTitleStyles.titleRow}>
        <View style={largeTitleStyles.titles}>
          <Text style={largeTitleStyles.title}>{title}</Text>
          {subtitle && (
            <Text style={largeTitleStyles.subtitle}>{subtitle}</Text>
          )}
        </View>
        {rightAction}
      </View>
    </View>
  );
}

const largeTitleStyles = StyleSheet.create({
  container: {
    paddingHorizontal: componentSpacing.screenPaddingX,
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
    backgroundColor: background.primary,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titles: {
    flex: 1,
    gap: spacing[1],                                   // 4px
  },
  title: {
    ...display.large,                                  // 32px bold
    color: text.primary,
  },
  subtitle: {
    ...body.medium,
    color: text.secondary,
  },
});
```

---

## Tab Bar (bottom)

Custom bottom tab bar styling.

```tsx
function TabBar({ tabs, activeTab, onTabPress }) {
  return (
    <View style={tabStyles.container}>
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <TouchableOpacity
            key={tab.key}
            style={tabStyles.tab}
            onPress={() => onTabPress(tab.key)}
          >
            <tab.icon
              size={24}
              color={isActive ? iconColors.brand : iconColors.muted}
            />
            <Text style={[
              tabStyles.label,
              isActive && tabStyles.labelActive,
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const tabStyles = StyleSheet.create({
  container: {
    height: componentSpacing.tabBarHeight,             // 64px
    flexDirection: 'row',
    backgroundColor: background.primary,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: border.subtle,
    paddingBottom: spacing[2],                         // 8px safe area padding
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[1],                                   // 4px
  },
  label: {
    ...caption.small,                                  // 10px
    color: text.tertiary,
  },
  labelActive: {
    color: text.brand,                                 // teal
  },
});
```

---

## Segmented Control (inline tabs)

For switching between views within a screen.

```tsx
function SegmentedControl({ segments, activeIndex, onChange }) {
  return (
    <View style={segmentStyles.container}>
      {segments.map((segment, index) => {
        const isActive = index === activeIndex;
        return (
          <TouchableOpacity
            key={segment}
            style={[segmentStyles.segment, isActive && segmentStyles.segmentActive]}
            onPress={() => onChange(index)}
          >
            <Text style={[
              segmentStyles.text,
              isActive && segmentStyles.textActive,
            ]}>
              {segment}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const segmentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: background.surface,               // #2A2A2A
    borderRadius: radii.md,                            // 8px
    padding: spacing[0.5],                             // 2px
  },
  segment: {
    flex: 1,
    paddingVertical: spacing[2],                       // 8px
    alignItems: 'center',
    borderRadius: radii.md - 1,                        // slightly less than container
  },
  segmentActive: {
    backgroundColor: background.tertiary,              // #2C2C2E
  },
  text: {
    ...label.medium,
    color: text.tertiary,
  },
  textActive: {
    color: text.primary,
  },
});
```

---

## Bottom Sheet Header

For the top of a bottom sheet with title and close action.

```tsx
function SheetHeader({ title, onClose }) {
  return (
    <View style={sheetStyles.header}>
      <View style={sheetStyles.handle} />
      <View style={sheetStyles.titleRow}>
        <Text style={sheetStyles.title}>{title}</Text>
        <TouchableOpacity
          style={sheetStyles.closeButton}
          onPress={onClose}
        >
          <XIcon size={20} color={iconColors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const sheetStyles = StyleSheet.create({
  header: {
    paddingTop: spacing[2],                            // 8px
    paddingHorizontal: componentSpacing.screenPaddingX,
    gap: spacing[4],                                   // 16px
  },
  handle: {
    width: 36,
    height: 5,
    borderRadius: radii.full,
    backgroundColor: text.tertiary,
    alignSelf: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...heading.large,                                  // 20px bold
    color: text.primary,
  },
  closeButton: {
    width: componentSpacing.iconButtonSize,
    height: componentSpacing.iconButtonSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

## Z-index Hierarchy

When layering navigation elements:

| Layer | Z-index | Element |
|-------|---------|---------|
| Base | 0 | Screen content |
| Sticky | 10 | Sticky headers, FABs |
| Sheet | 50 | Bottom sheets |
| Modal | 100 | Modals, overlays |
| Toast | 150 | Toast messages |

---

## Do NOT

- Make headers shorter than `componentSpacing.headerHeight` (56px)
- Use custom tab bar heights — use `componentSpacing.tabBarHeight` (64px)
- Put text in the header that doesn't truncate — always use `numberOfLines={1}`
- Forget to balance header layout — if there's a back button on the left, add a same-width placeholder on the right
- Use opaque backgrounds for bottom sheets — use `background.secondary` with the standard drag handle
- Mix navigation paradigms — don't put tabs inside a modal or a header inside a bottom sheet
