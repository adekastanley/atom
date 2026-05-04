import { FadeIn } from "@/components/animations/fade-in";
import { Lightbulb, CheckCircle2, Shield, Users, RefreshCw, HeartHandshake, Network } from "lucide-react";

const values = [
  { title: "Innovation", desc: "We embrace new ideas and technologies.", icon: <Lightbulb className="w-5 h-5 text-pink-600" />, bg: "bg-pink-100" },
  { title: "Quality", desc: "We deliver reliable, scalable solutions.", icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-100" },
  { title: "Integrity", desc: "We operate with transparency and trust.", icon: <Shield className="w-5 h-5 text-blue-600" />, bg: "bg-blue-100" },
  { title: "Customer-Centricity", desc: "We prioritize client needs and goals.", icon: <Users className="w-5 h-5 text-purple-600" />, bg: "bg-purple-100" },
  { title: "Adaptability", desc: "We continuously learn and evolve.", icon: <RefreshCw className="w-5 h-5 text-amber-600" />, bg: "bg-amber-100" },
  { title: "Social Responsibility", desc: "We build solutions that create positive impact.", icon: <HeartHandshake className="w-5 h-5 text-cyan-600" />, bg: "bg-cyan-100" },
  { title: "Collaboration", desc: "We believe in teamwork and shared success.", icon: <Network className="w-5 h-5 text-indigo-600" />, bg: "bg-indigo-100" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      
      {/* Header Section (Dark with Cyan Glow) */}
      <section className="relative bg-zinc-950 text-white pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-zinc-300 mb-8 backdrop-blur-md">
              <span className="text-cyan-400">✦</span> Who We Are
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              About ATOM TechServe
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              A forward-thinking IT and software engineering company empowering businesses with innovative technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview (Clean White) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <FadeIn direction="right" className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-zinc-100 flex items-center justify-center border border-zinc-200">
              <div className="text-zinc-400 font-medium">Company Overview Image Placeholder</div>
            </FadeIn>
            
            <FadeIn direction="left" className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Our Story
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                Founded in 2022, ATOM TechServe is based in Nigeria. We specialize in building data systems, digital platforms, and intelligent solutions that help organizations transform operations and unlock value through technology.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Our team of experts works at the intersection of data, software engineering, and strategic insight to solve complex problems for NGOs, government agencies, and enterprises.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Dark Minimalist Section) */}
      <section className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <FadeIn delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-12 h-full backdrop-blur-sm transition-all hover:bg-white/10">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-cyan-400">
                  <span className="text-4xl leading-none">*</span> Our Mission
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  To empower businesses and organizations with innovative technology and data-driven insights that enhance efficiency, improve decision-making, and support sustainable growth.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-12 h-full backdrop-blur-sm transition-all hover:bg-white/10">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-emerald-400">
                  <span className="text-4xl leading-none">*</span> Our Vision
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  To be a leading global provider of digital and data-driven solutions, recognized for innovation, excellence, and meaningful impact.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Grid (Clean Cards) */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-zinc-500">
              The principles that guide our work, shape our culture, and drive our commitment to excellence.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, index) => (
              <FadeIn key={val.title} delay={0.1 * index} className="h-full">
                <div className="bg-white rounded-[2rem] p-8 h-full border border-zinc-100 transition-all hover:shadow-sm hover:-translate-y-1">
                  <div className={`w-10 h-10 rounded-full ${val.bg} flex items-center justify-center mb-8`}>
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{val.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
