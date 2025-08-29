import { QRCodeForm } from '@/components/qr-code-form';

export default function Home() {
  return (
    <div className="bg-background font-body">
      <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
        <div className="w-full max-w-4xl py-8">
          <div className="text-center mb-10">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary">
              QRCode<span className="text-accent-foreground">Secure</span>
            </h1>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Fill out the form to generate a secure, password-protected QR code with your details. All fields marked with * are required.
            </p>
          </div>
          <QRCodeForm />
        </div>
      </main>
      <footer className="w-full text-center text-muted-foreground p-4">
        <p>Developed by BALAVIGNESH A</p>
      </footer>
    </div>
  );
}
