import { useState } from "react";
import "@srikar-thedarelabs/ui/styles.css";
import { Button, Input, Textarea, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, Label, Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@srikar-thedarelabs/ui";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-background text-foreground p-6 space-y-6">
      <h1 className="text-2xl font-bold">@statlax/ui Playground</h1>

      <div className="flex flex-wrap items-center gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      <div className="grid gap-3 max-w-md">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Jane Doe" />
        <Label htmlFor="about">About</Label>
        <Textarea id="about" placeholder="Tell us something…" />
      </div>

      <div className="flex items-center gap-4">
        <Select value={open ? "open" : "closed"} onValueChange={(v: string) => setOpen(v === "open") }>
          <SelectTrigger>
            <SelectValue placeholder="Dialog state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome</DialogTitle>
              <DialogDescription>Statlax UI components are ready.</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
