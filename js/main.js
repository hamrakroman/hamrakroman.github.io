(function () {
  const config = window.SITE_CONFIG || {};
  const linkedin = config.linkedin || "https://sk.linkedin.com/in/roman-hamr%C3%A1k";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const en = {
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.writing": "Writing",
    "nav.contact": "Contact",
    "nav.cta": "Work together",
    "hero.lede": "I care about data quality. Speed comes from a team of AI agents I designed myself.",
    "hero.intro":
      "The agents speed up preparation, checks and delivery. Measurement, server-side GTM, BigQuery and dbt stay my work. In-house for Profesia and Paylab, and on selected engagements in Slovakia, the UK, the Netherlands and Germany.",
    "hero.primary": "Start a project",
    "hero.f1": "years inside the data lifecycle",
    "hero.f2": "where the work actually is",
    "hero.f3s": "in-house + consulting",
    "hero.f3": "Alma Career and an independent practice",
    "hero.alt": "Roman Hamrák, data analyst",
    "about.kicker": "profile",
    "about.title": "Measurement is only the start.",
    "about.p1":
      "I am a senior web and product analyst at Alma Career Slovakia. I look after the full cycle of collection, processing and reporting for Profesia and Paylab — GA4, Google Tag Manager, server-side GTM on Cloud Run or App Engine, Looker Studio, and the BigQuery and dbt work we build with the DWH/BI team.",
    "about.p2":
      "Alongside that I take selected independent work. The aim stays the same: a team should get quality, trustworthy data as early as possible. A model that never triggers a decision is just a neat diagram.",
    "about.p3":
      "The CliftonStrengths that describe me best are Learner, Ideation, Restorative, Achiever and Relator. I enjoy the process of learning, I connect things that look unrelated, and I would rather take a problem apart than walk around it.",
    "about.li": "LinkedIn profile",
    "about.sub": "Writing on Substack",
    "about.s1": "The process of learning pulls me more than the certificate at the end.",
    "about.s2": "I look for links between things that seem separate.",
    "about.s3": "First I find what is broken. Then I fix it.",
    "about.s4": "I like work that has pace and a visible result.",
    "about.s5": "The best work happens with people I actually know.",
    "services.kicker": "what we can build",
    "services.title": "Six places analytics usually breaks.",
    "services.t1": "Measurement architecture",
    "services.d1": "GA4 events that hold together product, marketing and the warehouse. Not another tag inventory.",
    "services.t2": "Server-side tagging",
    "services.d2": "sGTM on Google Cloud, consent mode, and CAPI for Google Ads and Meta. Fewer losses between the browser and the ad account.",
    "services.t3": "BigQuery and dbt",
    "services.d3": "Models on the raw export. Attribution, user_id, consent quality — the things the GA4 interface will not show.",
    "services.t4": "Quality audits",
    "services.d4": "Missing GCLID, broken ecommerce events, consent, cross-device. Find the hole, then close it.",
    "services.t5": "Activation",
    "services.d5": "Make and n8n. An insight that lands on Monday where the decision is made — not in a dashboard nobody opens.",
    "services.t6": "Reporting",
    "services.d6": "Looker Studio, and a layer a person who does not write SQL can still use. The numbers stay tied to the model underneath.",
    "work.kicker": "selected work",
    "work.title": "The actual scope, not a logo wall.",
    "work.lead": "Independent practice since June 2024. The scope below is what I state publicly — no invented percentages.",
    "work.c1": "Ongoing tracking support and custom JavaScript implementations.",
    "work.c2": "Raw GA4 and Google Ads in BigQuery with the DWH team, a server-side GTM audit, CAPI and consultations.",
    "work.c3": "A custom consent mode with the internal engineering team, server-side GTM on Google Cloud, and CAPI for Google Ads and Facebook.",
    "work.c4": "Server-side GTM and consent mode.",
    "work.c5": "Ecommerce tracking, app tracking and a large GTM consolidation.",
    "work.moreTitle": "And other teams",
    "work.more":
      "At DASE, in an international team with Maxlead and Morefire, I also worked with Medirex, msg life, Martinus, Fitshaker, 365.bank, Dedoles, Tipos and Websupport.",
    "path.kicker": "roles",
    "path.title": "Where I am right now.",
    "path.now": "now",
    "path.r2": "Independent analytics practice",
    "path.w2": "GA4 · BigQuery · server-side GTM",
    "path.p1":
      "In-house analytics for Profesia and Paylab. Event architecture with product, BigQuery and dbt with the DWH/BI team, server-side GTM on Google Cloud and Looker Studio — so teams get quality data while it is still useful.",
    "path.p2":
      "Marketing and product analytics for local and international clients. Measurement you can defend, and data that can be joined to ads and the warehouse.",
    "path.p3":
      "An international team with Maxlead.nl and Morefire.de. GA4 event design, advanced measurement, quality audits, server-side tagging, Measurement Protocol, Google Cloud and BigQuery.",
    "writing.title": "Field notes, not a tool roundup.",
    "writing.lead":
      "I write about what the GA4 interface hides. BigQuery, attribution, consent, dbt, and automations that carry an insight to the place a decision is made.",
    "writing.all": "All essays",
    "writing.read": "Read",
    "contact.kicker": "collaboration",
    "contact.title": "Tell me what is wrong with the data.",
    "contact.lead":
      "An audit, server-side measurement, BigQuery, or a model someone should actually use on Monday. I reply with a point of view, not a template proposal.",
    "contact.base": "Based in",
    "form.name": "Name",
    "form.email": "Email",
    "form.company": "Company",
    "form.need": "What you need",
    "form.web": "Website",
    "form.message": "Message",
    "form.namePh": "Anna Novak",
    "form.emailPh": "anna@company.com",
    "form.companyPh": "Company name",
    "form.webPh": "https://",
    "form.messagePh": "What you measure today, what you do not trust, and what should change.",
    "form.need0": "Choose a topic",
    "form.need1": "Measurement audit / GA4",
    "form.need2": "Server-side GTM and consent",
    "form.need3": "BigQuery / dbt",
    "form.need4": "CAPI and ads data",
    "form.need5": "Automation (Make, n8n)",
    "form.need6": "Something else",
    "form.hint": "After you send this, my LinkedIn opens and the brief is copied. Paste it into a message — I will reply.",
    "form.hintEmail": "I use this only to reply. Nothing is passed on.",
    "form.submit": "Send the brief",
    "form.err": "Add your name, a real email, a topic and a few sentences.",
    "form.okLi": "The brief is on your clipboard and LinkedIn is open. Paste it into a message (Ctrl+V) and send it.",
    "form.okEmail": "Got it. I will reply to the address you left.",
    "form.fail": "Sending failed. Write to me on LinkedIn — the link is just beside the form.",
    "form.sending": "Sending…",
    "meta.description":
      "Roman Hamrák is a senior web and product analyst. GA4, server-side GTM, BigQuery and dbt for teams in Slovakia, the UK, the Netherlands and Germany.",
    "meta.title": "Roman Hamrák — data analyst · GA4, BigQuery, dbt",
  };

  const skMeta = {
    title: document.title,
    description: document.querySelector('meta[name="description"]').getAttribute("content"),
  };

  const textNodes = [...document.querySelectorAll("[data-i18n]")];
  const originalText = new Map(textNodes.map((node) => [node, node.textContent]));
  const placeholderNodes = [...document.querySelectorAll("[data-i18n-placeholder]")];
  const originalPlaceholder = new Map(placeholderNodes.map((node) => [node, node.getAttribute("placeholder")]));
  const altNodes = [...document.querySelectorAll("[data-i18n-alt]")];
  const originalAlt = new Map(altNodes.map((node) => [node, node.getAttribute("alt")]));
  const ariaNodes = [...document.querySelectorAll("[data-i18n-aria]")];
  const originalAria = new Map(ariaNodes.map((node) => [node, node.getAttribute("aria-label") || node.textContent.trim()]));

  function applyLanguage(lang) {
    const english = lang === "en";
    document.documentElement.lang = english ? "en" : "sk";
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });

    textNodes.forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = english ? en[key] || originalText.get(node) : originalText.get(node);
    });
    placeholderNodes.forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      node.setAttribute("placeholder", english ? en[key] || "" : originalPlaceholder.get(node) || "");
    });
    altNodes.forEach((node) => {
      const key = node.dataset.i18nAlt;
      node.setAttribute("alt", english ? en[key] || "" : originalAlt.get(node) || "");
    });
    ariaNodes.forEach((node) => {
      const key = node.dataset.i18nAria;
      if (english && en[key]) node.setAttribute("aria-label", en[key]);
      else node.setAttribute("aria-label", originalAria.get(node) || "Menu");
    });

    document.title = english ? en["meta.title"] : skMeta.title;
    document.querySelector('meta[name="description"]').setAttribute("content", english ? en["meta.description"] : skMeta.description);

    const months = english
      ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      : ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"];
    document.querySelectorAll("[data-iso]").forEach((node) => {
      const [year, month, day] = node.dataset.iso.split("-").map(Number);
      node.textContent = english ? day + " " + months[month - 1] + " " + year : day + ". " + months[month - 1] + " " + year;
    });

    const hint = document.getElementById("form-hint");
    if (hint && config.contactEmail) hint.textContent = english ? en["form.hintEmail"] : "Údaje použijem len na odpoveď. Nikam ich neposielam.";

    try {
      localStorage.setItem("rh-lang", lang);
    } catch (error) {
      /* private mode */
    }
  }

  let initial = "sk";
  try {
    const stored = localStorage.getItem("rh-lang");
    if (stored === "en" || stored === "sk") initial = stored;
  } catch (error) {
    initial = "sk";
  }
  applyLanguage(initial);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector("[data-menu]");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  const header = document.querySelector("[data-nav]");
  const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".menu a")];
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.setAttribute("aria-current", link.getAttribute("href") === "#" + entry.target.id ? "true" : "false");
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((section) => spy.observe(section));
  }

  document.getElementById("year").textContent = String(new Date().getFullYear());

  const canvas = document.getElementById("field");
  const context = canvas.getContext("2d");
  if (!reduced && context) {
    let width = 0;
    let height = 0;
    let points = [];
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(80, Math.round((width * height) / 22000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    let running = false;
    const frame = () => {
      if (document.hidden) {
        running = false;
        return;
      }
      context.clearRect(0, 0, width, height);
      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
        const dx = point.x - pointer.x;
        const dy = point.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 140) {
          point.x += dx / distance * 0.4;
          point.y += dy / distance * 0.4;
        }
      });

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 150) {
            context.strokeStyle = "rgba(255, 122, 24," + (1 - distance / 150) * 0.32 + ")";
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      context.fillStyle = "rgba(255, 122, 24, 0.85)";
      points.forEach((point) => {
        context.beginPath();
        context.arc(point.x, point.y, 1.4, 0, Math.PI * 2);
        context.fill();
      });
      requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || document.hidden) return;
      running = true;
      requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    });
    document.addEventListener("visibilitychange", start);
    start();
  }

  const form = document.getElementById("lead");
  const status = document.getElementById("form-status");
  const submit = form.querySelector('[type="submit"]');

  const currentLang = () => document.documentElement.lang;

  const say = (key, kind) => {
    const lang = currentLang();
    const fallback = {
      "form.err": "Doplň meno, funkčný e-mail, tému a pár viet.",
      "form.okLi": "Zhrnutie je v schránke a LinkedIn je otvorený. Vlož ho do správy (Ctrl+V) a pošli.",
      "form.okEmail": "Mám to. Ozvem sa na adresu, ktorú si nechal.",
      "form.fail": "Odoslanie sa nepodarilo. Napíš mi priamo na LinkedIn — odkaz je vedľa formulára.",
      "form.sending": "Odosielam…",
      "form.submit": "Odoslať dopyt",
    };
    status.textContent = lang === "en" ? en[key] : fallback[key];
    status.className = "form__status" + (kind ? " is-" + kind : "");
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._honey) return;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email || ""));
    if (!data.name || !emailOk || !data.need || !data.message || data.message.trim().length < 8) {
      say("form.err", "err");
      return;
    }

    const brief = [
      "Dopyt z webu Roman Hamrák",
      "Meno: " + data.name,
      "E-mail: " + data.email,
      "Firma: " + (data.company || "—"),
      "Web: " + (data.website || "—"),
      "Téma: " + data.need,
      "",
      data.message.trim(),
    ].join("\n");

    submit.disabled = true;
    say("form.sending", "");

    try {
      if (config.contactEmail) {
        const response = await fetch("https://formsubmit.co/ajax/" + encodeURIComponent(config.contactEmail), {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            company: data.company || "",
            website: data.website || "",
            need: data.need,
            message: data.message.trim(),
            _subject: "Nový dopyt — " + data.name,
            _template: "table",
            _captcha: "false",
          }),
        });
        if (!response.ok) throw new Error("form");
        form.reset();
        say("form.okEmail", "ok");
      } else {
        window.open(linkedin, "_blank", "noopener");
        try {
          await navigator.clipboard.writeText(brief);
        } catch (error) {
          /* clipboard may be blocked; LinkedIn still opens */
        }
        form.reset();
        say("form.okLi", "ok");
      }
    } catch (error) {
      say("form.fail", "err");
    } finally {
      submit.disabled = false;
      submit.textContent = currentLang() === "en" ? en["form.submit"] : "Odoslať dopyt";
    }
  });
})();
