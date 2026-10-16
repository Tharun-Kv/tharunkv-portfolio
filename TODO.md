# Portfolio implementation checklist

1. [x] Point `origin` at `https://github.com/Tharun-Kv/tharunkv-portfolio.git` and fast-forward `main` from GitHub.
2. [x] Audit the deployed Netlify configuration and the actual Next.js app; record confirmed issues. The browser surface was unavailable, so the live page could not be visually inspected.
3. [x] Fix global responsive layout, typography, spacing, backgrounds, and reduced-motion behavior.
4. [x] Improve navigation, hero, project cards, skills, experience, achievements, certifications, contact, and footer for small screens and keyboard use.
5. [x] Review metadata, assets, links, and performance risks; make focused improvements supported by the code.
6. [x] Run the production build, lint, and TypeScript checks; document that viewport screenshots and live interaction checks were unavailable.
7. [x] Add a dedicated resume page and a same-page resume section with an embedded PDF preview, animated download button, and navigation link.
8. [x] Add an in-page portfolio assistant that retrieves answers from scraped page sections, portfolio data, and resume details.
9. [x] Introduce Jeo with a rocket-like lower-right handoff during the portfolio reveal.
10. [x] Replace the red and gold palette with accessible teal and periwinkle accents.
11. [x] Connect Jeo to Gemini with portfolio retrieval, follow-up context, and a server-only key; deployment needs the Gemini key in Netlify’s Functions environment.
12. [x] Animate the welcome bot’s rocket flight into the lower-right Jeo assistant and show a brief greeting bubble on arrival.
13. [x] Let the intro robot arrive before revealing Jeo’s greeting and portfolio welcome word by word.
14. [x] Add a soft, morphing AI portrait and robotics/tool silhouettes behind the portfolio content.
15. [x] Remove the visible “Close guide” label while retaining an accessible assistant close control.
16. [x] Smooth the intro handoff to one bottom-right rocket, show Jeo’s greeting for five seconds before Ask Jeo appears, and add grounded replies when Gemini is temporarily unavailable; verify the Netlify function, lint, TypeScript, and production build.
17. [x] Remove the rocket flight and trail from the intro handoff; retain Jeo’s greeting and delayed Ask Jeo button.
18. [x] Remove the Portfolio-grounded answers header subtitle and its sparkle icon from Jeo’s assistant.
19. [x] Make View Resume open a same-page PDF modal like the certificate viewer, with a separate download action.
20. [x] Remove unreferenced migration scripts, default starter assets, duplicate certificate images, and unused direct dependencies after checking repository references.
21. [x] Replace Jeo's chat avatar with the provided robot-style icon and remove the sparkle icon from the chat thinking indicator.
22. [x] Dim the portfolio background portrait, morphing glows, and decorative AI/tool silhouettes slightly.
23. [x] Hide the Ask Jeo launcher while the chat is open so only the panel's close button remains.
24. [x] Improve Jeo's offline replies for profile and general questions, allow coding requests, and remove visible source-link chips.
25. [x] Point the resume modal and browser-view route at the Google Drive PDF preview while keeping local download buttons.
26. [x] Reduce the resume preview modal width and height for a more compact viewing card.
27. [x] Replace the default Next.js browser favicon with Tharun's profile photo for browser and Apple icons.
