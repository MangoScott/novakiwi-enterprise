"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Sparkles, Clock } from "lucide-react"

export default function WorkspacePage() {
    return (
        <div className="container mx-auto p-8 max-w-5xl">
            <div className="mb-12 text-center space-y-4">
                <h1 className="text-3xl font-bold">Good morning, Jane</h1>
                <p className="text-muted-foreground">What would you like to build today?</p>
            </div>

            <div className="relative max-w-2xl mx-auto mb-16">
                <div className="relative">
                    <div className="absolute left-4 top-4 text-accent-foreground">
                        <Sparkles className="h-5 w-5" />
                    </div>
                    <textarea
                        className="w-full min-h-[120px] rounded-2xl border bg-surface p-4 pl-12 text-lg shadow-sm outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Describe what you need... e.g. 'Create a Q3 sales deck from this spreadsheet'"
                    />
                    <div className="absolute right-4 bottom-4">
                        <Button size="icon" className="rounded-full h-10 w-10">
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="mt-4 flex gap-2 justify-center flex-wrap">
                    {["Automate weekly report", "Build a team tracker", "Review presentation"].map((suggestion) => (
                        <button
                            key={suggestion}
                            className="rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground hover:border-accent hover:text-foreground transition-colors"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Recent Projects</h2>
                    <Button variant="ghost" size="sm">View All</Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="h-8 w-8 rounded bg-accent/10 flex items-center justify-center">
                                        <Sparkles className="h-4 w-4 text-accent-foreground" />
                                    </div>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> 2h ago
                                    </span>
                                </div>
                                <CardTitle className="text-base">Q3 Financial Review</CardTitle>
                                <CardDescription>Presentation generated from Excel</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-1 w-full bg-muted/20 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-accent" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
