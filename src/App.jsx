// App.jsx
// Single-file React portfolio component (default export)
// Upgraded: MERN stack, updated contact info, improved copy and project labels.
// Built with Tailwind CSS utility classes and a dark-mode toggle.

import React, { useEffect, useState } from 'react';

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem('prefers-dark');
      if (stored !== null) return stored === 'true';
    } catch (e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
    try { localStorage.setItem('prefers-dark', dark.toString()); } catch(e){}
  }, [dark]);

  const toggleDark = () => setDark(d => !d);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Aayan — MERN Stack Developer</h1>
          <p className="text-sm opacity-80">Building fast, maintainable full-stack web apps for startups and small businesses.</p>
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-block px-3 py-2 rounded-md bg-indigo-600 text-white hover:opacity-90">Hire me</a>
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {dark ? '🌞' : '🌙'}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-12">
        {/* Hero */}
        <section className="py-8">
          <div className="rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700">
            <div className="md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">Hi, I’m Aayan 👋</h2>
                <p className="mt-3 text-lg opacity-90">A college student and MERN developer. I design and ship production-ready web apps — from expressive UIs to reliable backend APIs.</p>
                <ul className="mt-4 text-sm opacity-85 list-disc list-inside">
                  <li>Frontend: React, Tailwind CSS, responsive design</li>
                  <li>Backend: Node.js, Express, MongoDB (MERN)</li>
                  <li>Deployment: Vercel, Netlify, Heroku, Docker (basic)</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <a href="#projects" className="px-4 py-2 bg-indigo-600 text-white rounded-md">View projects</a>
                  <a href="#contact" className="px-4 py-2 border rounded-md">Let’s talk</a>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex-shrink-0">
                <div className="w-36 h-36 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-3xl font-bold text-white">A</div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700">
            <h3 className="text-xl font-semibold">About me</h3>
            <p className="mt-3 text-sm opacity-90">I’m currently studying engineering and building real projects with the MERN stack. I focus on pragmatic code, accessible UI, and fast delivery — the things clients actually notice. I enjoy taking a feature from idea to deploy, and I keep learning tools that make apps more reliable.</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Skill tag="MongoDB" />
              <Skill tag="Express" />
              <Skill tag="React" />
              <Skill tag="Node.js" />
              <Skill tag="JavaScript (ES6+)" />
              <Skill tag="Tailwind CSS" />
              <Skill tag="REST & APIs" />
              <Skill tag="Git & Deployment" />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h3 className="text-xl font-semibold">Projects</h3>
          <p className="mt-2 text-sm opacity-80">Selected work — focused on real features, clean code, and deploy-ready apps. (Links open project repos or live demos.)</p>
          <div className="grid gap-6 mt-4 sm:grid-cols-2">
            <ProjectCard
              title="Personal Portfolio (This Site)"
              desc="A clean, responsive React portfolio with dark mode, accessible forms, and deployment-ready configuration."
              tech={["React", "Tailwind", "Vercel"]}
              url="https://github.com/aayan999/portfolio"
            />

            <ProjectCard
              title="MERN E-commerce (Sample)"
              desc="Full-stack e-commerce app with product CRUD, user auth, and order flow. Demonstrates REST APIs, protected routes, and basic payments mock."
              tech={["MongoDB", "Express", "React", "Node.js"]}
              url="https://github.com/aayan999/mern-ecommerce"
            />

            <ProjectCard
              title="Restaurant Website + Booking API"
              desc="Static marketing front-end with a small Node/Express booking API. Mobile-first and optimized for speed."
              tech={["React", "Node.js", "Express"]}
              url="https://github.com/aayan999/restaurant-site"
            />

            <ProjectCard
              title="Admin Dashboard (Analytics)"
              desc="Dashboard with charts, filters, and reusable components — built to be extended into production. Uses charting libs and API-driven data."
              tech={["React", "Chart.js", "REST API"]}
              url="https://github.com/aayan999/dashboard-ui"
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-12">
          <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-2 text-sm opacity-90">Want to build something together? Send a short message and I’ll respond quickly.</p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <ContactCard label="Email" value="aayanfaras@gmail.com" url="mailto:aayanfaras@gmail.com" />
              <ContactCard label="GitHub" value="github.com/aayan999" url="https://github.com/aayan999" />
            </div>

            <div className="mt-6">
              <form onSubmit={(e)=>{e.preventDefault(); window.location.href = `mailto:aayanfaras@gmail.com?subject=Website%20Inquiry&body=Hi%20Aayan,%0A%0AI%20would%20like%20to%20work%20with%20you...`;}} className="grid gap-3">
                <input name="name" className="p-3 rounded-md bg-gray-50 dark:bg-gray-700 ring-1 ring-gray-100 dark:ring-gray-700" placeholder="Your name" required />
                <input name="email" className="p-3 rounded-md bg-gray-50 dark:bg-gray-700 ring-1 ring-gray-100 dark:ring-gray-700" placeholder="Email" type="email" required />
                <textarea name="message" className="p-3 rounded-md bg-gray-50 dark:bg-gray-700 ring-1 ring-gray-100 dark:ring-gray-700" placeholder="Message" rows={4} required></textarea>
                <div className="text-right">
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </section>

      </main>

      <footer className="max-w-5xl mx-auto p-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Aayan • MERN • React • Node • MongoDB
      </footer>
    </div>
  );
}

function ProjectCard({ title, desc, tech = [], url = '#' }){
  return (
    <a target="_blank" rel="noopener noreferrer" href={url} className="block p-4 rounded-lg bg-white dark:bg-gray-800 ring-1 ring-gray-100 dark:ring-gray-700 hover:shadow-md transition-shadow">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm opacity-90">{desc}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {tech.map((t,i)=> (
          <span key={i} className="text-xs p-1 rounded bg-gray-100 dark:bg-gray-700">{t}</span>
        ))}
      </div>
    </a>
  );
}

function ContactCard({ label, value, url }){
  return (
    <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-700 ring-1 ring-gray-100 dark:ring-gray-700">
      <div className="text-xs opacity-80">{label}</div>
      {url ? (
        <a className="block mt-1 text-sm font-medium hover:underline" href={url}>{value}</a>
      ) : (
        <div className="mt-1 text-sm">{value}</div>
      )}
    </div>
  );
}

function Skill({ tag }){
  return <div className="text-xs p-2 rounded bg-gray-100 dark:bg-gray-700 text-center">{tag}</div>;
}
