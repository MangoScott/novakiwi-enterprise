"use client"

import { CheckCircle2, Circle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
    { id: 1, title: "Analyzing request", status: "completed" },
    { id: 2, title: "Connecting to Salesforce", status: "completed" },
    { id: 3, title: "Generating report structure", status: "current" },
    { id: 4, title: "Formatting slides", status: "pending" },
    { id: 5, title: "Final review", status: "pending" },
]

export function ProgressSteps() {
    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Progress</h3>
            <div className="space-y-4 relative">
                <div className="absolute left-2.5 top-2 bottom-2 w-px bg-border" />
                {steps.map((step) => (
                    <div key={step.id} className="flex items-start gap-3 relative">
                        <div className="bg-background py-1">
                            {step.status === "completed" && (
                                <CheckCircle2 className="h-5 w-5 text-accent-foreground fill-accent" />
                            )}
                            {step.status === "current" && (
                                <Loader2 className="h-5 w-5 text-accent animate-spin" />
                            )}
                            {step.status === "pending" && (
                                <Circle className="h-5 w-5 text-muted-foreground" />
                            )}
                        </div>
                        <div className={cn("py-1 text-sm", step.status === "pending" && "text-muted-foreground")}>
                            {step.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
