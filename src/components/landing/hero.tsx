"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-foreground mb-8"
                >
                    <Sparkles className="h-4 w-4" />
                    <span>AI-Powered Enterprise Productivity</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl mx-auto"
                >
                    Build tools. Automate work. <br />
                    <span className="text-muted-foreground">Just ask.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                >
                    NovaKiwi lets your team build internal tools, automate workflows, and create polished deliverables using plain English. No code required.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="h-12 px-8 text-lg">
                        Start Building Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                        Request Demo
                    </Button>
                </motion.div>

                {/* Interactive Demo Placeholder / Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 relative mx-auto max-w-5xl rounded-xl border bg-background/50 p-2 shadow-2xl backdrop-blur-sm"
                >
                    <div className="rounded-lg border bg-card p-8 shadow-sm text-left">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center font-bold text-xs">NK</div>
                                <div className="bg-accent/10 rounded-2xl rounded-tl-none px-6 py-4 max-w-lg">
                                    <p className="text-sm font-medium">What would you like to build today?</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 flex-row-reverse">
                                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-white font-bold text-xs">U</div>
                                <div className="bg-muted/10 rounded-2xl rounded-tr-none px-6 py-4 max-w-lg">
                                    <p className="text-sm font-medium">Create a weekly sales report from Salesforce data and email it to the team every Monday at 9 AM.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center font-bold text-xs">NK</div>
                                <div className="bg-accent/10 rounded-2xl rounded-tl-none px-6 py-4 max-w-lg">
                                    <p className="text-sm font-medium">I'm on it. I'll connect to Salesforce, generate the report using the "Weekly Sales" template, and set up the automation. Here's a preview...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
