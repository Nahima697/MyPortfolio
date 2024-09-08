import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Votre message a été envoyé avec succès.');
      } else {
        setStatus(data.error || 'Une erreur est survenue.');
      }
    } catch (error) {
      setStatus('Erreur de réseau, veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6 "
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Section formulaire */}
          <div className="flex-1">
            <form className="flex flex-col gap-6 p-10 bg-secondary rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl font-geist-sans text-primary">Contactez-moi</h3>
              <p className="text-white/60 font-mono">
                N&apos;hésitez pas pour en savoir plus sur mon parcours et nos objectifs communs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstName" placeholder="Prénom" value={formData.firstName} onChange={handleChange} />
                <Input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} />
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <Input type="tel" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} />
              </div>
              <Textarea name="message" className="h-[200px]" placeholder="Laissez votre message." value={formData.message} onChange={handleChange} />
              <Button size="lg" className="max-w-40" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Envoyez un message"}
              </Button>
              {status && <p className="text-white">{status}</p>}
            </form>
          </div>
  
          {/* Section des informations de contact */}
          <div className="flex-1 flex flex-col items-center xl:items-end gap-8">
            {/* Nom au-dessus des informations */}
            <div className="text-center xl:text-right">
              <h3 className="text-4xl font-medium font-nunito-sans text-white">
                <strong className="text-primary font-extrabold px-2 text-5xl">&lt;</strong>
                Nahima
                <strong className="text-primary font-extrabold px-2 text-5xl">/&gt;</strong>
              </h3>
            </div>
  
            {/* Liste des informations */}
            <ul className="flex flex-col gap-10">
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-primary rounded-md flex items-center justify-center">
                  <FaPhoneAlt className="text-[28px]" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60 font-mono">Téléphone</p>
                  <h3 className="text-white/60 text-xl font-nunito-sans">(+33) 0688 09 34 50</h3>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-primary rounded-md flex items-center justify-center">
                  <FaEnvelope className="text-[28px]" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60 font-mono">Email</p>
                  <h3 className="text-white/60 text-xl font-nunito-sans">
                    <a href="mailto:nahima.toumi697@gmail.com">nahima.toumi697@gmail.com</a>
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
