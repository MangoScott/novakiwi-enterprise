"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Fingerprint, CheckCircle } from "lucide-react"

const features = [
    {
        title: "Enterprise Security",
        description: "SSO, role-based access control, and audit logs ensure your data stays safe.",
        icon: Shield,
    },
    {
        title: "Brand Control",
        description: "Enforce brand guidelines automatically across all generated deliverables.",
        icon: CheckCircle,
    },
    {
        title: "Compliance Ready",
        description: "Built-in guardrails and approval flows for sensitive operations.",
        icon: Lock,
    },
    {
        title: "IT Governance",
        description: "Full visibility and control for IT teams over all created tools and automations.",
        icon: Fingerprint,
    },
]

export function Features() {
    return (
        <section id="enterprise" className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-6">
                            Trusted by IT. <br />
                            Loved by employees.
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            NovaKiwi is built for the enterprise. We provide the control and security IT needs, with the flexibility and power employees want.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col gap-2"
                                >
                                    <div className="h-10 w-10 rounded-lg bg-surface flex items-center justify-center text-foreground">
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-semibold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full opacity-20" />
                        <div className="relative bg-card border rounded-2xl p-8 shadow-2xl">
                            <div className="flex items-center justify-between mb-8 border-b pb-4">
                                <div>
                                    <h4 className="font-semibold">Admin Dashboard</h4>
                                    <p className="text-xs text-muted-foreground">System Overview</p>
                                </div>
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded bg-muted/20" />
                                            <div>
                                                <div className="h-2 w-24 bg-muted/20 rounded mb-1" />
                                                <div className="h-2 w-16 bg-muted/10 rounded" />
                                            </div>
                                        </div>
                                        <div className="h-6 w-16 bg-accent/20 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
