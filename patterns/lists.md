# Pattern: Lists

## When to use

Lists display repeating items vertically. Use for settings, navigation menus, data rows, or any sequential content.

---

## Settings List

Grouped rows with labels, values, and navigation chevrons. Matches iOS settings style.

```tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  background, text, border, spacing, radii, componentSpacing,
  body, label, caption,
} from '@torico/design-system/tokens';

function SettingsGroup({ label: groupLabel, children }) {
  return (
    <View style={styles.section}>
      {groupLabel && (
        <Text style={styles.sectionLabel}>{groupLabel}</Text>
      )}
      <View style={styles.group}>
        {children}
      </View>
    </View>
  );
}

function SettingsRow({ icon, title, value, onPress, isLast = false }) {
  return (
    <TouchableOpacity
      style={[styles.row, !isLast && styles.rowBorder]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={styles.rowTitle}>{title}</Text>
      <View style={styles.rowRight}>
        {value && <Text style={styles.rowValue}>{value}</Text>}
        <ChevronRight size={16} color={text.tertiary} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: spacing[2],                                   // 8px
  },
  sectionLabel: {
    ...label.small,                                    // 12px medium
    color: text.secondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    paddingHorizontal: componentSpacing.screenPaddingX,
  },
  group: {
    backgroundColor: background.secondary,             // #1C1C1E
    borderRadius: radii.lg,                            // 12px
    marginHorizontal: componentSpacing.screenPaddingX,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],                       // 12px
    paddingHorizontal: componentSpacing.cardPadding,   // 16px
    minHeight: spacing[11],                            // 44px touch target
  },
  rowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: border.subtle,
  },
  iconContainer: {
    width: spacing[7],                                 // 28px
    marginRight: spacing[3],                           // 12px
  },
  rowTitle: {
    ...body.medium,                                    // 16px regular
    color: text.primary,
    flex: 1,
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],                                   // 8px
  },
  rowValue: {
    ...body.medium,
    color: text.tertiary,
  },
});
```

---

## Navigation List

For menu items that navigate to other screens.

```tsx
function NavRow({ icon, title, subtitle, badge, onPress, isLast = false }) {
  return (
    <TouchableOpacity
      style={[navStyles.row, !isLast && navStyles.rowBorder]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      {icon && <View style={navStyles.icon}>{icon}</View>}
      <View style={navStyles.content}>
        <Text style={navStyles.title}>{title}</Text>
        {subtitle && <Text style={navStyles.subtitle}>{subtitle}</Text>}
      </View>
      {badge != null && (
        <View style={navStyles.badge}>
          <Text style={navStyles.badgeText}>{badge}</Text>
        </View>
      )}
      <ChevronRight size={16} color={text.tertiary} />
    </TouchableOpacity>
  );
}

const navStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    paddingHorizontal: componentSpacing.cardPadding,
    minHeight: spacing[11],                            // 44px
  },
  rowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: border.subtle,
  },
  icon: {
    width: spacing[8],                                 // 32px
    height: spacing[8],
    borderRadius: radii.md,                            // 8px
    backgroundColor: background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],                           // 12px
  },
  content: {
    flex: 1,
    gap: spacing[0.5],                                 // 2px
  },
  title: {
    ...body.medium,
    color: text.primary,
  },
  subtitle: {
    ...caption.medium,
    color: text.secondary,
  },
  badge: {
    backgroundColor: interactive.primary,
    borderRadius: radii.full,
    minWidth: spacing[5],                              // 20px
    height: spacing[5],
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing[1.5],                   // 6px
    marginRight: spacing[2],
  },
  badgeText: {
    ...caption.small,                                  // 10px
    color: text.inverse,
    fontWeight: fontWeight.bold,
  },
});
```

---

## Data List

For displaying data items (notes, vocabulary, sessions) in a flat list.

```tsx
function DataListItem({ title, subtitle, meta, tag, onPress }) {
  return (
    <TouchableOpacity style={dataStyles.item} onPress={onPress} activeOpacity={0.7}>
      <View style={dataStyles.top}>
        <Text style={dataStyles.title} numberOfLines={1}>{title}</Text>
        {tag && (
          <View style={[dataStyles.tag, { backgroundColor: tag.color }]}>
            <Text style={dataStyles.tagText}>{tag.label}</Text>
          </View>
        )}
      </View>
      {subtitle && (
        <Text style={dataStyles.subtitle} numberOfLines={2}>{subtitle}</Text>
      )}
      {meta && <Text style={dataStyles.meta}>{meta}</Text>}
    </TouchableOpacity>
  );
}

const dataStyles = StyleSheet.create({
  item: {
    paddingVertical: spacing[3],                       // 12px
    paddingHorizontal: componentSpacing.screenPaddingX,
    gap: spacing[1],                                   // 4px
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: border.subtle,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  title: {
    ...heading.small,                                  // 16px semibold
    color: text.primary,
    flex: 1,
  },
  tag: {
    borderRadius: radii.full,
    paddingHorizontal: spacing[2],                     // 8px
    paddingVertical: spacing[0.5],                     // 2px
  },
  tagText: {
    ...caption.small,                                  // 10px
    color: text.inverse,
    fontWeight: fontWeight.semibold,
  },
  subtitle: {
    ...body.small,                                     // 14px regular
    color: text.secondary,
  },
  meta: {
    ...caption.medium,                                 // 12px regular
    color: text.tertiary,
  },
});

// Usage with FlatList:
// <FlatList
//   data={items}
//   renderItem={({ item }) => <DataListItem {...item} />}
//   ItemSeparatorComponent={null}   // border is built into item
// />
```

---

## Variants

| Variant | Background | Divider | Use for |
|---------|-----------|---------|---------|
| Grouped (settings) | `background.secondary` | `border.subtle` hairline | Settings, preferences |
| Flat (data) | transparent | `border.subtle` hairline | Notes, vocabulary |
| Navigation | `background.secondary` | `border.subtle` hairline | Menus, drawer items |

---

## Do NOT

- Use custom row heights — let content determine height, enforce `minHeight: spacing[11]` (44px) for touch targets
- Add shadows to individual list items — shadows are for cards, not list rows
- Use `borderWidth: 1` for dividers — always use `StyleSheet.hairlineWidth`
- Hardcode row padding — use `componentSpacing.cardPadding` (16px horizontal)
- Forget the `isLast` pattern — last item in a group should not have a bottom border
