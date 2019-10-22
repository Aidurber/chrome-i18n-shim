/**
 * Single placeholder
 */
export type Placeholder = {
  content: string;
  example?: string;
};

/**
 * Message object
 */
export type I18nPayload = {
  message: string;
  description?: string;
  placeholders?: Placeholders;
};

/**
 * Collection of `Placeholder`
 */
export type Placeholders = {
  [key: string]: Placeholder;
};

/**
 * Collection of I18nPayload
 */
export type Tokens = {
  [key: string]: I18nPayload;
};

/**
 * Values to replace in placeholders
 */
export type PlaceholderValue = string[] | string;
