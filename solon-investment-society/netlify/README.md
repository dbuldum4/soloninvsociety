# Netlify Functions

`check-stock-prices.mjs` is a scheduled Netlify function that runs once per day and compares the public `/api/tickers` output against fresh Nasdaq quotes.

Use the Netlify UI to inspect it:

1. Deploy the site.
2. Open `Functions`.
3. Select `check-stock-prices`.
4. Use `Run now` to test it.
5. Read the function logs for the drift summary.

Optional environment variables:

- `STOCK_CHECK_SITE_URL`: override the site URL that the function checks.
- `STOCK_CHECK_SYMBOLS`: comma-separated list of ticker symbols to verify.
- `STOCK_CHECK_MAX_DRIFT_PCT`: maximum allowed percentage drift before the check fails. Default is `2`.
- `STOCK_CHECK_MAX_AGE_HOURS`: maximum allowed age of `/api/tickers` `asOf` before the check fails. Default is `12`.
- `STOCK_CHECK_WEBHOOK_URL`: optional webhook URL for failed checks.
