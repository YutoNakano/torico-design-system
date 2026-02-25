# Pattern: Screen Layouts

## When to use

Every new screen starts from one of these templates. Pick the closest match, then customize content.

---

## Main Screen (scrollable content)

The standard full-screen layout with safe areas.

```tsx
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import {
  background, text, spacing, componentSpacing, display, body,
} from '@torico/design-system/tokens';

function MainScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Screen Title</Text>
        {/* Content sections here */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: background.primary,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: componentSpacing.screenPaddingX, // 16px
    paddingVertical: componentSpacing.screenPaddingY,     // 24px
    gap: componentSpacing.sectionGap,                     // 24px
  },
  title: {
    ...display.large,          // 32px bold
    color: text.primary,
  },
});
```

---

## Settings / Grouped Screen

For screens with grouped sections (like iOS Settings). Uses secondary background with inset groups.

```tsx
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import {
  background, text, spacing, componentSpacing, radii,
  heading, label, body,
} from '@torico/design-system/tokens';

function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ACCOUNT</Text>
          <View style={styles.group}>
            {/* List items go here — see lists.md */}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>PREFERENCES</Text>
          <View style={styles.group}>
            {/* List items go here */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: background.primary,
  },
  content: {
    paddingVertical: componentSpacing.screenPaddingY,
    gap: componentSpacing.sectionGap,
  },
  section: {
    gap: spacing[2], // 8px between label and group
  },
  sectionLabel: {
    ...label.small,                   // 12px medium
    color: text.secondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    paddingHorizontal: componentSpacing.screenPaddingX,
  },
  group: {
    backgroundColor: background.secondary, // #1C1C1E
    borderRadius: radii.lg,                // 12px
    marginHorizontal: componentSpacing.screenPaddingX,
    overflow: 'hidden',
  },
});
```

---

## Modal / Bottom Sheet

For focused tasks, confirmations, or short forms.

```tsx
import { View, Text, StyleSheet } from 'react-native';
import {
  background, text, spacing, radii, radiusAlias, componentSpacing,
  display, body,
} from '@torico/design-system/tokens';

function ModalContent() {
  return (
    <View style={styles.modal}>
      {/* Drag handle */}
      <View style={styles.handle} />

      <Text style={styles.title}>Modal Title</Text>
      <Text style={styles.description}>
        Brief description of what this modal does.
      </Text>

      {/* Content */}
      <View style={styles.body}>
        {/* Form fields, options, etc. */}
      </View>

      {/* Actions — see buttons.md */}
      <View style={styles.actions}>
        {/* Primary + Secondary buttons */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: background.secondary,      // #1C1C1E
    borderTopLeftRadius: radiusAlias.modal,      // 20px
    borderTopRightRadius: radiusAlias.modal,
    padding: componentSpacing.screenPaddingX,
    paddingTop: spacing[3],                      // 12px (above handle)
    gap: spacing[4],                             // 16px
  },
  handle: {
    width: 36,
    height: 5,
    borderRadius: radii.full,
    backgroundColor: text.tertiary,
    alignSelf: 'center',
  },
  title: {
    ...display.small,              // 24px bold
    color: text.primary,
  },
  description: {
    ...body.medium,                // 16px regular
    color: text.secondary,
  },
  body: {
    gap: spacing[4],
  },
  actions: {
    flexDirection: 'row',
    gap: spacing[3],               // 12px
    paddingTop: spacing[4],        // 16px
  },
});
```

---

## Tab Screen (with header)

For screens within a tab navigator that need a custom header.

```tsx
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import {
  background, text, spacing, componentSpacing,
  heading, body,
} from '@torico/design-system/tokens';

function TabScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tab Title</Text>
        {/* Optional: right action button */}
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Screen content */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: background.primary,
  },
  header: {
    height: componentSpacing.headerHeight, // 56px
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: componentSpacing.screenPaddingX,
  },
  headerTitle: {
    ...heading.large,              // 20px bold
    color: text.primary,
  },
  content: {
    paddingHorizontal: componentSpacing.screenPaddingX,
    paddingVertical: spacing[4],
    gap: componentSpacing.sectionGap,
  },
});
```

---

## Do NOT

- Use `flex: 1` on ScrollView's `contentContainerStyle` (prevents scrolling)
- Hardcode safe area values — always use `SafeAreaView` or `useSafeAreaInsets()`
- Use `background.card` for full-screen backgrounds — it's for cards only
- Skip `paddingHorizontal` on screens — always use `componentSpacing.screenPaddingX`
- Nest ScrollViews in the same scroll direction
