import dotenv from "dotenv";

dotenv.config();

const DEFAULT_PORT = 3000;

/**
 * Parse and validate a port value.
 * Returns a positive integer port, or null if invalid.
 * @param {string|number|undefined} value
 * @returns {number|null}
 */
function parsePort(value) {
  if (value == null) return null;
  const num = Number.parseInt(String(value), 10);
  if (Number.isNaN(num) || num <= 0) return null;
  return num;
}

const envPort = parsePort(process.env.PORT);
if (process.env.PORT && envPort == null) {
  // eslint-disable-next-line no-console
  console.warn(
    `Invalid PORT environment variable "${process.env.PORT}", falling back to ${DEFAULT_PORT}`
  );
}

const port = envPort || DEFAULT_PORT;

const nodeEnv = process.env.NODE_ENV || "development";

/**
 * Returns the port number the server should listen on.
 * Prefer `getPort()` for clarity when importing.
 * @returns {number}
 */
export function getPort() {
  return port;
}

export { nodeEnv };
export default port;
