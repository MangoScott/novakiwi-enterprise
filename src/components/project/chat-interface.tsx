"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function ChatInterface() {
    return (
        <div className="flex flex-col h-full border rounded-xl bg-background overflow-hidden">
            <div className="p-4 border-b bg-muted/5">
                <h3 className="font-semibold">NovaKiwi Assistant</h3>
            </div>

            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-lg bg-accent flex-shrink-0" />
                    <div className="bg-muted/10 p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm">
                        I'm building your Q3 Sales Report. I've connected to Salesforce and pulled the latest data. Would you like me to include the regional breakdown?
                    </div>
                </div>

                <div className="flex gap-3 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-muted/20 flex-shrink-0" />
                    <div className="bg-accent/10 p-3 rounded-lg rounded-tr-none max-w-[80%] text-sm">
                        Yes, please include a slide for each region and highlight the top performers.
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-lg bg-accent flex-shrink-0" />
                    <div className="bg-muted/10 p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm">
                        Got it. Updating the structure now...
                    </div>
                </div>
            </div>

            <div className="p-4 border-t bg-background">
                <div className="relative">
                    <Input placeholder="Type a message..." className="pr-12" />
                    <Button size="icon" variant="ghost" className="absolute right-1 top-1 h-10 w-10">
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
