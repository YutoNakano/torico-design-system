# Pattern: Feedback

## When to use

For communicating system status: loading, success, errors, empty states, and transient messages.

---

## Loading Spinner (full screen overlay)

For blocking operations (submitting, processing).

```tsx
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import {
  background, text, brand, spacing, radii,
  body,
} from '@torico/design-system/tokens';

function LoadingOverlay({ message }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.loadingBox}>
        <ActivityIndicator size="large" color={brand.primary} />
        {message && <Text style={styles.loadingText}>{message}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: background.overlay,               // rgba black 50%
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  loadingBox: {
    backgroundColor: background.secondary,             // #1C1C1E
    borderRadius: radii.xl,                            // 16px
    padding: spacing[8],                               // 32px
    alignItems: 'center',
    gap: spacing[4],                                   // 16px
  },
  loadingText: {
    ...body.medium,
    color: text.secondary,
  },
});
```

---

## Inline Loading

For non-blocking loading within a section.

```tsx
function InlineLoading() {
  return (
    <View style={inlineStyles.container}>
      <ActivityIndicator size="small" color={brand.primary} />
      <Text style={inlineStyles.text}>Loading...</Text>
    </View>
  );
}

const inlineStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],                                   // 8px
    paddingVertical: spacing[6],                       // 24px
  },
  text: {
    ...body.small,
    color: text.secondary,
  },
});
```

---

## Skeleton Loader

For content placeholders while data loads.

```tsx
function SkeletonCard() {
  return (
    <View style={skeletonStyles.card}>
      <View style={[skeletonStyles.line, { width: '60%', height: 16 }]} />
      <View style={[skeletonStyles.line, { width: '100%', height: 12 }]} />
      <View style={[skeletonStyles.line, { width: '80%', height: 12 }]} />
    </View>
  );
}

const skeletonStyles = StyleSheet.create({
  card: {
    backgroundColor: background.secondary,
    borderRadius: radiusAlias.card,                    // 16px
    padding: componentSpacing.cardPadding,
    gap: spacing[3],                                   // 12px
  },
  line: {
    backgroundColor: background.tertiary,              // #2C2C2E
    borderRadius: radii.sm,                            // 4px
    // Apply animated opacity pulse — creative zone
  },
});
```

---

## Toast / Snackbar

Transient feedback messages that auto-dismiss.

```tsx
function Toast({ message, type = 'info' }) {
  const colors = {
    success: { bg: feedbackColors.success.background, fg: feedbackColors.success.foreground },
    error:   { bg: feedbackColors.error.background,   fg: feedbackColors.error.foreground },
    warning: { bg: feedbackColors.warning.background, fg: feedbackColors.warning.foreground },
    info:    { bg: feedbackColors.info.background,    fg: feedbackColors.info.foreground },
  };

  const c = colors[type];

  return (
    <View style={[toastStyles.toast, { backgroundColor: c.bg }]}>
      <Text style={[toastStyles.text, { color: c.fg }]}>{message}</Text>
    </View>
  );
}

const toastStyles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: spacing[20],                               // 80px from bottom
    left: componentSpacing.screenPaddingX,
    right: componentSpacing.screenPaddingX,
    borderRadius: radii.lg,                            // 12px
    paddingHorizontal: spacing[4],                     // 16px
    paddingVertical: spacing[3],                       // 12px
    ...shadows.lg,
  },
  text: {
    ...label.medium,                                   // 14px medium
    textAlign: 'center',
  },
});
```

---

## Error State (inline)

For when a section fails to load.

```tsx
function ErrorState({ message, onRetry }) {
  return (
    <View style={errorStyles.container}>
      <AlertCircleIcon size={32} color={text.error} />
      <Text style={errorStyles.message}>{message}</Text>
      {onRetry && (
        <TouchableOpacity style={errorStyles.retryButton} onPress={onRetry}>
          <Text style={errorStyles.retryText}>Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const errorStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing[3],                                   // 12px
    paddingVertical: spacing[8],                       // 32px
    paddingHorizontal: componentSpacing.screenPaddingX,
  },
  message: {
    ...body.medium,
    color: text.secondary,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: interactive.ghost,
    borderRadius: radiusAlias.button,
    borderWidth: 1,
    borderColor: border.muted,
    paddingHorizontal: componentSpacing.buttonPaddingX,
    paddingVertical: spacing[2],                       // 8px
  },
  retryText: {
    ...label.medium,
    color: text.brand,
  },
});
```

---

## Empty State

For screens or sections with no content yet. See also `cards.md` for EmptyCard.

```tsx
function EmptyState({ icon, title, message, actionLabel, onAction }) {
  return (
    <View style={emptyStyles.container}>
      {icon && <View style={emptyStyles.iconWrap}>{icon}</View>}
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[3],
    paddingHorizontal: spacing[8],                     // 32px for narrow text
    paddingVertical: spacing[12],                      // 48px
  },
  iconWrap: {
    marginBottom: spacing[2],
  },
  title: {
    ...heading.medium,
    color: text.primary,
    textAlign: 'center',
  },
  message: {
    ...body.medium,
    color: text.secondary,
    textAlign: 'center',
  },
  button: {
    backgroundColor: interactive.primary,
    borderRadius: radiusAlias.button,
    paddingHorizontal: componentSpacing.buttonPaddingX,
    paddingVertical: componentSpacing.buttonPaddingY,
    marginTop: spacing[4],
  },
  buttonText: {
    ...label.medium,
    color: text.inverse,
  },
});
```

---

## Feedback Color Reference

| Type | Background | Foreground/Text | Border |
|------|-----------|-----------------|--------|
| Success | `feedbackColors.success.background` | `feedbackColors.success.foreground` | `feedbackColors.success.border` |
| Warning | `feedbackColors.warning.background` | `feedbackColors.warning.foreground` | `feedbackColors.warning.border` |
| Error | `feedbackColors.error.background` | `feedbackColors.error.foreground` | `feedbackColors.error.border` |
| Info | `feedbackColors.info.background` | `feedbackColors.info.foreground` | `feedbackColors.info.border` |

---

## Do NOT

- Use `alert()` for feedback — use toast/snackbar components
- Show loading spinners without a timeout fallback — if loading exceeds 10s, show an error state
- Use red backgrounds for error messages — use `feedbackColors.error.background` (light red) with `feedbackColors.error.foreground` (text)
- Block the entire screen for non-critical loads — use inline or skeleton loading
- Forget to handle all three states: loading, error, and empty — every data-fetching section needs all three
