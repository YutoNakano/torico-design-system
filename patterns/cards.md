# Pattern: Cards

## When to use

Cards group related content into distinct visual units. Use cards when content needs a clear boundary — tappable items, stats, featured content, or empty states.

---

## Content Card (standard)

For displaying a piece of content (note, vocabulary item, session).

```tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  background, text, border, spacing, radii, radiusAlias,
  shadows, componentSpacing, heading, body, caption,
} from '@torico/design-system/tokens';

function ContentCard({ title, subtitle, date, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.cardHeader}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: background.card,                // rgba teal tint
    borderRadius: radiusAlias.card,                   // 16px
    padding: componentSpacing.cardPadding,            // 16px
    gap: spacing[2],                                  // 8px
    ...shadows.sm,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...heading.small,                                 // 16px semibold
    color: text.primary,
    flex: 1,
  },
  date: {
    ...caption.medium,                                // 12px regular
    color: text.tertiary,
  },
  subtitle: {
    ...body.small,                                    // 14px regular
    color: text.secondary,
  },
});
```

---

## Stat Card

For displaying a metric with label (streak count, word count, session stats).

```tsx
function StatCard({ label, value, icon }) {
  return (
    <View style={statStyles.card}>
      {icon}
      <Text style={statStyles.value}>{value}</Text>
      <Text style={statStyles.label}>{label}</Text>
    </View>
  );
}

const statStyles = StyleSheet.create({
  card: {
    backgroundColor: background.tertiary,            // #2C2C2E
    borderRadius: radiusAlias.card,                   // 16px
    padding: componentSpacing.cardPadding,            // 16px
    alignItems: 'center',
    gap: spacing[1],                                  // 4px
    flex: 1,
  },
  value: {
    ...display.small,                                 // 24px bold
    color: text.primary,
  },
  label: {
    ...caption.medium,                                // 12px regular
    color: text.secondary,
  },
});

// Usage: row of stat cards
// <View style={{ flexDirection: 'row', gap: spacing[3] }}>
//   <StatCard label="Streak" value="7" />
//   <StatCard label="Words" value="142" />
//   <StatCard label="Sessions" value="23" />
// </View>
```

---

## Action Card

For a card that represents a primary action (start session, create note).

```tsx
function ActionCard({ title, description, onPress }) {
  return (
    <TouchableOpacity style={actionStyles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={actionStyles.content}>
        <Text style={actionStyles.title}>{title}</Text>
        <Text style={actionStyles.description}>{description}</Text>
      </View>
      <ChevronRight color={text.brand} size={20} />
    </TouchableOpacity>
  );
}

const actionStyles = StyleSheet.create({
  card: {
    backgroundColor: background.card,
    borderRadius: radiusAlias.card,
    padding: componentSpacing.cardPadding,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],                                  // 12px
    borderWidth: 1,
    borderColor: border.subtle,
  },
  content: {
    flex: 1,
    gap: spacing[1],                                  // 4px
  },
  title: {
    ...heading.small,                                 // 16px semibold
    color: text.brand,                                // teal accent
  },
  description: {
    ...body.small,                                    // 14px regular
    color: text.secondary,
  },
});
```

---

## Empty State Card

For when there's no content to display.

```tsx
function EmptyCard({ title, message, actionLabel, onAction }) {
  return (
    <View style={emptyStyles.card}>
      {/* Optional illustration goes here — creative zone */}
      <Text style={emptyStyles.title}>{title}</Text>
      <Text style={emptyStyles.message}>{message}</Text>
      {actionLabel && (
        <TouchableOpacity style={emptyStyles.button} onPress={onAction}>
          <Text style={emptyStyles.buttonText}>{actionLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const emptyStyles = StyleSheet.create({
  card: {
    backgroundColor: background.secondary,
    borderRadius: radiusAlias.card,
    padding: spacing[8],                              // 32px
    alignItems: 'center',
    gap: spacing[3],                                  // 12px
  },
  title: {
    ...heading.medium,                                // 18px semibold
    color: text.primary,
    textAlign: 'center',
  },
  message: {
    ...body.medium,                                   // 16px regular
    color: text.secondary,
    textAlign: 'center',
  },
  button: {
    backgroundColor: interactive.primary,
    borderRadius: radiusAlias.button,                  // 12px
    paddingHorizontal: componentSpacing.buttonPaddingX,
    paddingVertical: componentSpacing.buttonPaddingY,
    marginTop: spacing[2],                             // 8px
  },
  buttonText: {
    ...label.medium,                                   // 14px medium
    color: text.inverse,
    textAlign: 'center',
  },
});
```

---

## Card Row (horizontal scroll)

For a horizontally scrollable row of cards.

```tsx
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{
    paddingHorizontal: componentSpacing.screenPaddingX,
    gap: spacing[3], // 12px between cards
  }}
>
  {items.map(item => (
    <View key={item.id} style={{ width: 200 }}>
      <ContentCard {...item} />
    </View>
  ))}
</ScrollView>
```

---

## Variants

| Variant | Background | Border | Shadow | Use for |
|---------|-----------|--------|--------|---------|
| Branded | `background.card` | none | `shadows.sm` | Content items |
| Neutral | `background.tertiary` | none | none | Stats, secondary info |
| Outlined | `transparent` | `border.subtle` | none | Interactive/selectable |
| Elevated | `background.secondary` | none | `shadows.md` | Featured content |

---

## Do NOT

- Use `background.primary` for card backgrounds — it blends with the screen
- Add custom border radius values — always use `radiusAlias.card` (16px)
- Nest cards inside cards — flatten the hierarchy instead
- Use different padding values per card — always `componentSpacing.cardPadding`
- Put more than 3 stat cards in a single row — use 2 rows instead
