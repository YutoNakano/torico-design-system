# Pattern: Buttons

## When to use

Buttons trigger actions. Every tappable action in the app should use one of these variants.

---

## Primary Button

Main call-to-action. One per screen section maximum.

```tsx
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import {
  interactive, text, spacing, radii, radiusAlias,
  componentSpacing, label, shadows,
} from '@torico/design-system/tokens';

function PrimaryButton({ title, onPress, disabled = false, loading = false }) {
  return (
    <TouchableOpacity
      style={[styles.primary, disabled && styles.primaryDisabled]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={text.inverse} size="small" />
      ) : (
        <Text style={[styles.primaryText, disabled && styles.disabledText]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    backgroundColor: interactive.primary,              // #4FD1C5
    borderRadius: radiusAlias.button,                  // 12px
    paddingHorizontal: componentSpacing.buttonPaddingX, // 16px
    paddingVertical: componentSpacing.buttonPaddingY,   // 12px
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: spacing[11],                            // 44px touch target
  },
  primaryDisabled: {
    backgroundColor: interactive.primaryDisabled,      // #285E61
  },
  primaryText: {
    ...label.medium,                                   // 14px medium
    color: text.inverse,                               // dark text on teal
  },
  disabledText: {
    color: text.disabled,
  },
});
```

---

## Secondary Button

For secondary actions alongside a primary button.

```tsx
const secondaryStyles = StyleSheet.create({
  secondary: {
    backgroundColor: 'transparent',
    borderRadius: radiusAlias.button,
    borderWidth: 1,
    borderColor: border.muted,                         // rgba white 20%
    paddingHorizontal: componentSpacing.buttonPaddingX,
    paddingVertical: componentSpacing.buttonPaddingY,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: spacing[11],
  },
  secondaryText: {
    ...label.medium,
    color: text.primary,
  },
});
```

---

## Ghost Button

For tertiary actions, navigation, or inline actions. No background or border.

```tsx
const ghostStyles = StyleSheet.create({
  ghost: {
    backgroundColor: interactive.ghost,                // transparent
    borderRadius: radiusAlias.button,
    paddingHorizontal: spacing[3],                     // 12px
    paddingVertical: spacing[2],                       // 8px
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: spacing[11],
  },
  ghostText: {
    ...label.medium,
    color: text.brand,                                 // teal
  },
});
```

---

## Destructive Button

For delete, remove, or irreversible actions. Always requires confirmation.

```tsx
const destructiveStyles = StyleSheet.create({
  destructive: {
    backgroundColor: interactive.destructive,          // #FC8181
    borderRadius: radiusAlias.button,
    paddingHorizontal: componentSpacing.buttonPaddingX,
    paddingVertical: componentSpacing.buttonPaddingY,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: spacing[11],
  },
  destructiveText: {
    ...label.medium,
    color: text.inverse,
  },
});
```

---

## Icon Button

For actions represented by an icon only (close, menu, settings).

```tsx
const iconButtonStyles = StyleSheet.create({
  iconButton: {
    width: componentSpacing.iconButtonSize,            // 44px
    height: componentSpacing.iconButtonSize,
    borderRadius: radii.full,                          // circle
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: interactive.ghost,
  },
});

// Usage:
// <TouchableOpacity style={iconButtonStyles.iconButton} onPress={onClose}>
//   <XIcon size={20} color={icon.primary} />
// </TouchableOpacity>
```

---

## Button with Icon

For buttons that combine an icon with text.

```tsx
function IconTextButton({ icon, title, onPress }) {
  return (
    <TouchableOpacity style={iconTextStyles.button} onPress={onPress} activeOpacity={0.8}>
      {icon}
      <Text style={iconTextStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const iconTextStyles = StyleSheet.create({
  button: {
    backgroundColor: interactive.primary,
    borderRadius: radiusAlias.button,
    paddingHorizontal: componentSpacing.buttonPaddingX,
    paddingVertical: componentSpacing.buttonPaddingY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],                                   // 8px
    minHeight: spacing[11],
  },
  text: {
    ...label.medium,
    color: text.inverse,
  },
});
```

---

## Full Width Button

For bottom-of-screen CTAs (save, continue, submit).

```tsx
const fullWidthStyles = StyleSheet.create({
  container: {
    paddingHorizontal: componentSpacing.screenPaddingX,
    paddingVertical: spacing[4],                       // 16px
    paddingBottom: componentSpacing.bottomSafeArea,    // 32px
    backgroundColor: background.primary,
  },
  button: {
    backgroundColor: interactive.primary,
    borderRadius: radiusAlias.button,
    paddingVertical: componentSpacing.buttonPaddingY,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: spacing[12],                            // 48px for prominence
  },
  buttonText: {
    ...label.large,                                    // 16px medium
    color: text.inverse,
  },
});
```

---

## Button Pair (actions row)

For modal footers or form submissions.

```tsx
<View style={{ flexDirection: 'row', gap: spacing[3] }}>
  <TouchableOpacity style={[secondaryStyles.secondary, { flex: 1 }]} onPress={onCancel}>
    <Text style={secondaryStyles.secondaryText}>Cancel</Text>
  </TouchableOpacity>
  <TouchableOpacity style={[styles.primary, { flex: 1 }]} onPress={onConfirm}>
    <Text style={styles.primaryText}>Confirm</Text>
  </TouchableOpacity>
</View>
```

---

## Variant Summary

| Variant | Background | Border | Text color | Use for |
|---------|-----------|--------|------------|---------|
| Primary | `interactive.primary` | none | `text.inverse` | Main CTA |
| Secondary | transparent | `border.muted` | `text.primary` | Alternative action |
| Ghost | transparent | none | `text.brand` | Tertiary, inline action |
| Destructive | `interactive.destructive` | none | `text.inverse` | Delete, remove |
| Icon | transparent | none | `icon.primary` | Close, menu, settings |

---

## Do NOT

- Use more than one primary button per visible area
- Use custom background colors for buttons — stick to `interactive.*` tokens
- Make buttons smaller than 44px (accessibility touch target)
- Use `borderRadius: 999` — use `radiusAlias.button` (12px) for standard, `radii.full` for icon buttons
- Omit disabled states — always handle `disabled` prop visually
- Use red text for destructive ghost buttons — use `text.error` only for error messages, use `interactive.destructive` for destructive button backgrounds
