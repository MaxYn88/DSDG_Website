"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-primary">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo on left */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-primary-foreground">DSDG</span>
        </Link>

        {/* Centered Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <Link
            href="/what-we-do"
            className="text-sm font-medium uppercase tracking-wide text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            About
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium uppercase tracking-wide text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            Events
          </Link>
          <Link
            href="/what-we-do"
            className="text-sm font-medium uppercase tracking-wide text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            Branches
          </Link>
        </nav>

        {/* Join Us button on right */}
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 md:block"
        >
          Join Us
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-primary-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-primary-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/what-we-do"
              className="text-sm font-medium uppercase tracking-wide text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium uppercase tracking-wide text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/what-we-do"
              className="text-sm font-medium uppercase tracking-wide text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Branches
            </Link>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Join Us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
