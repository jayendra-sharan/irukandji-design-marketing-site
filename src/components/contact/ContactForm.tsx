
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  referringPage?: string;
}

const projectTypes = [
  { id: "website", label: "Website Design" },
  { id: "branding", label: "Brand Identity" },
  { id: "app", label: "Mobile/Web App" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "other", label: "Other" }
];

const budgetRanges = [
  "$5K - $10K",
  "$10K - $25K",
  "$25K - $50K",
  "$50K - $100K",
  "$100K+"
];

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, referringPage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budgetIndex, setBudgetIndex] = useState([2]);
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log({
      name,
      email,
      projectType,
      budget: budgetRanges[budgetIndex[0]],
      message,
      referringPage
    });
    
    toast({
      title: "Message sent!",
      description: "We'll be in touch with you shortly.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setProjectType('');
    setBudgetIndex([2]);
    setMessage('');
    
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full md:w-[500px] bg-background shadow-2xl">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
        
        <div className="h-full overflow-auto p-6 pt-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Let's Work Together</h2>
            {referringPage && (
              <p className="text-muted-foreground mt-2">
                Interested in {referringPage}? Tell us about your project.
              </p>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="space-y-3">
              <Label>Project Type</Label>
              <RadioGroup 
                value={projectType} 
                onValueChange={setProjectType}
                className="grid grid-cols-2 gap-2"
              >
                {projectTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={type.id} id={type.id} />
                    <Label htmlFor={type.id} className="cursor-pointer">{type.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label>Budget Range</Label>
                <span className="text-sm font-medium">{budgetRanges[budgetIndex[0]]}</span>
              </div>
              <Slider 
                defaultValue={[2]} 
                max={4} 
                step={1}
                value={budgetIndex}
                onValueChange={setBudgetIndex}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$5K</span>
                <span>$100K+</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project and goals"
                className="min-h-[120px]"
                required
              />
            </div>
            
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
