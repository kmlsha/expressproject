const createRateLimiter = ({
  windowMs,
  maxRequests,
  message = "Too many requests, please try again later.",
}) => {
  const requests = new Map();

  return (req, res, next) => {
    const key = req.ip || req.socket.remoteAddress || "unknown";
    const now = Date.now();
    const current = requests.get(key);

    if (!current || current.expiresAt <= now) {
      requests.set(key, { count: 1, expiresAt: now + windowMs });
      return next();
    }

    if (current.count >= maxRequests) {
      const retryAfterSeconds = Math.ceil((current.expiresAt - now) / 1000);
      res.set("Retry-After", String(retryAfterSeconds));

      return res.status(429).json({ message });
    }

    current.count += 1;
    requests.set(key, current);

    return next();
  };
};

const apiRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 100,
});

const loginRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 5,
  message: "Too many login attempts, please try again later.",
});

export { apiRateLimiter, loginRateLimiter };
