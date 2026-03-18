import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './DocsLayout.css'

const components = [
  'Button', 'Input', 'TextArea', 'Select',
  'Badge', 'Card', 'Modal', 'Tabs',
  'Alert', 'Switch', 'Spinner', 'Tooltip',
  'Avatar', 'CodeBlock', 'Divider', 'Kbd',
]

export const DocsLayout: React.FC = () => (
  <div className="docs-layout">
    <aside className="docs-sidebar">
      <div className="docs-sidebar__logo">
        <NavLink to="/">
          <div className="docs-sidebar__title">KodeUI</div>
          <div className="docs-sidebar__subtitle">v1.0.0</div>
        </NavLink>
      </div>
      <nav className="docs-sidebar__nav">
        <div className="docs-sidebar__section">Getting Started</div>
        <NavLink
          to="/getting-started"
          className={({ isActive }) =>
            `docs-sidebar__link ${isActive ? 'docs-sidebar__link--active' : ''}`
          }
        >
          Installation
        </NavLink>
        <NavLink
          to="/theme"
          className={({ isActive }) =>
            `docs-sidebar__link ${isActive ? 'docs-sidebar__link--active' : ''}`
          }
        >
          Theme & Tokens
        </NavLink>

        <div className="docs-sidebar__section" style={{ marginTop: 16 }}>Components</div>
        {components.map(name => (
          <NavLink
            key={name}
            to={`/components/${name.toLowerCase()}`}
            className={({ isActive }) =>
              `docs-sidebar__link ${isActive ? 'docs-sidebar__link--active' : ''}`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
    <main className="docs-main">
      <div className="docs-content">
        <Outlet />
      </div>
    </main>
  </div>
)
