"use client"

import { ProgressSteps } from "@/components/project/progress-steps"
import { ChatInterface } from "@/components/project/chat-interface"
import { OutputPreview } from "@/components/project/output-preview"

export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ]
}

export default function ProjectPage() {
    return (
        <div className="h-[calc(100vh-64px)] p-6 gap-6 grid grid-cols-12">
            {/* Left Sidebar: Progress & Chat */}
            <div className="col-span-3 flex flex-col gap-6">
                <div className="bg-surface rounded-xl p-4 border">
                    <ProgressSteps />
                </div>
                <div className="flex-1 min-h-0">
                    <ChatInterface />
                </div>
            </div>

            {/* Main Area: Preview */}
            <div className="col-span-9 bg-surface rounded-xl p-6 border">
                <OutputPreview />
            </div>
        </div>
    )
}
