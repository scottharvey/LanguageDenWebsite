import "$styles/index.css"
import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

// PostHog analytics
document.addEventListener("DOMContentLoaded", () => {
  if (typeof posthog === "undefined") return

  // Download button clicks
  // Identifies which position on the page converted
  document.querySelectorAll("a.btn-primary, a.nav-cta").forEach((link) => {
    link.addEventListener("click", () => {
      let location = "inline"
      if (link.classList.contains("nav-cta")) {
        location = "nav"
      } else {
        const section = link.closest("section")
        if (section?.classList.contains("hero")) location = "hero"
        else if (section?.classList.contains("cta")) location = "final_cta"
        else if (section?.classList.contains("longform-section--accent")) location = "solution_intro"
      }
      posthog.capture("download_clicked", { location })
    })
  })

  // Scroll depth on long-form pages
  // Tells you how far visitors read before bouncing
  const scrollMilestones = [25, 50, 75, 90]
  const reached = new Set()
  window.addEventListener("scroll", () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight <= 0) return
    const pct = Math.round((window.scrollY / docHeight) * 100)
    scrollMilestones.forEach((milestone) => {
      if (pct >= milestone && !reached.has(milestone)) {
        reached.add(milestone)
        posthog.capture("scroll_depth_reached", {
          percent: milestone,
          page: window.location.pathname,
        })
      }
    })
  }, { passive: true })

  // Outbound link clicks (e.g. App Store, openrouter.ai, unsplash.com)
  document.querySelectorAll("a[href^='http']").forEach((link) => {
    if (!link.href.startsWith(window.location.origin)) {
      link.addEventListener("click", () => {
        posthog.capture("outbound_link_clicked", {
          url: link.href,
          text: link.textContent.trim().slice(0, 100),
        })
      })
    }
  })

  // Email link clicks — indicates support intent
  document.querySelectorAll("a[href^='mailto:']").forEach((link) => {
    link.addEventListener("click", () => {
      posthog.capture("email_link_clicked", {
        page: window.location.pathname,
      })
    })
  })
})
