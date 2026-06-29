// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.redoakgolf.biz",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.redoakgolf.biz/","title_tag":"Golf Lessons & Coaching | Red Oak Golf Mike McKain","meta_description":"Tailored golf lessons, group clinics and short game instruction with USGTF golf instructor Mike McKain at Red Oak Golf. Improve swing mechanics and course management."},{"page_url":"https://www.redoakgolf.biz/shop","title_tag":"Golf Lessons & Gear Shop | Red Oak Golf Mike McKain","meta_description":"Shop golf products and support your training with Mike McKain at Red Oak Golf. Complement your golf lessons, clinics and short game instruction with quality gear."}],"keywords":["Red Oak Golf","golf instructor port st lucie","golf lessons","swing mechanics","group clinics","short game instruction","golf coaching","tailored golf lessons","mike mckain golf","driving range port st lucie"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.redoakgolf.biz/#localbusiness",
  "name": "Red Oak Golf",
  "url": "https://www.redoakgolf.biz/",
  "description": "Red Oak Golf offers personalized golf coaching and instruction in Spencerport with certified USGTF golf instructor Mike McKain. Lesson menu includes driving, long irons, short game, course management, and group clinics.",
  "image": [
    "https://static.wixstatic.com/media/11062b_dd62568991bd4cb8b25dc563c0b9830d~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_dd62568991bd4cb8b25dc563c0b9830d~mv2_d_5760_3840_s_4_2.jpg",
    "https://static.wixstatic.com/media/9478c2213d135e42173ed813134d135c.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Golf.jpg",
    "https://static.wixstatic.com/media/0ca9ea0fc0ff41e0a181bf9ce0410cc5.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Equipment%20for%20playing%20golf.jpg",
    "https://static.wixstatic.com/media/2049e88dfbcb4c6391da41cfeec620a1.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Golfing.jpg",
    "https://static.wixstatic.com/media/ac8026_61f8b24a24cd432abd10b5b1bc1ef2b6~mv2.jpg/v1/fill/w_123,h_125,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/ac8026_61f8b24a24cd432abd10b5b1bc1ef2b6~mv2.jpg",
    "https://static.wixstatic.com/media/11062b_5d32b239456c4c8cb01d738e9a99a390~mv2_d_4840_3360_s_4_2.jpg/v1/fill/w_940,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Golf%20Iron.jpg",
    "https://static.wixstatic.com/media/11062b_ae2549a51e2d4b24a063a140ab479a2b~mv2_d_2592_1728_s_2.jpg/v1/fill/w_123,h_82,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_ae2549a51e2d4b24a063a140ab479a2b~mv2_d_2592_1728_s_2.jpg"
  ],
  "email": "mailto:miktchr@hotmail.com",
  "telephone": "+1-585-317-4243",
  "areaServed": {
    "@type": "Place",
    "name": "Spencerport"
  },
  "slogan": "Life is a game; Golf is serious",
  "founder": {
    "@type": "Person",
    "name": "Mike McKain",
    "description": "USGTF certified golf instructor and owner of Red Oak Golf Range, providing thoughtful and personalized golf instruction since 1998."
  },
  "sameAs": [
    "https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png",
    "https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png",
    "https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Lesson Menu",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Off the Tee: Driving, Long Irons",
        "price": "50",
        "priceCurrency": "USD",
        "description": "Hourly golf lesson focused on driving and long irons.",
        "itemOffered": {
          "@type": "Service",
          "name": "Driving and Long Irons Golf Lesson",
          "provider": {
            "@type": "Person",
            "name": "Mike McKain"
          },
          "serviceType": "Golf coaching"
        }
      },
      {
        "@type": "Offer",
        "name": "Groups and Clinics",
        "price": "40",
        "priceCurrency": "USD",
        "description": "Hourly group golf instruction and clinics, priced per person.",
        "itemOffered": {
          "@type": "Service",
          "name": "Group Golf Instruction and Clinics",
          "provider": {
            "@type": "Person",
            "name": "Mike McKain"
          },
          "serviceType": "Group golf coaching"
        }
      },
      {
        "@type": "Offer",
        "name": "Short Game: Pitching, Chipping and Putting; Hazards",
        "price": "50",
        "priceCurrency": "USD",
        "description": "Hourly golf lesson focused on short game, including pitching, chipping, putting, and hazards.",
        "itemOffered": {
          "@type": "Service",
          "name": "Short Game Golf Lesson",
          "provider": {
            "@type": "Person",
            "name": "Mike McKain"
          },
          "serviceType": "Golf short game coaching"
        }
      },
      {
        "@type": "Offer",
        "name": "Course Management (9 holes)",
        "price": "50",
        "priceCurrency": "USD",
        "description": "On-course golf instruction focusing on course management over 9 holes.",
        "itemOffered": {
          "@type": "Service",
          "name": "Course Management Golf Lesson (9 holes)",
          "provider": {
            "@type": "Person",
            "name": "Mike McKain"
          },
          "serviceType": "On-course golf coaching"
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
