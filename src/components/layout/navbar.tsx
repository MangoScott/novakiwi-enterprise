"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-md"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="h-8 w-8 rounded-lg bg-accent" />
                    <span className="text-xl font-bold tracking-tight">NovaKiwi</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#features" className="hover:text-foreground transition-colors">
                        Features
                    </Link>
                    <Link href="#use-cases" className="hover:text-foreground transition-colors">
                        Use Cases
                    </Link>
                    <Link href="#enterprise" className="hover:text-foreground transition-colors">
                        Enterprise
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium hover:text-foreground transition-colors">
                        Log in
                    </Link>
                    <Button variant="kiwi" size="sm">
                        Get Started
                    </Button>
                </div>
            </div>
        </motion.header>
    )
}
