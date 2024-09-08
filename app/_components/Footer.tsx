import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={cn("bg-foreground/20 border border-primary p-1 text-sm", className)} {...props} />
  );
};

export const Footer = () => {
  return (
    <footer className="bg-dark-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-mono">
          Site créé avec <Code>React</Code> et <Code>Next.js</Code> par{" "}
          <strong className="text-primary font-semibold">Nahima Toumi</strong>{" "}
          et déployé sur Vercel.
        </h3>
      </div>
    </footer>
  );
};
