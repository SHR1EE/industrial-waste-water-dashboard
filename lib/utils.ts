import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ParameterConfig, WaterParameters } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns a severity color token based on parameter value vs permissible limit.
 */
export function getParameterStatus(
  config: ParameterConfig,
  value: number
): "safe" | "warning" | "danger" {
  const ratio = value / config.permissibleLimit;
  if (config.key === "ph") {
    const phDeviation = Math.abs(value - 7.0);
    if (phDeviation <= 1.5) return "safe";
    if (phDeviation <= 3) return "warning";
    return "danger";
  }
  if (ratio <= 1) return "safe";
  if (ratio <= 2) return "warning";
  return "danger";
}

/**
 * Returns CSS class string for status badge/indicator.
 */
export function getStatusClasses(
  status: "safe" | "warning" | "danger"
): string {
  const map = {
    safe: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    warning: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    danger: "text-red-400 bg-red-400/10 border-red-400/30",
  };
  return map[status];
}

/**
 * Formats a parameter value for display.
 */
export function formatParamValue(
  config: ParameterConfig,
  value: number
): string {
  if (config.key === "ph") return value.toFixed(1);
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
  return value.toString();
}

/**
 * Returns severity level color for industry subcategory badge.
 */
export function getSeverityColor(
  level?: "low" | "medium" | "high" | "critical"
): string {
  const map: Record<string, string> = {
    low: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    medium: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    high: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    critical: "text-red-400 bg-red-400/10 border-red-400/20",
  };
  return map[level ?? "medium"];
}