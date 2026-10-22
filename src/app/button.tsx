"use client"
import { cn } from "cn"
import { ComponentProps, ReactNode } from "react"

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "danger"
  size?: "xl" | "lg"
}

export const Button = ({
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `px-2 py-1.5 rounded-md max-w-20 transition-all hover:opacity-80 active:border active:border-purple-500`,
        variant === "primary"
          ? " bg-black text-white"
          : "bg-red-700 text-white",
        className,
      )}
      {...props}
    />
  )
}

export const AlertButton = ({ onClick, ...props }: ButtonProps) => (
  <Button
    {...props}
    onClick={(e) => {
      alert("Hola que hace")
      onClick?.(e)
    }}
  />
)
