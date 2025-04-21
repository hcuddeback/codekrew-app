export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-navy text-white min-h-screen flex items-center justify-center">
        <main className="w-full max-w-screen-md px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
