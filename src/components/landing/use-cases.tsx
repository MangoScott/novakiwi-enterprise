"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FileSpreadsheet, Presentation, Bot } from "lucide-react"

const useCases = [
    {
        title: "Automate Workflows",
        description: "Connect your apps and automate repetitive tasks like reporting, data entry, and notifications.",
        icon: Bot,
    },
    {
        title: "Create Deliverables",
        description: "Generate on-brand presentations, documents, and spreadsheets in seconds.",
        icon: Presentation,
    },
    {
        title: "Build Tools",
        description: "Create simple internal tools like trackers, forms, and dashboards with natural language.",
        icon: FileSpreadsheet,
    },
]

export function UseCases() {
    return (
        <section id="use-cases" className="py-24 bg-surface/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">What can you build?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From simple automations to full-fledged internal tools, NovaKiwi empowers you to create whatever you need.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-sm">
                                <CardHeader>
                                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent-foreground">
                                        <useCase.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle>{useCase.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {useCase.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
