import React from "react";

export interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "split";
  theme?: "light" | "dark";
  className?: string;
  actionSlot?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  alignment = "left",
  theme = "light",
  className = "",
  actionSlot,
}) => {
  const isDark = theme === "dark";

  if (alignment === "split") {
    return (
      <div
        className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 ${className}`}
      >
        <div className="max-w-2xl space-y-3">
          {kicker && (
            <div className="flex items-center gap-2">
              <span
                className={`inline-block w-6 h-[1px] ${
                  isDark ? "bg-sand" : "bg-terracotta"
                }`}
              />
              <span
                className={`text-xs font-semibold tracking-[0.2em] uppercase ${
                  isDark ? "text-sand" : "text-terracotta"
                }`}
              >
                {kicker}
              </span>
            </div>
          )}
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] ${
              isDark ? "text-cream-light" : "text-espresso"
            }`}
          >
            {title}
          </h2>
        </div>

        {(subtitle || actionSlot) && (
          <div className="max-w-md space-y-4">
            {subtitle && (
              <p
                className={`text-base sm:text-lg leading-relaxed font-normal ${
                  isDark ? "text-cream/70" : "text-warm-gray"
                }`}
              >
                {subtitle}
              </p>
            )}
            {actionSlot && <div className="pt-1">{actionSlot}</div>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`space-y-3 ${
        alignment === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {kicker && (
        <div
          className={`flex items-center gap-2 ${
            alignment === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <span
            className={`inline-block w-5 h-[1px] ${
              isDark ? "bg-sand" : "bg-terracotta"
            }`}
          />
          <span
            className={`text-xs font-semibold tracking-[0.2em] uppercase ${
              isDark ? "text-sand" : "text-terracotta"
            }`}
          >
            {kicker}
          </span>
          {alignment === "center" && (
            <span
              className={`inline-block w-5 h-[1px] ${
                isDark ? "bg-sand" : "bg-terracotta"
              }`}
            />
          )}
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.18] ${
          isDark ? "text-cream-light" : "text-espresso"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? "text-cream/70" : "text-warm-gray"
          }`}
        >
          {subtitle}
        </p>
      )}

      {actionSlot && <div className="pt-2">{actionSlot}</div>}
    </div>
  );
};
