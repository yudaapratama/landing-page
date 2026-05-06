/* ============================================================
 *  Portfolio Landing Page — Script
 *  Reads config.js, renders all sections dynamically,
 *  handles theme toggling, scroll reveal, accent color
 * ============================================================ */

(function () {
  'use strict';

  // Bail if no config
  if (typeof config === 'undefined') {
    console.error('config.js not found. Make sure it loads before this script.');
    return;
  }

  const cfg = config;

  /* --------------------------------------------------------
     1. DOM REFERENCES
     -------------------------------------------------------- */
  const heroNameEl = document.querySelector('.hero-name');
  const heroTitleEl = document.querySelector('.hero-title');
  const heroTaglineEl = document.querySelector('.hero-tagline');
  const heroCtaEl = document.querySelector('.hero-cta');
  const heroVisualEl = document.querySelector('.hero-visual');
  const heroDecorEl = document.querySelector('.hero-decor');
  const aboutBioEl = document.querySelector('.about-bio');
  const sectionLabelAbout = document.querySelector('#about .section-label');
  const sectionHeadingAbout = document.querySelector('#about .section-heading');
  const sectionLabelWork = document.querySelector('#work .section-label');
  const sectionHeadingWork = document.querySelector('#work .section-heading');
  const projectsListEl = document.querySelector('.projects-list');
  const contactEmailEl = document.querySelector('.contact-email');
  const contactSocialEl = document.querySelector('.contact-social');
  const contactLabel = document.querySelector('#contact .section-label');
  const footerTextEl = document.querySelector('.footer-text');
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const pageTitle = document.querySelector('title');

  /* --------------------------------------------------------
     2. THEME MANAGEMENT
     -------------------------------------------------------- */

  /**
   * Get the user's preferred theme from localStorage or system.
   */
  function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  /**
   * Apply a theme to the document.
   */
  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', isDark.toString());
    themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light theme' : 'Switch to dark theme'
    );
    localStorage.setItem('theme', theme);
    applyAccentForTheme(theme);
  }

  /**
   * Toggle between light and dark.
   */
  function toggleTheme() {
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  // Initialize theme
  setTheme(getPreferredTheme());

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Theme toggle click
  themeToggle.addEventListener('click', toggleTheme);

  /* --------------------------------------------------------
     3. ACCENT COLOR
     -------------------------------------------------------- */

  /** Apply accent color CSS custom properties for a given theme (light/dark). */
  function applyAccentForTheme(theme) {
    if (!cfg.accent_color) return;
    var hex = cfg.accent_color;
    html.style.setProperty('--accent-hex', hex);
    html.style.setProperty(
      '--accent-hover',
      'color-mix(in oklch, ' + hex + ', black 15%)'
    );
    html.style.setProperty(
      '--accent-subtle',
      'color-mix(in oklch, ' + hex + ', white 75%)'
    );
    html.style.setProperty(
      '--accent',
      theme === 'dark'
        ? 'color-mix(in oklch, ' + hex + ', white 30%)'
        : hex
    );
  }

  // Initialize accent colors
  applyAccentForTheme(html.getAttribute('data-theme') || 'light');

  /* --------------------------------------------------------
     4. PROJECT DETAIL PAGE — render if on project-detail.html
     -------------------------------------------------------- */

  /** Render the project detail page content */
  function renderProjectPage() {
    var container = document.getElementById('project-detail-content');
    if (!container) return;

    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');

    // Validate id param
    if (id === null || !/^\d+$/.test(id)) {
      container.innerHTML = '<p class="projects-empty">Project not found. <a href="projects.html">Back to all projects</a></p>';
      return;
    }

    var index = parseInt(id, 10);
    var projects = cfg.projects || [];
    var project = projects[index];

    if (!project) {
      container.innerHTML = '<p class="projects-empty">Project not found. <a href="projects.html">Back to all projects</a></p>';
      return;
    }

    // Update page title
    if (pageTitle) pageTitle.textContent = project.title + ' | ' + (cfg.name || 'Portfolio');

    // Build HTML
    var html = '';

    // Back button
    html += '<a href="projects.html" class="project-page-back"><span class="arrow" aria-hidden="true">&larr;</span> Back to all projects</a>';

    // Hero image
    if (project.image_url && project.image_url.trim() !== '') {
      html += '<div class="project-detail-hero">';
      html += '<img src="' + escapeHtml(project.image_url) + '" alt="' + escapeHtml(project.alt || project.title || '') + '" class="project-detail-image">';
      html += '</div>';
    }

    // Title
    html += '<h1 class="project-detail-title">' + escapeHtml(project.title || 'Untitled') + '</h1>';

    // Description
    var desc = project.long_description || project.description || '';
    html += '<div class="project-detail-content"><p>' + escapeHtml(desc) + '</p></div>';

    // Tech stack
    if (project.tech_stack && project.tech_stack.length > 0) {
      html += '<div class="tech-stack">';
      html += '<h3 class="tech-stack-heading">Technologies</h3>';
      html += '<div class="tech-stack-list">';
      project.tech_stack.forEach(function (tech) {
        html += '<span class="tech-badge">' + escapeHtml(tech) + '</span>';
      });
      html += '</div></div>';
    }

    // Links
    if (project.demo_url || project.repo_url) {
      html += '<div class="project-links">';
      if (project.demo_url && project.demo_url.trim() !== '') {
        html += '<a href="' + escapeHtml(project.demo_url) + '" target="_blank" rel="noopener noreferrer" class="project-link-button">Live Demo <span class="arrow" aria-hidden="true">&rarr;</span></a>';
      }
      if (project.repo_url && project.repo_url.trim() !== '') {
        html += '<a href="' + escapeHtml(project.repo_url) + '" target="_blank" rel="noopener noreferrer" class="project-link-button project-link-button--secondary">View Source <span class="arrow" aria-hidden="true">&rarr;</span></a>';
      }
      html += '</div>';
    }

    // Gallery
    if (project.gallery && project.gallery.length > 0) {
      html += '<div class="project-gallery">';
      html += '<h3 class="gallery-heading">Gallery</h3>';
      html += '<div class="gallery-grid">';
      project.gallery.forEach(function (imgUrl, i) {
        html += '<div class="gallery-item">';
        html += '<img src="' + escapeHtml(imgUrl) + '" alt="' + escapeHtml(project.title || 'Project') + ' — screenshot ' + (i + 1) + ' of ' + project.gallery.length + '" loading="lazy">';
        html += '</div>';
      });
      html += '</div></div>';
    }

    container.innerHTML = html;
  }

  // Simple escape for HTML special chars in attributes
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /** Render the projects listing page (projects.html) with pagination */
  function renderProjectsPage() {
    var list = document.getElementById('projects-grid');
    var pagination = document.getElementById('projects-pagination');
    if (!list) return;

    var projects = cfg.projects || [];
    var perPage = 4;

    // Read page from URL query param
    var params = new URLSearchParams(window.location.search);
    var rawPage = parseInt(params.get('page'), 10);
    var currentPage = (!isNaN(rawPage) && rawPage >= 1) ? rawPage : 1;

    var totalPages = Math.max(1, Math.ceil(projects.length / perPage));

    // Clamp current page
    if (currentPage > totalPages) currentPage = totalPages;

    // Set ?page param in URL for bookmarkability when missing
    if (totalPages > 1 && isNaN(rawPage) && window.history.replaceState) {
      var pageUrl = new URL(window.location);
      pageUrl.searchParams.set('page', currentPage);
      window.history.replaceState({}, '', pageUrl);
    }

    // Update page title
    if (pageTitle) {
      var titleBase = 'All Projects | ' + (cfg.name || 'Portfolio');
      pageTitle.textContent = totalPages > 1
        ? titleBase + ' — Page ' + currentPage + ' of ' + totalPages
        : titleBase;
    }

    // Update intro text from config
    var introEl = document.getElementById('projects-intro-text');
    if (introEl && cfg.projects_intro && cfg.projects_intro.trim() !== '') {
      introEl.textContent = cfg.projects_intro;
    }

    // Bail if empty
    if (projects.length === 0) {
      list.innerHTML = '<p class="projects-empty">No projects to show yet.</p>';
      if (pagination) pagination.innerHTML = '';
      return;
    }

    // Slice for current page
    var start = (currentPage - 1) * perPage;
    var pageProjects = projects.slice(start, start + perPage);

    // Build project cards — alternating layout matching landing page
    var html = '<div class="projects-list">';
    pageProjects.forEach(function (project, idx) {
      var globalIndex = start + idx;
      var isReversed = idx % 2 === 1;

      html += '<div class="project-card' + (isReversed ? ' reverse' : '') + '" tabindex="0" role="link" data-index="' + globalIndex + '">';
      // Image side
      html += '  <div class="project-image">';
      if (project.image_url && project.image_url.trim() !== '') {
        html += '    <img src="' + escapeHtml(project.image_url) + '" alt="' + escapeHtml(project.alt || project.title || '') + '" loading="lazy">';
      } else {
        html += '    <div class="project-image-placeholder">' + escapeHtml(getInitials(project.title || 'P')) + '</div>';
      }
      html += '  </div>';
      // Text side
      html += '  <div class="project-text">';
      html += '    <h3 class="project-title">' + escapeHtml(project.title || 'Untitled') + '</h3>';
      html += '    <p class="project-description">' + escapeHtml(project.description || '') + '</p>';
      // Tech badges
      if (project.tech_stack && project.tech_stack.length > 0) {
        html += '    <div class="project-card-tech">';
        var techs = project.tech_stack.slice(0, 4);
        techs.forEach(function (tech) {
          html += '<span class="project-card-tech-badge">' + escapeHtml(tech) + '</span>';
        });
        if (project.tech_stack.length > 4) {
          html += '<span class="project-card-tech-badge project-card-tech-badge--more">+' + (project.tech_stack.length - 4) + '</span>';
        }
        html += '    </div>';
      }
      html += '    <span class="project-card-link">View details <span class="arrow" aria-hidden="true">&rarr;</span></span>';
      html += '  </div>';
      html += '</div>';
    });
    html += '</div>';

    list.innerHTML = html;

    // Add click + keyboard handlers to project cards
    var cards = list.querySelectorAll('.project-card');
    cards.forEach(function (c) {
      var idx = parseInt(c.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        c.addEventListener('click', function () {
          window.location.href = 'project-detail.html?id=' + idx;
        });
        c.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            c.click();
          }
        });
      }
    });

    // Build pagination controls
    if (pagination) {
      if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
      }

      var pHtml = '';

      // Previous button
      if (currentPage > 1) {
        pHtml += '<a href="?page=' + (currentPage - 1) + '" class="pagination-btn pagination-prev" rel="prev"><span class="arrow" aria-hidden="true">&larr;</span> Previous</a>';
      } else {
        pHtml += '<span class="pagination-btn pagination-btn--disabled"><span class="arrow" aria-hidden="true">&larr;</span> Previous</span>';
      }

      // Page numbers
      pHtml += '<div class="pagination-pages">';
      var maxVisible = 5;
      var half = Math.floor(maxVisible / 2);
      var pStart = Math.max(1, currentPage - half);
      var pEnd = Math.min(totalPages, pStart + maxVisible - 1);
      if (pEnd - pStart + 1 < maxVisible) {
        pStart = Math.max(1, pEnd - maxVisible + 1);
      }

      if (pStart > 1) {
        pHtml += '<a href="?page=1" class="pagination-page">1</a>';
        if (pStart > 2) pHtml += '<span class="pagination-ellipsis">&hellip;</span>';
      }

      for (var p = pStart; p <= pEnd; p++) {
        if (p === currentPage) {
          pHtml += '<span class="pagination-page pagination-page--active" aria-current="page">' + p + '</span>';
        } else {
          pHtml += '<a href="?page=' + p + '" class="pagination-page">' + p + '</a>';
        }
      }

      if (pEnd < totalPages) {
        if (pEnd < totalPages - 1) pHtml += '<span class="pagination-ellipsis">&hellip;</span>';
        pHtml += '<a href="?page=' + totalPages + '" class="pagination-page">' + totalPages + '</a>';
      }

      pHtml += '</div>';

      // Next button
      if (currentPage < totalPages) {
        pHtml += '<a href="?page=' + (currentPage + 1) + '" class="pagination-btn pagination-next" rel="next">Next <span class="arrow" aria-hidden="true">&rarr;</span></a>';
      } else {
        pHtml += '<span class="pagination-btn pagination-btn--disabled">Next <span class="arrow" aria-hidden="true">&rarr;</span></span>';
      }

      pagination.innerHTML = pHtml;
    }
  }

  // If on project detail page, render it and skip landing page rendering
  if (document.getElementById('project-detail-content')) {
    renderProjectPage();
    setupIntersectionObserver();
    return;
  }

  // If on projects listing page, render it and skip landing page
  if (document.getElementById('projects-grid')) {
    renderProjectsPage();
    setupIntersectionObserver();
    return;
  }

  /* --------------------------------------------------------
     5. HERO SECTION
     -------------------------------------------------------- */
  if (heroNameEl) heroNameEl.textContent = cfg.name || 'Your Name';
  if (heroTitleEl) heroTitleEl.textContent = cfg.title || '';
  if (heroTaglineEl) heroTaglineEl.textContent = cfg.tagline || '';
  if (pageTitle) pageTitle.textContent = cfg.name ? cfg.name + ' | Portfolio' : 'Portfolio';

  // Hero CTA
  if (heroCtaEl) {
    const link = heroCtaEl;
    link.href = '#work';
    link.innerHTML = 'View my work <span class="arrow" aria-hidden="true">&darr;</span>';
  }

  // Avatar or decorative initials
  if (heroDecorEl) {
    if (cfg.avatar_url && cfg.avatar_url.trim() !== '') {
      const img = document.createElement('img');
      img.src = cfg.avatar_url;
      img.alt = cfg.name ? cfg.name + "\'s avatar" : 'Avatar';
      img.className = 'hero-avatar';
      img.loading = 'eager';
      heroDecorEl.innerHTML = '';
      heroDecorEl.appendChild(img);
      // Fallback to initials if image fails to load
      img.addEventListener('error', function () {
        img.remove();
        const span = document.createElement('span');
        span.className = 'hero-initials';
        span.textContent = getInitials(cfg.name || '');
        heroDecorEl.appendChild(span);
      });
    } else {
      // Show initials
      const initials = getInitials(cfg.name || '');
      const span = document.createElement('span');
      span.className = 'hero-initials';
      span.textContent = initials;
      heroDecorEl.innerHTML = '';
      heroDecorEl.appendChild(span);
    }
  }

  /* --------------------------------------------------------
     6. ABOUT SECTION
     -------------------------------------------------------- */
  if (sectionLabelAbout) sectionLabelAbout.textContent = '01 / About';
  if (sectionHeadingAbout) sectionHeadingAbout.textContent = 'Who I am';

  if (aboutBioEl) {
    const bio = cfg.bio || 'No biography provided yet.';
    const paragraphs = bio.split('\n').filter(function (p) { return p.trim() !== ''; });
    aboutBioEl.innerHTML = '';
    paragraphs.forEach(function (para) {
      const p = document.createElement('p');
      p.textContent = para.trim();
      aboutBioEl.appendChild(p);
    });
  }

  /* --------------------------------------------------------
     7. WORK / PROJECTS SECTION
     -------------------------------------------------------- */
  if (sectionLabelWork) sectionLabelWork.textContent = '02 / Work';
  if (sectionHeadingWork) sectionHeadingWork.textContent = 'Selected projects';

  if (projectsListEl) {
    const projects = cfg.projects || [];
    projectsListEl.innerHTML = '';

    if (projects.length === 0) {
      const emptyMsg = document.createElement('p');
      emptyMsg.className = 'projects-empty';
      emptyMsg.textContent = 'Projects coming soon.';
      projectsListEl.appendChild(emptyMsg);
    } else {
      // Show only first 3 on the landing page
      const featured = projects.slice(0, 3);
      featured.forEach(function (project, index) {
        const card = document.createElement('div');
        const isReversed = index % 2 === 1; // alternate: 0=normal, 1=reversed
        card.className = 'project-card' + (isReversed ? ' reverse' : '');

        // Make the whole card clickable -> project detail page
        var projectIndex = projects.indexOf(project);
        card.tabIndex = 0;
        card.role = 'link';
        card.addEventListener('click', function (e) {
          // Don't navigate if clicking the external link inside
          if (e.target.closest('.project-link')) return;
          window.location.href = 'project-detail.html?id=' + projectIndex;
        });
        card.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
          }
        });

        // Image side
        const imageDiv = document.createElement('div');
        imageDiv.className = 'project-image';
        if (project.image_url && project.image_url.trim() !== '') {
          const img = document.createElement('img');
          img.src = project.image_url;
          img.alt = project.alt || project.title || 'Project image';
          img.loading = 'lazy';
          imageDiv.appendChild(img);
        } else {
          const placeholder = document.createElement('div');
          placeholder.className = 'project-image-placeholder';
          placeholder.textContent = getInitials(project.title || 'P');
          imageDiv.appendChild(placeholder);
        }

        // Text side
        const textDiv = document.createElement('div');
        textDiv.className = 'project-text';

        const titleEl = document.createElement('h3');
        titleEl.className = 'project-title';
        titleEl.textContent = project.title || 'Untitled';

        const descEl = document.createElement('p');
        descEl.className = 'project-description';
        descEl.textContent = project.description || '';

        textDiv.appendChild(titleEl);
        textDiv.appendChild(descEl);

        // Optional link — opens external project in new tab
        if (project.link_url && project.link_url.trim() !== '') {
          const linkEl = document.createElement('a');
          linkEl.className = 'project-link';
          linkEl.href = project.link_url;
          linkEl.target = '_blank';
          linkEl.rel = 'noopener noreferrer';
          linkEl.innerHTML = 'View project <span class="arrow" aria-hidden="true">&rarr;</span>';
          // Stop click from bubbling to card (prevents navigating to project-detail.html)
          linkEl.addEventListener('click', function (e) {
            e.stopPropagation();
          });
          textDiv.appendChild(linkEl);
        }

        // Assemble in order based on reversed flag
        if (isReversed) {
          card.appendChild(textDiv);
          card.appendChild(imageDiv);
        } else {
          card.appendChild(imageDiv);
          card.appendChild(textDiv);
        }

        projectsListEl.appendChild(card);
      });
    }
  }

  /* --------------------------------------------------------
     8. CONTACT SECTION
     -------------------------------------------------------- */
  if (contactLabel) contactLabel.textContent = 'Get in touch';

  if (contactEmailEl) {
    const email = cfg.contact_email || '';
    contactEmailEl.textContent = email || 'your@email.com';
    if (email && email.trim() !== '') {
      contactEmailEl.href = 'mailto:' + email;
      contactEmailEl.style.cursor = 'pointer';
    } else {
      contactEmailEl.removeAttribute('href');
      contactEmailEl.style.cursor = 'default';
    }
  }

  if (contactSocialEl) {
    const links = cfg.social_links || [];
    contactSocialEl.innerHTML = '';

    if (links.length === 0) {
      const noLinks = document.createElement('p');
      noLinks.style.color = 'var(--text-muted)';
      noLinks.style.fontSize = 'var(--text-0)';
      noLinks.textContent = 'No social links added yet.';
      contactSocialEl.appendChild(noLinks);
    } else {
      links.forEach(function (link) {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = link.platform;
        contactSocialEl.appendChild(a);
      });
    }
  }

  /* --------------------------------------------------------
     9. FOOTER
     -------------------------------------------------------- */
  if (footerTextEl) {
    if (cfg.footer_text && cfg.footer_text.trim() !== '') {
      footerTextEl.textContent = cfg.footer_text;
    } else {
      const year = new Date().getFullYear();
      const name = cfg.name || 'Portfolio';
      footerTextEl.textContent = '\u00A9 ' + year + ' ' + name + '. Crafted with care.';
    }
  }

  /* --------------------------------------------------------
     10. HERO ENTRANCE ANIMATIONS
     -------------------------------------------------------- */
  function animateHero() {
    var els = [
      { el: heroNameEl, delay: 200 },
      { el: heroTitleEl, delay: 400 },
      { el: heroTaglineEl, delay: 600 },
      { el: heroCtaEl, delay: 700 },
      { el: heroVisualEl, delay: 800 }
    ];

    els.forEach(function (item) {
      if (!item.el) return;
      setTimeout(function () {
        item.el.classList.add('entered');
      }, item.delay);
    });
  }

  // Start hero animation on load
  if (document.readyState === 'complete') {
    animateHero();
  } else {
    window.addEventListener('load', animateHero);
  }

  /* --------------------------------------------------------
     11. INTERSECTION OBSERVER — SCROLL REVEAL
     -------------------------------------------------------- */
  function setupIntersectionObserver() {
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length === 0) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Wait for DOM content to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setupIntersectionObserver();
    });
  } else {
    setupIntersectionObserver();
  }

  /* --------------------------------------------------------
     12. SMOOTH SCROLL FOR ANCHOR LINKS
     -------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerOffset = 70;
        var elementPosition = target.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* --------------------------------------------------------
     13. UTILITY: Get initials from a name
     -------------------------------------------------------- */
  function getInitials(name) {
    if (!name || name.trim() === '') return '?';
    var parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    }
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  /* --------------------------------------------------------
     14. REDUCED MOTION — ensure reveal visible immediately
     -------------------------------------------------------- */
  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    // Hero elements also visible
    document.querySelectorAll('.hero-name, .hero-title, .hero-tagline, .hero-cta, .hero-visual').forEach(function (el) {
      el.classList.add('entered');
    });
  }

  motionQuery.addEventListener('change', function (e) {
    if (e.matches) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
      document.querySelectorAll('.hero-name, .hero-title, .hero-tagline, .hero-cta, .hero-visual').forEach(function (el) {
        el.classList.add('entered');
      });
    }
  });

})();
