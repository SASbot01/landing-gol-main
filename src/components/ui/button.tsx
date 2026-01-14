import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-tactical uppercase tracking-wider relative overflow-hidden group",
    {
        variants: {
            variant: {
                default: "bg-primary text-black font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] border border-primary clip-path-chamfered",
                destructive:
                    "bg-destructive text-white hover:bg-destructive/90 border border-destructive hover:shadow-[0_0_20px_rgba(255,42,42,0.6)]",
                outline:
                    "border border-primary/50 text-primary bg-transparent hover:bg-primary/10 hover:border-primary hover:text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-primary/10 hover:text-primary",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-9 px-4 text-xs",
                lg: "h-12 px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
