import React from 'react'
import { FloatingDock } from './ui/Floating-Dock'
import { socialLinks } from '@/data'

function Footer() {
  return (
    <footer className="w-full py-12 px-4 mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          <FloatingDock 
            items={socialLinks}
            desktopClassName="bg-black/50 backdrop-blur-sm border border-neutral-800"
            mobileClassName="fixed bottom-4 right-4 z-50"
          />
          <p className="text-neutral-400 text-sm text-center mt-8">
            © {new Date().getFullYear()} • Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer