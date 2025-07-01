import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mic,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";

import { AiSessionSuggester } from "@/components/ai-session-suggester";
import { AnimatedCounter } from "@/components/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Countdown } from "@/components/countdown";
import { CloudKonnectLogo } from "@/components/logo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Speakers", href: "#speakers" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "AI Tool", href: "#ai-tool" },
];

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center">
      <div className="mr-4 flex items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CloudKonnectLogo className="h-6 w-6" />
          <span className="font-bold inline-block font-headline">
            Cloud Konnect
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <Button asChild variant="secondary" className="font-bold">
          <Link href="#register">
            Register Now <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6 text-center">
      <div className="flex flex-col items-center space-y-4">
        <Badge variant="outline" className="py-2 px-4 rounded-full text-sm">
          Presented by GDG Cloud Kolkata
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Cloud Konnect 2024
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Join us for the largest cloud conference in Eastern India. Explore the
          latest in cloud technology, connect with experts, and grow your
          network.
        </p>
        <div className="flex items-center space-x-4 text-lg font-semibold">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-primary" />
            <span>December 14th, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Mic className="w-5 h-5 text-primary" />
            <span>Biswa Bangla Convention Centre</span>
          </div>
        </div>
        <div className="py-6">
          <Countdown targetDate="2024-12-14T09:00:00" />
        </div>
        <Button asChild size="lg" variant="secondary" className="font-bold">
          <Link href="#register">Register Now and Save Your Spot</Link>
        </Button>
      </div>
    </div>
  </section>
);

const stats = [
  { icon: Users, value: 1500, label: "Attendees", color: "text-primary" },
  { icon: Mic, value: 50, label: "Expert Speakers", color: "text-[hsl(var(--chart-2))]" },
  { icon: CalendarDays, value: 20, label: "Extended Events", color: "text-[hsl(var(--chart-3))]" },
  { icon: HeartHandshake, value: 100, label: "Volunteers", color: "text-[hsl(var(--chart-4))]" },
];

const WhyAttend = () => (
  <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
          Why Attend Cloud Konnect?
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Cloud Konnect is more than just a conference. It&apos;s a vibrant
          community event designed for developers, students, and cloud
          enthusiasts to learn, network, and innovate.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center shadow-lg">
            <CardHeader className="items-center">
              <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium text-muted-foreground pt-2">{stat.label}</p>
            </CardHeader>
            <CardContent>
              <div className={`text-5xl font-bold ${stat.color}`}>
                <AnimatedCounter target={stat.value} />+
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const speakers = [
  { name: "Priya Sharma", title: "Cloud Architect, Google", topic: "Scaling with Kubernetes", image: "https://placehold.co/400x400", hint: "portrait professional" },
  { name: "Rohan Gupta", title: "AI/ML Specialist, AWS", topic: "The Future of Generative AI", image: "https://placehold.co/400x400", hint: "professional portrait" },
  { name: "Anjali Mehta", title: "DevRel Engineer, Microsoft Azure", topic: "Building Serverless Solutions", image: "https://placehold.co/400x400", hint: "portrait woman" },
  { name: "Siddharth Singh", title: "Founder, ScaleUp Startups", topic: "From Monolith to Microservices", image: "https://placehold.co/400x400", hint: "man portrait" },
  { name: "Neha Desai", title: "Cybersecurity Expert", topic: "Securing Your Cloud Infrastructure", image: "https://placehold.co/400x400", hint: "woman professional" },
  { name: "Vikram Kumar", title: "Data Scientist, Netflix", topic: "Big Data Pipelines in the Cloud", image: "https://placehold.co/400x400", hint: "professional man" },
];


const Speakers = () => (
  <section id="speakers" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
          Meet Our Speakers
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          Learn from the best in the industry. Our speakers are leaders,
          innovators, and visionaries in the cloud ecosystem.
        </p>
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {speakers.map((speaker, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <Image
                      src={speaker.image}
                      alt={`Photo of ${speaker.name}`}
                      width={128}
                      height={128}
                      data-ai-hint={speaker.hint}
                      className="rounded-full mb-4 border-4 border-muted"
                    />
                    <h3 className="text-xl font-bold font-headline">{speaker.name}</h3>
                    <p className="text-primary font-medium">{speaker.title}</p>
                    <Badge variant="secondary" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                      Session: {speaker.topic}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

const sponsors = {
  platinum: [{ name: "Google", logo: "https://placehold.co/200x100", hint: "logo google" }],
  gold: [
    { name: "Microsoft Azure", logo: "https://placehold.co/180x90", hint: "logo microsoft" },
    { name: "Amazon Web Services", logo: "https://placehold.co/180x90", hint: "logo aws" },
  ],
  community: [
    { name: "GDG Kolkata", logo: "https://placehold.co/150x75", hint: "logo developer" },
    { name: "Women Techmakers", logo: "https://placehold.co/150x75", hint: "logo women" },
    { name: "TensorFlow User Group", logo: "https://placehold.co/150x75", hint: "logo tensorflow" },
  ],
};

const Sponsors = () => (
  <section id="sponsors" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
          Our Valued Sponsors & Partners
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          A huge thank you to our sponsors and community partners for making
          this event possible.
        </p>
      </div>
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-center mb-6 text-yellow-500">Platinum Sponsor</h3>
          <div className="flex justify-center">
            {sponsors.platinum.map((s) => (
              <Link href="#" key={s.name} className="grayscale hover:grayscale-0 transition-all">
                <Image src={s.logo} alt={s.name} width={200} height={100} data-ai-hint={s.hint} />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center mb-6 text-yellow-400">Gold Sponsors</h3>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors.gold.map((s) => (
              <Link href="#" key={s.name} className="grayscale hover:grayscale-0 transition-all">
                <Image src={s.logo} alt={s.name} width={180} height={90} data-ai-hint={s.hint}/>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center mb-6 text-primary">Community Partners</h3>
          <div className="flex justify-center flex-wrap gap-8 items-center">
            {sponsors.community.map((s) => (
              <Link href="#" key={s.name} className="grayscale hover:grayscale-0 transition-all">
                <Image src={s.logo} alt={s.name} width={150} height={75} data-ai-hint={s.hint} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);


const testimonials = [
  {
    quote: "Cloud Konnect was an amazing experience! I learned so much and met incredible people.",
    name: "Aarav Patel",
    title: "Software Engineer",
  },
  {
    quote: "The sessions were top-notch and highly relevant. Can't wait for next year!",
    name: "Sunita Reddy",
    title: "DevOps Engineer",
  },
  {
    quote: "As a student, this was the perfect platform to dive into the world of cloud computing.",
    name: "Riya Ghosh",
    title: "Computer Science Student",
  },
];

const Community = () => (
  <section id="community" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Networking & Community</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Connect with a thriving community of cloud professionals and enthusiasts.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="shadow-md">
            <CardContent className="p-6">
              <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
              <p className="font-bold mt-4 font-headline">- {testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const AISessionToolSection = () => (
  <section id="ai-tool" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Find Your Perfect Session</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          Not sure which sessions to attend? Let our AI guide you! Describe your role and interests, and we&apos;ll suggest the most relevant talks for you.
        </p>
      </div>
      <div className="mx-auto max-w-2xl pt-12">
        <AiSessionSuggester sessionList={speakers.map(s => s.topic).join(", ")} />
      </div>
    </div>
  </section>
);


const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const Register = () => (
  <section id="register" className="w-full py-12 md:py-24 lg:py-32">
     <div className="container px-4 md:px-6">
        <Card className="bg-primary text-primary-foreground">
          <div className="flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                Get Your Early Bird Ticket!
              </h2>
              <p className="mt-2 text-lg text-primary-foreground/80">
                Register now to get a 20% discount. Limited spots available!
              </p>
            </div>
            <div className="flex-shrink-0">
               <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 scale-110">
                  <Link href="#">Register Now for ₹999</Link>
               </Button>
            </div>
          </div>
        </Card>
     </div>
  </section>
);

const Footer = () => (
  <footer className="border-t">
    <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <CloudKonnectLogo className="h-6 w-6" />
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} GDG Cloud Kolkata. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            aria-label={link.name}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <link.icon className="h-6 w-6" />
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyAttend />
        <Speakers />
        <Community />
        <AISessionToolSection />
        <Sponsors />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
