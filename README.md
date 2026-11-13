# SiteHunter Demo

Small businesses can struggle to turn website problems into a clear brief. SiteHunter connects the audit findings to a redesign proposal, a concrete website preview and an offer a person can review.

[Open the public demo](https://christian-ai-workflows.christianreszczynski.chatgpt.site/sitehunter/)

Choose one of three fictional restaurants. Review simulated findings, generate a proposal from the saved scenario, open the website concept, and read the draft offer. The demo uses selected outputs from SiteHunter's synthetic pipeline. The public experience uses HTML, CSS and JavaScript and serves lightweight HTML concepts based on the saved templates. It performs no crawling, model calls or outreach.

## Run locally

From the repository root, run `python3 -m http.server 8000 --bind 127.0.0.1`. Open `http://127.0.0.1:8000/sitehunter/`.

## Verification

The source application previously passed 255 Vitest tests and a production build. A clean local browser run of its synthetic pipeline produced 30 fictional leads, three concepts and three draft offers. Both JavaScript files in this public export passed Node's syntax check.

To verify the public flow, select each restaurant, step through the audit and proposal, open its concept, then return to the offer. Repeat at desktop and mobile widths.
