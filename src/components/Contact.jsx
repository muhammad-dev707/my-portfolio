import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-background"
    >
      {/* subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <span className="block mb-6 text-xs tracking-[0.35em] uppercase text-foreground/50">
            Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Keling, <br />
            <span className="text-foreground/60">
              suhbatlashamiz
            </span>
          </h2>
          <p className="mt-6 text-lg text-foreground/70">
            Loyiha, hamkorlik yoki shunchaki salomlashish uchun
            bemalol yozishingiz mumkin.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">Telegram</h3>
              <a
                href="https://t.me/developsystem"
                className="text-lg text-primary hover:underline"
              >
                @developsystem
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:nurmuhammad@example.com"
                className="text-lg text-primary hover:underline"
              >
                nurmuhammad@example.com
              </a>
            </div>

            <p className="text-foreground/60 text-lg max-w-sm">
              Odatda xabarlarga tez javob beraman. Qisqa va aniq
              yozsangiz yetarli 🙂
            </p>
          </div>

          {/* Form */}
          <form className="bg-background/70 backdrop-blur-xl border border-border/50 rounded-3xl p-10 shadow-lg space-y-6">
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full bg-transparent border-b border-border/60 py-3 outline-none focus:border-primary transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-border/60 py-3 outline-none focus:border-primary transition"
            />

            <textarea
              rows={5}
              placeholder="Xabaringiz..."
              className="w-full bg-transparent border-b border-border/60 py-3 outline-none resize-none focus:border-primary transition"
            />

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:-translate-y-1"
            >
              Xabar yuborish →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}