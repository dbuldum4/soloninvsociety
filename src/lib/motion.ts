// One cadence for entrances, navigation, theme changes, and hover feedback.
export const motionTheme = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
  type: "tween" as const,
};

export const motionStyles = {
  "--motion-duration": `${motionTheme.duration}s`,
  "--motion-ease": `cubic-bezier(${motionTheme.ease.join(",")})`,
};
