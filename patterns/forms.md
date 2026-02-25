# Pattern: Forms

## When to use

For any user input: text fields, switches, pickers, and validation states.

---

## Text Input

```tsx
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {
  background, text, border, spacing, radii, radiusAlias,
  componentSpacing, label, body, caption,
} from '@torico/design-system/tokens';

function FormInput({ label: inputLabel, placeholder, value, onChangeText, error }) {
  return (
    <View style={styles.field}>
      {inputLabel && <Text style={styles.label}>{inputLabel}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder={placeholder}
        placeholderTextColor={text.placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    gap: spacing[2],                                   // 8px
  },
  label: {
    ...label.medium,                                   // 14px medium
    color: text.secondary,
  },
  input: {
    backgroundColor: background.surface,               // #2A2A2A
    borderRadius: radiusAlias.input,                   // 8px
    borderWidth: 1,
    borderColor: border.default,                       // #333333
    padding: componentSpacing.inputPadding,            // 12px
    ...body.medium,                                    // 16px regular
    color: text.primary,
  },
  inputError: {
    borderColor: border.error,                         // #FC8181
  },
  error: {
    ...caption.medium,                                 // 12px regular
    color: text.error,
  },
});
```

---

## Text Area (multiline)

```tsx
const textAreaStyles = StyleSheet.create({
  textArea: {
    backgroundColor: background.surface,
    borderRadius: radiusAlias.input,
    borderWidth: 1,
    borderColor: border.default,
    padding: componentSpacing.inputPadding,
    ...body.medium,
    color: text.primary,
    minHeight: spacing[24],                            // 96px (4 lines approx)
    textAlignVertical: 'top',
  },
});
```

---

## Search Input

```tsx
function SearchInput({ value, onChangeText, placeholder = 'Search...' }) {
  return (
    <View style={searchStyles.container}>
      <SearchIcon size={16} color={icon.muted} />
      <TextInput
        style={searchStyles.input}
        placeholder={placeholder}
        placeholderTextColor={text.placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText('')}>
          <XCircleIcon size={16} color={icon.muted} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const searchStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: background.surface,
    borderRadius: radii.full,                          // pill shape
    paddingHorizontal: spacing[4],                     // 16px
    paddingVertical: spacing[2],                       // 8px
    gap: spacing[2],                                   // 8px
  },
  input: {
    flex: 1,
    ...body.medium,
    color: text.primary,
    padding: 0,                                        // remove default padding
  },
});
```

---

## Switch / Toggle Row

For boolean settings within a list group.

```tsx
import { Switch } from 'react-native';
import { interactive, background as bg } from '@torico/design-system/tokens';

function ToggleRow({ title, description, value, onValueChange, isLast = false }) {
  return (
    <View style={[toggleStyles.row, !isLast && toggleStyles.rowBorder]}>
      <View style={toggleStyles.content}>
        <Text style={toggleStyles.title}>{title}</Text>
        {description && (
          <Text style={toggleStyles.description}>{description}</Text>
        )}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: bg.surface,                           // #2A2A2A
          true: interactive.primary,                   // #4FD1C5
        }}
        thumbColor={text.primary}
      />
    </View>
  );
}

const toggleStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    paddingHorizontal: componentSpacing.cardPadding,
    minHeight: spacing[11],
  },
  rowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: border.subtle,
  },
  content: {
    flex: 1,
    gap: spacing[0.5],                                 // 2px
    marginRight: spacing[3],
  },
  title: {
    ...body.medium,
    color: text.primary,
  },
  description: {
    ...caption.medium,
    color: text.secondary,
  },
});
```

---

## Form Section (grouped fields)

For grouping related inputs.

```tsx
<View style={{ gap: componentSpacing.sectionGap }}>
  {/* Section 1 */}
  <View style={{ gap: spacing[4] }}>
    <Text style={{ ...label.small, color: text.secondary, textTransform: 'uppercase' }}>
      PERSONAL INFO
    </Text>
    <FormInput label="Name" placeholder="Your name" />
    <FormInput label="Email" placeholder="email@example.com" />
  </View>

  {/* Section 2 */}
  <View style={{ gap: spacing[4] }}>
    <Text style={{ ...label.small, color: text.secondary, textTransform: 'uppercase' }}>
      PREFERENCES
    </Text>
    <ToggleRow title="Notifications" value={true} />
    <ToggleRow title="Dark mode" value={true} isLast />
  </View>
</View>
```

---

## Validation States

| State | Border | Helper text | Helper color |
|-------|--------|-------------|-------------|
| Default | `border.default` | none | — |
| Focused | `border.focus` | Optional hint | `text.tertiary` |
| Error | `border.error` | Error message | `text.error` |
| Success | `border.success` | Success message | `text.success` |
| Disabled | `border.subtle` | none | — |

For disabled inputs, add `opacity: 0.5` and `editable={false}`.

---

## Do NOT

- Use `borderRadius: 12` for inputs — inputs use `radiusAlias.input` (8px), buttons use 12px
- Add shadows to input fields — inputs should feel recessed, not elevated
- Use white backgrounds for inputs on dark screens — use `background.surface`
- Skip the label — every input needs a visible label for accessibility
- Use inline validation that changes layout — show error text in a fixed-height area or below the input
