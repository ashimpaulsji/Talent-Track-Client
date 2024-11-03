import { Button } from "@/src/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/src/components/ui/dialog"
import { Input } from "@/src/components/ui/input";
import { Linkedin, Facebook, Twitter, Mail, Link as LinkIcon, } from "lucide-react"


const ShareModal = ({ isOpen, onClose, jobTitle, jobUrl }: { isOpen: boolean; onClose: () => void; jobTitle: string; jobUrl: string }) => {
    const shareOptions = [
        { name: 'LinkedIn', icon: Linkedin, color: 'bg-[#0077B5]', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}` },
        { name: 'Facebook', icon: Facebook, color: 'bg-[#3b5998]', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobUrl)}` },
        { name: 'Twitter', icon: Twitter, color: 'bg-[#1DA1F2]', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this job: ${jobTitle}`)}&url=${encodeURIComponent(jobUrl)}` },
        { name: 'Email', icon: Mail, color: 'bg-gray-600', url: `mailto:?subject=${encodeURIComponent(`Job Opportunity: ${jobTitle}`)}&body=${encodeURIComponent(`Check out this job: ${jobUrl}`)}` },
    ]

    const copyToClipboard = () => {
        navigator.clipboard.writeText(jobUrl)
            .then(() => alert('Link copied to clipboard!'))
            .catch((err) => console.error('Failed to copy: ', err))
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share this job</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                    {shareOptions.map((option) => (
                        <a
                            key={option.name}
                            href={option.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center p-3 rounded-lg text-white transition-transform hover:scale-105 ${option.color}`}
                        >
                            <option.icon className="w-5 h-5 mr-2" />
                            {option.name}
                        </a>
                    ))}
                </div>
                <div className="flex items-center space-x-2">
                    <Input
                        readOnly
                        value={jobUrl}
                        className="flex-1"
                    />
                    <Button size="sm" className="px-3" onClick={copyToClipboard}>
                        <LinkIcon className="h-4 w-4" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ShareModal;