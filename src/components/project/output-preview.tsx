"use client"

import { Button } from "@/components/ui/button"
import { Download, Share2, Maximize2 } from "lucide-react"

export function OutputPreview() {
    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Preview: Q3 Sales Report.pptx</h3>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                    </Button>
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                    </Button>
                </div>
            </div>

            <div className="flex-1 bg-muted/10 rounded-xl border flex items-center justify-center relative group overflow-hidden">
                <div className="aspect-video w-3/4 bg-white shadow-2xl rounded-lg p-8 transform transition-transform group-hover:scale-105">
                    <div className="h-full flex flex-col">
                        <div className="h-8 w-32 bg-accent mb-8" />
                        <div className="h-12 w-3/4 bg-muted/20 mb-4 rounded" />
                        <div className="h-4 w-1/2 bg-muted/10 rounded" />

                        <div className="mt-auto flex gap-4">
                            <div className="h-32 w-1/3 bg-muted/10 rounded" />
                            <div className="h-32 w-1/3 bg-muted/10 rounded" />
                            <div className="h-32 w-1/3 bg-muted/10 rounded" />
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary">
                        <Maximize2 className="mr-2 h-4 w-4" />
                        Full Screen
                    </Button>
                </div>
            </div>
        </div>
    )
}
